#!/usr/bin/python3

from flask import Flask


app = Flask(__name__)

@app.route('/python/', defaults={'text':'is cool'})
@app.route('/python/<text>')
def display_text(text):
    new_string = text
    if '_' in new_string:
        new_string = text.replace('_', ' ')
    return 'C {}'.format(new_string)


if __name__ == '__main__':
    app.run(debug=True, port=5000)
