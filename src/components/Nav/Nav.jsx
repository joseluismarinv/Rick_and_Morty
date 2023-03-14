import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css';
import { NavLink } from "react-router-dom";

export default function navigation ({onSearch}){
    return (
        <div className={style.div}> 
            <nav className={style.navigation}>
                <NavLink to='/'>
                    Log Out
                </NavLink>

                <NavLink to='/home'>
                    <span>Home</span>
                </NavLink>

                <NavLink to='/about'>
                    <span>About</span>
                </NavLink>
                <SearchBar onSearch={onSearch} />
            </nav>
        </div>
    )
}