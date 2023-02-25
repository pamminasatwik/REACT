import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import ComponentOne from './ComponentOne'
// import './App.css'

function App() {
      
  // const [count, setCount] = useState(0)
 const [number,setNumber]=useState(0);
  // const [numberOne,setNumber]=useState(1);
  const [person,setPerson]=useState({
    name:"Satwik",
    age:20
  })  
  const [numberList ,setNumberList]=useState([0])
  const [data,setData]=useState([]);
   const increaseCount = () =>{
    setNumber(number+1);
         console.log(number);
   }
      const changeName = ()=>{
          setPerson(previousValue =>
            {
              return {...previousValue,name:"Hero"}      //  Destructuring 
            })
      }
      const addValue=()=>{
        setNumber(number+1)
        setNumberList(previousValue=>{
          return [...previousValue,number]
        })
      }

  // useEffect(()=>{
  //      console.log("This component has mounted ")
  //      fetch("https://jsonplaceholder.typicode.com/posts")
  //      .then(res =>res.json())
  //      .then(data=>{
  //        setData(data);
  //      })
  // },[])

   
  return (
    <div>
              <h1>Hello world</h1>
             <button onClick={addValue}>Click to increase count {number}</button>
             <div>The name is {person.name} and age is {person.age} </div>
             <div>The list contains {JSON.stringify(numberList)} </div>
             <ComponentOne /> 

    </div>

  )
}

export default App
