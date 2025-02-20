
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Link ,Routes} from 'react-router-dom';
import Vis_volo from './componenti/Vis_volo'; 
import Vis_Aer from './componenti/Vis_Aer';
import Vis_com from './componenti/Vis_com';
import RicercaVolo from './componenti/RicercaVolo';
import './App.css'
function App () {
  return (
    <Router>
      <div className='container'>
        <h1>Benvenuto nella gestione dei voli</h1>
        <p>Seleziona una pagina:</p>

        <div>
          <button>
          <Link to="/RicercaVolo"> cerca un volo</Link>
          </button>
          <button>
            <Link to="/volo">Visualizza Voli</Link>
          </button>
          <button>
            <Link to="/comp">Visualizza Compagnie</Link>
          </button>
          <button>
            <Link to="/aer">Visualizza Aereoporti</Link>
          </button>
        </div>

        <Routes>
          <Route path='/RicercaVolo' element = {<RicercaVolo /> }/>
          <Route path="/volo" element={<Vis_volo />} />
          <Route path="/aer" element={<Vis_Aer />} />
          <Route path="/comp" element={<Vis_com />} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;
