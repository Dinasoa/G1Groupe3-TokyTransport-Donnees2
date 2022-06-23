import './App.css';
import logo from './image/logo-bg.png' ;
import logo2 from './image/logo.png' ;
import Select from 'react-select';
import BootstrapDatePickerComponent from './BootstrapDatePickerComponent';
import InfoModal from './ReserverButton';
import Reserver from './ReserverButton';
import VIP from './image/VIPBG.png';
import PREMIUM from './image/PREMIUMBG.png';
import LITE from './image/LITEBG.png';
import CoteGestion from './coteGestion.js';
import CoteClient from './coteClientt.js';
import { useState } from 'react';



function App() {
  const [ state , setState ] = useState(true); 
  const toggle = () => {
    setState(!state);
  } 
  let affiche;
  let label;
  if(state){
     affiche = <CoteClient/>;
     label = "Switch to timer";
  }
  else {
     affiche = <CoteGestion/>;
     label = "Switch to clock";
  }

    const actions = [
      { label: "Antananarivo", value: 1 },
      { label: "Antsirabe", value: 2 },
      { label: "Fianarantsoa", value: 3 } ,
      { label: "Morondava", value: 4 } ,
      { label: "Tamatave", value: 5 } ,
      { label: "Mahajanga", value: 6 } ,
      { label: "Diego", value: 7 }
    ];

    const offres = [
      { label: "PREMIUM", value: 1 },
      { label: "VIP", value: 2 },
      { label: "LITE", value: 3 }
    ]

    const jour = [
      { label: "DAY", value: 1 },
      { label: "NIGHT", value: 2 }
    ]
return (
  <>
  {/* NAVBAR START */}
        <nav class="navbar">
            <img src={logo} alt=""></img>    
            <ul>
                <li>
                    <a href="">HOME</a>
                </li>
                <li>
                    <a href="#offers">Offers</a>
                </li>
                <li>
                  <a href="#bookTrip">Booking</a>
                </li>   
                <li>
                <a href="#table">Trip</a>
                </li> 
            </ul>
        </nav>

  {/* NAVBAR ENDING */}
          
  {/* HOME SART */}
            
              <div class="bg-image">
                <img src={logo2}></img>
                    <div class="paragraphe">
                        <h1>TOKYTRANS</h1>
                        <p>Travel beyond the limit</p>
                        <Reserver/>
                    </div>
              </div>

  {/* HOME ENDING */}


  {/* OFFERS START */}

    <div className='offers'>
      <h1 className="text-center" id="offers"> Available offers </h1>

        <div className="offres text-center">
              <div class="col">
                  <img src={VIP}></img>
                    <h2 class="fw-normal">PREMIUM</h2>
                    <p>lorem ipsum</p>
                    <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
              </div>

              <div class="col">
                  <img src={LITE}></img>
                    <p>lorem  ipsum</p>
                    <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
              </div>

              <div class="col">
                  <img src={PREMIUM}></img>
                    <h2 class="fw-normal">VIP</h2>
                    <p>lorem ipsum</p>
                    <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
              </div>

        </div>
    </div>

    {/* OFFERS ENDING */}

    {/* TABLE START */}
    
  <div class="card containers" id="table">
      <div class="card-body">
        <div className='inputs'>
          
            <div>
            <label className='first'>Date Departure</label>
              <BootstrapDatePickerComponent/>
            </div>

            <div>
            <label>Departure</label>
            <Select options={ actions } />
            </div>
            
            <div>
            <label>Arrival</label>
              <Select options={actions} />
            </div>
            
            <div>
            <label>Offers</label>
            <Select options={offres} />
            </div>
          
            <div>
            <label>Day/Night</label>
              <Select options={jour} />
            </div>
        </div>
      </div>

      <button className='btn btn-secondary bouton' > Search </button>
      <button className='btn btn-primary bouton' onClick={toggle}> Switch </button>
      {affiche}
      
      
  </div>  

 
  
        </>
        
  );
}

export default App;
