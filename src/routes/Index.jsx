import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import layout
import Admin from '../layouts/admin/Admin'

// import views
import AnalyticsDashboard from '../views/admin/AnalyticsDashboard'
import Login from '../views/auth/Login'

export default function RoutesPath() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' Component={Admin}>

                    {/* nested routes */}
                    <Route index Component={AnalyticsDashboard} />

                </Route>

                {/* route for login */}
                <Route path='/login' Component={Login} />
            </Routes>
        </Router>
    )
}
