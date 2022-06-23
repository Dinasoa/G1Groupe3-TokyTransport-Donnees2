import './App.css';
import './Horloge/hour';

function App() {
    return (
        
        import './App.css';
        import logo from './image/logo-bg.png' ;
        import logo2 from './image/logo.png' ;
        import Select from 'react-select';
        import BootstrapDatePickerComponent from './BootstrapDatePickerComponent';
        import InfoModal from './ReserverButton';
        import Reserver from './ReserverButton';
        import VIP from './image/VIPBG.png';
        import PREMIUM from './image/PREMIUMBG.png';
        import LITE from './image/LITEBG.png'
        
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
        
              <button className='btn btn-secondary bouton'> Search </button>
        
              <table class="table container text-white table-bordered">
          <thead>
            <tr>
              <th scope="col">id_voyage</th>
              <th scope="col">place</th>
              <th scope="col">nombre de place</th>
              <th scope="col">jour_depart</th>
              <th scope="col">reserver</th>
        
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
        </svg>
                Afficher les places disponibles</td>
              <td>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
        </svg>
                Afficher les nombres de places displonibles</td>
              <td>DATE</td>
              <td>nouvelle reservation</td>  
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Places disponibles</td>
              <td>nombre</td>
              <td>DATE</td>
              <td>nouvelle reservation</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Places disponibles</td>
              <td>nombre</td>
              <td>DATE</td>
              <td>Nouvelle reservation</td>
            </tr>
          </tbody>
        </table>

        
    <footer>
      <div className="footer-gray">
        <div className="footer-custom">
          <h3>2021-2022</h3>
          <p>@Created by Anonymous Team</p>
        </div>
      </div>
    </footer>
          </div> 
        
         
          
                </>
                
          );
        }
        

    )
  
}

export default App;
