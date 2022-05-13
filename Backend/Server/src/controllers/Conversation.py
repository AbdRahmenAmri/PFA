from uuid import uuid4
from flask import make_response,jsonify,request
from flask import Blueprint

from flask_jwt_extended import get_jwt_identity,jwt_required

from database.database import Conversations, ConversationsUser, Messages,db
from fakeapi.fake import fakeLogin, users
from config.conf import IMAGE_PATH_SERVE
conversations = Blueprint('conversations', __name__)

@conversations.get('/conversations')
@jwt_required()
def getConversation():
    conv = []
    # --- Get the ID of the Current USER
    current_user_id = get_jwt_identity()['user'][2]
    # --- conversation that user has
    user_conv = ConversationsUser.query.filter_by(user = current_user_id).all()
    if user_conv is None:
        return conv,200
    
    for conversation in user_conv:
        # --- Get the second user of conversation
        user2_conv = ConversationsUser.query.filter_by(conversation_id = conversation.id).first()
        user2 = None
        for user in users:
            if(user == user2_conv.user_id):
                user2 = user
        # --- Get last msg in the Conversation
        last_msg = Messages.query.filter_by(conversation_id = conversation.id).order_by(Messages.createdat).first()
        last_message = last_msg.message
        is_read = last_msg.read
        conv.append(jsonify({
            'is_read':is_read,
            'last_msg':last_message,
            'name':user['name'],
            'profile_pic':user['user_pic']
            }))
    return conv,200


@conversations.get('/create-conversations')
@jwt_required()
def createConversation():
    user2 = request.get_json()["user2"]
    user1 = get_jwt_identity()['user'][2]
    conv_id = uuid4()

    for user in fakeLogin:
        if(user2 in user):
            conv = Conversations(conv_id)
            cvu1 = ConversationsUser(conv_id,user1)
            cvu2 = ConversationsUser(conv_id,user2)
            db.session.add(conv)
            db.session.add(cvu1)
            db.session.add(cvu2)
            db.session.commit()
            return jsonify({"succes":True}), 201
    return jsonify({"succes":False}), 400
