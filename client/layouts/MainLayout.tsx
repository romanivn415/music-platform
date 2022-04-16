import React, {FC, useState} from 'react'
import styles from './mainlayout.module.scss'
import { IoPerson, IoSearchOutline, IoDisc, IoRadio, IoTrendingUp, IoHeartCircle, IoAlbums, IoMic, IoClose } from "react-icons/io5";
import { RiPlayListFill } from 'react-icons/ri'
import MiniPlayer from '../components/MiniPlayer';

const MainLayout: FC = ({children}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isSearching, setIsSearching] = useState<boolean>(false)
    const cssclasses = {
        isSearching: isSearching ? styles['active'] : ''
    }

    return (
    <div>
        <header className={styles['header'] + ' container'}>
            <nav className={styles['burger']} style={{left: isOpen ? '0px' : '-220px'}}>
                <div className={styles['section']}>
                    <h6>Browse</h6>
                    <ul>
                        <li><a><IoDisc/>Discover</a></li>
                        <li><a><IoTrendingUp/>Charts</a></li>
                        <li><a><IoRadio/>Radio</a></li>
                    </ul>  
                </div>
                <div className={styles['section']}>
                    <h6>Library</h6>
                    <ul>
                        <li><a><IoHeartCircle/>Favorite</a></li>
                        <li><a><IoAlbums/>Albums</a></li>
                        <li><a><IoMic/>Artists</a></li>
                        <li><a><RiPlayListFill/>Playlists</a></li>
                        <li><a><IoRadio/>Radio stations</a></li>
                    </ul>  
                </div>
            </nav>
            <div className={styles['menu']}>
                    <button onClick={(): void => setIsOpen(!isOpen)} className={styles['toggle-button']}>
                        <span/>
                        <span/>
                        <span/>
                    </button>
                    <a className={styles['logo']}>
                        LOGO
                    </a>   
            </div>
            <div className={`${styles['search']} ${cssclasses.isSearching}`}>
                <input type='text' placeholder='Search...' className={`${styles['search']}`}/>
                <button className={styles['close-button']} onClick={(): void => setIsSearching(!isSearching)}>
                    <IoClose/>  
                </button>
                <button className={styles['search-button']} onClick={(): void => setIsSearching(!isSearching)}>
                    <IoSearchOutline/>
                </button>
            </div>
            <div className={styles['actions']}>
                <button className={styles['login-button']}>Log in</button>
                <button className={styles['signup-button']}>
                    <IoPerson/>Sing Up
                </button>
            </div>
        </header>
        {
            children
        }
        <MiniPlayer/>
    </div>
  )
}

export default MainLayout