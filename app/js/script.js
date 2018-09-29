window.onload = init;
var fileOpen =false;
var hideSection=false;
function init() {
    var file = document.getElementById("file");
    file.onclick = elementsInFile;
    var hideAndShowElements=document.getElementById("hideElements");
    hideAndShowElements.onclick=hideAndShowTools;
    var linkOnMyGitRepository=document.getElementById("aboutProduct");
    linkOnMyGitRepository.onclick=repository;
}

function elementsInFile(eventObj) {
    var block = document.getElementById("inFile");
    block.style.border="1px solid #dcddde";
    block.style.boxShadow = "7px 7px 22px 0px rgba(143,143,143,1)";
    if (fileOpen){
        fileOpen=false;
        eventObj.target.style.background="#1979ca";
        block.style.display="none";
    } else {
        eventObj.target.style.background = "#1268b3";
        /*style for block*/
        block.style.display = "block";
        block.style.width = "20%";
        block.style.background = "#fbfcfd";
        fileOpen=true;
    }
};

function hideAndShowTools(eventObj) {
    var tools=document.getElementById("tools");
    var header=document.getElementsByTagName("header");
    if (hideSection){
        hideSection=false;
        tools.style.display="flex";
        eventObj.target.innerHTML="&#8743;";
        header[0].style.borderBottom="";
    } else{
        hideSection=true;
        tools.style.display="none";
        eventObj.target.innerHTML="&#8744;";
        header[0].style.borderBottom="1px solid #e2e3e4";
    }
};

function repository() {
    window.open('https://github.com/CreativeRusBear/drawApplication');
};