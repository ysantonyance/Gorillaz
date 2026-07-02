/*
import { useState } from 'react'
*/
/*import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'*/
import '/src/components/styles/Description.css'

function Description() {
/*
  const [count, setCount] = useState(0)
*/

  return (
    <>
      <div className="description-container">
        <div className="biography">
            <h2>Биография: </h2>
            <hr className="separator" />
            <p>
                Gorillaz — английская виртуальная группа, основанная в 1998 году музыкантом Деймоном Албарном и художником Джейми Хьюлеттом. В состав группы входят четыре вымышленных участника: 2-D (вокал, клавишные, мелодика; вокал исполняет Албарн), Мурдок Никкалс (бас-гитара), Нудл (гитара, клавишные, бэк-вокал) и Рассел Хоббс (ударные). Их вселенная представлена в таких медиа, как музыкальные клипы, интервью, комиксы и короткометражные мультфильмы. В создании музыки Gorillaz принимали участие самые разные музыканты и приглашённые артисты, при этом Албарн остаётся единственным постоянным участником группы.
            </p>
        </div>


        <div className="albums">
            <h2>Альбомы:</h2>
            <hr className="separator" />
            <div className="albums-section">
                <div className="album-card">
                    <img src="https://vignette.wikia.nocookie.net/kong/images/f/f2/Gorillaz2001.jpg/revision/latest?cb=20180731180653" alt="Gorillaz"/>
                    <p className='album-name'>Gorillaz</p>
                    <p>2001 • Album</p>
                </div>
                
                <div className="album-card">
                    <img src="https://images.genius.com/109697c3d8385d3cebdc819eca82c31d.1000x1000x1.jpg" alt="G-Side"/>
                    <p className='album-name'>G-Sides</p>
                    <p>2001 • Album</p>
                </div>
                
                <div className="album-card">
                    <img src="https://i.pinimg.com/736x/4f/28/08/4f2808e4308d15e0a457456914fe74b7.jpg" alt="Lalka Come Home"/>
                    <p className='album-name'>Lalka Come Home</p>
                    <p>2002 • Album</p>
                </div>
                
                <div className="album-card">
                    <img src="https://media.senscritique.com/media/000004802973/source_big/Demon_Days.jpg" alt="Demon Days"/>
                    <p className='album-name'>Demon Days</p>
                    <p>2005 • Album</p>
                </div>
                
                <div className="album-card">
                    <img src="https://images.genius.com/b300828cf7ee734b7f68ef99c42f919b.1000x1000x1.png" alt="D-Sides"/>
                    <p className='album-name'>D-Sides</p>
                    <p>2007 • Album</p>
                </div>
                
                <div className="album-card">
                    <img src="https://img.apmcdn.org/7e9e5331c69452ecea7fbbfc35b6e51b329bb371/square/aaad7c-20120921-gorillaz-plastic-beach.jpg" alt="Plastic Beach"/>
                    <p className='album-name'>Plastic Beach</p>
                    <p>2010 • Album</p>
                </div>
                
                <div className="album-card">
                    <img src="https://images.genius.com/0ff71586a23af81e0141bd5716fda397.1000x1000x1.png" alt="The Fall"/>
                    <p className='album-name'>The Fall</p>
                    <p>2011 • Album</p>
                </div>
                
                <div className="album-card">
                    <img src="https://www.thebackpackerz.com/wp-content/uploads/2017/04/gorillaz-humanz-cover.jpg" alt="Humanz"/>
                    <p className='album-name'>Humanz</p>
                    <p>2017 • Album</p>
                </div>
                
                <div className="album-card">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/91%2Br32Mx1GL._AC_SL1500_.jpg" alt="The Now Now"/>
                    <p className='album-name'>The Now Now</p>
                    <p>2018 • Album</p>
                </div>
                
                <div className="album-card">
                    <img src="https://tse4.mm.bing.net/th/id/OIP.04gagnqRDYMmzR-Xdc7PLwHaHa?pid=Api" alt="Song Machine, Season One: Strange"/>
                    <p className='album-name'>Song Machine, Season One: Strange</p>
                    <p>2020 • Album</p>
                </div>
                
                <div className="album-card">
                    <img src="https://www.nme.com/wp-content/uploads/2022/08/gorillaz-cracker-island-album-artwork-2000x2000-1.jpg" alt="Cracker Island"/>
                    <p className='album-name'>Cracker Island</p>
                    <p>2023 • Album</p>
                </div>
                
                <div className="album-card">
                    <img src="https://blob.elporvenir.mx/images/2025/09/11/crop-w1067-h890-1-29a9b792-focus-min0.18-0.47-745-622.jpg" alt="The Mountain"/>
                    <p className='album-name'>The Mountain</p>
                    <p>2026 • Album</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Description
