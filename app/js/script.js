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
    if (hideSection){
        hideSection=false;
        tools.style.display="block";
        eventObj.target.innerHTML="&#8743;";
    } else{
        hideSection=true;
        tools.style.display="none";
        eventObj.target.innerHTML="&#8744;";
    }
};

function repository() {
    window.open('https://github.com/CreativeRusBear/drawApplication');
};