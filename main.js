const container = document.querySelector('.container');

createGrid(16); //create the default grid on page load

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
    
    hoverEffect();
}

function hoverEffect() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseover', (e) => {
            let randomColor = "#" + ((1<<24)*Math.random() | 0).toString(16)
            e.target.style.background = randomColor;
        } );
    })
}

function makeANewGrid(params) {
    userInput = prompt('Enter the size of the new grid:');

    if (userInput <= 100) {
        //clear the size error message if it exists on the page
        const gridSizeLimit = document.querySelector('.gridSizeLimit');
        if (gridSizeLimit) {
            gridSizeLimit.textContent = '';
        }
        
        container.textContent = ''; //clear the existing grid
        createGrid(userInput);

    } else { //if the user entered a number larger than 100
        const gridSizeLimit = document.querySelector('.gridSizeLimit');
        message = "Sorry, for performance reasons we can't display a grid of that size. Please enter 100 or less.";

        //if the message element already exists: edit it. Else: create it.
        if (gridSizeLimit) {
            gridSizeLimit.textContent = message;
        } else {
            const gridSizeLimit = document.createElement('p');
            gridSizeLimit.classList.add('gridSizeLimit');
            gridSizeLimit.textContent = message;
            newGridButton.after(gridSizeLimit);
        }

    }
}

//on button click, generate a new grid, size based on user input
const newGridButton = document.querySelector('.newGridButton');
newGridButton.addEventListener('click', makeANewGrid)