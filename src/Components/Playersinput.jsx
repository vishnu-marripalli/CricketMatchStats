// eslint-disable-next-line no-unused-vars
import React from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {  handleinputfromplayer} from '../features/Slice'


export default function Playersinput() {
  const dispatch = useDispatch()
    const [Playersinput, setPlayersinput] = useState({
      stricker:'',
      nonstricker:'',
      bowler:'',
    })
    const handleclick = () =>{
      dispatch(handleinputfromplayer(Playersinput))
    
  }
  return (
    <div className="flex items-center justify-center m-6 flex-col"> 
        <div className="m-3">
            <h1 className=" text-green-600  text-xl">Batsmen</h1>
            <div className="bg-white   w-80 rounded-lg  p-3 flex flex-col items-center gap-2 justify-center">

            <input className=' border-b-2 border-gray-500 w-72 text-sm text-gray-500 focus-visible: outline-none'
            value={Playersinput.stricker} 
            onChange={(e) => setPlayersinput(prev => ({...prev,stricker:e.target.value}))} placeholder='Stricker' type="text"   />
            <input className=' border-b-2 border-gray-500 w-72 text-sm text-gray-500 focus-visible: outline-none'
             value={Playersinput.nonstricker} 
             onChange={(e) => setPlayersinput(prev => ({...prev,nonstricker:e.target.value}))} placeholder='Non Stricker' type="text"  />
                
            </div>
        </div>
        <div className="m-3">
            <h1 className=" text-green-600  text-xl">Opening Bowler</h1>
            <div className="bg-white   w-80 rounded-lg  p-3 flex flex-col items-center gap-2 justify-center">

            <input className=' border-b-2 border-gray-500 w-72 text-sm text-gray-500 focus-visible: outline-none'
            value={Playersinput.bowler} 
            onChange={(e) => setPlayersinput(prev => ({...prev,bowler:e.target.value}))} placeholder='Bowler' type="text"  />
              
            </div>
        </div>
        <button type="button" className=" bg-green-400 p-1 text-white rounded-md text-sm  w-28 m-3" onClick={handleclick} >Start Match</button>

    </div>
  )
}
