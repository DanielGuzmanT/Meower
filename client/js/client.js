
const form = document.querySelector("form");

const loadingImage = document.querySelector(".loading");
loadingImage.style.display = "none";

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    const content = formData.get("content");

    const meow = {
        name,
        content
    };

    console.log(meow);
    form.style.display = "none";
    loadingImage.style.display = "block";
});
