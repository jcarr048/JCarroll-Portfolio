import './index.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'

const App = () => {
  return (
    <div className="App">
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
