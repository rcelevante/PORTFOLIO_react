import React, { useEffect } from 'react';

function Navigation(props) {

    const {
    } = props;

  return (
    <header className="flex-row px-1">
    <h2>
        <a href="/">Rochelle Ruiz</a>
    </h2>
    <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About me</a>
          </li>
          <li className="mx-2">
              <a href="#portfolio">Portfolio</a>
          </li>
          <li className="mx-2">
              <a href="../../assets/img/Resume.pdf">Resume</a>
          </li>
          <li className="mx-2">
              <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;