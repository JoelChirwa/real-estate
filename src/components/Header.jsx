import { FaSearch } from 'react-icons/fa'   
import { Link } from 'react-router-dom'

const Header = () => {
return (
    <header className="bg-slate-200 shadow-sm">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
            <Link to='/'>
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                <span className="text-red-400">265</span>
                <span className="text-orange-600 ml-2">Homes</span>
            </h1>
            </Link>

            <form action="" className="bg-slate-100 rounded p-2 flex items-center">
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent outline-none w-32 sm:w-64"
                />
                <FaSearch className="text-gray-600" />
            </form>

            <ul className="flex space-x-4 text-sm sm:text-base font-medium"> 
                <Link to='/'>
                <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
                </Link>
                <Link to='/about'>
                <li className="hidden sm:inline text-slate-700 hover:underline">About</li>
                </Link>
                <Link to='/signin'>
                <li className="hidden sm:inline text-slate-700 hover:underline">Sign In</li>
                </Link>
            </ul>
        </div>
    </header>
)
}

export default Header
