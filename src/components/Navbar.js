// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


// function shownav() {
//     var show = document.querySelector('.nav4');
//     show.style.display = 'flex';
// }

// function hidenav() {
//     var hide = document.querySelector('.nav4');
//     hide.style.display = 'none';
// }

function Navbar() {

    const shownav = () => {
        const show = document.querySelector('.nav4');
        if (show) {
          show.style.display = 'flex';
        }
      };
    
      const hidenav = () => {
        const hide = document.querySelector('.nav4');
        if (hide) {
          hide.style.display = 'none';
        }
      };



  return (
    <nav class="nav flecx  ">
        <div class="nav1 flecx">
        <img className="navimg flecx" src="/2.png" alt="Navbar Logo" />
            <div class="nav11 flecx">
                <p>Quiz App</p>
            </div>
        </div>
        <div class="nav2 flecx">
            <ul class="flecx">
                <li class="flecx"><a class="flecx" href="https://joshibhaskar684.github.io/bhaskar_joshi/" target="_blank" rel="noopener noreferrer">Home</a></li>
                <li class="flecx"><a class="flecx" Link to="/footer">Project</a></li>
                <li class="flecx"><a class="flecx" Link to="joshibhaskar.com" > Portfolio</a></li>
                <li class="flecx"><a class="flecx" href="#sec4"> Skill</a></li>
                <li class="flecx"><a class="flecx" href="#sec5">Contact</a></li>

            </ul>
        </div>
        <div class="nav3" onClick={shownav}>
            <span class="material-symbols-outlined">
                menu
            </span>

        </div>
        <div class="nav4 border">
            <ul>
                <li><a href="#body">Home</a></li>
                <li><a href="#sec3">Project</a></li>
                <li><a href="#sec1"> Portfolio</a></li>
                <li><a href="#sec4"> Skill</a></li>
                <li><a href="#sec5">Contact</a></li>
                <div class="na" onClick={hidenav}>
                    <span class="material-symbols-outlined">
                        dangerous
                    </span>
                </div>
            </ul>

        </div>

    </nav>

    
  );
}

export default Navbar;
