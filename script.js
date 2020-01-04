const gridWidth = 3;
const gridHeight = 3;
const neighbourClass = "sasiaduje";

function applyNeighbourClass(allElements, index) {
    if(index < 0 || index > (gridWidth * gridHeight - 1)) { return; }

    let current = $(allElements[index]);
    if(current.hasClass("pusty")) {
        current.addClass(neighbourClass);
    }
}

function identifyNeighbours(e) {
    let allElements = $(".container > div");
    allElements.removeClass(neighbourClass);

    let myPosition = allElements.index(e);

    let upIndex = myPosition - gridWidth;
    let downIndex = myPosition + gridWidth;
    let rightIndex = myPosition + 1;
    let leftIndex = myPosition - 1;

    applyNeighbourClass(allElements, upIndex);
    applyNeighbourClass(allElements, downIndex);
    applyNeighbourClass(allElements, rightIndex);
    applyNeighbourClass(allElements, leftIndex);
}

$(".container > div").click(function(e) {
    identifyNeighbours(e.target);
});