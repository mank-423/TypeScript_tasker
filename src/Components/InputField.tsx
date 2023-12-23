import React, { useRef } from 'react'
import './styles.css'

//SetTodo type we need to find from App.tsx
interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
    
    const inputRef = useRef<HTMLInputElement>(null)
    
    
    return (
        <form className="input" onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur();
        }} >
            <input 
                type="text"
                ref = {inputRef} 
                placeholder="Enter a task" 
                className="input__box" 
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />
            
            <button 
                className="input_submit" 
                type="submit"
            >
                Go
            </button>
        </form>
    )
}

export default InputField
