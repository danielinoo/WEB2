from flask import Flask, jsonify, request
import json

from flask_cors import CORS

api = Flask(__name__)

CORS(api)
#http://127.0.0.1:5004/



@api.route("/", methods=['GET'])
def lesgosky():
     return "<p> bello zi </p>"


@api.route('/voli', methods=['GET'])
def visualizza_volo():
        # Carica il contenuto del file JSON
    with open('database.json', 'r') as file:
        data = json.load(file)  # Carica i dati JSON nel dizionario Python
    return jsonify(data)  # Restituisci i dati come JSON in risposta


@api.route('/visualizza_aeroporti', methods=['GET'])
def visualizza_aeroporti():
    pass
 
  
@api.route('/visualizza_compagnie', methods=['GET'])
def visualizza_compagnie():
    pass



@api.route('/RicercaVolo', methods = ['POST'])
def queryRicercaVolo():
    print("Dentro ricerca")
    pass
    
   



@api.errorhandler(404)
def not_found_error(error):
    return jsonify({"error": "Risorsa non trovata"}), 404


@api.errorhandler(500)
def internal_server_error(error):
    return jsonify({"error": "Errore interno del server"}), 500




if __name__ == '__main__'  :    
    api.run(host="0.0.0.0", port=5004)
