const mainButton = document.querySelector('button');
mainButton.innerHTML = 'Add';

let editMode = false;
let currentEditItem = null;

// Create list item
function addItem() {
    // Get input element
    const listDOM = document.querySelector('input[name=list]');
    // Get error notification element
    const conditionDOM = document.getElementById('condition');
    
    // .trim() for clear blank space
    if (listDOM.value.trim() !== '') {
        // Hide error if value is not empty
        conditionDOM.style.display = 'none';
        // Create HTML
        if (editMode && currentEditItem) {
            // Update item in edit mode
            currentEditItem.querySelector('p').textContent = listDOM.value;
            mainButton.innerHTML = 'Add';
            editMode = false;
            currentEditItem = null;
        } else {
            // Create new item
            const todo = document.createElement("li");
            todo.classList.add('todo');

            const content = document.createElement("p");
            content.textContent = listDOM.value;

            const edi = document.createElement("button");
            edi.classList.add('bt', 'edi');
            edi.textContent = 'Edit';

            edi.addEventListener('click', (event) => {
                const todoItem = event.target.parentElement;
                listDOM.value = content.textContent;
                editItem(todoItem);
            });

            const del = document.createElement("button");
            del.classList.add('bt', 'del');
            del.textContent = "Delete";

            del.addEventListener('click', (event) => {
                const todoItem = event.target.parentElement;
                todoItem.remove();
            });

            todo.appendChild(content);
            todo.appendChild(edi);
            todo.appendChild(del);
            document.getElementById("listItem").appendChild(todo);
        }
        
        // Clear input value
        listDOM.value = '';
        
    } else {
        // Show error if value is empty
        conditionDOM.style.display = 'block';
    }
}

function editItem(item) {
    mainButton.innerHTML = 'Update';
    editMode = true;
    currentEditItem = item;
}

// Event listener for main button
mainButton.addEventListener('click', addItem);