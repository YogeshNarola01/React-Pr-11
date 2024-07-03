import React, { useState } from 'react'

const Add = () => {

    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")
    const [company,setCompany] = useState("")
    const [massage,setMassege] = useState("")

  return (
    <div align="center">
        <div className='box'>
            <h2>Contact Form</h2>
            <form action="">
                <input type="text" className='input' placeholder='Enter Full Name' onChange={(e)=>setName(e.target.value)} value={name}/> <br/>
                <input type="number" className='input' placeholder='Contact Number' onChange={(e)=>setPhone(e.target.value)} value={phone}/> <br/>
                <input type="email" className='input' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} value={email}/> <br/>
                <input type="text" className='input' placeholder='Enter Company Name' onChange={(e)=>setCompany(e.target.value)} value={company}/><br/> 
                <input type="text-area" className='inputm' placeholder='Enter Youre Massage' onChange={(e)=>setMassege(e.target.value)} value={massage}/> 
            </form>
        </div>
    </div>
  )
}

export default Add