import React from "react";

export function TodoItem({name, done, urgent, onDoneChange}) {
    return <label><input
        type="checkbox"
        hecked={done}
        onChange={(event) => {
            onDoneChange(event.target.checked)
        }}
    />{name}</label>
}