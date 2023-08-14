const button = document.querySelectorAll(".btn_path");
const charging = document.querySelector("#charging");
const contenu = document.querySelector(".contenu");
const tennis = document.querySelector(".aboutme button");
const decouvrir = document.getElementById('decouvrir');
const path_slides = document.querySelectorAll(".slides");





//afficher le contenu selon la colonne surlignée dans projets
const card = document.querySelector(".card");
for (let elem = 0; elem < card.children.length; elem++) {
    card.children[elem].addEventListener("click", () => {

        function HigherSize() {
            card.children[elem].classList.add("flex_10");
            card.children[elem].classList.remove("flex_1");
        }

        function LowerSize() {
            card.children[elem].classList.remove("flex_10");
            card.children[elem].classList.add("flex_1");
        }

        //augmente taille colonne
        HigherSize();

        //affiche le contenu selon celle selectionnée
        switch (elem) {
            case 0:
                card.children[elem].innerHTML = `<div class="container">
                <button class="cross">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="cross">
                        <path
                            d="M83.9 17.1c-.9-.9-2.5-.9-3.4 0l-30 30-30-30c-.9-.9-2.5-.9-3.4 0s-.9 2.5 0 3.4l30 30-30 30c-.9.9-.9 2.5 0 3.4.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7l30-30 30 30c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4l-30-30 30-30c.9-.9.9-2.4 0-3.4z">
                        </path>
                    </svg>
                </button>
            </div>`;
                break;
            case 1:
                card.children[elem].innerHTML = `<div class="container">
                <button class="cross">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="cross">
                        <path
                            d="M83.9 17.1c-.9-.9-2.5-.9-3.4 0l-30 30-30-30c-.9-.9-2.5-.9-3.4 0s-.9 2.5 0 3.4l30 30-30 30c-.9.9-.9 2.5 0 3.4.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7l30-30 30 30c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4l-30-30 30-30c.9-.9.9-2.4 0-3.4z">
                        </path>
                    </svg>
                </button>
            </div>`;
                break;
            case 2:
                card.children[elem].innerHTML = `<div class="container">
                <button class="cross">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="cross">
                        <path
                            d="M83.9 17.1c-.9-.9-2.5-.9-3.4 0l-30 30-30-30c-.9-.9-2.5-.9-3.4 0s-.9 2.5 0 3.4l30 30-30 30c-.9.9-.9 2.5 0 3.4.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7l30-30 30 30c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4l-30-30 30-30c.9-.9.9-2.4 0-3.4z">
                        </path>
                    </svg>
                </button>
            </div>`;
                break;
        }

        console.log(card.children[elem].innerHTML)
        //reset les inscriptions avant l'ouverture des fenêtres
        const cross = document.querySelector(".cross");
        cross.addEventListener("click", () => {
            setTimeout(LowerSize, 0);

            function PlaceElementInCard() {
                let card = cross.parentElement.parentElement.parentElement.children;
                let categorie = cross.parentElement.parentElement.classList[0];
                for (let elem = 0; elem < card.length; elem++) {
                    if (card[elem].classList[0] == categorie) {
                        return elem;
                    }
                }
            }

            let place_element = PlaceElementInCard();

            function Resetcross() {
                switch (place_element) {
                    case 0:
                        card.children[place_element].innerHTML = `<span class="fs-2">STAGES</span>`;
                        break;
                    case 1:
                        card.children[place_element].innerHTML = `<span class="fs-2">PROFESSIONNEL</span>`;
                        break;
                    case 2:
                        card.children[place_element].innerHTML = `<span class="fs-2">PERSONNEL</span>`;
                        break;
                }

            }

            setTimeout(Resetcross, 0);

        });
    });
}




//teste l'orientation du site
/*var mql = window.matchMedia("(orientation: portrait)");
mql.addListener(handleOrientationChange);
handleOrientationChange(mql);

function handleOrientationChange(mql) {
    if (mql.matches) {//portrait

    } else {//paysage
    }
}
*/


function SupprDecouvrir() {
    decouvrir.style.zIndex = -1;
}

function ApparaitreSlides() {
    for (let elem = 0; elem < path_slides.length; elem++) {
        path_slides[elem].children[0].style.opacity = 1;
    }
}

function DisparaitreSlides() {
    for (let elem = 0; elem < path_slides.length; elem++) {
        path_slides[elem].children[0].style.opacity = 0;
    }
}

//découvre la barre de progression de parcours
function GenereProgression() {
    decouvrir.style.opacity = 0;
    console.log(decouvrir);
    setTimeout(SupprDecouvrir, 500);

    path_slides[1].innerHTML = `                            <div
    class="position-absolute date date_mse fs-5 p-1 rounded-pill d-flex justify-content-center align-items-center">
    2025 - 2022</div>`
    path_slides[0].innerHTML = `<div class="position-absolute formation formation_mse">
    <h3>École des Mines de Saint-Étienne</h1>
        <p>
            <strong>I</strong><span>ngénieur</span>
            <strong>S</strong><span>pécialité</span>
            <strong>M</strong><span>icroélectronique et</span>
            <strong>In</strong>formatique<span></span>
        </p>
        <p>
            <span>Rang français :</span> <strong>11e</strong><span>.</span> <span>Rang
                mondial :</span> <strong>Top 501-600</strong><span>.</span>
        </p>
        <button class="cta">
            <span>En savoir plus</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
        </button>
</div>`;

    setTimeout(ApparaitreSlides, 300);

    const cta = document.querySelector(".cta");

    cta.addEventListener("click", function () {
        window.open("https://www.mines-stetienne.fr/formation/ismin/");
    });
}

