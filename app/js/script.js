window.onload = init;
//var fileOpen =false;
//var openInsert=false;
var hideSection=false;
function init() {
    var body =document.querySelector('body');
    //закрытие модальных окон, при нажатии за их пределами
    body.addEventListener('click',function (eventObj) {
        if(!eventObj.target.closest('#file')){
            contentInHeader.classList.remove('active');
            contentInHeader.style.display='none';
        }
        if(!eventObj.target.closest('#insertText')){
            itemsInInsert.classList.remove('active');
            itemsInInsert.style.display='none';
        }
    });



    //события и перменные в header
    var file = document.querySelector('#file');
    var contentInHeader=document.querySelector('#inFile');
    contentInHeader.style.width='20%';

    /*элемент "Файл" (показ модального окна)*/
    file.addEventListener('click', function () {
        if (contentInHeader.classList.contains('active')){
            contentInHeader.classList.remove('active');
            contentInHeader.style.display='none';
        }else {
            contentInHeader.classList.add('active');
            contentInHeader.style.display='block';
        }
    });

    var hideAndShowElements=document.getElementById("hideElements");
    hideAndShowElements.onclick=hideAndShowTools;
    /*скрытие/показ панели инструментов*/
    function hideAndShowTools(eventObj) {
        var tools=document.getElementById("tools");
        var rightElementsOnHeader=document.getElementsByClassName("rightElements");
        var mainElement=document.getElementById("main");
        if (hideSection){
            hideSection=false;
            tools.style.display="flex";
            eventObj.target.innerHTML="&#8743;";
            rightElementsOnHeader[0].style.borderLeft="1px solid #e2e3e4";
            mainElement.style.backgroundColor="#f6f7f8";
            mainElement.style.borderBottom="none";
        } else{
            hideSection=true;
            tools.style.display="none";
            eventObj.target.innerHTML="&#8744;";
            mainElement.style.borderBottom="1px solid #e2e3e4";
            mainElement.style.backgroundColor="#fff";
            rightElementsOnHeader[0].style.borderLeft="none";
        }
    };

    var linkOnMyGitRepository=document.getElementById("aboutProduct");
    linkOnMyGitRepository.onclick=repository;
    /*переход на git-репозиторий*/
    function repository() {
        window.open('https://github.com/CreativeRusBear/drawApplication');
    };



    //события и перменные в section
    var insertText=document.getElementById("insertText");
    var itemsInInsert=document.querySelector('#smallItemsOfInsert');
    itemsInInsert.style.width="10%";
    /*элемент "Вставить" (показ модального окна)*/
    insertText.addEventListener('click', function () {
        if (itemsInInsert.classList.contains('active')){
            itemsInInsert.classList.remove('active');
            itemsInInsert.style.display='none';
        }else{
            itemsInInsert.classList.add('active');
            itemsInInsert.style.display='block';
        }
    });
};

/*function elementsInFile(eventObj) {
    var block = document.getElementById("inFile");
    block.style.border="1px solid #dcddde";
    block.style.boxShadow = "7px 7px 22px 0px rgba(143,143,143,1)";
    if (fileOpen){
        fileOpen=false;
        eventObj.target.style.background="#1979ca";
        block.style.display="none";
    } else {
        eventObj.target.style.background = "#1268b3";

        block.style.display = "block";
        block.style.width = "20%";
        block.style.background = "#fbfcfd";
        fileOpen=true;
    }
};*/
// function elementsOfInsert(eventObj) {
//     var insertBlock=document.getElementsByClassName("insert");
//     var block = document.getElementById("smallItemsOfInsert");
//     block.style.border="1px solid #dcddde";
//     block.style.boxShadow = "7px 7px 22px 0px rgba(143,143,143,1)";
//     if (openInsert){
//         openInsert=false;
//         eventObj.target.style.background="none";
//         block.style.display="none";
//     } else {
//         insertBlock[0].style.border="1px solid #abd4fe";
//         eventObj.target.style.borderTop="1px solid #abd4fe";
//         eventObj.target.style.backgroundColor = "#f1f7fe";
//         /*style for block*/
//         block.style.display = "block";
//         block.style.width = "10%";
//         block.style.background = "#fbfcfd";
//         openInsert=true;
//     }
// };