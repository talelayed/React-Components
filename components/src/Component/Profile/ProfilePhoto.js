import React from "react"
import './../../App.css';

const ProfilePhoto = () =>{
    const photo = "/imgs/profilePhoto.jpg"

    return(
        <img src={photo} className='profilephoto'/>
    )
}

export default ProfilePhoto;