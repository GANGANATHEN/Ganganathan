"use client"
import React, {useState} from 'react'
import '../globals.css'

// let nextId = 0;

const task5 = () => {
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
        data2: [
      {
        MainId: 2222,
        firstName: "Sherlock2",
        lastName: "Homes2",
        categories: [
          {
            CategoryID: 3,
            CategoryName: "Example3",
          },
        ],
      },
      {
        MainId: 2221,
        firstName: "James2",
        lastName: "Watson2",
        categories: [
          {
            CategoryID: 4,
            CategoryName: "Example4",
          },
        ],
      },
    ],
      });

      // const [newObject, setNewObject] = useState({})
      //           const [newName, setNewName] = useState('Name Changed');
      //         //   const [cate, setCate] = useState({})
      //           function removeData(){
      //             console.log(data)
      //             // let toRemove = data.data1[0].categories[0];
      //             let elementToRemove = "data2"
      //             // let elementToRemove = data.data1[0].categories[0];
      //             // setData(prev => prev.filter(data => data !== elementToRemove ))
      //             // setCate(toRemove)
      //             // console.log(cate)
      //             const newObject = { ...data}; 
      //             delete newObject[elementToRemove];
      //             setData(newObject);
      //             // console.log(cate)
      //           }
      //           // console.log(data)
      //           // const deta = data.data1[0].categories[0];
      //           // console.log(deta)
          
      //           function updateName(){
      //             let deta = data.data1[0].firstName[0];
      //             deta = newName
      //             console.log(deta)
      //             // console.log(data)
      //             // setData((prvData)=>({
      //             //   data1: prvData.data1.map((item)=>({
      //             //     ...item,
      //             //     firstName: newName
      //             //   }))
      //             // }))
      //             // console.log(data)
      //           }
      //           // console.log(data)

      function checkData(){
        console.log(data)
      }

  return (
        
    <div className='p-2'>
        <h1>Data1 :</h1>
        <br></br>
      {data.data1.map((datas,index)=>(
            // eslint-disable-next-line react/jsx-key
            <div key={index}>
                <p>{datas.MainId}</p>
                {datas.firstName == "Sherlock" && <p className='text-blue-300'>Name Changed</p> }
                {/* <p>{datas.firstName}</p> */}
                <p>{datas.lastName}</p>
                {datas.categories.map((value)=>(
                    <div key={value.CategoryID}>
                        <p>{value.CategoryID}</p>
                        <p>{value.CategoryName}</p>
                    </div>
                ))}
            </div>
        ))}
        
        <br></br>
      <h1>Data 2 :</h1>
      {data.data2.map((datas,index)=>(
            // eslint-disable-next-line react/jsx-key
            <div key={index}>
                <p>{datas.MainId}</p>
                <p>{datas.firstName}</p>
                {datas.firstName == "James2" && <p className='text-red-300'>middle name Added</p>}
                <p>{datas.lastName}</p>
                {datas.categories.map((value)=>{
                    return(
                        value.CategoryID == 3 ? (
                            value.CategoryName == "Example3" ? <p className='text-red-500' key={value.CategoryID}>categorie deleted</p> : <p key={value.CategoryID}>not deleted</p>
                        ) : (
                        <div key={value.CategoryID}>
                            <p>{value.CategoryID}</p>
                            <p>{value.CategoryName}</p>
                        </div>
                        )
                    );
                })}
            {/* <button onClick={checkData}>check data</button> */}

            </div>
        ))}
    </div>
  )
}

export default task5