document.querySelector(".btn_start").addEventListener("click", function () {
    GenereProgression();
});


//évolution de la barre de progression au fil des clics + génération des slides
for (let elem = 0; elem < button.length; elem++) {
    button[elem].addEventListener("click", function () {

        charging.style.width = (elem * 33) + '%';

        //fait déborder la barre au dernier point
        if (elem == button.length - 1) {
            charging.style.width = '103%';
        }

        //anime les boutons selon celui activé
        for (let i = 0; i <= elem; i++) {
            button[i].classList.add('checked');
            if (i != button.length - 1) {
                button[i + 1].classList.add('opacity-100');
            }
        }
        for (let i = button.length - 1; i > elem; i--) {
            button[i].classList.remove('checked');
        }
        for (let i = button.length - 1; i > elem + 1; i--) {
            button[i].classList.remove('opacity-100');
        }

        switch (elem) {

            case 0:
                DisparaitreSlides;

                path_slides[1].innerHTML = `                            <div
    class="position-absolute date date_mse fs-5 p-1 rounded-pill d-flex justify-content-center align-items-center">
    2025 - 2022</div>`
                path_slides[0].innerHTML = `<div class="position-absolute formation formation_mse">
    <h3>École des Mines de Saint-Étienne</h1>
        <p>
            <strong>I</strong><span>ngénieur</span>
            <strong>S</strong><span>pécialité</span>
            <strong>M</strong><span>icroélectronique et</span>
            <strong>In</strong>formatique<span></span>
        </p>
        <p>
            <span>Rang français :</span> <strong>11e</strong><span>.</span> <span>Rang
                mondial :</span> <strong>Top 501-600</strong><span>.</span>
        </p>
        <button class="cta">
            <span>En savoir plus</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
        </button>
</div>`;

                setTimeout(ApparaitreSlides, 100);

                const cta = document.querySelector(".cta");

                cta.addEventListener("click", function () {
                    window.open("https://www.mines-stetienne.fr/formation/ismin/");
                });
                break;

            case 1:
                DisparaitreSlides;
                path_slides[1].innerHTML = `<div class="position-absolute formation formation_vh">
                <h3>CPGE - Lycée Victor Hugo</h3>
                <h5>Caen</h5>
                    <p>
                        <strong>P</strong><span>hysique &</span>
                        <strong>S</strong><span>ciences</span>
                        <strong>I</strong><span>ndustrielles</span>
                    </p>
                    <p>
                        <span>Admission</span> <span>concours</span>
                        <strong>Mines-Telecom</strong><span>.</span>
                    </p>
            </div>`;
                path_slides[0].innerHTML = `<div
                class="position-absolute date date_vh fs-5 p-1 rounded-pill d-flex justify-content-center align-items-center">
                2022 - 2021</div>`;
                setTimeout(ApparaitreSlides, 100);
                break;

            case 2:
                DisparaitreSlides;
                path_slides[1].innerHTML = `                            <div
                class="position-absolute date date_f1 fs-5 p-1 rounded-pill d-flex justify-content-center align-items-center">
                2021 - 2020</div>`;
                path_slides[0].innerHTML = `                            <div class="position-absolute formation formation_f1">
                <h3>CPGE - Lycée François 1er</h3>
                <h5>Le Havre</h5>

                <p>
                    <strong>P</strong><span>hysique</span>
                    <strong>C</strong><span>himie &</span>
                    <strong>S</strong><span>ciences</span>
                    <strong>I</strong><span>ndustrielles</span>
                </p>
            </div>`;
                setTimeout(ApparaitreSlides, 100);
                break;

            case 3:
                DisparaitreSlides;
                path_slides[1].innerHTML = `<div class="position-absolute formation formation_glc">
                <h3>Lycée Guillaume Le Conquérant</h3>
                <h5>Lillebonne</h5>
                <p>
                    <span>Baccalauréat série</span> <strong>S</strong><span>cientifique</span> <span>-
                        option SVT,</span>
                </p>
                <p>
                    <span>Admis mention</span> <strong>Très Bien</strong>
                </p>
            </div>`;
                path_slides[0].innerHTML = `<div
                class="position-absolute date date_glc fs-5 p-1 rounded-pill d-flex justify-content-center align-items-center">
                2020 - 2017</div>`;
                setTimeout(ApparaitreSlides, 100);
                break;
        }
    })
};

//animation balle de tennis
tennis.addEventListener("click", function () {
    console.log('tennis');
    document.querySelector(".tennis_ball").innerHTML = `<div class="origin_ball">
    <div class="ball border border-3 border-dark"></div>
</div>`;
});