import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Header() {
  const history = useHistory()
  function goHome(e){
    e.preventDefault()
    history.push('/')
  }
  return (
    <nav className="navbar">
      <div className="container" style={{backgroundColor: '#E24E43'}}>
        <a className="navbar-brand" onClick={(e)=>goHome(e)}>
          <img src="https://static.klob.id/img/klob_logo_white.png" alt=""  height="24"/>
        </a>
      </div>
    </nav>
  )
}
