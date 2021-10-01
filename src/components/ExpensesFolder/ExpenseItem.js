import React  from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate"
import Card from "../CarUi/Card";


function ExpenseItem(props){

  //  const [title, setTitle] = useState(props.title);
//let title = props.title;
//console.log("Expense evaluated by react");
//const clickHandler = ()  => {
 //   setTitle('Updated');
   // title = 'Update'; // here we are changing the tilte but it won't reflect without hooks because of flow of React
  //  console.log('Updated!!');
    //console.log(title);
  //  };
//before </card>    <! --   <button onClick={clickHandler}>Change Title</button>   --> 

    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate
            date={props.date}
             />
            <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
            </div>
         
        </Card>
        </li>
  );
}

export default ExpenseItem;