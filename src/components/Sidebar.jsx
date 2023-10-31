import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Users from '../pages/Users';
import Movies from '~/pages/Movies';
import Showtime from '~/pages/Showtimes';
import Tickets from '~/pages/Tickets';

const Sidebar = () => {
    return (
        <Router>
            <div className="bg-gray-200 w-64 h-screen shadow-lg">
                <div className="flex items-center justify-center mt-10">
                    <h1 className="text-3xl font-bold text-gray-800 uppercase">Dashboard</h1>
                </div>
                <nav className="mt-10">
                    <NavLink to="/" className="text-center block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white mt-2 focus:bg-blue-500 focus:text-white mt-2">Users</NavLink>
                    <NavLink to="/movies" className="text-center block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white mt-2 focus:bg-blue-500 focus:text-white mt-2">Movies</NavLink>
                    <NavLink to="/showtimes" className="text-center block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white mt-2 focus:bg-blue-500 focus:text-white mt-2">Show Times</NavLink>
                    <NavLink to="/tickets" className="text-center block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white mt-2 focus:bg-blue-500 focus:text-white mt-2">Tickets</NavLink>
                </nav>
            </div>
            <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/showtimes" element={<Showtime />} />
                <Route path="/tickets" element={<Tickets />} />
            </Routes>
        </Router>
    );  
};

export default Sidebar;