import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

config = {
    "sender": "g4pfa.glsi2@gmail.com",
    "password": "azertwxcvb"
}


class mail():
    def __init__(self,reciver,subject,body) -> None:
        self.reciver = reciver
        self.message = MIMEMultipart("alternative")
        self.message["Subject"] = subject
        self.message["From"] = config.get("sender")
        self.message["To"] = reciver
        self.message.attach(MIMEText(body, "html"))

    def send(self) -> bool:
        try:
            context = ssl.create_default_context()
            with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
                print(server.login(config.get("sender"), config.get("password")))
                server.sendmail(config.get("sender"), self.reciver, self.message.as_string())
            return True
        except Exception as ex:
            print(ex)
            return False

        

