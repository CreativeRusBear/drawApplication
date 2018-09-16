window.onload = init;
var fileOpen =false;
function init() {
    var file = document.getElementById("file");
    file.onclick = elementsInFile;
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

}