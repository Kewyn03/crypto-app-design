import React, {useState} from 'react';
import './App.scss'

function App() {

    const [active,setActive] = useState(false)

    const clickThis = (e:any) => {
        e.preventDefault()
        const iconMenu = document.querySelector(".burger")
        if(iconMenu) {
            const menuHeader = document.querySelector(".header__menu")
            iconMenu.addEventListener("click", function (e) {
                setActive((prev) => !prev)
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
