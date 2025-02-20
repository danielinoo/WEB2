// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Vis_volo.css';

const Vis_volo = () => {
  const [data, setData] = useState([]); // memorizzo i dati 

  useEffect(() => {
    axios.get('http://127.0.0.1:5004/voli') //chiamata get
    .then(response => {
      setData(response.data.voli)
    })
    .catch(error => console.error('Errore nel recupero dei dati:', error));

  },[]);

  return (
    <div>
      <h1>Dati dei voli:</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>partenza</th>
            <th>arrivo</th>
            <th>ora partenza</th>
            <th>ora arrivo</th>
          </tr>
        </thead>
        <tbody>
          {data.map(volo => (
            <tr key={volo.id}>
              <td>{volo.id}</td>
              <td>{volo.partenza}</td>
              <td>{volo.arrivo}</td>
              <td>{volo.ora_partenza}</td>
              <td>{volo.ora_arrivo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Vis_volo;
