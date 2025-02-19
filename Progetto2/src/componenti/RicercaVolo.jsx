// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MenuTendina = () => {
  // Stato per gestire l'apertura del menu e i dati del menu
  const [apertura, setApertura] = useState(false);
  const [datiMenu, setDatiMenu] = useState([]);

  // Funzione per aprire/chiudere il menu
  const toggleMenu = () => {
    setApertura(!apertura);
  };

  // Effetto per fare la richiesta Axios quando il componente viene caricato
  useEffect(() => {
    // Funzione per ottenere i dati dal database
    const fetchdatiMenu = async () => {
      try {
        const response = await axios.get('http://localhost:5004/RicercaVolo');
        setDatiMenu(response.data); // Imposta i dati del menu
      } catch (error) {
        console.error('Errore nel recuperare i dati dal server:', error);
      }
    };

    fetchdatiMenu(); // Chiamata alla funzione
  }, []); // [] significa che verrà eseguito solo una volta al caricamento del componente

  return (
    <div>
      <button onClick={toggleMenu}>
        {apertura ? 'Chiudi Menu' : 'Apri Menu'}
      </button>

      {apertura && (
        <ul style={{ listStyleType: 'none', padding: 0 }}>  
          {datiMenu.length > 0 ? (
            datiMenu.map((item) => (
              <li key={item.id}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))
          ) : (
            <li>Caricamento...</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default MenuTendina;
