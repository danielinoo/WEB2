
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';

import './RicercaVolo.css'

const RicercaVolo = () => {
  {
    const [partenza, setPartenza] = useState('');
    const [arrivo, setArrivo] = useState('');
    const [data, setData] = useState([]); // memorizzo i dati 
    const [vis, setVis] = useState(false);  //visibilita dei risultati
    const [nessunRisultato, setNessunRisultato] = useState(false);
    

    const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      partenza: partenza,
      arrivo: arrivo
    };

    axios.post('http://localhost:5004/RicercaVolo', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
        .then((response) => {
          setData(response.data);  //prende i dati della risposta 
          setVis(true);  //imposto a true la visibilita del risultato
          
          //vede se la risposta è vuota
          if (response.data.length === 0) {
            setNessunRisultato(true);
          } else {
            setNessunRisultato(false);
          }
          
        })
        .catch((error) => {
          console.error('errore durante la ricerca!', error);
        });
    };



    return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="partenza">Scegli aeroporto partenza: </label>
          <input
            type="text"
            id="partenza"
            value={partenza}
            onChange={(e) => setPartenza(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="arrivo">Scegli aeroporto arrivo: </label>
          <input
            type="text"
            id="arrivo"
            value={arrivo}
            onChange={(e) => setArrivo(e.target.value)}
          />
        </div>
        <button type="submit">cerca</button>
      </form>

    {/* se non c è risultato */}
    {nessunRisultato ?(
      <div>
        <h1>AL MOMENTO NON CI SONO VOLI PER QUESTA TRATTA</h1>
      </div>
    ) : (
      
    // se c è risultato allora fa apparire il risutato
    vis &&(
      <div>
      <h1>risultati:</h1>
      <table>
        <thead>
          <tr>
            <th>Codice</th>
            <th>Partenza</th>
            <th>Arrivo</th>
            <th>Orario partenza</th>
            <th>Orario arrivo</th>
          </tr>
        </thead>
        <tbody>
          {data.map(volo => (
            <tr key={volo.codice}>
              <td>{volo.codice}</td>
              <td>{volo.partenza}</td>
              <td>{volo.arrivo}</td>
              <td>{volo.ora_partenza}</td>
              <td>{volo.ora_arrivo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    )
    )}
      </div>
      ) 
    };

  };
  export default RicercaVolo;
