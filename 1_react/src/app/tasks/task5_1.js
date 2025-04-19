"use client"
// "use server"
import React, {useState, useEffect} from 'react'

const task5_1 = () => {
    const [data, setData] = useState({
            data1: [
              {
                MainId: 1111,
                firstName: "Sherlock",
                lastName: "Homes",
                categories: [
                  {
                    CategoryID: 1,
                    CategoryName: "Example",
                  },
                ],
              },
              {
                MainId: 1661,
                firstName: "Sherloc",
                lastName: "Homes",
                categories: [
                  {
                    CategoryID: 1,
                    CategoryName: "Example",
                  },
                ],
              },
              
            ],
            data2: [
              {
                MainId: 1111,
                firstName: "Sherlock",
                lastName: "Homes",
                categories: [
                  {
                    CategoryID: 1,
                    CategoryName: "Example",
                  },
                ],
              },
              
            ],
            
          });
    
          const [newObject, setNewObject] = useState({})
          const [newName, setNewName] = useState('Name Changed');
        //   const [cate, setCate] = useState({})
          function removeData(){
            console.log(data)
            // let toRemove = data.data1[0].categories[0];
            let elementToRemove = "data2"
            // let elementToRemove = data.data1[0].categories[0];
            // setData(prev => prev.filter(data => data !== elementToRemove ))
            // setCate(toRemove)
            // console.log(cate)
            const newObject = { ...data}; 
            delete newObject[elementToRemove];
            setData(newObject);
            // console.log(cate)
          }
          // console.log(data)
          // const deta = data.data1[0].categories[0];
          // console.log(deta)
    
          function updateName(){
            // let deta = data.data1[0].firstName[0];
            // deta = newName
            // console.log(deta)
            console.log(data)
            setData((prvData)=>({
              data1: prvData.data1.map((item)=>({
                ...item,
                firstName: newName
              }))
            }))
            console.log(data)
          }
          // console.log(data)

  return (
    <div>
        <h1>Data1 :</h1>
        {/* <p>{JSON.stringify(data,null,20)}</p> */}
        {/* {data.data1.map((datas,index)=>(
            <div key={index}>
              <p>{datas.firstName}</p>
            </div>
        ))} */}
        <br></br>
        <button onClick={removeData}>remove Data</button>
        <br></br>
        
        <button onClick={updateName}>Update Name</button>
      
    </div>
  )
}

export default task5_1
