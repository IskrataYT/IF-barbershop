import { BrowserRouter } from 'react-router-dom'
import Home from './components/pages/home'
import About from './components/pages/about'
import { Routes, Route } from 'react-router'
import SignIn from './components/pages/signin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
