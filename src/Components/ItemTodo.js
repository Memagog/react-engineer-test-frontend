import React,{useState,useEffect} from 'react'
import {RiPencilLine} from 'react-icons/ri'
import "./todo.css"
export default function ItemTodo(props) {

    const [edit, setEdit] = useState(false)
    let viewMode = {}
    let editMode = {}
    useEffect(() => {
        return () => {
        }
    }, [])

    const handleEdit = () => {
        setEdit(true)
        console.log(" hey child ")
    }    

    if(edit){
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    return (
        <li className="item">
            
            <input 
                type="text"
                style={editMode}
                className="inputText"
                value={props.todo.title}
                onChange={(e)=> {
                    props.updateTodo(e.target.value, props.todo.id)
                }}               
                onKeyDown={(e)=>{e.key === "Enter"?setEdit(false):setEdit(true)}}
                autofocus 
            />
            <div onClick={handleEdit} style={viewMode}>
                <RiPencilLine/>
            </div>
            <button onClick={()=> props.deleteTodo(props.todo.id)}>
                del
            </button>
            {props.todo.title}
           <br/>
            {props.todo.tags.map(i=>                 
                        <strong> {i}</strong>             
            )}
        </li>
    )
}
