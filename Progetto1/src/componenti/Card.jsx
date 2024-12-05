import './Card.css'

//************PRIMO METODO PER PASSARE LE VARIABILI******* */

// function Card(props){
//     const img = props.img;
//     const descrizione = props.descrizione;
//     const titolo = props.titolo;





//******************SECONDO METODO PER PASSARE LE VARIABILI************** */

// // eslint-disable-next-line react/prop-types
// function Card({descrizione,titolo,img}){

//     return(
//         <div>            
//             <h2>{titolo}</h2>
//             <p>{descrizione}</p>
//             <img className= "robaimmagini" src = {img} ></img>

            
//         </div>


//     )

// }
// export default Card



//************************PRIMO METODO IF  ELSE*********************** */

// // eslint-disable-next-line react/prop-types
// function Card({descrizione,titolo,img,vis}){

//     if (vis){

//     return(
//         <div>            
//             <h2>{titolo}</h2>
//             <p>{descrizione}</p>
//             <p>Visitato</p>
//             <img className= "robaimmagini" src = {img} ></img>


            
//         </div>


//     )
//     } else{
//         return(
//             <div>            
//                 <h2>{titolo}</h2>
//                 <p>{descrizione}</p>
//                 <p>Non visitato</p>
//                 <img className= "robaimmagini" src = {img} ></img>
    
    
                
//             </div>
//         )
    
//     }

// }
// export default Card



//*********************************SECONDO METODO IF ELSE*******************
// {vis ? <span>visitato</span> : <span>Non visitato</span>} if else
//  {vis && <span>visitato</span>}     vis è vero allora te lo faccio vede senno no


// eslint-disable-next-line react/prop-types
function Card({descrizione,titolo,img,vis}){

    return(
        <div>            
            <h2>{titolo}</h2>
            <p>{descrizione}</p>
            {vis ? <span><strong>visitato</strong></span> : <span><strong>Non visitato</strong></span>}
            <br></br> <br></br>
            <img className= "robaimmagini" src = {img} ></img>
            <br></br><br></br>
            <hr className='hrm'></hr>
            
        </div>


    )

}
export default Card
