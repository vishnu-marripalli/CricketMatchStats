import { useSelector } from "react-redux"

export default function Navbar() {
const teams =useSelector(state => state)

  return (
    <div className=" bg-green-400 w-100% h-14 flex flex-row items-center justify-center">
        <h1 className=" font-normal text-3xl text-white">{teams.score.hostteam.name} v/s {teams.score.localteam.name} </h1>
    </div>
  )
}
