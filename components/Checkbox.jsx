import { useState } from "react"

export const Checkbox = () => {
    return <>
        <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
            </label>
        </>
}