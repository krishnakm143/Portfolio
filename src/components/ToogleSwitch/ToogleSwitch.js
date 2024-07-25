import React, {useContext,useState} from 'react'
import emoji from 'react-easy-emoji'
import StyleContext from '../../Context/StyleContext';

const ToogleSwitch = () => {
    const{isDark}=useContext(StyleContext);
    const [isChecked , setChecked]= useState(isDark);
    const styleContext = useContext(StyleContext);


  return (
   <label className='Switch'>
    <input type='checkbox'
    checked={isDark}
    onChange={() =>{
        styleContext.changeTheme();
        setChecked(!isChecked);
    }}
    />
    <span className='Slider round'>
        <span className='emoji'>{isChecked ? emoji("🌜") : emoji("☀️")}</span>
        </span>
   </label>
  )
}

export default ToogleSwitch
