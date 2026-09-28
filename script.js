/* =========================
   NAVEGACIÓN
========================= */

function irA(id) {

    const seccion = document.getElementById(id);

    if (!seccion) {
        return;
    }

    seccion.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================
   MENSAJES DE LAS FLORES
========================= */

const mensajes = {

    1: `
        <div class="mensaje-icono">🌻</div>
        <p>
        Porque incluso en mis días difíciles,
        pensar en ti puede cambiar completamente mi día.
        </p>
    `,

    2: `
        <div class="mensaje-icono">💛</div>
        <p>
        Porque tu felicidad también se convirtió
        en una de las mías.
        </p>
    `,

    3: `
        <div class="mensaje-icono">🥺</div>
        <p>
        Porque aunque te extrañe y exista distancia,
        siempre hay una parte de ti conmigo.
        </p>
    `,

    4: `
        <div class="mensaje-icono">❤️</div>
        <p>
        Porque contigo aprendí que amar también significa
        escuchar, entender, crecer y aprender de nuestros errores.
        </p>
    `,

    5: `
        <div class="mensaje-icono">🌻</div>
        <p>
        Porque si pudiera volver al principio,
        volvería a elegir conocerte.
        </p>
    `,

    6: `
        <div class="mensaje-icono">💘</div>
        <p>
        Porque eres mi amorcito, mi vida, mi cielo
        y sobre todo...
        mi buñuelito.
        </p>
    `

};


function mostrarMensaje(numero) {

    const caja = document.getElementById("mensajeFlor");

    if (!caja) {
        return;
    }

    caja.innerHTML = mensajes[numero];

    caja.style.animation = "none";

    setTimeout(() => {

        caja.style.animation =
            "aparecer 0.6s ease";

    }, 10);

}


/* =========================
   PÉTALOS
========================= */

function crearPetalo() {

    const petalo =
        document.createElement("div");

    petalo.classList.add("petalo");

    petalo.innerHTML = "🌼";

    petalo.style.left =
        Math.random() * 100 + "vw";

    petalo.style.fontSize =
        (12 + Math.random() * 18) + "px";

    petalo.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    petalo.style.opacity =
        0.5 + Math.random() * 0.5;

    document.body.appendChild(petalo);

    setTimeout(() => {

        petalo.remove();

    }, 12000);

}

setInterval(crearPetalo, 1000);


/* =========================
   CORAZONES
========================= */

function crearCorazon() {

    const corazon =
        document.createElement("div");

    corazon.classList.add("corazon");

    const corazones = [
        "💛",
        "💘",
        "❤️",
        "🌻"
    ];

    corazon.innerHTML =
        corazones[
            Math.floor(
                Math.random() * corazones.length
            )
        ];

    corazon.style.left =
        Math.random() * 100 + "vw";

    corazon.style.fontSize =
        (15 + Math.random() * 20) + "px";

    corazon.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.body.appendChild(corazon);

    setTimeout(() => {

        corazon.remove();

    }, 10000);

}

setInterval(crearCorazon, 3500);


/* =========================
   JARDÍN INTERACTIVO
========================= */

const mensajesJardin = {

    1: `
        <div class="icono-semilla">🌻</div>
        <p>
        Esta flor floreció por todos los momentos
        en los que me has hecho sonreír.
        </p>
    `,

    2: `
        <div class="icono-semilla">💛</div>
        <p>
        Esta flor es por cada vez que has hecho
        que mis días sean un poquito más bonitos.
        </p>
    `,

    3: `
        <div class="icono-semilla">🥺</div>
        <p>
        Esta flor es por todas las veces que te he extrañado
        y aun así has seguido estando en mis pensamientos.
        </p>
    `,

    4: `
        <div class="icono-semilla">❤️</div>
        <p>
        Esta flor representa todo lo que quiero seguir
        aprendiendo y construyendo contigo.
        </p>
    `,

    5: `
        <div class="icono-semilla">💘</div>
        <p>
        Y esta última flor es simplemente por ti,
        mi amorcito, mi vida, mi cielo...
        mi buñuelito.
        </p>
    `

};


let floresAbiertas = 0;


function hacerFlorecer(numero) {

    const planta =
        document.querySelector(
            `.planta${numero}`
        );

    if (!planta) {
        return;
    }

    if (
        planta.classList.contains(
            "florecida"
        )
    ) {
        return;
    }

    planta.classList.add(
        "florecida"
    );

    floresAbiertas++;

    const mensaje =
        document.getElementById(
            "mensajeJardin"
        );

    if (mensaje) {

        mensaje.innerHTML =
            mensajesJardin[numero];

        mensaje.style.transform =
            "scale(0.95)";

        setTimeout(() => {

            mensaje.style.transform =
                "scale(1)";

        }, 100);

    }

    crearParticulasFlor(planta);

    if (floresAbiertas === 5) {

        setTimeout(() => {

            mostrarJardinCompleto();

        }, 1200);

    }

}


/* =========================
   PARTÍCULAS
========================= */

function crearParticulasFlor(planta) {

    const rect =
        planta.getBoundingClientRect();

    for (let i = 0; i < 12; i++) {

        const particula =
            document.createElement("span");

        particula.innerHTML = "✦";

        particula.style.position =
            "fixed";

        particula.style.left =
            rect.left +
            rect.width / 2 +
            "px";

        particula.style.top =
            rect.top +
            60 +
            "px";

        particula.style.color =
            "#ffd83d";

        particula.style.fontSize =
            (10 + Math.random() * 15) +
            "px";

        particula.style.pointerEvents =
            "none";

        particula.style.zIndex =
            "1000";

        document.body.appendChild(
            particula
        );

        const x =
            (Math.random() - 0.5) * 180;

        const y =
            -(Math.random() * 150 + 50);

        particula.animate(

            [
                {
                    transform:
                        "translate(0,0) scale(1)",

                    opacity: 1
                },

                {
                    transform:
                        `translate(${x}px,${y}px) scale(0)`,

                    opacity: 0
                }
            ],

            {
                duration:
                    900 +
                    Math.random() * 600,

                easing:
                    "cubic-bezier(.17,.67,.83,.67)"
            }

        );

        setTimeout(() => {

            particula.remove();

        }, 1600);

    }

}


/* =========================
   JARDÍN COMPLETO
========================= */

function mostrarJardinCompleto() {

    const completo =
        document.getElementById(
            "jardinCompleto"
        );

    if (!completo) {
        return;
    }

    completo.classList.remove(
        "oculto"
    );

    setTimeout(() => {

        completo.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 300);

    for (let i = 0; i < 25; i++) {

        setTimeout(() => {

            crearPetalo();

        }, i * 100);

    }

}


/* =====================================================
   JARDÍN SEMILLA → FLOR
===================================================== */

let jardinSemillaPlantada = false;


function iniciarJardinSemilla() {

    const tierra =
        document.getElementById(
            "jardinSemillaTierra"
        );

    const reset =
        document.getElementById(
            "jardinSemillaReset"
        );

    if (!tierra || !reset) {
        return;
    }


    tierra.addEventListener(
        "click",
        () => {

            if (jardinSemillaPlantada) {
                return;
            }

            plantarSemillaJardin();

        }
    );


    reset.addEventListener(
        "click",
        () => {

            reiniciarJardinSemilla();

        }
    );

}


function plantarSemillaJardin() {

    jardinSemillaPlantada = true;

    const semilla =
        document.getElementById(
            "jardinSemillaSemilla"
        );

    const tallo =
        document.getElementById(
            "jardinSemillaTallo"
        );

    const hojaIzq =
        document.getElementById(
            "jardinSemillaHojaIzq"
        );

    const hojaDer =
        document.getElementById(
            "jardinSemillaHojaDer"
        );

    const flor =
        document.getElementById(
            "jardinSemillaFlor"
        );

    const reset =
        document.getElementById(
            "jardinSemillaReset"
        );

    const mensaje =
        document.getElementById(
            "jardinSemillaMensaje"
        );

    const instr =
        document.querySelector(
            "#semilla-flor .instruccion"
        );


    if (instr) {
        instr.textContent =
            "🌱 ¡Mira cómo crece!";
    }


    if (semilla) {
        semilla.classList.add(
            "plantada"
        );
    }


    setTimeout(() => {

        if (tallo) {
            tallo.style.height =
                "145px";
        }

    }, 700);


    setTimeout(() => {

        if (hojaIzq) {
            hojaIzq.classList.add(
                "crecida"
            );
        }

        if (hojaDer) {
            hojaDer.classList.add(
                "crecida"
            );
        }

    }, 2000);


    setTimeout(() => {

        if (flor) {
            flor.classList.add(
                "abierta"
            );
        }

        crearParticulasJardinSemilla();

        if (instr) {
            instr.textContent =
                "🌻 ¡Tu flor amarilla ha florecido!";
        }

    }, 3000);


    setTimeout(() => {

        if (reset) {
            reset.classList.add(
                "visible"
            );
        }

        if (mensaje) {
            mensaje.classList.remove(
                "oculto"
            );
        }

    }, 4200);

}


function crearParticulasJardinSemilla() {

    const contenedor =
        document.getElementById(
            "jardinSemillaParticulas"
        );

    if (!contenedor) {
        return;
    }


    for (let i = 0; i < 28; i++) {

        setTimeout(() => {

            const p =
                document.createElement("span");

            p.classList.add(
                "js-particula"
            );

            p.style.left =
                Math.random() * 100 + "%";

            p.style.top =
                Math.random() * 30 + "%";

            p.style.animationDuration =
                (2 + Math.random() * 2) +
                "s";

            contenedor.appendChild(p);


            setTimeout(() => {

                p.remove();

            }, 4500);

        }, i * 70);

    }

}


function reiniciarJardinSemilla() {

    jardinSemillaPlantada = false;

    const semilla =
        document.getElementById(
            "jardinSemillaSemilla"
        );

    const tallo =
        document.getElementById(
            "jardinSemillaTallo"
        );

    const hojaIzq =
        document.getElementById(
            "jardinSemillaHojaIzq"
        );

    const hojaDer =
        document.getElementById(
            "jardinSemillaHojaDer"
        );

    const flor =
        document.getElementById(
            "jardinSemillaFlor"
        );

    const reset =
        document.getElementById(
            "jardinSemillaReset"
        );

    const mensaje =
        document.getElementById(
            "jardinSemillaMensaje"
        );

    const instr =
        document.querySelector(
            "#semilla-flor .instruccion"
        );

    const partic =
        document.getElementById(
            "jardinSemillaParticulas"
        );


    if (semilla) {
        semilla.classList.remove(
            "plantada"
        );
    }

    if (tallo) {
        tallo.style.height = "0";
    }

    if (hojaIzq) {
        hojaIzq.classList.remove(
            "crecida"
        );
    }

    if (hojaDer) {
        hojaDer.classList.remove(
            "crecida"
        );
    }

    if (flor) {
        flor.classList.remove(
            "abierta"
        );
    }

    if (reset) {
        reset.classList.remove(
            "visible"
        );
    }

    if (mensaje) {
        mensaje.classList.add(
            "oculto"
        );
    }

    if (partic) {
        partic.innerHTML = "";
    }

    if (instr) {
        instr.textContent =
            "🌱 Toca la tierra para plantar tu semilla";
    }

}


/* =========================
   SORPRESA FINAL
========================= */

function abrirSorpresa() {

    const contenido =
        document.getElementById(
            "sorpresa-contenido"
        );

    const mensaje =
        document.getElementById(
            "mensaje-final"
        );

    if (!contenido || !mensaje) {
        return;
    }

    contenido.style.opacity = "0";

    contenido.style.transform =
        "scale(0.8)";

    setTimeout(() => {

        contenido.classList.add(
            "oculto"
        );

        mensaje.classList.remove(
            "oculto"
        );

        crearExplosionAmor();

    }, 700);

}


/* =========================
   EXPLOSIÓN FINAL
========================= */

function crearExplosionAmor() {

    const elementos = [
        "🌻",
        "💛",
        "💘",
        "🌼",
        "✨"
    ];

    for (let i = 0; i < 35; i++) {

        const elemento =
            document.createElement("div");

        elemento.classList.add(
            "corazon"
        );

        elemento.innerHTML =
            elementos[
                Math.floor(
                    Math.random() *
                    elementos.length
                )
            ];

        elemento.style.left =
            Math.random() * 100 + "vw";

        elemento.style.bottom =
            Math.random() * 30 + "vh";

        elemento.style.fontSize =
            (15 + Math.random() * 30) +
            "px";

        elemento.style.animationDuration =
            (3 + Math.random() * 5) +
            "s";

        document.body.appendChild(
            elemento
        );

        setTimeout(() => {

            elemento.remove();

        }, 8000);

    }

}


/* =========================
   ANIMACIÓN AL HACER SCROLL
========================= */

const observador =
    new IntersectionObserver(

        (entradas) => {

            entradas.forEach(
                (entrada) => {

                    if (
                        entrada.isIntersecting
                    ) {

                        entrada.target
                            .classList
                            .add("visible");

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


document
    .querySelectorAll(".seccion")
    .forEach(
        (seccion) => {

            observador.observe(
                seccion
            );

        }
    );


/* =========================
   INICIAR SEMILLA
========================= */

document.addEventListener(
    "DOMContentLoaded",
    iniciarJardinSemilla
);


/* =========================
   EFECTO AL CARGAR
========================= */

window.addEventListener(
    "load",
    () => {

        const inicio =
            document.getElementById(
                "inicio"
            );

        if (inicio) {

            inicio.classList.add(
                "visible"
            );

        }

        for (
            let i = 0;
            i < 8;
            i++
        ) {

            setTimeout(
                crearPetalo,
                i * 300
            );

        }

    }
);