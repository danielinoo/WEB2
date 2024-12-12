
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function ControlloForm()  {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value); // Aggiorna lo stato ogni volta che l'utente digita
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nome inviato: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          value={name} // Il valore dell'input è legato allo stato
          onChange={handleChange} // Ogni modifica aggiorna lo stato
        />
      </label>
      <button type="submit">Invia</button>
    </form>
  );
};

export default ControlloForm;