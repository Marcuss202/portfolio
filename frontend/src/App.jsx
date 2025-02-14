import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage.jsx'
import About from './Pages/About.jsx'
import Projects from './Pages/Projects.jsx'
import Portfolio from './Pages/Portfolio.jsx'
import Contact from './Pages/Contacts.jsx'
import ProjectDetail from './components/ProjectDetail.jsx'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
