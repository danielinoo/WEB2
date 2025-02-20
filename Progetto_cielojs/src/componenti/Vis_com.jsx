// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Vis_volo.css';

const Vis_com = () => {
  const [data, setData] = useState([]); // memorizzo i dati 

  useEffect(() => {
    axios.get('http://127.0.0.1:5004/visualizza_compagnie') //chiamata get
      .then(response => {
        setData(response.data);  //prende i dati
      });
  },[]);

  return (
    <div>
      <h1>Dati delle compagnie:</h1>
      <table>
        <thead>
          <tr>
            <th>Codice</th>
            <th>Nome</th>
            <th>Paese</th>
          </tr>
        </thead>
        <tbody>
          {data.map(com => (
            <tr key={com.id}>
              <td>{com.codice}</td>
              <td>{com.nome}</td>
              <td>{com.paese}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Vis_com;
