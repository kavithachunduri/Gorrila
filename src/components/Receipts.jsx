
import {useState}  from 'react'
import {v4 as uuidv4} from "uuid";
import Toppings from "./Toppings"
//import {v4 as uuidv4} from 'uuid';

function Receipts(props){
    //console.log(props.receipt)
    //const {receipts} = props.receipts
    
  const [paid, setPaid] = useState(props.receipt.paid)

    if(props.receipt.paid){
    return null}
    else{
        return ( <div className='list' onClick={(event)=>{
       props.receipt.paid =true
         setPaid(props.receipt.paid)
        }}>


    <h2>{props.receipt.person}</h2>
    <p><span>Main :</span>{props.receipt.order.main}</p>
    <p><span>Protein :</span>{props.receipt.order.protein}</p>
    <p><span>Rice:</span>{props.receipt.order.rice}</p>
    <p><span>Sauce :</span>{props.receipt.order.sauce}</p>
    <p><span>Drink :</span>{props.receipt.order.drink}</p>
    <p><span>Cost:</span>{props.receipt.order.cost}</p>
    <p><span>Toppings :</span></p>
   
    {props.receipt.order.toppings.map((topping,index)=>{

const uuid = uuidv4();
    return <Toppings topping ={topping} key={uuid}/> 

    })}

        </div>
        )
    }

}  

export default Receipts