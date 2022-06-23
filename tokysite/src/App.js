import './App.css';
import logo from './image/logo-bg.png' ;
import logo2 from './image/logo.png' ;
import Select from 'react-select';
import BootstrapDatePickerComponent from './BootstrapDatePickerComponent';
import InfoModal from './ReserverButton';
import Reserver from './ReserverButton';
import VIP from './image/VIP.jpg';
import PREMIUM from './image/PREMIUM.jpg';
import LITE from './image/LITE.png'

function App() {
  
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
  { label: "JOUR", value: 1 },
  { label: "NUIT", value: 2 }
]
  return (
    <>
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
               <a href="">Booking</a>
            </li>   
            <li>
            <a href="">Trip</a>
            </li> 
        </ul>
    </nav>
      
    <div class="bg-image">
      <img src={logo2}></img>
          <div class="paragraphe">
              <h1>TOKYTRANS</h1>
              <p>Travel beyond the limit</p>
              <Reserver/>
          </div>
      </div>
      <h1 className="text-center" id="offers"> Available offers </h1>

     <div className="offres text-center">
      {/* <div class="row"> */}
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
     {/* </div>  */}
  <div class="card containers">
      <div class="card-body">
          <div className='inputs'>
        
       <div>
       <label className='first'>Date</label>
        <BootstrapDatePickerComponent/>
       </div>

       <div>
       <label>Depart</label>
       <Select options={ actions } />
       </div>
      
      <div>
      <label>Arrivée  </label>
        <Select options={actions} />
      </div>
        

      <div>
      <label>Offres</label>
      <Select options={offres} />
      </div>
    
      <div>
      <label>Nuit/Jour</label>
        <Select options={jour} />
      </div>
          </div>
        <p className='text-white'>Affcihe les voyages selon les critères ci-dessus </p>

          <div className='row'>
        <div className='col-md-4'>

        </div>

        <div className='col-md-3'>


        <table id="tab">
      
      <tr>
      <th id="numero"> id_voyage </th>
             
      <th id="nom">place</th>
      
      <th id="prenom">jour_depart</th>

      <th id="prenom">Reserver</th>
             
      </tr>

      <tr>
          <td>1</td>
          <td>*Affiche les places disponibles pour un voyage </td>
          <td></td>
          <td></td>

      </tr>

      
      <tr>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
      </tr>

      <tr>
          <td>3</td>
          <td></td>
          <td></td>
          <td></td>

      </tr>

      <tr>
          <td>4</td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
</table>

        </div>

        <div className='col-md-5'>

        </div>

      </div>
       
    
      </div>
  </div>
    

          
        </>
        
  );
}

export default App;
