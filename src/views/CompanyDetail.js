import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function CompanyDetail() {
  const {companyId} = useParams()
  const [company, setCompany] = useState(null)
  const companies = useSelector(state=> state.companies)
  useEffect(()=>{
    setCompany(companies.find(company => company.id === +companyId))
  },[])
  if (!company) {
    return <p>fetching data</p>
  }
  return (
    <div className="container d-flex-column justify-content-between detail">
      <img src={company.pic_url} className="col-9"  alt="..."/>
      <h1>{company.name}</h1>
      <p>{company.detail}</p>
    </div>
  )
}
