import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function EducationDetail() {
  const {educationId} = useParams()
  const [education, setEducation] = useState(null)
  const educations = useSelector(state=> state.educations)
  useEffect(()=>{
    setEducation(educations.find(education => education.id === +educationId))
  },[])
  if (!education) {
    return <p>fetching data</p>
  }
  return (
    <div className="container d-flex-column justify-content-between detail">
      <img src={education.pic_url} className="col-9"  alt="..."/>
      <h1>{education.name}</h1>
      <p>{education.detail}</p>
    </div>
  )
}