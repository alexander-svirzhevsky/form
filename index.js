document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");

    form.addEventListener("submit", formSend);

    async function formSend(e) {
        e.preventDefault()

        formValidate(form);
    }


    function formValidate(form) {

        let error = 0;
        const inputs = document.querySelectorAll("._req");
        console.log(inputs);


        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            removeError(input);

            if (input.classList.contains("_mail")) {
                if (validateEmail(input)) {
                    addError(input);
                } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                    addError(input);
                    console.log(11111);
                } else {
                    if (input.value === "") {
                        addError(input);
                    }
                }

            }
            if (input.value === "") {
                addError(input);
            }


            // if (input.value === "") {
            //     addError(input);
            // }

        }
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
})