import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { useState } from 'react';

function ExpenseItem(props) {
  // note: a signle root element is allowed
  // which can contains multiple sub-elements side by side

    // Call react hook.  All react hooks start whit "use" 
    // and must only be called directly within a React component function (no nesting)
    // useState() must be called with an initial value.
    // It returns not only a special state variable value, but also a function 
    // used to update the value of that special state variable.  Both can be
    // assigned using "array destructuring".
    // Calling this updating function not only updates the special state variable
    // but also tells react top re-evaluate the specific instance of the component function 
    // in which this state variable was registered.
    // Note when the React component function is re-executed, the initial value
    // defined for the state variable is not re-applied (it is applied only when the state
    // variable is initialized for the very first tim for a given component instance).
    const [title, setTitle] = useState(props.title); 

  const myClickHandler = () => {  
    setTitle("Updated!"); 
    console.log(title);  
  }


  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={myClickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;
