import './NavBar.css'
import { About } from '../Pages/About';
import { Contact } from '../Pages/Contact';
import { Home } from '../Pages/Home';
import { Profile } from '../Pages/Profile';
import { Task } from '../Pages/Task';
import { SearchBar } from './SearchBar';

 export function Navbar(){

    return (
        <>
        <div className='Navbar'>
            <div className='mainPages'>
                <Home/>
                <About/>
                <Contact/>
                <Task/>
                <SearchBar/>
            </div>
            <div className='profile'>
                <Profile/>
            </div>
        </div>
        </>
    )

}