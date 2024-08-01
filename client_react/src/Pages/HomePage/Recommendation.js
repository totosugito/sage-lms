import React from "react";
import './CSS/Homepage.css';
import InterestBanner from '../../assets/Images/GreenBanner.png';
import {NavLink} from 'react-router-dom';
import {Button} from "react-bootstrap";


const Recommendation =(props)=>{


    return(

        <div className="Interest-banner">
            <img src={InterestBanner} alt="interestbanner"/>
            <p>Get Course Recommendation <br/>according to your Interest    </p>
            <NavLink to="/home/Interest/Preference">
                <Button>Choose Interest</Button>
            </NavLink>
        </div>








    );

}

export default Recommendation;