import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [transaction, setTransaction] = useState('');
  const [value, setValue] = useState('');
  const [amount, setAmount] = useState(0);

  const createAccount = (e) => {
    e.preventDefault();
    if (!accountName) {
      alert('Please enter a name for the account');
      return;
    }
    setAccountCreated(true);
  };

  const bank = (e) => {
    e.preventDefault();
    if (!transaction) {
      alert('Please select your transaction');
    } else if (transaction === 'Deposite') {
      setAmount(amount + Number(value));
    } else {
      const temp = amount - Number(value);
      if (temp >= 0) {
        setAmount(temp);
      } else {
        alert('Insufficient Balance');
      }
    }
    setValue('');
  };

  const deleteAccount = () => {
    setAccountCreated(false);
    setAccountName('');
    setTransaction('');
    setValue('');
    setAmount(0);
  };

  return (
    <div>
      {!accountCreated ? (
        <div>
          <h2>Create Account</h2>
          <form onSubmit={createAccount}>
            <label>
              Enter Account Name:
              <input
                type="text"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
              />
            </label>
            <button type="submit">Create Account</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Bank Application</h2>
          <h3>Welcome, {accountName}</h3>
          <h2>Your Bank Balance is Rs. {amount}</h2>
          <form onSubmit={bank}>
            <label>
              Choose Your Transaction
              <select value={transaction} onChange={(e) => setTransaction(e.target.value)}>
                <option value="" disabled>
                  Select Transaction
                </option>
                <option value="Deposite">Deposite</option>
                <option value="withDraw">Withdraw</option>
              </select>
            </label>
            <br />
            <label>
              Enter the Amount:
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
          <button onClick={deleteAccount}>Delete Account</button>
        </div>
      )}
    </div>
  );
};

export default App;
