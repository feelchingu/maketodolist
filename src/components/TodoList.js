import React from 'react';
import TodoListEntry from './TodoListEntry';

const TodoList = (props) => {
    return (
        <div className = 'subject_list'>
            <input className="formButton" type="Button" value="+"
            onClick = { e => {props.onwriteSubtitle(e.target)}}
            ></input>
        {props.sub_jects.map((val, i) => {
            return <TodoListEntry index = {i} key = {i} val = {val} onchageContents = {props.onchageContents}/>
        })}
            <input className="formText" type="text"></input>
        </div>
    )
}

export default TodoList;


