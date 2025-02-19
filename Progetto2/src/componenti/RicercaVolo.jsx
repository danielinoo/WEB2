// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RicercaVolo = () => {
  {
    const [partenza, setPartenza] = useState('');
    const [arrivo, setArrivo] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      partenza: partenza,
      arrivo: arrivo
    };

    axios.post('http://localhost:5004/RicercaVolo', data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('errore durante la ricerca!', error);
      });
    };



    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="partenza">Scegli la partenza:</label>
          <input
            type="text"
            id="partenza"
            value={partenza}
            onChange={(e) => setPartenza(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="arrivo">Scegli l'arrivo:</label>
          <input
            type="text"
            id="arrivo"
            value={arrivo}
            onChange={(e) => setArrivo(e.target.value)}
          />
        </div>
        <button type="submit">cerca</button>
      </form>
      ) 
    };

  };
  export default RicercaVolo;
