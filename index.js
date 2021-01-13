document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");

    form.addEventListener("submit", formSend);

    async function formSend(e) {
        e.preventDefault()

        let error = formValidate(form);
        if (error === 0) {

        } else {
            alert("Error")
        }

    }


    function formValidate(form) {

        let error = 0;
        const inputs = document.querySelectorAll("._req");


        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            removeError(input);

            if (input.classList.contains("_mail")) {
                if (validateEmail(input)) {
                    addError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                addError(input);
                error++;
            } else {
                if (input.value === "") {
                    addError(input);
                    error++;
                }
            }
        }
        return error;
    }

    function addError(input) {
        input.parentNode.classList.add("_error")
        input.classList.add("_error")
    }

    function removeError(input) {
        input.parentNode.classList.remove("_error")
        input.classList.remove("_error")
    }

    function validateEmail(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    const formImage = document.getElementById("formImage");
    const formPreview = document.getElementById("formPreview");
    console.log(formImage);


    formImage.addEventListener("change", () => {
        uploadFile(formImage.files[0]);
    });

    function uploadFile(file) {
        if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
            alert("Разрешены только изображения");
            formImage.value = "";
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            alert("Файл должен быть менее 2мб");
            return;
        }

        var reader = new FileReader();
        reader.onload = function (e) {
            console.log(1111);

            formPreview.innerHTML = `<img src="${e.target.result}" alt="photo">`;
        };
        reader.onerror = function (e) {
            alert("Ошибка");
        }
    }
})