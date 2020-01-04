const gridWidth = 3;
const gridHeight = 3;
const neighbourClass = "sasiaduje";
const containerSelector = ".container";
const tilesSelector = `${containerSelector} > div`;

function applyNeighbourClass(allElements, index) {
    if(index < 0 || index > (gridWidth * gridHeight - 1)) { return; }

    let current = $(allElements[index]);
    if(current.hasClass("pusty")) {
        current.addClass(neighbourClass);
    }
}


function identifyNeighbours(e) {
    let allElements = $(tilesSelector);
    allElements.removeClass(neighbourClass);

    let myPosition = allElements.index(e);

    let upIndex = myPosition - gridWidth;
    let downIndex = myPosition + gridWidth;
    let rightIndex = (myPosition + 1) % gridWidth != 0 ?  myPosition + 1 : -1;
    let leftIndex = myPosition % gridWidth != 0 ? myPosition - 1 : -1;

    applyNeighbourClass(allElements, upIndex);
    applyNeighbourClass(allElements, downIndex);
    applyNeighbourClass(allElements, rightIndex);
    applyNeighbourClass(allElements, leftIndex);
}

function shuffleDivs() {
    // debugger;
    const sorted = $(tilesSelector).sort((a,b) => .5 - Math.random());
    $(containerSelector).empty();
    sorted.appendTo($(containerSelector));
}

shuffleDivs();
$(tilesSelector).click(function(e) {
    identifyNeighbours(e.target);
});
