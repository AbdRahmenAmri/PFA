from os import path,getcwd

HOSTNAME = 'http://127.0.0.1:5000/'

PRIVATE_KEY = '759e2e1a-0911-48a2-83d4-8df62f819ab3'
DB_URI = 'sqlite:///database/database.db'

IMAGE_PATH = path.join(getcwd(),'assets/images/')
VIDEO_PATH = path.join(getcwd(),'assets/videos/')

IMAGE_PATH_SERVE = HOSTNAME+'assets/images/'
VIDEO_PATH_SERVE = HOSTNAME+'assets/videos/'

ALLOWED_EXTENSIONS = ['mp4', 'png', 'jpg', 'jpeg', 'gif','webp']

ORIGINS = "*"

