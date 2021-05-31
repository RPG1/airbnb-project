let form = document.querySelector('.form-search');

function search(e) {
    e.preventDefault();
    let text = document.querySelector('[name=add]').value;

    console.log(text);

    localStorage.setItem("Location", text);

    document.querySelector('[name=add]').value = "";
}


form.addEventListener("submit", search);