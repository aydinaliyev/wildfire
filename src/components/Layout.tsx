import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Header from './Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Layout = () => {
    return (
        <main className="w-screen h-screen flex max-w-full overflow-hidden min-w-[800px] min-h-[500px]">
            <SideBar />
            <section id="content" className="flex flex-col grow ">
                <Header />
                <div className="flex w-full h-full p-[30px] bg-comp-dark ">
                    <Outlet />
                </div>
            </section>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </main>
    )
}

export default Layout
