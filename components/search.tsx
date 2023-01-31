import React, { useState } from 'react'

const Search = () => {
  const [search, setSearch] = useState()

  const handleOnChange = (e:any)=>{
    setSearch(e.target.value)

  }
  const handleSubmit = ()=>{
    console.log("submit")
  }
  return (
    <form className="form-control flex items-center justify-center  h-[20vh]" onSubmit={handleSubmit}>
      <div className='p-4'><h1 className="text-5xl font-bold">Block Search Let's Go</h1></div>
  <div className="input-group justify-center ">
    <input type="text" onChange={handleOnChange} placeholder="Search by Address / Txn Hash / Block / Token / Ens" className="input input-bordered  w-[70vw]" />
    <button type="submit" value="Submit" className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</form>
  )
}

export default Search