// eslint-disable-next-line no-unused-vars
import React from "react";

function Figlio2 ({oggetto_padre}) {
    const modifica_user = () => {
        const newUser = {name : 'Mario', age: 30};
        
        
        //mivia oggetto nuovo al padre
        oggetto_figlio(newUser);
    };
    

    return(
        <div>

            <button onClick={modifica_user}>aggiorna l utente</button>
        </div>
    );

};
export default Figlio2;