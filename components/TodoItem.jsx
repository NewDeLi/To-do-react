import { useState } from "react";

export const TodoItem = ({ children }) => {
    const [isDone, setDone] = useState(false);
    const handleClick = () => {
        setDone(!isDone);
    };
    const boxClassName = isDone ? 'setDone' : 'isDone';
    return <>
        <li onClick={handleClick} className={boxClassName}>{children}</li>
    </>
};
