for (element of document.querySelectorAll('.arrow-container')) {
    element.addEventListener('click', function () {
        if (this.children[0].classList.value.includes('off')) {
            this.children[0].classList.remove('arrow-off');
            this.children[0].style.transform = 'rotate(-90deg)';
            for (element of this.parentElement.parentElement.querySelectorAll('.hiden')) {
                element.classList.add('active');
                element.classList.remove('hiden');
                document.querySelector('footer').style.top = "166em";
                if (document.querySelectorAll('#tooltip').length) {
                    document.querySelector('#tooltip').style.top = document.querySelector('#licenses').offsetTop - 20 + 'px';
                }
            }
        } else {
            this.children[0].classList.add('arrow-off');
            this.children[0].style.transform = 'rotate(90deg)';
            for (element of this.parentElement.parentElement.querySelectorAll('.active')) {
                element.classList.add('hiden');
                element.classList.remove('active');
                document.querySelector('footer').style.top = "150em";
                if (document.querySelectorAll('#tooltip').length) {
                    document.querySelector('#tooltip').style.top = document.querySelector('#licenses').offsetTop - 20 + 'px';
                }
            }
        }

    })
}

// add checked
for (element of document.querySelectorAll('#licenses li a')) {
    element.addEventListener('click', function () {
        if (this.parentElement.children[0].classList.value != 'img-checked') {
            elementImg = document.createElement('img');
            elementImg.setAttribute('src', 'img/checked.png');
            elementImg.setAttribute('class', 'img-checked');
            this.parentElement.prepend(elementImg);
            this.parentElement.setAttribute('style', 'position: relative; left: -22px;');
        }
    })
}
//modal
var createElementPopUp = function () {
    element = document.createElement('div');
    element.setAttribute('id', 'tooltip');
    element.innerHTML = '<p style="margin: 0; font-family: Lato;font-weight: 600;font-size: 12px;line-height: 13px; letter-spacing: 0.2px; cursor: default;">Clique para visualizar as certificações.</p>';
    element.setAttribute('style', `margin: 0; opacity: 1; z-index: 1; top: ${document.querySelector('#licenses').offsetTop - 20}px;  text-align: center; width: 147px; height: 27px; display: inline-block; left: 23.5em; padding: 10px 15px; background-color: white; border-radius: 10px; position: absolute; box-shadow: 0 2px 7px rgb(0 0 0 / 20%)`);
    return (element);
}

for (var i = 0; i < document.querySelectorAll('#licenses a').length; i++) {
    document.querySelectorAll('#licenses a')[i].setAttribute('onmouseover', 'openModal()');
}
openModal = () => {
    for (var i = 0; i < document.querySelectorAll('#licenses a').length; i++) {
        document.querySelectorAll('#licenses a')[i].removeAttribute('onmouseover');
    }
    document.querySelector('#licenses').prepend(createElementPopUp());
    setTimeout(function () {
        document.querySelector('#tooltip').remove();
    }, 10000);
}
//coopy
copy = () => {
    document.querySelector('#input-url').value = window.location.href;
    document.querySelector('#input-url').select();
    document.execCommand('copy');
    document.querySelector('#linkCopy').style.opacity = 1;
    setTimeout(function () {
        document.querySelector('#linkCopy').style.opacity = 0;
    }, 1000);
}
openPrintOut = () => {
    content = `<style>
    body{
        background-image: url('img/fundo.jpg');
        margin: 0;
    }
    section{
        background-color: snow;
        padding: 10px;
        margin-bottom: 20px;
        border-radius: 10px;
        filter: brightness(0.87);
    }
    
    #main-container {
        height: 50em;
        margin: 5em 2em;
    }
    
    #img-profile{
        margin-top: 15px;
        max-width: 200px;
        max-height: 200px;
        border-radius: 15px;
    }
    
    #user-information {
        padding: 10px 0;
        min-width: 310px;
        background-color:rgb(26 26 94 / 60%);
        width: 20%;
        display: inline-block;
        text-align: center;
        border-radius: 10px;
        border: solid 1px;
    }
    
    #language-info span:nth-child(3) {
        color: black;
    }
    
    #language-info {
        text-align: left;
        margin-bottom: 25px;
    }
    
    #language-info span {
        margin: 5px 0 5px 18%;
    }
    
    #language-info h3 {
        text-align: center;
    }
    
    li {
        list-style: none;
        margin: 5px;
    }
    
    a{
        text-decoration: none;
    }
    
    ul {
        text-align: initial;
        padding-left: 20px;
    }
    
    #user-information li img {
        height: 22px;
        position: relative;
        top: 4px;
        left: -5px;
    }
    
    #language-description {
        display: block;
    }
    
    #progress-bar {
        height: 10px;
        width: 70%;
        background-color: aqua;
        margin: auto;
        border-radius: 10px;
        margin-top: 5px;
    }
    
    #progress-bar-active {
        height: 10px;
        width: 25%;
        background-color: white;
        border-radius: 10px;
    }
    
    #email label:nth-child(3) {
        position: relative;
        left: 22px;
        top: 5px;
    }
    
    #user-portfolio{
        display: inline-block;
        position: absolute;
        width: 60%;
        height: 130em;
        padding-left: 1.6em;
        min-width: 600px;
    }
    
    #user-portfolio h1{
        text-align: center;
    }
    
    #user-portfolio img{
        height: 30px;
        position: relative;
        top: 3px;
        left: 6px;
    }
    
    #user-portfolio h3{
        display: inline-block;
        margin-bottom: 0;
        margin-left: 0.7em;
    }
    
    #user-portfolio div{
        margin: 0 2.5em 0 3em
    }
    h4{
        margin-bottom: 0;
    }
            
    .arrow-container{
        display: none;
    }   
    
    a{
        color: black;
    }
    
    #licenses-hiden{
        margin: 0 !important;
    }
    #licenses a:hover{
        background-color:#aa91cf80;
        font-size: 16.5px;
    }
    
    li .img-checked{
        height: 17px !important;
        padding-right: 5px;
        display: inline-block;
        transform: translateX(-6px);
    }

    #citation h3,#citation span{
        font-family: papyrus;
    }
    
    
    #citation{
        display: inline-block;
        position: absolute;
        right: 8em;
        top: 3em;
    }
    
    #citation h3{
        margin-bottom: 0px;
    }
    
    #citation span{
        position: absolute;
        right: 0em;
    }
    
    h1,h3,h4,span,a,p{
        font-family: Rockwell Extra Bold;
        line-height: 1.2;
    }
    
    #container-user{
        min-width: 310px;
        width: 20%;
        display: inline-block;
        text-align: center;
    }
    #linkedin label a, #linkCopy, #dowload button,  #follow-me-on-linkedin, footer, #share{
        display: none;
    }
    #linkedinUrl{
        ddisplay: inline-block !important;
    }
                </style>`;
                content += document.getElementsByTagName('body')[0].innerHTML,
        viewPrintOut = window.open('about:blank');
console.log(content)
    viewPrintOut.document.write(content);
    viewPrintOut.window.print();
    viewPrintOut.window.close();
}