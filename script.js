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
$(".container > div").click(function(e) {
    let emptyBlock = $('.pusty').get(0);
    let clickedBlock = e.target;

    if (clickedBlock.classList.contains('sasiaduje')) {
        emptyBlock.style.backgroundColor = 'violet';
        emptyBlock.classList.add('ready');
        clickedBlock.classList.add('to-move');
    }

    if (!clickedBlock.classList.contains('sasiaduje')
        && !clickedBlock.classList.contains('pusty')) {
        emptyBlock.style.backgroundColor = 'white';
        $(".ready, .to-move").each(function (i, v) {
            v.classList.remove('ready');
            v.classList.remove('to-move');
        });
    }

    if (clickedBlock.classList.contains('ready')) {

    }
    // identifyNeighbours(e.target);
});