document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add");
  const shoppingList = document.getElementById("shopping-list");

  addButton.addEventListener("click", (e) => {
    e.preventDefault();
    const li = document.createElement("li");
    const type = document.getElementById("type");
    const namePut = document.querySelector("#name");
    li.setAttribute("data-type", type.value);
    li.innerText = namePut.value;
    shoppingList.appendChild(li);
  });
});
