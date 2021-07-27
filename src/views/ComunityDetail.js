import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function ComunityDetail() {
  const {communityId} = useParams()
  const [community, setCommunity] = useState(null)
  const communities = useSelector(state=> state.communities)
  useEffect(()=>{
    setCommunity(communities.find(community => community.id === +communityId))
  },[])
  if (!community) {
    return <p>fetching data</p>
  }
  return (
    <div className="container d-flex-column justify-content-between detail">
      <img src={community.pic_url} className="col-9"  alt="..."/>
      <h1>{community.name}</h1>
      <p>{community.detail}</p>
    </div>
  )
}