// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Vis_volo.css';

const Vis_volo = () => {
  const [data, setData] = useState([]); // memorizzo i dati 
  useEffect(() => {
    axios.get('http://127.0.0.1:5004/voli') //chiamata get
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
            <th>Codice volo</th>
            <th>Partenza</th>
            <th>Arrivo</th>
            <th>orario partenza</th>
            <th>orario arrivo</th>
          </tr>
        </thead>
        <tbody>
          {data.map(vol => (
            <tr key={vol.id}>
              <td>{vol.codice}</td>
              <td>{vol.partenza}</td>
              <td>{vol.Arrivo}</td>
              <td>{vol.ora_partenza}</td>
              <td>{vol.ora_arrivo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Vis_volo;
