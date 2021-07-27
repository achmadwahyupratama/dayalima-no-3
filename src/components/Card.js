import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Card(props) {
  const company = props.company
  const history = useHistory()
  function seeDetails(event){
    event.preventDefault()
    history.push('companies/'+ company.id)
  }
  return (
    <div className="card m-2 col-3" onClick={(e) => seeDetails(e)}>
      <img src={company.pic_url} className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-text">{company.name}</p>
      </div>
    </div>
  )
}
