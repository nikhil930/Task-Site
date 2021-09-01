import ListItem from './ListItem'
import classes from './List.module.css'
 const List = (props)=>{
     const onRemove = (item) =>{
        //  console.log(item.target);
         props.onDelete(item);
     }
     return <div className={classes.users}>
   { props.items.map(item => 
       <ListItem 
        item={item}
        onRemove={onRemove}
       />
    )}
    </div>
}
export default List;