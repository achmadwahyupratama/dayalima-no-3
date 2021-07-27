import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home() {
  const history = useHistory()
  function seeCompanyList(e) {
    e.preventDefault()
    history.push('/companies')
  }
  function seeCommunityList(e) {
    e.preventDefault()
    history.push('/communities')
  }
  function seeEducationList(e) {
    e.preventDefault()
    history.push('/educations')
  }
  return (
    <div className='container d-flex justify-content-evenly'>
      <div className="card m-2" onClick={(e)=>seeCompanyList(e)}>
        <img src="https://this.deakin.edu.au/wp-content/uploads/2019/09/man-looking-frustrated.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">COMPANY</p>
        </div>
      </div>
      <div className="card m-2" onClick={(e)=>seeCommunityList(e)}>
        <img src="https://this.deakin.edu.au/wp-content/uploads/2019/09/man-looking-frustrated.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">COMMUNITY</p>
        </div>
      </div>
      <div className="card m-2" onClick={(e)=>seeEducationList(e)}>
        <img src="https://this.deakin.edu.au/wp-content/uploads/2019/09/man-looking-frustrated.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">EDUCATION</p>
        </div>
      </div>
    </div>
  )
}
