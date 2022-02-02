import {render} from "./index";
import {nanoid} from "nanoid";

export const todos = [
    {id: nanoid(), name: 'first task', done: true, urgent: false},
    {id: nanoid(), name: 'first task', done: false, urgent: true},
]

export function handleDoneChange(item, done) {
    item.done = done
    render();
}

export function handleTaskAdd() {
    todos.unshift({
        id: nanoid(),
        name: `Added task ${new Date().toLocaleTimeString()}`,
        done: false,
        urgent: false
    })
    render();
}