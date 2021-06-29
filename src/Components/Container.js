import React, {useState, useEffect} from 'react';
import AddTodo from './AddTodo'
import ListTodo from './ListTodo';
import { v4 as uuidv4 } from "uuid";
import FilterTodo from './FilterTodo';
 const TodoContainer = () =>  {

    const getInitialTodo = () => {
      const temp = localStorage.getItem("todo")
      const savedTodo = JSON.parse(temp)     
      return savedTodo || []
    }

    const [todo, setTodo] = useState(getInitialTodo())
    useEffect(() => {       
        const save = JSON.stringify(todo)
        localStorage.setItem("todo", save)
     
    }, [todo])
   
    const addTodoItem = (title, tags) => {
        const newTodo = {
            id: uuidv4(),
            title: title , 
            tags: tags       
        };
        setTodo(
            [...todo, newTodo]
        );
    }

    const delTodo = id => {
      setTodo([
        ...todo.filter(todo => {
            return todo.id !== id;
          })
      ])
    }

    const updateTodo = (updatedTitle, id) => {
      setTodo(
            todo.map(todo=>{
                if(todo.id === id){
                    todo.title = updatedTitle
                }
                return todo
        })
        )
    }
    const filterTag = (tag) => {
      // setTodo([
      //   ...todo.map(todo => {
      //       return todo.tags.filter((item)=>
      //         item === tag
      //       )            
      //     })
      // ])
      todo.forEach(i => {
        i.tags.map((item)=>{
            if(item === tag)
            setTodo(
              [i]
          );
        
          })        
      });
    }

    return (
      <div className="container"> 
        <div>
            
            <AddTodo addTodoItemProps={addTodoItem}/>  
            <FilterTodo filterTag={filterTag}/>        
            <ListTodo 
              todos = {todo} 
              deleteTodo = {delTodo}  
              updateTodo = {updateTodo}                      
            />
        </div>                
      </div>
    )
   
}
export default TodoContainer
