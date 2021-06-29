import React,{useState} from 'react'

export default function FilterTodo(props) {
    const [filter, setFilter] = useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        props.filterTag(filter)
    }
    return (
        <div>
            <form className="filter-form">
                <input 
                    type="text"
                    value={filter}
                    onChange={(e)=>{
                        setFilter(e.target.value)                        
                    }}
                />
                <button onClick={handleSubmit}>
                    filter
                </button>

            </form>
        </div>
    )
}
