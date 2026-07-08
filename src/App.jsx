import { useEffect, useState} from 'react'
import Search from './component/Search'

const App = () => {
  const [searchTerm, setSearchTerm] =useState(' ');
  return (
    <main>
      <div className="pattern"/>
      <div className="wrapper"> 
 <header>
  <img src="./hero-img.png" alt="Hero-banner" />
  <h1  className=" flex items-center justify-center">Find <span className="text-gradient"> movies</span> you'll Enjoy Without The Hassel</h1>
 </header>
  <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
  )
}

export default App
