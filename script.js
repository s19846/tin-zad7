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

function clearBufferClasses() {
    $(".ready, .to-move").each(function (i, v) {
        v.classList.remove('ready');
        v.classList.remove('to-move');
    });
}

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
        clearBufferClasses();
    }

    if (clickedBlock.classList.contains('ready')) {
        let toMoveBlock = $('.to-move');
        let emptyBlock = $('.ready');
        let blockBefore = toMoveBlock.before();
        toMoveBlock.insertAfter(emptyBlock);
        emptyBlock.insertAfter(blockBefore);
    }
    // identifyNeighbours(e.target);
});