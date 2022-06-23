import Select from 'react-select';
import BootstrapDatePickerComponent from './BootstrapDatePickerComponent'

export default function InputClient(){
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
    )
}