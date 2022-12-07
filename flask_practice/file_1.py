#!/usr/bin/python3
from flask import Flask, render_template, request, url_for, redirect


app = Flask(__name__)

@app.before_request
def before_request():
    print('Antes de la peticion')

@app.after_request
def after_request(response):
    print('despues de la peticion')
    return response

@app.route('/')
def index():
    # return "<h1>Hola, Mundo! - Como estas?</h1>"

    cursos = ['PHP', 'Python', 'Java', 'Kotlin', 'Dart', 'JavaScript']

    data = {
        'titulo':'Index',
        'bienvenida':'saludo!',
        'cursos':cursos,
        'numero_de_cursos':len(cursos)
    }
    return render_template('index.html', data=data)

@app.route('/contacto/<nombre>/<int:edad>')
def contacto(nombre, edad):
    data={
        'titulo':'contacto',
        'nombre':nombre,
        'edad':edad
    }
    return render_template('contacto.html', data=data)

def query_string():
    print(request)
    print(request.args)
    print(request.args.get('param1'))
    print(request.args.get('param2'))
    return "Ok"

def pagina_no_encontrada(error):
    # return render_template('404.html'), 404
    return redirect(url_for('index'))

if __name__ == "__main__":
    app.add_url_rule('/query_string', view_func=query_string)
    app.register_error_handler(404, pagina_no_encontrada)
    app.run(debug=True, port=5000)
