import React from 'react';

const TodoListEntry = (props) => {
    return (
            <div className = 'sub-ject' onClick = {e => {props.onchageContents(e.target.innerText)}}>
            {props.val.subtitle}
            </div>
    )
};

export default TodoListEntry
