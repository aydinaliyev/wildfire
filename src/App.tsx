import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Reports from 'pages/Reports/Reports'
import NewReport from 'pages/NewReport/NewReport'

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Reports />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/reports/new" element={<NewReport />} />
                <Route path="*" element={<Reports />} />
            </Route>
        </Routes>
    )
}

export default App
