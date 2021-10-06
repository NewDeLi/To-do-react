import { useState } from "react";

export const TodoItem = ({ children }) => {
    const [isDone, setDone] = useState("string");
    const HandleClick = () => {
        setDone(!isDone);
    };
    const boxClassName = isDone ? 'setDone' : 'isDone';
    return <>
        <li onClick={HandleClick} className={boxClassName}>{children}</li>
    </>
};
