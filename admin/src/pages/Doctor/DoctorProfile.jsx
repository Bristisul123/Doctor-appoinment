import React from 'react'
import { useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { useEffect } from 'react'

const DoctorProfile = () => {

  const { dToken, profileData, setProfileData, getProfileData} = useContext(DoctorContext)
  const {currency, backednUrl } = useContext(AppContext)

  useEffect(()=>{
    if(dToken){
      getProfileData()
    }
  },[dToken])

     const address = typeof profileData.address === "string"
    ? JSON.parse(profileData.address)
    : profileData.address;

  return profileData && (
    <div>
      <div>
        <div>
          <img src={profileData.image} alt="" />
        </div>
        <div>
          <p>{profileData.name}</p>
          <div>
            <p>{profileData.degree} - {profileData.speciality}</p>
            <button>{profileData.experience}</button>
          </div>

          {/* Doctor About */}
          <div>
            <p>About:</p>
            <p>
              {profileData.about}
            </p>
          </div>

          <p>
            Appointment fee : <span>{currency} {profileData.fees}</span>
          </p>

          <div>
            <p>Address : </p>
              <p>{address.line1}</p>
              <p>{address.line2}</p>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorProfile