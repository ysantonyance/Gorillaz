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


  return (
    <>
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
