import React, {useEffect, useState} from 'react';
import './App.scss'

function App() {

    const [active, setActive] = useState(false)

    const [scrolling, setScrolling] = useState(false);


    useEffect(() => {

        const header = document.querySelector('.header__container')
        const headerContain = () => header?.classList.contains('round')

        const onScroll = (e: any) => {
            let currentPosition = window.scrollY;
            const defaultOffset = 200

            if (currentPosition > defaultOffset && !headerContain()) {
                console.log(currentPosition)
                console.log(headerContain())
                header?.classList.add('round')
                setScrolling(true)
            } else if (currentPosition < defaultOffset && headerContain()) {
                header?.classList.remove('round')
                setScrolling(false)
            }
        }



        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrolling]);


    const clickThis = (e: any) => {
        e.preventDefault()
        const iconMenu = document.querySelector(".burger")
        if (iconMenu) {
            const menuHeader = document.querySelector(".header__menu")
            iconMenu.addEventListener("click", function (e) {
                setActive(!active)
                iconMenu?.classList.toggle("_active")
                menuHeader?.classList.toggle("_active")
            })
        }

    }

    return (
        <div className="wrapper">
            <header className="header">
                <div className="header__container">
                    <a href="#" className="header__logo">
                        <img src="logo.svg" alt="logo"/>
                    </a>
                    <nav className="header__menu menu">
                        <ul className="menu__list">
                            <li className="menu__item">Buy / Sell</li>
                            <li className="menu__item">Grow</li>
                            <li className="menu__item">Markets</li>
                            <li className="menu__item">Business</li>
                            <li className="menu__item">Support</li>
                        </ul>
                    </nav>
                    <div className="header__button">
                        <a href="#" className="button">Sign Up</a>
                        <a href="#" className="button button-gradient">Sign Up</a>
                        <a href="#" className="burger" onClick={(e) => clickThis(e)}>
                            <span></span>
                        </a>
                    </div>
                </div>
            </header>
            <div className="green__gradient">

            </div>
            <main className="main">

                <div className="main__container">
                    Content
                </div>
            </main>
            <footer className="footer">
                Footer
            </footer>

        </div>
    );
}

export default App;
