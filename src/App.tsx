import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Reports from 'pages/Reports/Reports'

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Reports />} />
                <Route path="/reports" element={<Reports />} />
                {/* <Route path="/" element={<Main />} />
            <Route path="assignments" element={<InferCabularyAssignments />} /> */}
            </Route>
        </Routes>
    )
}

export default App
