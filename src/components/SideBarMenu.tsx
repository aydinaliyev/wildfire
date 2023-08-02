import React from 'react'
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg'
import { ReactComponent as FireIcon } from 'assets/icons/fire.svg'
import './styles.css'
import { useAppSelector } from 'store/hooks'
import { selectReports } from 'store/AppSlice'
const SideBarMenu = () => {
    const data = useAppSelector(selectReports)
    return (
        <ul className="flex flex-col w-full	">
            <li className="listItem">
                <HomeIcon />
                <span className="listItem-text">Home</span>
            </li>
            <li className="listItem listItem-active">
                <FireIcon />
                <div className="listItem-container">
                    <span className="listItem-text">Wildfire Reports</span>
                    <div className="listItem-info">{data.length}</div>
                </div>
            </li>
        </ul>
    )
}

export default SideBarMenu
