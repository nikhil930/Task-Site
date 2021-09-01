import Card from "./Card"
import classes from './ListItem.module.css'
const ListItem = (props) =>{
    console.log('*');
    return <Card className={classes.user}>
        <input className={classes.checkbox} type='checkbox' value={props.item.rollNo} onClick={props.onRemove} /> 
        <label>Name: {props.item.name}</label>
        <p>Roll No: {props.item.rollNo} </p>
        <p>Contact: {props.item.contact}</p>
        <p>E-mail: {props.item.email}</p>
        <p>Address: {props.item.address}</p>
        </Card>
}

export default ListItem;