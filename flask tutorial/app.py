# MESSAGE POUR PHAN ANH! 
# ce fichier est le backend de l'application,
# (le database où toutes les informations vont se dérouler), les autres fichiers
# du tutoriel soit base.html et index.html représentes tes fichiers que tu as créer déjà du frontend 
# (ex: Index.html, create_account.html), donc il suffit de lier tes fichiers login.html, index.html, etc
# au databse app.py, (ainsi tu n'a pas besoin du template et main.css dans ton folder flask tutorial, tu as seulement
# besoin de app.py)
from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)