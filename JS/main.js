// This JavaScript function is for a web application that lets users "Save for Later."
// It allows users to save items for future reference using their browser's.

// A function for storing something for later.
function saveForLater(item) {
  // Initialize a blank array or retrieve the items that were saved from local storage.
  const savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];

  // Include the item in the array of saved items.
  savedItems.push(item);

  // Restore localStorage with the updated savedItems array.
  localStorage.setItem("savedItems", JSON.stringify(savedItems));

  // Show the total number of items saved in an alert.
  alert(
    `Item saved! You now have ${savedItems.length} items in your "Save for Later" folder.`
  );
}

// LocalStorage retrieval function for saved items.
function getSavedItems() {
  const savedItemsJSON = localStorage.getItem("savedItems");
  return savedItemsJSON ? JSON.parse(savedItemsJSON) : [];
}

// Display saved items function.
function displaySavedItems() {
  const savedItems = getSavedItems();
  const savedList = document.getElementById("savedList"); // Retrieve the element for the saved items display.

  if (!savedList) {
    // Check if savedList is null
    return; // Exit the function if savedList doesn't exist on this page.
  }

  savedList.innerHTML = ""; // Clear the list.

  if (savedItems.length === 0) {
    savedList.textContent = "No saved items yet.";
  } else {
    savedItems.forEach((item, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${index + 1}. ${item}`;
      savedList.appendChild(listItem);
    });
  }
}

// When the page loads, call the displaySavedItems function.
document.addEventListener("DOMContentLoaded", () => {
  displaySavedItems();
});

// Reference
// https://www.w3schools.com/jsref/prop_win_localstorage.asp
// https://www.w3schools.com/js/js_function_definition.asp
// https://www.telerik.com/blogs/save-for-later-feature-in-forms-using-localstorage
// https://stackoverflow.com/questions/60609670/saving-data-from-inputs-to-file-for-later-viewing-in-js
// https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
// https://www.javascripttutorial.net/javascript-dom/javascript-domcontentloaded/
