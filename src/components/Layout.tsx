import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Header from './Header'

const Layout = () => {
    return (
        <main className="w-screen h-screen flex max-w-full">
            <SideBar />
            <section id="content" className="flex flex-col grow ">
                <Header />
                <div className="flex w-full h-full p-[30px] bg-comp-dark">
                    <Outlet />
                </div>
            </section>
        </main>
    )
}

export default Layout
