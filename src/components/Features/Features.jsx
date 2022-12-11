import React from 'react'
import './Features.css'
import RepeatIcon from '@mui/icons-material/Repeat';
import AddIcon from '@mui/icons-material/Add';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { Link } from 'react-router-dom';
const Features = () => {
    const data =[
        {
            icon: <AddIcon />,
            text:'Booking'
        },
        {
            icon: <RepeatIcon />,
            text:'Seat Renew'
        },
        {
            icon: <DoDisturbIcon/>,
            text:'Seat Cancle'
        },
        {
            icon: <FormatListBulletedIcon />,
            text:'Booking List'
        },
        {
            icon: <FilterListOffIcon />,
            text:'Cancel List'
        },
        {
            icon: <SportsSoccerIcon />,
            text:'Ground Booking'
        },
        {
            icon: < EventAvailableIcon />,
            text:'Seat Availablity'
        },
        {
            icon: <VpnKeyIcon />,
            text:'Out Pass'
        },
        {
            icon: <ContactMailIcon />,
            text:'Hall Notice'
        },
        {
            icon: <MedicalServicesIcon />,
            text:'Emergency'
        },
        
       
    ]
  return (
    <div className='Fearures'> 
             <img src="/img/YKSG-2.jpg" alt="" />
         <div className="details">
         {data.map((data)=>(
            <div className="list">
                   <span>{data.icon}</span>
                <Link className='link' to='/groundbooking' >
                   <p>{data.text}</p>
                
                </Link>
        </div>
         ))}
         </div>
    </div>
  )
}

export default Features