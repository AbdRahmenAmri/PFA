from flask import Flask,request
from flask_cors import CORS
from flask_socketio import SocketIO
from flask_jwt_extended import JWTManager
from datetime import timedelta

# LOCAL IMPORTATION
from config.conf import ORIGINS, PRIVATE_KEY
from fakeapi.fake import fake

app = Flask(__name__,static_folder='assets')
app.config['JWT_SECRET_KEY'] = PRIVATE_KEY
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(days=30)
app.config['JWT_TOKEN_LOCATION'] = ['cookies']

jwt = JWTManager(app)
app.register_blueprint(fake)
cors = CORS(app, resources={r"*": {"origins": ORIGINS}},supports_credentials=True)
app.config['SECRET_KEY'] = PRIVATE_KEY
socketio = SocketIO(app)



if __name__ == "__main__":
    socketio.run(app)
    app.run(host='127.0.0.1', port=5000)