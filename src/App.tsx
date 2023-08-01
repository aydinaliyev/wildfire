import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                {/* <Route path="/" element={<Main />} />
            <Route path="assignments" element={<InferCabularyAssignments />} /> */}
            </Route>
        </Routes>
    )
}

export default App
