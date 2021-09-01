import {Wrapper ,Text} from './Form.styles.js';
import { useState } from 'react';
import Button from './Button.js';
const Form = (props) =>{
    const [enteredName,setEnterdName]=useState('');
    const [enteredContact,setEnterdContact]=useState('');
    const [enteredRoll , setEnterdRoll]=useState('');
    const [enteredAddress,setEnterdAddress]=useState('');
    const [enteredEmail , setEnterdEmail]=useState('');
    
    
    const setName=(event)=>{
        setEnterdName(event.target.value);
    }

    const setContact = (event)=>{
        setEnterdContact(event.target.value);
    }

    const setRoll = (event)=>{
        setEnterdRoll(event.target.value);
    }

    const setEmail = (event)=>{
        setEnterdEmail(event.target.value);
    }

    const setAddress = (event)=>{
        setEnterdAddress(event.target.value);
    }

    const clickHandler= (event) =>{
        event.preventDefault();
        // console.log(enteredName.length);
            const store=
            {
                name:enteredName,
                rollNo:enteredRoll,
                address:enteredAddress,
                contact:enteredContact,
                email:enteredEmail

        }
        // console.log(store);
        props.onAddList(store);
        setEnterdName('');
        setEnterdContact('');
        setEnterdRoll('');
        setEnterdAddress('');
        setEnterdEmail('');
    }
    return(
        <div>
            <Wrapper>
                <Text>
            <form onSubmit={clickHandler}>
            <label>Username</label>
            <input type='text' value={enteredName} onChange={setName}></input>
            <label>Roll No</label>
            <input type='number' value={enteredRoll} onChange={setRoll}></input>
            <label>contact</label>
            <input type='number' className='Tel' pattern="[1-9]{1}[0-9]{9}" value={enteredContact} onChange={setContact}></input>
            <label>Email</label>
            <input type='email' value={enteredEmail} onChange={setEmail}></input>
            <label>Address</label>
            <input type='text' value={enteredAddress} onChange={setAddress}></input>
            
            <Button type='submit'>Add User</Button>
            </form>
            </Text>
            </Wrapper>
        </div>
    )
}
export default Form;
