import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/Card'
import {getCompanies} from '../store/actionCreator'

export default function CompanyList() {
  const dispatch = useDispatch()
  const companies = useSelector(state => state.companies)
  useEffect(()=>{
    dispatch(getCompanies())
  }, [])
  if (!companies.length) {
    return <p>loading</p>
  }
  return (
    <div className='container d-flex justify-content-evenly flex-wrap'>
      {
        companies.map(company => {
          return(<Card company={company} key={company.id}/>)
        })
      }
    </div>
  )
}
