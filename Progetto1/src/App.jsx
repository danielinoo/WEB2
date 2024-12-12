// nvm install node
// dentro React nvm install node
// npm run dev


import './App.css'
import Card from './componenti/Card'
import Todolist from './componenti/Todolist'
import UserProfile from './componenti/userProfile'
import Padre from './componenti/Padre'

// funzione evento -----e --> è per evento
function alertClick(){
  alert("BUONGIORNO");
}

//funzione di evento------e --> stampa qualsiasi evento
function handleChange(e){
  console.log(e.target.value);  //target.value)--> prende il valore
}

function handSubmit(e){
  e.preventDefault()  
  console.log(e); 

}


function App() {

  // lista delle citta
  const listacitta = [

    {
      id: 0,
      vis: true,  
      titolo:"TROPEA",
      descrizione:"descrizione foto",
      img: "https://www.calabriago.com/wp-content/uploads/2020/06/slide-1.jpg"
      
      
    },
    {
      id:1,
      vis: false,
      titolo:"MIAMI",
      descrizione: "descrizione foto",
      img:"https://plus.unsplash.com/premium_photo-1697730215093-baeae8060bfe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlhbWl8ZW58MHx8MHx8fDA%3D"
      
    },

    {
      id:2,
      vis:false,
      titolo:"ZANTE",
      descrizione: "descrizione foto", 
      img: "https://www.grecia.info/wp-content/uploads/sites/71/zante.jpg"
      

    },
    {
      id:3,
      vis:false,
      titolo:"PUNTA CANA", 
      descrizione: "descrizione foto",
      img:"https://d2lxis1uiqe6st.cloudfront.net/wp-content/uploads/2023/08/puntacana.png"

    }

  ]


  return (
  
    <>
        {/* creazione di tutte e quattro le card */}
        {listacitta.map((citta) => (
          <Card key={citta.id}
          titolo = {citta.titolo}
          descrizione = {citta.descrizione}
          vis = {citta.img}
          img = {citta.img}>
          </Card>
        ))} 

        <br></br>
        <br></br>
        <br></br>

        {/* evento */}
        <button onClick={(alertClick)} >ALERTCLICK</button>

        <input type='text' onChange={handleChange}></input>

        <br></br>
        <br></br>


        {/* evento  */}
        <form onSubmit={handSubmit}>
        <button type='submit'>  click</button>
        </form>

        <br></br>
        <br></br>
        <br></br>

        <UserProfile></UserProfile>

        <br></br>
        <br></br>
        <br></br>

        <Todolist></Todolist>


        <br></br>
        <br></br>
        <br></br>
        <Padre></Padre>





    </>
  )
}

export default App

