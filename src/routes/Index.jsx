import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import layout
import Admin from '../layouts/admin/Admin'

// import views
import AnalyticsDashboard from '../views/admin/AnalyticsDashboard'
import Login from '../views/auth/Login'
import EmployeeManagement from '../views/admin/EmployeeManagement'
import AttendanceTracker from '../views/admin/AttendanceTracker'
import LeaveRequest from '../views/admin/LeaveRequest'
import Profile from '../views/admin/Profile'
import PerformanceReports from '../views/admin/PerformanceReports'
import NotFound from '../views/auth/NotFound'

export default function RoutesPath() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' Component={Admin}>

                    {/* nested routes */}
                    <Route index Component={AnalyticsDashboard} />

                    <Route path='/employee-management' Component={EmployeeManagement} />
                    <Route path='/attendance-tracker' Component={AttendanceTracker} />
                    <Route path='/leave-request' Component={LeaveRequest} />
                    <Route path='/performance-reports' Component={PerformanceReports} />
                    <Route path='/profile' Component={Profile} />

                </Route>

                {/* route for login */}
                <Route path='/login' Component={Login} />

                {/* route for page not found */}
                <Route path='*' Component={NotFound} />
            </Routes>
        </Router>
    )
}
