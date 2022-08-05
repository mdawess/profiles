import React from 'react'
import logo from '../../assets/logo/logo.png'
import Search from './Search'
import '../../App.css'

type NavProps = {
    setQuery: Function;
}

export default function Navbar(props: NavProps) {
    const { setQuery } = props;
  return (
    <div className='nav-main'>
        <div className='nav-container'>
            <img className='nav-logo' src={logo} alt='logo' width={50} height={50} />
            <Search setQuery={setQuery} />
        </div>
    </div>
  )
}
