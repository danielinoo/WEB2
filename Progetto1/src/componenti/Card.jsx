import './Card.css'

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
