from flask import Flask, jsonify, request
import psycopg2
from psycopg2.extras import RealDictCursor
from flask_cors import CORS

api = Flask(__name__)

CORS(api)
#http://127.0.0.1:5004/
db_config = {
    #ip addr
    "host": "localhost",  # se si usano i docker bisogna mettere l'indirizzo ip della macchina ogni volta
    "port": "5432",
    "dbname": "cielo",
    "user": "postgres",
    "password": "postgres"
}

def get_db_connection():
    try:
        return psycopg2.connect(**db_config, cursor_factory=RealDictCursor)
    except Exception as e:
        return str(e)


@api.route("/", methods=['GET'])
def lesgosky():
     return "<p> bello zi </p>"


@api.route('/visualizza_volo', methods=['GET'])
def visualizza_volo():
    connection = get_db_connection()
    cursor = connection.cursor()
    #eseguo query
    cursor.execute("select * from volo")
    #recupero dati
    rows = cursor.fetchall()
    cursor.close()
    return rows 

@api.route('/visualizza_aeroporti', methods=['GET'])
def visualizza_aeroporti():
    connection = get_db_connection()
    cursor1 = connection.cursor()
    #eseguo query
    cursor1.execute("select * from aeroporto")
    rows = cursor1.fetchall()
    cursor1.close()
    return rows   

@api.route('/visualizza_compagnie', methods=['GET'])
def visualizza_compagnie():

    connection = get_db_connection()
    cursor2 = connection.cursor()
    #eseguo query
    cursor2.execute("select * from compagnia")
    rows = cursor2.fetchall()
    cursor2.close()
    return rows 

#controllare se è giusta
@api.route('/RicercaVolo', methods = ['POST']) 
def queryRicercaVolo():
    try:

        partenza = request.form['partenza']
        arrivo = request.form['arrivo']

        connection = get_db_connection()
        cursor2 = connection.cursor()
        #eseguo query

        #controllare se è giusta la query
        query = f"select * from Volo, arrpart where arrpart.partenza = {partenza} and arrpart.arrivo = {arrivo}"
        cursor2.execute(query)
        rows = cursor2.fetchall()
        cursor2.close()
        return rows
    except Exception as e:
        # Log dell'errore
        print(f"Errore: {e}")
        return jsonify({"error": "Errore interno del server"}), 500





@api.errorhandler(404)
def not_found_error(error):
    return jsonify({"error": "Risorsa non trovata"}), 404

@api.errorhandler(500)
def internal_server_error(error):
    return jsonify({"error": "Errore interno del server"}), 500




if __name__ == '__main__'  :    
    api.run(host="0.0.0.0", port=5004)
