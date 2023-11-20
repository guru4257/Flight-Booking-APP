import react from 'react'
import {Card,CardBody} from 'reactstrap'
import {Link} from 'react-router-dom'
// import './flightcard.css'
import photos from "../assests/images/tour-img01.jpg";
import useFetch from '.././components/hooks/useFetch'
import { BASE_URL } from '../utils/config';
import { useLocation } from 'react-router-dom';



const Flightcard = ()=>{
  
    const location = useLocation()
    const username = location.state.username.username
    // console.log(username)
    // const {data:tour,loading,error} = useFetch(`${BASE_URL}/api/v1/myflights/${username}`)

    // // const { _id,Flightname,Username,GuestSize,Phone,BookAt,SeatNo1,SeatNo2,SeatNo3} = tour

    // console.log(tour[0].Flightname)

    return(
        <>  
        <>  {'\n'}  </>
      <h5>Sanjai Ragul Murugesan is Working on it...Kindly wait for Few Hours..</h5>
      </>
    )
}

export default Flightcard