import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CommunityCard from '../components/CommunityCard'
import {getCommunities} from '../store/actionCreator'

export default function ComunityList() {
  const dispatch = useDispatch()
  const communities = useSelector(state => state.communities)
  useEffect(()=>{
    dispatch(getCommunities())
  }, [])
  if (!communities.length) {
    return <p>loading</p>
  }
  return (
    <div className='container d-flex justify-content-evenly flex-wrap'>
      {
        communities.map(community => {
          return(<CommunityCard community={community} key={community.id}/>)
        })
      }
    </div>
  )
}
