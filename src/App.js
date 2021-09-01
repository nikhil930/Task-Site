import './App.css';
import {useState} from 'react'
import Form from './components/Form';
import List from './components/List';
import ErrorModal from './components/ErrorModal';
import { useEffect } from 'react/cjs/react.development';
import Button from './components/Button';

function App() {
  const [nameList,addNameList] = useState([{
    name:'',
    rollNo:'',
    address:'',
    contact:'',
    email:''

  }]);
  const [nameCheck,setNameCheck]=useState(false);
  const [contactCheck,setContactCheck]=useState(false);
  const[rollCheck , setRollCheck] =useState(false);
  const[showForm , setShowForm] =useState(false);

  
  const listAdd= (item)=>{
    // console.log(item.name);
    if(item.name!==""&&item.contact.trim().length===10&& item.rollNo>0)
   { addNameList((prev)=>{
      return[item,...prev]
    })}
    else if(item.name==="")
    {
      // console.log("9");
       setNameCheck(true);
    }
    else if(item.contact.trim().length!==10)
    {
      // console.log("&");
      setContactCheck(true);
    }
    else if(item.rollNo<0)
    {
      setRollCheck(true);
    }
    let flag=null;
    const uniqueRoll= () =>{
      // console.log(item.rollNo);
       flag=nameList.find(entry => entry.rollNo===item.rollNo);
    }
    uniqueRoll();
    if(flag)
    {
      setRollCheck(true);
    }
    setShowForm(false);
  }

  const errorHandler = () =>{
    setNameCheck(false);
    setContactCheck(false);
    setRollCheck(false);
  }

  const deleteHandler=(item)=>{
    addNameList(prev =>{
      return nameList.filter((entry)=>{
        return entry.rollNo!==item.target.value
      })
    })
  }

  const formHandler=()=>{
    setShowForm(true);
  }
  return (
    <div className="App">
      {!showForm&&<Button className="button" onClick={formHandler} ><b>ADD +</b></Button> }
      {showForm&&<Form onAddList={listAdd} />}
      {(!nameCheck&&!contactCheck&&!rollCheck&&<List items={nameList} onDelete={deleteHandler} />)}
      {(nameCheck&&<ErrorModal title='Invalid' message='Please enter valid name' onConfirm={errorHandler} />)}
      {(contactCheck&&<ErrorModal title='Invalid' message='Please enter valid contact' onConfirm={errorHandler} />)}
      {(rollCheck&&<ErrorModal title='Invalid' message='Please enter valid UNIQUE Roll No' onConfirm={errorHandler} />)}
    </div>
  );
}

export default App;
