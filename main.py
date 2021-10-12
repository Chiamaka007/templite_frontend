from flask import Flask, render_template, redirect, url_for, flash, abort
from flask_sqlalchemy import SQLAlchemy



app = Flask(__name__)
app.config['SECRET_KEY'] = 'jr85y787349u4ihuqh87tq8UWPO'
# CONNECT TO DB
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///templite.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class Templates(db.Model):
    __tablename__ = "templates"
    id = db.Column(db.Integer, primary_key=True)


@app.route('/', methods=['GET', 'POST'])
def home():
    return render_template("index.html")
