import logo from './logo.svg';
import './App.css';
import Firstside from './Herosection';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';
import Skills from './Skills';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Technologies from './Technologies';
import Header from './Header';
import { useState } from 'react';

function App() {
  const[menu , setMenu] = useState(false);
  const displayMenu = () =>{
    menu===false? setMenu(true) : setMenu(false)
}

const [projects, setProjects]= useState(false)
const displayprojects= () =>{
  projects===false ? setProjects(true) : setProjects(false)
}
  return (
    <main className='main' id='app'>
      <Header menu={menu} setMenu={setMenu} displayMenu={displayMenu}/>
      <Nav menu={menu} setMenu={setMenu} displayMenu={displayMenu} />
      <Firstside/>
      {/*<Skills/>*/}
      <Projects projects={projects} setProjects={setProjects} displayProjects={displayprojects}/>
      <Technologies/>
      <About/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;
