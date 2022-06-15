import React from 'react';
import {ChangeEvent, KeyboardEvent, FormEvent, useState } from 'react';
import styles from './main.module.scss';


interface IToDoForm {
    addTask:(userInput:string) => void;
}

export function ToDoForm({addTask}:IToDoForm) {
    const [userInput, setUserInput] = useState('')

    function handleChange(e:ChangeEvent<HTMLInputElement>){
        setUserInput(e.currentTarget.value)
    }
    
    function handleSubmit(e:FormEvent) {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }
    
    return (
        <form className={ styles['form-input'] } onSubmit={handleSubmit}>
            
            <button className={ styles['button-create'] }>
                <span className={ styles['triangle'] }></span>
            </button>
            
            <input 
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="What needs to be done? "
            />
        </form>
    )
}

export default ToDoForm