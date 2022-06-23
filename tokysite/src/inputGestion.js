import Select from 'react-select';
import BootstrapDatePickerComponent from './BootstrapDatePickerComponent'


export default function InputGestion(){
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

      const montant = [
        { label : "Paid" , values : 1},
        { label : "Not paid" , values : 2}
      ]

      const voiture = [
        { label : "1" , values : 1 },
        { label : "2" , values : 2 },
        { label : "3" , values : 3 },
        { label : "4" , values : 4 },
        { label : "5" , values : 5 },
        { label : "6" , values : 6 },
        { label : "7" , values : 7 },
        { label : "8" , values : 8 },
        { label : "9" , values : 9 },
        { label : "10" , values : 10 }
      ]
    return (
        <div className='inputs'>
          
            <div>
            <label className='first'>Date Departure</label>
              <BootstrapDatePickerComponent/>
            </div>

            <div>
            <label>Departure</label>
            <Select options={ actions } placeholder="Antananarivo"/>
            </div>
            
            <div>
            <label>Arrival</label>
              <Select options={actions} placeholder="Mahajanga"/>
            </div>
            
            <div>
            <label>Offers</label>
            <Select options={offres} placeholder="Lite"/>
            </div>
          
            <div>
            <label>Day/Night</label>
              <Select options={jour} placeholder="Day"/>
            </div>

            <div>
            <label>Amount</label>
              <Select options={montant} placeholder="Paid"/>
            </div>

            <div>
            <label>Car's number</label>
              <Select options={voiture} placeholder='N°'/>
            </div>

        </div>
    )
}