import React from 'react'
import { useHistory } from 'react-router-dom'

export default function EducationCard(props) {
  const education = props.education
  const history = useHistory()
  function seeDetails(event){
    event.preventDefault()
    history.push('educations/'+ education.id)
  }
  return (
    <div className="card m-2 col-3" onClick={(e) => seeDetails(e)}>
      <img src={education.pic_url} className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-text">{education.name}</p>
      </div>
    </div>
  )
}
