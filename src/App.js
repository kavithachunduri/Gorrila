import {useState} from "react";
import './App.css';
import Receipts from "./components/Receipts";
import {receipt1, receipt2, receipt3, rec} from './Data'
import {v4 as uuidv4} from "uuid";

function App() {
  const [receipts, setReceipts] = useState([receipt1, receipt2, receipt3, ...rec])
   const mappedReceipts = receipts.map((receipt,index)=>{
    const uuid = uuidv4();
   return <Receipts receipt={receipt} />

   })
  return (
    <div className="App">
      <h1>Korilla</h1>
      <div className="receipts">
      {/*<Receipts receipts = {receipts} />  */}
      {mappedReceipts}
      
      </div>
    </div>
  );
}

export default App;
