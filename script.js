// nu e cea mai buna implementare, deci daca cineva vede asta nu folositi!!! dar pt un site pt bal e mai mult decat suficient 😊

function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
}

const Principal = new Vue({
    el: ".principal",
    data: {
        hide: false,
        countdown: { days: [0, 0], hours: [0, 0], min: [0, 0] },
    },
    mounted() {
        setInterval(() => {

            const nov7 = new Date('2025-11-07T18:00:00+02:00');
            const now = new Date();

            let diff = Math.max(0, nov7 - now);

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

            const splitNr = n => [Math.floor(n / 10), n % 10];

            this.countdown = {
                days: splitNr(days),
                hours: splitNr(hours),
                min: splitNr(mins)
            };

        }, 1000);
    },
    methods: {
        viewParticipants(boy, girl) {
            this.hide = true;
            Individual.setParticipants(boy, girl);
            Individual.hide = false;
        },
    }
})

const Individual = new Vue({
    el: ".individual",
    data: {
        hide: true,
        boy: "",
        girl: "",
        text: {
            'ALEXANDRU_ANDREEA': {
                boy: {
                    fullName: "BALAȘ<br/>TUDOR ALEXANDRU",
                    motto: "Raul e cel mai bun antivirus",
                    words: "simpatic, prietenos, ambitios",
                },
                girl: {
                    fullName: "CONSTANTINESCU<br/>ANDREEA",
                    motto: "Parerile altora sunt umbre, lumina adevarata este in tine",
                    words: "eleganta, motivatie, energie",
                }
            },

            'DARIUS_IZABELA': {
                boy: {
                    fullName: "CONIA<br/>DARIUS",
                    motto: "Cu ATV-ul fac ravagii cum facea cu stangul Hagi",
                    words: "inalt, amuzant, prietenos",
                },
                girl: {
                    fullName: "RADU<br/>IZABELA",
                    motto: "People don’t tell you who you are, you tell them",
                    words: "optimista, plina de viata, creativa",
                }
            },

            'ALEXANDRU_MARIA': {
                boy: {
                    fullName: "CĂLDĂRARU<br/>ALEX-MARIO",
                    motto: "Forta mea este calmul",
                    words: "shy, calm, creativ",
                },
                girl: {
                    fullName: "ARAZAN<br/>DRAGANA-MARIA",
                    motto: "Viata este o aventura",
                    words: "petrecareata, prietenoasa, generoasa",
                }
            },

            'EMANUEL_ELIZA': {
                boy: {
                    fullName: "ȚĂPÎRDREA<br/>EMANUEL PATRICK",
                    motto: "Viata e circuitul meu, eu aleg viteza",
                    words: "visator, curios, sociabil",
                },
                girl: {
                    fullName: "ȚĂRĂU<br/>ELIZA",
                    motto: "Viata e grea baga o saorma <3",
                    words: "sarcastica, de treaba, calma",
                }
            },

            'DARIUS_ANDREEA': {
                boy: {
                    fullName: "FERENȚ<br/>PETRU DARIUS",
                    motto: "Treburile pot astepta, dar WI-FI-ul nu!",
                    words: "energetic, fortos, intelept",
                },
                girl: {
                    fullName: "STAN<br/>ANDREEA LOREDANA",
                    motto: "Ai in tine tot ce iti trebuie ca sa stralucesti",
                    words: "creativa, optimista, perseverenta",
                }
            },

            'DAVID_ANDREEA': {
                boy: {
                    fullName: "PRISECARU<br/>DAVID",
                    motto: "Fii schimbarea pe care vrei sa o vezi in lume",
                    words: "loial, recunoscator, darnic",
                },
                girl: {
                    fullName: "IUGA<br/>GEORGIANA ANDREEA",
                    motto: "Fii vocea ta, nu ecoul altora",
                    words: "amabila, prietenoasa, zambitoare",
                }
            },

            'ZORAN_VANESA': {
                boy: {
                    fullName: "MATEI<br/>ZORAN",
                    motto: "Nu ma opresc pana nu reusesc",
                    words: "responsabil, amuzant, calm",
                },
                girl: {
                    fullName: "STRECICU<br/>VANESA",
                    motto: "Fiecare pas spre scena e o victorie asupra emotiilor",
                    words: "prietenoasa, sensibila, ambitioasa",
                }
            },

            'CRISTIAN_IULIA': {
                boy: {
                    fullName: "TURESCHI<br/>CRISTIAN",
                    motto: "Impreuna suntem mai puternici",
                    words: "generos, prietenos, inalt",
                },
                girl: {
                    fullName: "HOSU<br/>IULIA",
                    motto: "Curajul se naste din emotie, iar succesul din curaj",
                    words: "prietenoasa, amuzanta, ambitioasa",
                }
            },

            'CRISTIAN_NATALIA': {
                boy: {
                    fullName: "GHERGHEL<br/>CRISTIAN",
                    motto: "Ai n-ai minge, tragi la poarta",
                    words: "luptator, ambitios, empatic",
                },
                girl: {
                    fullName: "TRIFON<br/>NATALIA",
                    motto: "Fii schimbarea pe care vrei sa o vezi in lume",
                    words: "intelegatoare, empatica, generoasa",
                }
            },

            'NIKOLAS_ARIANA': {
                boy: {
                    fullName: "MUREȘAN<br/>NIKOLAS IONUȚ",
                    motto: "Nu visa la succes, munceste pentru el",
                    words: "optimist, deschis, inteligent",
                },
                girl: {
                    fullName: "LAZĂR<br/>ARIANNA DIANA",
                    motto: "Viitorul apartine celor care cred in frumusetea viselor lor",
                    words: "amabila, optimista, generoasa",
                }
            },

            'VOICU_TANIA': {
                boy: {
                    fullName: "CIOBANU<br/>VOICU FLORIAN",
                    motto: "“Ori numarul 1, ori m-apuc de plantat flori, nu-mi place numarul 2, ca nu vreau sa fiu ca voi",
                    words: "increzator, dedicat, pasionat",
                },
                girl: {
                    fullName: "IOVANOV<br/>TANIA ANEMONA",
                    motto: "Eleganta, capacitate, inteligenta si vrajeala frumoasa",
                    words: "originala, desteapta, optimista",
                }
            },

            'MARCUS_MELISA': {
                boy: {
                    fullName: "RUS<br/>MARCUS",
                    motto: "Intotdeauna exista o cale de a intelege mai bine",
                    words: "curios, adaptabil, clar",
                },
                girl: {
                    fullName: "ROGOJAN<br/>MELISA BRIANA",
                    motto: "Mi-a placut spritul si viata",
                    words: "frumoasa, inteligenta, capabila",
                }
            },
        }
    },
    methods: {
        setParticipants(boy, girl) {
            this.boy = boy;
            this.girl = girl;
        }
    },
    watch: {
        hide(newHide) {
            if (!newHide) window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
})

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const link = document.querySelector(`nav a[href="#${entry.target.getAttribute('id')}"]`);

        if (link && entry.isIntersecting) {
            navLinks.forEach(a => a.classList.remove('active'));
            link.classList.add('active');
        }
    });
}, { threshold: isMobile ? 0.1 : 0.3 });

sections.forEach(sec => observer.observe(sec));