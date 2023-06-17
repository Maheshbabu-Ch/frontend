import React from 'react'
import Navleft from './Navleft'
import Navright from './Navright'
import { Link } from 'react-router-dom'

export default function Profile() {
  return (
    <div className='homep'>
        <Navleft/>
        <div className='navmid profile'>
            <div id="head">
                <Link to="/home"><svg id="back" viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg></Link>
                <h2>flash</h2>
            </div>
        </div>
        <Navright/>
    </div>
  )
}
