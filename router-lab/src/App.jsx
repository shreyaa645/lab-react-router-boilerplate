import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import {Link, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <nav className='nav-bar'>
        <div className='logo-div'>
        <img src="https://camo.githubusercontent.com/7798ac9816844b12782b0a86e183dd4029f2070daf2dc3fcd77a1c1138d2ffd7/68747470733a2f2f73332e61702d736f7574682d312e616d617a6f6e6177732e636f6d2f6b616c76692d656475636174696f6e2e6769746875622e696f2f66726f6e742d656e642d7765622d646576656c6f706d656e742f4b616c7669756d2d4c6f676f2e706e67" alt="logo" className='logo'/>
        </div>
        <Link className='home' to= '/'>Home</Link>
        <Link className='about' to='about'>About</Link>
        <Link className='contact' to='Contact'>Contact</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}



export default App
