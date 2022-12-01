import {NavLink} from 'react-router-dom'

const NavBar = () => {
  
  
  return (
    
    <div>
    <div className='nav-text'>
  <NavLink to='/' className='zoom nav-link home'>Home</NavLink>
  <NavLink to='/about' className='zoom nav-links about'>About Me</NavLink>
  <NavLink to='/projects' className='zoom nav-links projects'>Projects</NavLink>
  <NavLink to='/resume' className='zoom nav-links resume'>Resume</NavLink>
  </div>
    <div className="header">
        <div className="header-text">Jeff Carroll</div>
        <h1 className='username-display'>Welcome</h1>
        <nav className="nav-container">
        </nav>
    </div>
</div>
  )
}

export default NavBar
