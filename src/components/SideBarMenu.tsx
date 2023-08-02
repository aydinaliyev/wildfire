import React from 'react'
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg'
import { ReactComponent as FireIcon } from 'assets/icons/fire.svg'
import './styles.css'
const SideBarMenu = () => {
    return (
        <ul className="flex flex-col w-full	">
            <li className="listItem">
                <HomeIcon />
                <span className="listItem-text">Home</span>
            </li>
            <li className="listItem">
                <FireIcon />
                <div className="listItem-container">
                    <span className="listItem-text">Wildfire Reports</span>
                    <span className="listItem-info">12</span>
                </div>
            </li>
        </ul>
    )
}

export default SideBarMenu
