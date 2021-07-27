import React from 'react'
import { useHistory } from 'react-router-dom'

export default function CommunityCard(props) {
  const community = props.community
  const history = useHistory()
  function seeDetails(event){
    event.preventDefault()
    history.push('communities/'+ community.id)
  }
  return (
    <div className="card m-2 col-3" onClick={(e) => seeDetails(e)}>
      <img src={community.pic_url} className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-text">{community.name}</p>
      </div>
    </div>
  )
}