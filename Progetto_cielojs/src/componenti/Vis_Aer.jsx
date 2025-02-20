// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Vis_volo.css';

const Vis_Aer = () => {
  const [data, setData] = useState([]); // memorizzo i dati 

  useEffect(() => {
    axios.get('http://127.0.0.1:5004/visualizza_aeroporti') //chiamata get
      .then(response => {
        setData(response.data);  //prende i dati
      });
  },[]);

  return (
    <div>
      <h1>Dati degli aeroporti:</h1>
      <table>
        <thead>
          <tr>
            <th>Codice</th>
            <th>Nome</th>
            <th>Citta</th>
            <th>Nazione</th>
          </tr>
        </thead>
        <tbody>
          {data.map(aer => (
            <tr key={aer.codice}>
              <td>{aer.codice}</td>
              <td>{aer.nome}</td>
              <td>{aer.citta}</td>
              <td>{aer.nazione}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Vis_Aer;
