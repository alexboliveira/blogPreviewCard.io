//importando card BlogPreview

import BlogPreview from "../modules/blogPreview/blogPreview.js";
const blobPreview = new BlogPreview();



/*Css do #app*/

/*zerando as margens */
document.querySelector("body").style.margin = "0";
document.querySelector("body").style.padding = "0";


/*Alinhamentos padrões*/
document.querySelector("body > main").style.width = "100%";
document.querySelector("body > main").style.minHeight = "100vh";
document.querySelector("body > main").style.display = "flex";
document.querySelector("body > main").style.backgroundColor = "yellow";
document.querySelector("body > main").style.justifyContent = "center";
document.querySelector("body > main").style.alignItems = "center";
document.querySelector("body > main").style.flexWrap = "wrap";
document.querySelector("body > main").style.gap = "10px";
document.querySelector("body > main").style.fontFamily = "arial";