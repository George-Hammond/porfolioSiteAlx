let liChange = document.querySelector("main > .about-me-section > .intro-tag-line > #name");

function changeOnOver (){
liChange.style.borderBottom= '3px solid #59cdff';
liChange.style.transition= 'all .35s ease-in-out';
}
liChange.onmouseover = changeOnOver;

function changeOutOver (){
    liChange.style.borderBottom= '#2b2b2b';
    liChange.style.color = 'white';
    }

liChange.onmouseout = changeOutOver;