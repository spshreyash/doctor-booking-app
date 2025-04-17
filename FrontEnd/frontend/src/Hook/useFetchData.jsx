import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Store/AuthContext'
import { toast } from 'react-toastify'

export const useFetchData = (url) => {

    const[data,setdata]=useState([])
    const[loading,setLoading]=useState(false)
    const[error,setError]=useState(null)

    const{token}=useContext(AuthContext)
const fetchData=async()=>
{
     setLoading(true)
    try {
        const res=await fetch(url,{
        
            // headers:{autherization : `beareer ${token}`}
            headers:{
               'Content-Type': 'application/json',
            },
            credentials:"include",
        })

         const result=await res.json()
         console.log("✅ Full API result: ", result);

         if(res.ok)
         {
            //   setdata(result.user)
            setdata(result.doctor || result.user || {});
              setLoading(false)
         }
         else{
           throw new Error(result.msg)
         }
    } catch (error) {
        setLoading(false)
        setError(error.msg)
        return toast.error(error.msg)

        
    }
}

    useEffect(()=>
    {
    fetchData()
    },[url])
    return { 
        data,
        loading,
        error,

    }; // 
}
