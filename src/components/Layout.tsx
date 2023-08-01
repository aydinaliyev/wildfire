import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const Layout = () => {
    return (
        <main className="w-screen h-screen flex ">
            <SideBar />
            <section id="content" className="flex grow bg-red-500">
                <Outlet />
            </section>
        </main>
    )
}

export default Layout
