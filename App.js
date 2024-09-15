import React, { useEffect, useState } from 'react';
import './App.css';
import { EmployeeData }  from './EmployeeData.js';


function App(){

  const [data,setData] = useState([]);
  const [FirstName, setFirstName]=useState(''); 
  const [LastName, setLastName]=useState(''); 
  const [Age, setAge]=useState(0); 
  const [id, setId]=useState(0); 
  const [isUpdate, setIsUpdate]=useState(false);
  
  useEffect(()=>{
    setData(EmployeeData);
  },[]);

const handleEdit = (id)=> {
  const dt = data.find(item => item.id === id);
  //const dt = data.filter(item => item.id === id);
  //const dt = data.filter(item => item.id !== id);

  if(dt !==undefined)
  {
    setIsUpdate(true);
    setId(id);
    setFirstName(dt.FirstName);
    setLastName(dt.LastName);
    setAge(dt.Age);

  }
};
const handleDelete = (id) =>{
  if (id > 0)
    {
      if(window.confirm("Are you sure to delete this item?")){
    const dt = data.filter(item => item.id !== id);
    setData(dt);
    }
  }
};
const handleSave = (e)=> {
  let error = '';

  if(FirstName === '')
    error += 'first name is required, ';

  if(LastName === '')
    error += 'Last name is required, ';

  if(Age <= 0)
    error += 'Age is required.';


  if(error === "")
  {
 e.preventDefault();
 //const dt= [...data];
 const newObject = {
  //id : EmployeeData.length +1,
  id: data.length + 1,
   FirstName : 'FirstName',
   LastName : 'LastName',
   age : Age
 };
 setData([...data, newObject]);
 //dt.push(newObject);
 //setData(dt);
}
else{
  alert(error)
}
};
const handleUpdate = ()=> {
  const index = data.findIndex(item => item.id === id); 
 //const index = data.map((item, index) =>{
 // return item.id
 //}).indexOf(id);
 const dt = [...data];
 dt[index].FirstName= FirstName;
 dt[index].LastName= LastName;
 dt[index].Age= Age;

 setData(dt);
 handleClear();
};

const handleClear = ()=> {
  setId(0);
  setFirstName('');
  setLastName('');
  setAge('');
  setIsUpdate(false);
};
  return (
    <div className ="App">

    <div style={{display: 'flex' , justifyContent:'Center', marginTop:"15px", marginBottom:"10px", marginLeft: "20px"}}>
      <div>
        <label>First Name:
          <input type='text'   placeholder='Enter First Name'  onChange={(e) => setFirstName(e.target.value)} value={FirstName}/>
        </label>
        </div>


        <div>
        <label>Last Name : 
          <input type='text' placeholder='Enter Last Name' onChange={(e) => setLastName(e.target.value)} value={LastName}/>

        </label>
        </div>


        <div>
        <label>Age :
          <input type='number' placeholder='Enter Age'  onChange={(e) => setAge(e.target.value)} value={Age}/>
        </label>
        </div>


     <div>
      {
        !isUpdate ? 
        <button className='btn btn-primary' onClick={(e) => handleSave(e)}>Save</button>
       //<button className='btn btn-primary' onClick={handleSave}>Save</button>
        :
        //<button className='btn btn-primary' onClick={() => handleUpdate(Item.id)}>Update</button>
        <button className='btn btn-primary' onClick={() => handleUpdate()}>Update</button>
      }
      
      <button className='btn btn-danger' onClick={() => handleClear()}>Clear</button>

     </div>
    </div>
    <table className='table table-hover'>
        <thead>
          <tr>
            <th>Sr.No </th>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
            <th>Actions</th>
            </tr>
            </thead>

        <tbody>
          {
            data.map((item, index) => (
              //return(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.id}</td>
                  <td>{item.FirstName}</td>
                  <td>{item.LastName}</td>
                  <td>{item.Age}</td>
                  <tbody>
              <button className='btn btn-primary' onClick={() => handleEdit(item.id)}>Edit</button>
              <bttton className='btn btn-danger'onClick={() => handleDelete(item.id)}>Delete</bttton>
            </tbody>
                </tr>
              ))
            }
          
        </tbody>


      </table>




    </div>
  );
}
export default App;