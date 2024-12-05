// nmp install node
// dentro React nvm install node
// npm run dev

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componenti/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card vis={true}  titolo="TROPEA" descrizione = "descrizione foto" img = "https://www.calabriago.com/wp-content/uploads/2020/06/slide-1.jpg" ></Card>
      <Card vis= {true}  titolo="MAIAMI" descrizione = "descrizione foto" img= "https://plus.unsplash.com/premium_photo-1697730215093-baeae8060bfe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlhbWl8ZW58MHx8MHx8fDA%3D"></Card>
      <Card  vis ={true}  titolo="ZANTE" descrizione = "descrizione foto" img = "https://www.grecia.info/wp-content/uploads/sites/71/zante.jpg"></Card>
      <Card  vis ={true}  titolo="PUNTA CANA" descrizione = "descrizione foto" img="https://d2lxis1uiqe6st.cloudfront.net/wp-content/uploads/2023/08/puntacana.png"></Card>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
