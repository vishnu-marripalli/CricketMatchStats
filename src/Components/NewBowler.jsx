// eslint-disable-next-line no-unused-vars
import React from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { handleinputfromnewbowler } from '../features/Slice'
export default function NewBowler() {

    const [newbowler, setnewbowler] = useState('')
    const dispatch = useDispatch()
    
    
   
    const handleclick = () =>{
     
        dispatch(handleinputfromnewbowler(newbowler))
       
      
      }
      
   
  return (
    <>
    <div className="flex items-center justify-center m-6 flex-col"> 
            <div className="m-3">
                <h1 className=" text-green-600  text-xl">New Bowler</h1>
                <div className="bg-white   w-80 rounded-lg  p-3 flex flex-col items-center gap-2 justify-center">

                    <input className=' border-b-2 border-gray-500 w-72 text-sm text-gray-500 focus-visible: outline-none'
                    value={newbowler} 
                    onChange={(e) => setnewbowler(e.target.value)} placeholder='Name' type="text"   />            
                </div>
            </div>
            <button type="button" className=" bg-green-400 p-1 text-white rounded-md text-sm  w-28 m-3" onClick={handleclick} >Done</button>
    </div>
    </>
  )
}