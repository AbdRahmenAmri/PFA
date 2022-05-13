from flask import make_response,jsonify,request,Response
from flask import Blueprint
import json



from flask_jwt_extended import get_jwt_identity,jwt_required,create_access_token,set_access_cookies



from config.conf import IMAGE_PATH_SERVE
from helpers.ValidUUID import isUUID4
from services.jwtHandler import Encode

fake = Blueprint('fake', __name__)

usersLogin = [
    ["user1@user.com","123456789",'9c46cb42-300c-413a-a5b9-9c016aa909e7'],
    ["user2@user.com","123456789",'9d282c89-6d68-473c-853f-060b2822706f'],
    ["user3@user.com","123456789",'044ad97b-97ab-4453-ab0d-ffd8e647f44e']
]

users = [
    {  'id': '9c46cb42-300c-413a-a5b9-9c016aa909e7',
        'name': "User User",
        'user_pic': IMAGE_PATH_SERVE+'user1.jpg'
    },
    {  'id': '9d282c89-6d68-473c-853f-060b2822706f',
        'name': "User User",
        'user_pic': IMAGE_PATH_SERVE+'user2.jpg'
    },
    {  'id': '044ad97b-97ab-4453-ab0d-ffd8e647f44e',
        'name': "User User",
        'user_pic': IMAGE_PATH_SERVE+'user3.jpg'
    }
    ]


@fake.route("/fakelogin",  methods=['POST'])
def fakeLogin():
    username = request.get_json()["username"]
    password = request.get_json()["password"]
    for user in usersLogin:
        if(user[0] == username and password == user[1]):
            DATA = {"user":user}
            access_token = create_access_token(identity = DATA)
            resp = jsonify({'ACCESS': 'GRANTED'})
            set_access_cookies(resp, access_token)
            return resp, 200
    return make_response(jsonify({"ACCESS": "ACCESS DENIED"}),401)

@fake.route("/fakeuser/:id", methods=['GET'])
@jwt_required()
def fakeUser(id):
    if(not isUUID4(id)):
        return make_response(400,'fail')
    for user in users:
        if user['id'] == id:
            return make_response(jsonify(user),200,'succes')
    return make_response(jsonify({"INFO": "NOTFOUND"}),404,'succes')

@fake.route("/fakeusers", methods=['GET'])
@jwt_required()
def fakeUsers():
    user = get_jwt_identity()['user']
    others = []
    for u in users:
        if u['id'] != user[2]:
            others.append(u)
    print(others)
    rep = Response(json.dumps(others))
    rep.headers['Content-Type'] = 'application/json'
    return rep


@fake.route("/home", methods=['GET'])
@jwt_required()
def home():
    print(get_jwt_identity())
    rep = jsonify(hello= 'world')
    return rep,200
