const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {

        const title =
            card.querySelector("h3").textContent.toLowerCase();

        if(title.includes(value)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }
    });
});

function filterEvents(category){

    cards.forEach(card => {

        if(category === "all"){
            card.style.display = "block";
        }

        else if(card.classList.contains(category)){
            card.style.display = "block";
        }

        else{
            card.style.display = "none";
        }
    });
}

const questions =
document.querySelectorAll(".faq-question");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const answer =
        question.nextElementSibling;

        if(answer.style.display === "block"){
            answer.style.display = "none";
        }

        else{
            answer.style.display = "block";
        }
    });
});