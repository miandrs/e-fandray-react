import '../styles/Header.css';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Themes";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const title = "e-fandray";
  const [isOpen, setOpen] = useState(false);

  // permet le changement de theme
  const [theme, setTheme] = useState("🌛");
  const themeToggler = () => {
    theme === "🌛" ? setTheme("🌞"): setTheme("🌛")
  }
  return(  
    <header className="col-lg-12">
      <div className="container-fluid">
        <div className="row border border-light">
          <nav className="navbar navbar-dark navbar-expand-lg" role="navigation" id="mainNav">
            <NavLink className="navbar-brand" activeClassName="is-active" to="/" id="logo">{title}</NavLink>
            <button className={`navbar-toggler ${isOpen && "is-active"}`} id="navigationbar" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            onClick={() => setOpen(!isOpen)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item"><input type="text" placeholder="recherche" className="search" id="global-search" /></li> 
                <li className="nav-item active"><NavLink className="nav-link" activeClassName="is-active" to="/" id="accueil">Accueil</NavLink></li>
                <li className="nav-item active"><NavLink className="nav-link" activeClassName="is-active" to="/profile" id="profil">Profil</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" activeClassName="is-active" to="/discussion" id="message">Message</NavLink></li> 
                <li className="nav-item">
                  <ThemeProvider theme={theme === "🌛" ? darkTheme: lightTheme}>
                    <>
                    <GlobalStyles/>
                    <div className="DarkMode">
                      <button className="btn btn-dark" id="setTheme" onClick={(themeToggler)}>{theme} </button>
                    </div>
                    </> 
                  </ThemeProvider>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
export { Header }