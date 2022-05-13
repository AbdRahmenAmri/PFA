from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import UUID
import uuid

# LOCAL IMPORTATION
from main import app
from config.conf import DB_URI

app.config['SQLALCHEMY_DATABASE_URI'] = DB_URI
db = SQLAlchemy(app)

#'''------ DATABASE MODELS --------'''

class Conversations(db.Model):
    id = db.Column(db.String(length = 36), primary_key=True)
    messages = db.relationship('Messages', backref='conversations')
    conversationsuser = db.relationship('ConversationsUser', backref='conversations')


class ConversationsUser(db.Model):
    conversation_id = db.Column(db.String(length = 36), db.ForeignKey('conversations.id'), primary_key=True)
    user = db.Column(db.String(length = 36), primary_key=True)

class Messages(db.Model):
    id = db.Column(db.String(length = 36), primary_key=True,default=uuid.uuid4())
    owner = db.Column(db.String(length = 36), primary_key=True)
    createdat = db.Column(db.DateTime)
    read = db.Column(db.Boolean)
    deleted = db.Column(db.String(36))
    message = db.Column(db.Text)
    attachments = db.relationship('Attachments', backref='messages')
    conversation_id = db.Column(db.String(length = 36), db.ForeignKey('conversations.id'))

class Attachments(db.Model):
    id = db.Column(db.String(length = 36), primary_key=True,default=uuid.uuid4())
    type = db.Column(db.String(10))
    files = db.relationship('Files', backref='attachments')
    url = db.relationship('Url', backref='attachments')
    message_id = db.Column(db.String(length = 36), db.ForeignKey('messages.id'))

class Files(db.Model):
    id = db.Column(db.String(length = 36), primary_key=True,default=uuid.uuid4())
    path = db.Column(db.Text)
    filename = db.Column(db.Text)
    issafe = db.Column(db.Boolean)
    attachment_id = db.Column(db.String(length = 36), db.ForeignKey('attachments.id'))

class Url(db.Model):
    id = db.Column(db.String(length = 36), primary_key=True,default=uuid.uuid4())
    url = db.Column(db.Text)
    title = db.Column(db.Text)
    description = db.Column(db.Text)
    thumbnail = db.Column(db.Text)
    issafe = db.Column(db.Boolean)
    attachment_id = db.Column(db.String(length = 36), db.ForeignKey('attachments.id'))