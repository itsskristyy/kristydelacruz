import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import './index.css'

function App() {
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <Navbar/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App
