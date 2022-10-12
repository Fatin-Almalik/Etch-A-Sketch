const container = document.querySelector('.container');

function createGrid(gridSize) {
    let gridWidth = 600;

    for (let i = 0; i < gridSize; i++) {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col');
        for (let j = 0; j < gridSize; j++) {
            const box = document.createElement('div');

            box.classList.add('box');
            box.style.width = `${gridWidth / gridSize}px`;
            box.style.height = `${gridWidth / gridSize}px`;

            colDiv.appendChild(box);
            container.appendChild(colDiv);
        }
    }
}

createGrid(64);

//hover effect
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('mouseover', (e) => {
        e.target.style.background = 'red';
    } );
})
