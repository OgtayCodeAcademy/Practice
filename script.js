let Base_URL = "https://northwind.vercel.app/api/suppliers";
let List = document.getElementById("list");

fetch(Base_URL)
  .then((response) => response.json())
  .then((suppliers) => {
    suppliers.forEach((suplier) => {
      List.innerHTML += `
        <li>${suplier.companyName}</li>
        <button id="${suplier.id}" class="delete-button">Add to Api</button>
        <button class="add-button">Add to Api</button>
        <button class="edit-button">Edit</button>`;


    });
    let delete_buttons = document.querySelectorAll(".delete-button");
    delete_buttons.forEach((button) => {
      button.addEventListener("click", function () {
        fetch(`${Base_URL}/${this.id}`, {
          method: "DELETE",
        });
      });
    });
    let add_buttons = document.querySelectorAll(".add-button");
    add_buttons.forEach((button) => {
      button.addEventListener("click", function () {
        fetch(`${Base_URL}`, {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            companyName: "Fix my bugs",
            contactName: "Oktay elave eledi"
          }),
        });
      });
    });
    let edit_buttons = document.querySelectorAll(".edit-button");
    edit_buttons.forEach((button) => {
      button.addEventListener("click", function () {
        fetch(`${Base_URL}/${this.previousElementSibling.previousElementSibling.id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            companyName: "Fix my bugs",
            contactName: "Oktay elave eledi"
          }),
        });
      });
    });
  });
