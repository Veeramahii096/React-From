import logo from './logo.svg';
import React, {useContext, useEffect, useState} from 'react'
import Product from './Components/Products'
import './App.css';

function App() {
// const [data,setData]=useState('')
//   const [personalInfo,setPersonalInfo]=useState({
//     firstname:'',
//     lastName:'',
//     mobile:'',
//     sex:'',
//     Terms:''
//   });
  

//   const handleInputName=(e)=>{
//     setPersonalInfo((previosstate)=>{
//       return{...previosstate,[e.target.name]:e.target.value}}) 
//   }
//   const handleChecked=(e)=>{
//     const {name,checked}=e.target;
//     setPersonalInfo((previosstate)=>{
//       return{...previosstate,[name]:checked}}) 
//   }
  
//   const showData=(e)=>{
//     e.preventDefault();
//     setData(JSON.stringify(personalInfo))

//   }
//   return (
//     <div className="App">
//       <form onSubmit={showData}>
//       <input type='text'  placeholder="firstname"name="firstname" onChange={handleInputName} /><br/>
//       <input type='text' placeholder="LastName" name="Lastname" onChange={handleInputName}/><br/>
//       <input type='text' placeholder="Mobile" name="mobile" onChange={handleInputName}/><br/>
//       <input type='radio' placeholder='Male' name='sex'  value="Male" onChange={handleInputName} />Male
//       <input type='radio' placeholder='Female' name='sex'  value="Female" onChange={handleInputName}/>Female
//       <input type='checkbox' placeholder='Temrs' name='Terms' onChange={handleChecked}/>Terms&Conditions
//       <input type='submit' placeholder='Submit'/>
//       </form>
// {JSON.stringify(personalInfo)}
// {data}
    // </div>
    
  // );
//   const [isAdmin,setIsAdmin]=useState(false);
 
// const handleChecked=(e)=>{
//   setIsAdmin(e.target.checked)
// }

// const [time,setTime]=useState(0) 
// const [isrunning ,setIsrunning]=useState(false)

// useEffect(()=>{
//   let timer
//   if(isrunning){
//     timer=setInterval(()=>{
//       setTime((previous)=>previous+1)
//     },1)
//   }
//   else{
//     clearInterval(timer)
//   }
//   return(()=>{
//     clearInterval(timer)
//   })
// },[isrunning])
// const start=()=>{
//   setIsrunning(true)
// }
// const stop=()=>{
//   setIsrunning(false)
// }
// const Reset=()=>{
//   setIsrunning(false)
//   setTime(0)
// }
// const formatTime=()=>{
//   const mileseconds=time %100;
//   const seconds=Math.floor(time/100)%60
//   const miutes=Math.floor(time/6000)
//   return `${String(miutes).padStart(2,'0')}:
//   ${String(seconds).padStart(2,'0')}:
//   ${String(mileseconds).padStart(2,'0')}`
// }
// const [data,setData]=useState([])
// const [isLoading,setIsloading]=useState(true)

// useEffect(()=>{
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((response)=>response.json())
// .then((datas)=>{setData(datas);
//   setIsloading(false)
// })
// .catch((error)=>{
//   console.log(console.error(error))
// })
// },[])

// const ThemeContext=React.createContext()
// const [theme,setTheme]=useState('light')

  return(


    <>
    {/* <ThemeContext.Provider value={theme}>
      <button onClick={()=>{
setTheme(theme==='light'?"dark":"light")
      }}>Themechange</button>
      <ThemedComponent/>
    </ThemeContext.Provider> */}
    {/* <h1>Posts</h1>
    {isLoading?<p>loading...</p>:
    data.slice(0,5).map((posts)=>(
      <li key={posts.id}>{posts.title}</li>))} */}
    {/* <p>Stop Watch</p>
    {formatTime()}
    <button onClick={start}>start</button>
    <button onClick={stop}> stop</button>
    <button onClick={Reset}>Reset</button> */}

    </>
    // <div>
    //   <input type='checkbox' name='isAdmin' onClick={handleChecked}/>isAdmin
    //   <Product isAdmin={isAdmin}/>
    // </div>
  )
  // function ThemedComponent(){
  //   const theme=useContext(ThemeContext);
  //   return(
  //     <p>current theme:{theme}</p>
  //   )
  // }
}



export default App;