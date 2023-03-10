import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css';

export default function navigation ({onSearch}){
    return (
        <div className={style.div}> 
            <nav className={style.navigation}>
                <SearchBar onSearch={onSearch} />
            </nav>
        </div>
    )
}