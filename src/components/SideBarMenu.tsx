import React from 'react'
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg'
import { ReactComponent as FireIcon } from 'assets/icons/fire.svg'
import './styles.css'
const SideBarMenu = () => {
    return (
        <ul className="flex flex-col w-full	">
            <li className="listItem">
                <HomeIcon />
                <span>Home</span>
            </li>
            <li className="listItem">
                <FireIcon />
                <span>Wildfire Reports</span>
            </li>
        </ul>
    )
}

export default SideBarMenu
