const dragElement1 = document.getElementById("dragElement1");
const dragElement2 = document.getElementById("dragElement2");
const dragElement3 = document.getElementById("dragElement3");
const dragElement4 = document.getElementById("dragElement4");
const dragElement5 = document.getElementById("dragElement5");
const dragElement6 = document.getElementById("dragElement6");
const dragElement7 = document.getElementById("dragElement7");
const dragElement8 = document.getElementById("dragElement8");
const dragElement9 = document.getElementById("dragElement9");
const dragElement10 = document.getElementById("dragElement10");
const dragElement11 = document.getElementById("dragElement11");
const dropZone1 = document.getElementById("dropZone1");
const dropZone2 = document.getElementById("dropZone2");
const dropZone3 = document.getElementById("dropZone3");
const dropZone4 = document.getElementById("dropZone4");
const dropZoneBack = document.getElementById("dropZoneBack");


function startDragging(evt) {
    evt.dataTransfer.setData("text", evt.target.id);
    
}

function allowDrop(evt) {
    evt.preventDefault();
}

function dropOnMe(evt) {
    const myID = evt.target.id;
    console.log("myID = " + myID);
    
    const idDrag = evt.dataTransfer.getData("text");
    console.log( idDrag );
    
    const dragBoks = document.getElementById(idDrag);
    const dropBoks = document.getElementById(myID);
    
    dropBoks.appendChild(dragBoks);
}

dragElement1.addEventListener("dragstart", startDragging);
dragElement2.addEventListener("dragstart", startDragging);
dragElement3.addEventListener("dragstart", startDragging);
dragElement4.addEventListener("dragstart", startDragging);
dragElement5.addEventListener("dragstart", startDragging);
dragElement6.addEventListener("dragstart", startDragging);
dragElement7.addEventListener("dragstart", startDragging);
dragElement8.addEventListener("dragstart", startDragging);
dragElement9.addEventListener("dragstart", startDragging);
dragElement10.addEventListener("dragstart", startDragging);
dragElement11.addEventListener("dragstart", startDragging);

dropZone1.addEventListener("dragover", allowDrop);
dropZone2.addEventListener("dragover", allowDrop);
dropZone3.addEventListener("dragover", allowDrop);
dropZone4.addEventListener("dragover", allowDrop);
dropZoneBack.addEventListener("dragover", allowDrop);
dropZone1.addEventListener("drop", dropOnMe);
dropZone2.addEventListener("drop", dropOnMe);
dropZone3.addEventListener("drop", dropOnMe);
dropZone4.addEventListener("drop", dropOnMe);
dropZoneBack.addEventListener("drop", dropOnMe);