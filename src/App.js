import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deposit } from './redux/accountActions';
//import depositAction
function App() {
  const[depositAmount, setDepositAmount] = useState()
  const stateValues = useSelector(state=>state)
  console.log('Entire Store: ', stateValues)
  const dispatch = useDispatch();
  let amount = stateValues.balance;
  if(amount){
    return (
      <div >
        
          <h2> Your Account Operation</h2>
          <div className='container'>
              <label for='deposit'>Deposit</label>
              <input 
                type='number' 
                id='deposit' 
                onChange={(e)=>{
                setDepositAmount(e.target.value)
              }}/>
              <button onClick={()=>dispatch(deposit(depositAmount))}>DEPOSIT</button><br/>
  
              <label for='withdraw'>Withdraw</label>
              <input type='number' id='withdraw'/>
              <button>WITHDRAW</button><br/>
  
              <label for='requestLoan'>Request Loan</label>
              <input type='number' placeholder='loan amount' id='requestLoan'/>
              <input type='text' placeholder='loan purpose' id='loan Purpose'/>
              <button>REQUEST LOAN</button><br/>
  
              <label for='payBack'>Pay Back $X</label>
              <button>PAY LOAN</button><br/>
             
               <p>{stateValues.balance}</p>
             
          </div>
      
      </div>
    );
  }

  else{
    return (
      <div >
        
          <h2> Your Account Operation</h2>
          <div className='container'>
              <label for='deposit'>Deposit</label>
              <input 
                type='number' 
                id='deposit' 
                onChange={(e)=>{
                setDepositAmount(e.target.value)
              }}/>
              <button onClick={()=>dispatch(deposit(depositAmount))}>DEPOSIT</button><br/>
  
              <label for='withdraw'>Withdraw</label>
              <input type='number' id='withdraw'/>
              <button>WITHDRAW</button><br/>
  
              <label for='requestLoan'>Request Loan</label>
              <input type='number' placeholder='loan amount' id='requestLoan'/>
              <input type='text' placeholder='loan purpose' id='loan Purpose'/>
              <button>REQUEST LOAN</button><br/>
  
              <label for='payBack'>Pay Back $X</label>
              <button>PAY LOAN</button><br/>
                     
          </div>
      
      </div>
    );
  }
  
}

export default App;
