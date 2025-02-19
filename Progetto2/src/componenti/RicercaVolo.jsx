// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MenuTendina = () => {
  // Stato per gestire l'apertura del menu e i dati del menu
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  // Funzione per aprire/chiudere il menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Effetto per fare la richiesta Axios quando il componente viene caricato
  useEffect(() => {
    // Funzione per ottenere i dati dal database
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('http://localhost:5004/RicercaVolo');
        setMenuItems(response.data); // Imposta i dati del menu
      } catch (error) {
        console.error('Errore nel recuperare i dati dal server:', error);
      }
    };

    fetchMenuItems(); // Chiamata alla funzione
  }, []); // [] significa che l'effetto verrà eseguito solo una volta al caricamento del componente

  return (
    <div>
      <button onClick={toggleMenu}>
        {isOpen ? 'Chiudi Menu' : 'Apri Menu'}
      </button>

      {isOpen && (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {menuItems.length > 0 ? (
            menuItems.map((item) => (
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
