import React from "react";
import {TodoItem} from "./TodoItem";
import {handleDoneChange} from "./todos";

export function TodoList({list}) {
    return list.map(item => <TodoItem key={item.id} {...item} onDoneChange={(done) => {handleDoneChange(item, done)}
    }/>)
}