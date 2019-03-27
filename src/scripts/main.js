displayContainer = document.querySelector("#container")
finishedContainer = document.querySelector("#fav-container")
let buildElement = (elementType, elementId, elementTextContent, elementValue) => {
    let htmlElement = document.createElement(elementType);
    if (elementId) {
        htmlElement.setAttribute("id", elementId);
    }
    if (elementValue) {
        htmlElement.setAttribute("value", elementValue);
    }
    htmlElement.textContent = elementTextContent;
    return htmlElement;
}
let updateDom = () =>{
    finishedContainer.innerHTML = `<div>My favorite thing is ${favThing.value} and you can get it at ${favPlace.value}</div>`
    }

displayContainer.appendChild(buildElement("article", undefined, "Favorite Thing: "))
displayContainer.appendChild(buildElement("input", "favorite-thing", "My favorite Thing"))
displayContainer.appendChild(buildElement("article", undefined, "Favorite Place: "))
displayContainer.appendChild(buildElement("input", "favorite-place", "My favorite place"));
const updateButton = buildElement("button", undefined, "Enter");
updateButton.addEventListener("click", updateDom)
displayContainer.appendChild(updateButton)

let favThing = document.querySelector("#favorite-thing")
let favPlace = document.querySelector("#favorite-place")
