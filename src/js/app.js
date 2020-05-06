import '../css/main.css'
import '../css/input-elements.css';

import { button, element }  from './dom-loader.js';

var status = "none";
button.onclick = (() => {
    if (status == "none") {
        element.style.display = "block";
        status = "block";
    } else {
        element.style.display = "none";
        status = "none";
    }

});