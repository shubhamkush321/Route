import React, { useEffect, useState } from 'react'

function Github() {
  const[data, setData] = useState([])
useEffect(() => {
  fetch('https://api.github.com/users/shubhamkush321')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    setData(data)
  })
}, [])

  return (
    <div className='text-center m-4  bg-slate-500 text-yellow-100 p-4 text-3xl'>Github User: {data.followers}
    <img src={data.avatar_url} alt='Github User Image'/>
    </div>
  )
}

export default Github
