// eslint-disable-next-line no-unused-vars
import {React,useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {  handleinputfromhome} from '../features/Slice'


export default function Home() {
    const dispatch = useDispatch()
    const [match, setmatch] = useState({
            hostname:'',
            visitorname:'',
            hosttoss:'',
            localtoss:'',
            totalovers:0,
            players:0,
    })
    const [toss, settoss] = useState(true)
    const [opted, setopted] = useState('batting')
    
    useEffect(() => {
     
        
        if(toss===true&&opted==='batting'){
            setmatch(prev => ({...prev,hosttoss:'batting',localtoss:'bowling'}))
        }
        else if(toss===true&&opted==='bowling'){
            setmatch(prev => ({...prev,hosttoss:'bowling',localtoss:'batting'}))
        }else if(toss===false&&opted==='batting'){
            setmatch(prev => ({...prev,hosttoss:'bowling',localtoss:'batting'}))
        }else{
            setmatch(prev => ({...prev,hosttoss:'batting',localtoss:'bowling'}))
        }
        
        
    }, [toss,opted])

    const handleclick = () =>{
        dispatch(handleinputfromhome(match))
        console.log(match)
    }
    

  return (
    <div className="flex items-center justify-center m-6 flex-col"> 
        <div className="m-3">
            <h1 className=" text-green-600  text-xl">Teams</h1>
            <div className="bg-white   w-80 rounded-lg  p-3 flex flex-col items-center gap-2 justify-center">

                <input className=' border-b-2 border-gray-500 w-72 text-sm text-gray-500 focus-visible: outline-none'
                value={match.hostname} 
                 onChange={(e) => setmatch(prev => ({...prev,hostname:e.target.value}))}
                  placeholder='Host Team' type="text"  />


                <input className=' border-b-2 border-gray-500 w-72 text-sm text-gray-500 focus-visible: outline-none' 
                 value={match.visitorname} 
                 onChange={(e) => setmatch(prev => ({...prev,visitorname:e.target.value}))}
                placeholder='Vistor Team' type="text"  />
                
            </div>
        </div>
        <div className=" m-3">
            <h1 className=" text-green-600  text-xl">Toss won by?</h1>
            <div className="bg-white   w-80 rounded-lg  p-3 flex flex-row items-center gap-2 ">

               
                    <input type="radio" name="toss" id="host"  checked={toss === true}
                    onChange={() => settoss(true)}
                     />
                    <label htmlFor="host" className=' text-xs'>Host Team</label>
               
               
                    <input type="radio" name="toss" id="visitor"   checked={toss === false}
                    onChange={() => settoss(false)}
                    />
                    <label htmlFor="visitor" className=' text-xs'>Visitor Team</label>
             
                
            </div>
        </div>
        <div className=" m-3">
            <h1 className=" text-green-600  text-xl">Opted to?</h1>
            <div className="bg-white   w-80 rounded-lg  p-3 flex flex-row items-center gap-2 ">

                    <input type="radio" name="opt" id="bat"  checked={opted === 'batting'}
                    onChange={() => setopted('batting')}
                     />
                    <label htmlFor="bat" className=' text-xs'>Bat</label>
               
               
                    <input type="radio" name="opt" id="ball"   checked={opted === 'bowling'}
                    onChange={() => setopted('bowling')}
                    />
                    <label htmlFor="ball" className=' text-xs'>Ball</label>
                   
                
            </div>
        </div>
        <div className=" m-3">
            <h1 className=" text-green-600  text-xl">Overs?</h1>
            <div className="bg-white   w-80 rounded-lg  p-3 flex flex-row items-center gap-2 ">

               
                 <input className=' border-b-2 border-gray-500 w-72 text-sm text-gray-500 focus-visible: outline-none '
                 value={match.totalovers} 
                 onChange={(e) => setmatch(prev => ({...prev,totalovers:e.target.value}))}
                 placeholder='Overs' type="number" min={0} max={100}  />

                
            </div>
        </div>

        <div className=" m-3">
            <h1 className=" text-green-600  text-xl">Number of players</h1>
            <div className="bg-white   w-80 rounded-lg  p-3 flex flex-row items-center gap-2 ">

               
                 <input className=' border-b-2 border-gray-500 w-72 text-sm text-gray-500 focus-visible: outline-none '
                 value={match.players} 
                 onChange={(e) => setmatch(prev => ({...prev,players:e.target.value}))}
                 placeholder='Overs' type="number" min={3} max={11}  />

                
            </div>
        </div>
        <button type="button" className=" bg-green-400 p-1 text-white rounded-md text-sm  w-28 m-3" onClick={handleclick}  >Start Match</button>


    </div>
  )
}
