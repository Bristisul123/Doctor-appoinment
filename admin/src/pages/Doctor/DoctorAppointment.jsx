import React from 'react'
import { useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { useEffect } from 'react'

const DoctorAppointment = () => {

  const {dToken,appointment, getAppointments} = useContext(DoctorContext)

  useEffect(()=>{
    if(dToken){
      getAppointments()
    }
  },[dToken])
  return (
    <div>DoctorAppointment</div>
  )
}

export default DoctorAppointment