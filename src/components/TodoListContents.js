import React from 'react';
import TodoListContentsEntry from './TodoListContentsEntry';

const TodoListContents = (props) => {
    return (
        <div className = 'contents_list'>
            <input className="formButton_1" type="Button" value="+"
            onClick = { e => {props.onsubtitleContents(e.target)}}></input>
                {props.con_tents.map((val, i) => {
                    return <TodoListContentsEntry index = {i} key = {i} val = {val} />
                })} 
            <div>
                <input className="formText_1" type="text"></input>
            </div>
        </div>
    )
}

export default TodoListContents;