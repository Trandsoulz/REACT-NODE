import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/signup" element={<Signup />} />

            <Route path="/login" element={<Login />} />

            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    )
}

export default Routing