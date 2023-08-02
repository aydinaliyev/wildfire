import React from 'react'
import { ReactComponent as Logo } from '../assets/icons/logo.svg'
import SideBarMenu from './SideBarMenu'
const SideBar = () => {
    return (
        <section
            id="sideBar"
            className="flex flex-col w-[18.75vw] min-w-[270px] bg-comp-main shrink-0 border-r border-solid border-comp-light px-2.5 py-[17px] gap-[30px] justify-start items-center"
        >
            <Logo />
            <SideBarMenu />
        </section>
    )
}

export default SideBar
