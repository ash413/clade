import React from 'react'
import {feChevronDown} from 'react-icons';

const Navbar = () => {
  return (
    <div>
        <div>
            <p>Logo</p>
        </div>
        <div>
            <button>Jobs</button>
            <p>Messages</p>
            <p>Payments</p>
        </div>
        <div>
            {/*Bell icon */}
            <div>
                <img src="" alt="" />
                <feChevronDown />
            </div>
        </div>
    </div>
  )
}

export default Navbar