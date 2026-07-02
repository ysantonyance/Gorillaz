/*
App.jsximport { useState } from 'react'
*/
/*import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'*/
import '/src/components/styles/Title.css'

function Title() {
/*
  const [count, setCount] = useState(0)
*/

    const buttonStyle = {
        border: 'rgba(255, 255, 255, 0.04)',
        borderRadius: '30px',
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '16px',
        margin: '0 16px',
        color: 'rgba(255, 255, 255, 0.7)',
        cursor: 'pointer',
    }

  return (
    <>
        <div className='buttons'>
            <button>Main Page</button>
            <button>Concert</button>
        </div>
      <div className="title-container">
        <div className="artist-picture">
            <img src="https://i.pinimg.com/originals/22/44/02/224402a79cc4464fe0d94902e45a0683.jpg" alt="pfp"/>
        </div>
        <h1>Gorillaz</h1>
        <p>
            альтернативный рок / арт-поп / хип-хоп / электронная музыка / трип-хоп
        </p>
      </div>
    </>
  )
}

export default Title
