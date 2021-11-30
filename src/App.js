import React, { useState } from 'react'
import contactsData from "./contacts.json";
import './App.css';

function App() {
 

  const setInitialValue = () => {
    return contactsData.slice(0,5)
}
  const [contacts, setContacts] = useState(() => setInitialValue())

 const contactList = contacts.map(contact => {
  return (
    <tr key={contact.id}>
  <td> <img src={contact.pictureUrl} style={{height: '50px'}} alt='contactPic' /> </td>
      <td>{ contact.name }</td>
      <td>{ contact.popularity }</td>
      <td>{ contact.wonOscar ? <p>Oscar winner 🤩</p> : <p>no award</p>} </td>
      <td>{ contact.wonOscar ? <p>Emmy winner 🤩</p> : <p> no award </p>} </td>
    
    </tr>
  );
})

  return (

    <div className="App">
     <h1> IronContacts</h1>
      <table>
  <thead>
    <tr>
      <th> picture </th>
      <th> name</th>
      <th> popularity </th>
      <th> Won Oscar </th>
      <th> Won Emmy </th>
      
 
    </tr>
  </thead>
  <tbody>
    {contactList}
  </tbody>
</table>
   </div>
  );
}

export default App;
