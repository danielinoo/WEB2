// eslint-disable-next-line no-unused-vars
import React, { useState} from "react";
import Figlio from "./Figlio";

function Padre(){

    const [mes, setMes] = useState('');
    
    //funzione chiamata della funzione figlio
    const chamata = (fig_mes) => {
        setMes(fig_mes)
    };

    return(
        <div>
            <h1>messaggio figlio {mes}</h1>
            <Figlio fig_mes = {chamata} />


        </div>
    );

};
export default Padre;
