// eslint-disable-next-line no-unused-vars
import React from "react";

function Figlio(fig_mes){
    const messagio_al_padre = () =>  {
        //invia il messaggio al padre
        fig_mes('bello zi');
    };

    return(
        <div>
            <button onClick={messagio_al_padre}>invia messaggio al padre</button>
        </div>
    )
}
export default Figlio;