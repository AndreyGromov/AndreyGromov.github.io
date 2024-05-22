from flask import Flask, render_template, request, g, abort, flash, url_for, redirect, jsonify
import sqlite3
import os
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine, text
from sqlalchemy.dialects.mysql import pymysql
from sqlalchemy.exc import SQLAlchemyError



DATABASE = '/tmp/music.db'
DEBUG = True
SECRET_KEY = "fdgfh78@#5?>gfhf89dx,v06k"

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:1234@localhost/diplom'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


def connect_db():
    conn = sqlite3.connect(app.config['DATABASE'])
    conn.row_factory = sqlite3.Row
    return conn


def create_db():
    db = connect_db()
    with app.open_resource('music.sql', mode='r') as f:
        db.cursor().executescript(f.read())
    db.commit()
    db.close()


def get_db():
    if not hasattr(g, 'link_db'):
        g.link_db = connect_db()
    return g.link_db





@app.route("/", methods=["POST","GET"])
def mus():
    topas = 'a'

    return render_template("index.html", topas=topas)


#разрываю соединение
@app.teardown_appcontext
def close_db(error):
    if hasattr(g, 'link_db'):
        g.link_db.close()


if __name__ == "__main__":
    app.run(debug=True)