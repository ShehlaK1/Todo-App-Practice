import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
        <nav className='flex gap-4 mb-4'>
            <Link to="/" className='text-blue-500 hover:text-blue-700'>All</Link>
            <Link to="/?todos=active" className='text-blue-500 hover:text-blue-700'>Active</Link>
            <Link to="/?todos=completed" className='text-blue-500 hover:text-blue-700'>Completed</Link>

        </nav>
  )
}

export default Navbar