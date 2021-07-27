import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EducationCard from '../components/EducationCard'
import {getEducations} from '../store/actionCreator'

export default function EducationList() {
  const dispatch = useDispatch()
  const educations = useSelector(state => state.educations)
  useEffect(()=>{
    dispatch(getEducations())
  }, [])
  if (!educations.length) {
    return <p>loading</p>
  }
  return (
    <div className='container d-flex justify-content-evenly flex-wrap'>
      {
        educations.map(education => {
          return(<EducationCard education={education} key={education.id}/>)
        })
      }
    </div>
  )
}
