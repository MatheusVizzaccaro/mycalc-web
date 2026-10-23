import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

function App() {
  return (
    <div className='flex flex-col p-3'>
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  )
}

export default App
