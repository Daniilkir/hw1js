import galleryItems from "./app.js";

const gallery = document.querySelector(".js-gallery");
const modal = document.querySelector(".js-lightbox");
const closeModalButton = document.querySelector(".lightbox__button");
const modalImage = document.querySelector(".lightbox__image");

galleryItems.forEach((item) => gallery.appendChild(createGalleryItem(item)));
gallery.addEventListener("click", handleClick);
closeModalButton.addEventListener("click", () => toggleModal(false));

function createGalleryItem(item) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<a class='gallery__link' href='#'><img class='gallery__image' src='${item.preview}' alt='${item.description}' /></a>`;
  return listItem;
}

function handleClick(event) {
  const target = event.target;

  if (target.nodeName === "IMG") {
    const selectedItem = galleryItems.find((item) => item.description === target.alt);
    toggleModal(true, selectedItem);
  }
}

function toggleModal(open, item = { original: "" }) {
  modalImage.src = item.original;
  modal.classList.toggle("is-open", open);
}
