document.addEventListener("DOMContentLoaded", function () {
    const titleInput = document.querySelector("#title_input");
    const mainTitle = document.querySelector("#main_title");
    const nounInput = document.querySelector("#noun");
    const verbInput = document.querySelector("#verb");
    const adjectiveInput = document.querySelector("#adjective");
    const storyResult = document.querySelector("#story_result");
    const form = document.querySelector(".form_container");

    titleInput.addEventListener("input", function () {
        mainTitle.textContent = titleInput.value;
    });

    document.querySelector("#submit_button").addEventListener("click", function (event) {
        event.preventDefault();

        const nounValue = nounInput.value;
        const verbValue = verbInput.value;
        const adjectiveValue = adjectiveInput.value;

        if (!nounValue || !verbValue || !adjectiveValue) {
            alert("Please fill in all fields");
        } else {
            const storyText = `Last night I ate a ${nounValue}, and today I just had to ${verbValue}. What a ${adjectiveValue} day!`;

            form.style.display = "none";
            storyResult.textContent = storyText;
            storyResult.style.display = "block";
        }
    });
});
