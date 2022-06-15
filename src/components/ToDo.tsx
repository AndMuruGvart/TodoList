import React from "react";
import styles from './main.module.scss';
import classnames from 'classnames';

interface INewItem {
    id: string;
    task: string;
    complete: boolean
}

interface IToDo {
    todo: INewItem;
    toggleTask:(id:string) => void;
}


export function ToDo({ todo, toggleTask }: IToDo) {

    let strike:string = todo.complete ? 'strike' : 'item-text';
    let isDeleted:string = todo.complete ? 'delete-button' : 'deleted';
    return (
        <div key={todo.id} className={ styles['item-todo'] }>
            <div className={ classnames(styles['item-delete'], styles[isDeleted]) } onClick={() => toggleTask(todo.id)}></div>
            <div 
                className={styles[strike]}
                >
                {todo.task}
            </div>

        </div>
    )
}

export default ToDo