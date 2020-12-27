from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__)
fen = ''

@app.route('/')
def board():
	return render_template('index.html')

@app.route('/fen', methods=['GET', 'POST'])
def getFen():
	global fen
	if request.method == 'POST':
		fen = request.get_json()['fen']
		return "OK", 200
	if request.method == 'GET':
		return {'fen' : fen}, 200
	
	return "<h1>Not For You!</h1>", 403

if __name__ == "__main__":
	app.run()