import logo from './logo.svg';
import {useState} from 'react'
import './App.css';

function App() {
const [data,setData]=useState('')
  const [personalInfo,setPersonalInfo]=useState({
    firstname:'',
    lastName:'',
    mobile:'',
    sex:'',
    Terms:''
  });
  

  const handleInputName=(e)=>{
    setPersonalInfo((previosstate)=>{
      return{...previosstate,[e.target.name]:e.target.value}}) 
  }
  const handleChecked=(e)=>{
    const {name,checked}=e.target;
    setPersonalInfo((previosstate)=>{
      return{...previosstate,[name]:checked}}) 
  }
  
  const showData=(e)=>{
    e.preventDefault();
    setData(JSON.stringify(personalInfo))

  }
  return (
    <div className="App">
      <form onSubmit={showData}>
      <input type='text'  placeholder="firstname"name="firstname" onChange={handleInputName} /><br/>
      <input type='text' placeholder="LastName" name="Lastname" onChange={handleInputName}/><br/>
      <input type='text' placeholder="Mobile" name="mobile" onChange={handleInputName}/><br/>
      <input type='radio' placeholder='Male' name='sex'  value="Male" onChange={handleInputName} />Male
      <input type='radio' placeholder='Female' name='sex'  value="Female" onChange={handleInputName}/>Female
      <input type='checkbox' placeholder='Temrs' name='Terms' onChange={handleChecked}/>Terms&Conditions
      <input type='submit' placeholder='Submit'/>
      </form>
{JSON.stringify(personalInfo)}
{data}
    </div>
    
  );
}

export default App;