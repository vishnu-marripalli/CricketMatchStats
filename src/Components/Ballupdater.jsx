// eslint-disable-next-line no-unused-vars
import {React,useState,useEffect} from 'react'
import { handleeachball, handlebatsmanscore, handleover, switchbatsman, handlewicket,handlebowler, switchbowler, handlewin } from '../features/Slice'
import { useDispatch } from 'react-redux'

export default function Ballupdater() {
  const dispatch = useDispatch()
const [iswicket, setiswicket] = useState(false)





  const handleclick = (value) => {

      
      dispatch(handlebatsmanscore(value))
      dispatch(handleover())
      dispatch(handleeachball(value))
      if (value === 1 || value === 3) {
        dispatch(switchbatsman())
      }
      if(iswicket){
        console.log('iswicket')
        dispatch(handlewicket())
        dispatch(handlebowler('w'))
      }
      else{
        console.log('no w')
      dispatch(handlebowler(value))
      }
      
  }
  useEffect(() => {
    dispatch(switchbowler())
    

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleclick])

  return (
    <>
      <div className="flex items-center justify-center m-6">
        <div className="bg-white  h-20  w-80 rounded p-2 grid grid-cols-2 items-center  justify-items-center">

          <div className="flex flex-row items-center gap-2">
            <input type="checkbox" 
                  className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600' 
                  name="Wicket" 
                  id="Wicket"
                  value={iswicket}
                  onChange={()=> {setiswicket(!iswicket)}}
                   />
            < label htmlFor="Wicket" className=" text-sm text-gray-900">
            Wicket
            </label>
          </div>
          <div className="flex flex-row items-center gap-2">
            <input type="checkbox" className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600' 
                name="noball" 
                id="noball" />
            < label htmlFor="noball" className=" text-sm text-gray-900">
              No ball
            </label>
          </div>

          {/* <button type="button" className=" bg-green-400 p-1 text-white rounded-md text-sm  w-28"  >Undo</button> */}
          <button type="button" onClick={()=> dispatch(switchbatsman())} className=" col-span-2 bg-green-400 p-1 text-white rounded-md text-sm w-28"  >Swap batsman</button>

        </div>
      </div>





      <div className="flex items-center justify-center m-6">
        <div className="bg-white    w-80 rounded p-2  ">
          <div className="grid grid-cols-4 justify-items-center gap-2">
            <button type="button" onClick={() => handleclick(0)}><div className=" border-green-500 border-4  rounded-full w-10 h-10 flex items-center justify-center font-semibold">0</div></button>
            <button type="button" onClick={() => handleclick(1)}><div className=" border-green-500 border-4  rounded-full w-10 h-10 flex items-center justify-center font-semibold">1</div></button>
            <button type="button" onClick={() => handleclick(2)}><div className=" border-green-500 border-4  rounded-full w-10 h-10 flex items-center justify-center font-semibold">2</div></button>
            <button type="button" onClick={() => handleclick(3)}><div className=" border-green-500 border-4  rounded-full w-10 h-10 flex items-center justify-center font-semibold">3</div></button>
            <button type="button" onClick={() => handleclick(4)}><div className=" border-green-500 border-4  rounded-full w-10 h-10 flex items-center justify-center font-semibold">4</div></button>
            <button type="button" onClick={() => handleclick(5)}><div className=" border-green-500 border-4  rounded-full w-10 h-10 flex items-center justify-center font-semibold">5</div></button>
            <button type="button" onClick={() => handleclick(6)}><div className=" border-green-500 border-4  rounded-full w-10 h-10 flex items-center justify-center font-semibold">6</div></button>
            <button type="button" onClick={() => handleclick(7)}><div className=" border-green-500 border-4  rounded-full w-10 h-10 flex items-center justify-center font-semibold">...</div></button>
          </div>
        </div>
      </div>
    </>

  )
}
