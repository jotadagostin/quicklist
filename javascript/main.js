const addButton = document.querySelector(".shopping-item button");
const itemInput = document.getElementById("item");
const itemsContainer = document.querySelector(".items");
const removeMessage = document.querySelector(".remove-item");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

itemsContainer.addEventListener("change", (event) => {
  if (event.target.type === "checkbox") {
    const clickedCheckbox = event.target;
    if (clickedCheckbox.checked) {
      const allCheckboxes = itemsContainer.querySelectorAll(
        'input[type="checkbox"]'
      );
      allCheckboxes.forEach((cb) => {
        if (cb !== clickedCheckbox) cb.checked = false;
      });
    }
  }
});

// function to add a item:
function addItem() {
  const itemName = itemInput.value.trim();
  if (itemName === "") return; //not add if the field is empty

  //   creating the HTML of the new item:
  const newItem = document.createElement("div");
  newItem.classList.add("item");

  newItem.innerHTML = `
  <input type="checkbox" />
  <label>${itemName}</label>
  <img src="assets/icons/trash.svg" alt="Delete" class="delete" />
`;

  //add the item to the list:
  itemsContainer.appendChild(newItem);

  //clean the input field after add the item:
  itemInput.value = "";

  //   show the message "item removed" for a while
  removeMessage.style.display = "none";
}

// Function to remove a item:

function removeItem(event) {
  if (event.target.classList.contains("delete")) {
    const itemToRemove = event.target.closest(".item");
    itemToRemove.remove();

    // show the messsage of removed item
    removeMessage.style.display = "flex";

    // hide the message after 2 seconds
    setTimeout(() => {
      removeMessage.style.display = "none";
    }, 2000);
  }
}

// add the item after click the buttom:
addButton.addEventListener("click", addItem);

// add the event after remove the item after click on the trash icon
itemsContainer.addEventListener("click", removeItem);
