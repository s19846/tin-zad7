$('.container > div').click(function (e) {
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
    }

    if (clickedBlock.classList.contains('ready')) {
        
    }
});