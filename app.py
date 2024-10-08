from flask import Flask, render_template, redirect , request ,url_for
from flask_mail import Mail, Message
from flask import request
from flask import request


app = Flask(__name__)

# Looking to send emails in production? Check out our Email API/SMTP product!
app.config['MAIL_SERVER']='sandbox.smtp.mailtrap.io'
app.config['MAIL_PORT'] = 2525
app.config['MAIL_USERNAME'] = '7c90571f2b58f8'
app.config['MAIL_PASSWORD'] = '1d4f8db89a7a03'
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False

mail = Mail(app)

@app.route("/")
@app.route("/index")
def index():
	return render_template("index.html")


@app.route("/send_mail", methods=['GET', 'POST']) 
def send_mail():
    if request.method == 'POST':
        name =  request.form['name']
        email = request.form['email']
        message = request.form['message']
        msg = Message(message, sender=email, recipients=['alexander2309@mailtrap.io'])
        msg.body = message
        mail.send(msg)
    
        return render_template("send_mail.html")
    
    return redirect(url_for('index'))



if __name__ == '__main__':
	app.run(debug=False)