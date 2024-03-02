import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon từ module @fortawesome/react-fontawesome
import { faUser, faSearch  } from '@fortawesome/free-solid-svg-icons'; // Import biểu tượng từ Font Awesome

import './Header.scss';

export default function Header() {
  return (
    <>
      <header className="navbar navbar-expand-lg ">
        <div className="container header__container">
          <div className="header__brand navbar-brand">
            AJC News{' '}
          </div>
          <div className="header__nav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faUser} /> {/* Sử dụng FontAwesomeIcon với biểu tượng faUser */}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faSearch} /> {/* Sử dụng FontAwesomeIcon với biểu tượng faSearch */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
