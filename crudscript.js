var btn = document.querySelector("#createbtn");

btn.addEventListener("click", function() {
    var tname = document.querySelector("#taskname").value.trim();
    var tdets = document.querySelector("#taskdets").value.trim();
    var tshow = document.querySelector(".output");

    if (tname && tdets) {
        var cardHTML = `<div class="card">
                            <h2 class="thead">${tname}</h2>
                            <p class="tdesc">${tdets}</p>
                            <button class="edit-btn">Edit</button>
                            <button class="delete-btn">Delete</button>
                        </div>`;
        tshow.insertAdjacentHTML('beforeend', cardHTML);

        document.querySelector("#taskname").value = "";
        document.querySelector("#taskdets").value = "";
    } else {
        alert("Please enter both task title and description.");
    }
});

document.querySelector(".output").addEventListener("click", function(event) {
    if (event.target.classList.contains("edit-btn")) {
        var card = event.target.closest(".card");
        var titleElement = card.querySelector(".thead");
        var descriptionElement = card.querySelector(".tdesc");

        if (titleElement.contentEditable !== 'true') {
            
            titleElement.contentEditable = true;
            descriptionElement.contentEditable = true;

            
            event.target.textContent = "Save";
        } else {
            
            titleElement.contentEditable = false;
            descriptionElement.contentEditable = false;

            
            event.target.textContent = "Edit";
        }
    }
});

function deleteTask(event) {
    var deleteButton = event.target;
    if (deleteButton.classList.contains("delete-btn")) {
        var card = deleteButton.closest(".card");
        card.remove();
    }
}

document.querySelector(".output").addEventListener("click", deleteTask);


