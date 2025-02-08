document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".project-card");
    const heroCommit = document.querySelector(".hero-commitment");
    const solution = document.querySelector(".hero-solution");
    function showOnScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        cards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                setTimeout(() => {
                    card.classList.add("show");
                }, index * 300);
            }
        });

        if (heroCommit) {
            const heroTop = heroCommit.getBoundingClientRect().top;
            if (heroTop < triggerBottom) {
                heroCommit.classList.add("show");
            }
        }

        if(solution) {
            const solutionTop = solution.getBoundingClientRect().top;
            if(solutionTop < triggerBottom){
                solution.classList.add("show")
            }
        }
    }

    window.addEventListener("scroll", showOnScroll);
    showOnScroll();
});
