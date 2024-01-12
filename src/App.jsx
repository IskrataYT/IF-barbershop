import { BrowserRouter } from 'react-router-dom'
import Home from './components/pages/home'
import About from './components/pages/about'
import { Routes, Route } from 'react-router'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
