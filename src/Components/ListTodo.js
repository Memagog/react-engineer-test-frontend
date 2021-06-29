import React from 'react';
import ItemTodo from './ItemTodo'
const ListTodo = (props) => {
    return (
        <ul>
            {
                props.todos.map(item=>
                    <ItemTodo 
                        key={item.id}
                        todo={item}
                        deleteTodo={props.deleteTodo}
                        updateTodo={props.updateTodo}
                    >
                    </ItemTodo>                     
                )
            }
            
        </ul>
    );
}

export default ListTodo;
