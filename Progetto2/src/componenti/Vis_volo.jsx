// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Vis_volo.css';

const Vis_volo = () => {
  const [data, setData] = useState([]); // memorizzo i dati 

  useEffect(() => {
    axios.get('http://127.0.0.1:5004/visualizza_volo') //chiamata get
      .then(response => {
        setData(response.data);  //prende i dati
      });
  },[]);

  return (
    <div>
      <h1>Dati dei voli:</h1>
      <table>
        <thead>
          <tr>
            <th>Codice</th>
            <th>Compagnia</th>
            <th>Durata (minuti)</th>
          </tr>
        </thead>
        <tbody>
          {data.map(volo => (
            <tr key={volo.codice}>
              <td>{volo.codice}</td>
              <td>{volo.comp}</td>
              <td>{volo.durataminuti}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Vis_volo;
