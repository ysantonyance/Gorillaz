import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
/*
import App from './App.jsx'
*/
import Title from "./components/Title.jsx";
import Description from "./components/Description.jsx";
import Player from "./components/Player.jsx";

const myTracks = [
    {
        name: 'Clint Eastwood',
        src: '/music/ClintEastwood.mp3'
    },
    {
        name: 'Some Kind of Nature (feat. Lou Reed)',
        src: '/music/SomeKindOfNature.mp3'
    },
    {
        name: 'Pac-Man (feat. ScHoolboy Q)',
        src: '/music/PacMan.mp3'

    },
    {
        name: 'Rhinestone Eyes',
        src: '/music/RhinestonesEyes.mp3'

    },
    {
        name: 'New Gold (feat. Tame Impala и Bootie Brown)',
        src: '/music/NewGold.mp3'
    },
    {
        name: 'Cracker Island (feat. Thundercat)',
        src: '/music/CrackerIsland.mp3'
    }
]
const popularTracks = [
    {
        name: 'Feel Good Inc.',
        src: '/music/FeelGood.mp3'
    },
    {
        name: 'Clint Eastwood',
        src: '/music/ClintEastwood.mp3'
    },
    {
        name: 'On Melancholy Hill',
        src: '/music/OnMelancholyHill.mp3'
    },
    {
        name: 'DARE (feat. Shaun Ryder и Roses Gabor)',
        src: '/music/DARE.mp3'
    },
    {
        name: 'Rhinestone Eyes',
        src: '/music/RhinestonesEyes.mp3'
    },
    {
        name: 'She\'s My Collar (feat. Kali Uchis)',
        src: '/music/SheMyCollar.mp3'
    }
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
{/*    <App />*/}

    <Title />
    <Description />
    <Player title={'Популярные'} tracks={popularTracks} />
    <Player title={'Мои Любимые'} tracks={myTracks} />
  </StrictMode>,
)
