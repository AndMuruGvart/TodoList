import React, { useEffect, useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import styles from './main.module.scss';


export interface INewItem {
    id: string;
    task: string;
    complete: boolean
}

interface IState {
    all: boolean;
    active: boolean;
    complete: boolean
}


export function AppComponent() {

    const [todo, setTodo] = useState<Array<INewItem>>([]);
    const [todoActive, setTodoActive] = useState<Array<INewItem>>([]);
    const [todoComplete, setTodoComplete] = useState<Array<INewItem>>([]);
    const [state, setState] = useState<IState>( 
    {
        all: true,
        active: false,
        complete: false
    })
    


    const addTask = (userInput:string) => {
        if(userInput) {
            const newItem:INewItem = {
            id: Math.random().toString(36).substr(2,9),
            task: userInput,
            complete: false
            }
            setTodo([...todo, newItem])
        }
    }

    useEffect(() => {
        setTodoActive([...todo.filter((todo) => todo.complete === false)])
        setTodoComplete([...todo.filter((todo) => todo.complete === true)])
    }, [todo])
    

        const removeTask = () => {
            setTodo([...todo.filter((todo) => todo.complete === false)])
        }

        const handleToggle = (id:string) => {
            setTodo([
                ...todo.map((todo) => 
                todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
                )
            ])
        }

        return (
                <div className={ styles['container'] }>
                    <div className={ styles['App'] }>
                        <header>
                            <h1 className={ styles['header-main-text'] }>todos</h1>
                        </header>
                        <ToDoForm addTask={addTask} />
                        {(state.all) && todo.map((todo) => {
                            return (
                                <ToDo
                                    todo={todo}
                                    key={todo.id}
                                    toggleTask={handleToggle}
                                />
                            )
                        })}
                        {(state.complete) && todoComplete.map((todo) => {
                            return (
                                <ToDo
                                    todo={todo}
                                    key={todo.id}
                                    toggleTask={handleToggle}
                                />
                            )
                        })}
                        {(state.active) && todoActive.map((todo) => {
                            return (
                                <ToDo
                                    todo={todo}
                                    key={todo.id}
                                    toggleTask={handleToggle}
                                />
                            )
                        })}
                    <ul className={ styles['managing-panel-list'] }>
                        <li className={ styles['managing-panel-item'] }>{todoActive.length} items left</li>
                        <li className={ styles['managing-panel-item'] }>
                            <button className={ styles['managing-button']} onClick = {()=> setState({all: true, active: false, complete: false})}>All</button>
                            <button className={ styles['managing-button']} onClick = {()=> setState({all: false, active: true, complete: false})}>Active</button>
                            <button className={ styles['managing-button']} onClick = {()=> setState({all: false, active: false, complete: true})}>Completed</button>
                        </li>
                        <li className={ styles['managing-panel-item'] }>
                            <button className={ styles['managing-button']} onClick = {()=> removeTask()}>Clear completed</button>
                        </li>
                    </ul>
                </div>
                </div>
        )
}
            

