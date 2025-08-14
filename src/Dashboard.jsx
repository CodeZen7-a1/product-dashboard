import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const Dashboard = () => {
  const [productState, setProductState]= useState([]);

async function fetchData(){
  const response = await
  axios.get('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts')
  console.log(response.data)
  setProductState(response.data)
}
useEffect(()=>{
  fetchData()
},[])

  return (
    <div>
      <div className='d-flex gap-2 flex-wrap p-3'>
            {productState.map((product,index)=>(
                <div className=' badge bg-warning p-2 ' key={index}>{product.category}</div>
            ))}
        </div>


            <div className="container">
                <div className='row'>
                    {productState.map((product, index) => (

                        <div className='col col-md-6 col-lg-3' key={index}>
                            <Card product={product} />
                        </div>
                    ))}

                </div>
            </div>
    </div>
  )
}

export default Dashboard