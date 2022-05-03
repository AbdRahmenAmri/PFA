from cgitb import html
print(__package__)


import mail

html = """\
<html>
  <body>
    <p>Hi,<br>
       How are you?<br>
       happy hacking
    </p>
  </body>
</html>
"""



if __name__ == '__main__':
    print(__package__)
    m = mail.mail("amritn999@gmail.com","just test",html)
    print(m.send())
