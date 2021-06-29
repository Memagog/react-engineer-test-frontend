import React,{useState} from 'react';

const AddTodo = (props) => {
    const [inputText, setInputText] = useState({
        title: ""      
    })    
    const [tag, setTag] = useState([])
    const onChange = e => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        if(inputText.title.trim()){                            
            let s = inputText.title.split(" ");
            let title = []
            s.forEach((i)=>{
                if(i.split("")[0]==="#")              
                setTag(tag.push(i))
                else title.push(i)
            })            
            console.log(title.join(' '))
            props.addTodoItemProps(title.join(' '), tag)          
            setInputText({
                title: "",                
            })
            setTag([])
        } else {
            alert("Please write item")
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="form-container">
                <input 
                 type="text"
                 placeholder="Добавьте заметку"
                 value={inputText.title}
                 name="title"
                 onChange={onChange}
                 className="input-text"
                />
                <button className="input-submit" type="submit">add todo</button>
            </form>
        </div>
    );
}

export default AddTodo;
