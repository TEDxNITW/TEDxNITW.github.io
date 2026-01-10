// ===================================
// TEDXNITW - REFINED EDITORIAL INTERACTION
// Lerp-Smoothing, Immersive Portal, Infinite Reel, & The Dossier
// ===================================

const state = {
    scrollY: 0,
    targetY: 0,
    currentY: 0,
    isMobile: window.innerWidth <= 768,
    // Archive State
    currentVol: "2021", // Default to newest archive
    // Reel State
    reelIndex: 0,
    reelItemHeight: 76,
    autoPlayInterval: null,
    // Wave Vars
    waveTime: 0,
    mouseX: 0,
    mouseY: 0,
    // Slider State
    sliderIndex: 0,
    sliderImages: [
        'assets/Campus_Pictures/campus_pic_1.jpg',
        'assets/Campus_Pictures/campus_pic_2.jpg',
        'assets/Campus_Pictures/campus_admin_building.jpg',
        'assets/Campus_Pictures/campus_pic_3.jpg'
    ]
};

// ===================================
// DATA: THE ARCHIVES (Vol. I & II)
// ===================================
const archiveData = {
    "2017": {
        meta: {
            title: "BREAKING THE MOULD",
            date: "OCTOBER 08, 2017",
            location: "New Conference Hall",
            prologue: "In the inaugural chapter of TEDxNITW, we gathered to dismantle the established norms. 'Breaking the Mould' was an exploration of those who defied expectation—from cinema to cricket—to forge new paths. It remains a testament to the power of divergence."
        },
        speakers: [
            {
                id: "sandeep",
                name: "Sandeep Reddy Vanga",
                role: "Filmmaker",
                image: "assets/Speaker_Pictures/sandeep_reddy_vanga.jpg",
                quote: "Art is not about being safe. It is about truth.",
                bio: "Arjun Reddy has gained a cult following among youth in Telangana and Andhra Pradesh. We thought that our list of speakers would be incomplete without the mastermind behind this critically acclaimed movie. From choosing to portray a brilliant medico student with anger management issues to the rawness that his script contained - all in a directorial debut, surely he has ticked all the boxes of 'Breaking the Mould'.",
                videoID: "sccHlNsyv-Y"
            },
            {
                id: "shikha",
                name: "Shikha Pandey",
                role: "Cricketer & Flight Lt.",
                image: "assets/Speaker_Pictures/shikha_pandey.jpg",
                quote: "To serve the nation is the highest calling.",
                bio: "Shikha Pandey was a part of the Indian Women's Cricket team that made the entire nation proud. She was in the team that went to the final of the ICC Women's World Cup 2017. Along with this, she holds a degree in Electronics and Electrical Engineering from Goa College of Engineering. She is the first cricketer to have played both state level and international level whilst hailing from Goa.",
                videoID: "uj9z59ZmYpc"
            },
            {
                id: "partha",
                name: "Partha Pratim Talukdar",
                role: "AI Scientist",
                image: "assets/Speaker_Pictures/partha_prathim_talukdar.png",
                quote: "Intelligence is not just data, it is context.",
                bio: "Partha Pratim Talukdar is a man who has immense experience with Machine Learning, Natural Language Processing, and Data Integration. He has worked in several big-shot companies such as Google and Hewlett Packard. He has won various prestigious awards such as the IBM Faculty Award and the Google Focused Faculty Research Award.",
                videoID: "D1iuKRhbWVo"
            },
            {
                id: "archana",
                name: "Archana Karry",
                role: "Classical Dancer",
                image: "assets/Speaker_Pictures/archana_karry.jpg",
                quote: "Tradition is the fire we keep burning.",
                bio: "An epitome of Grace and Élan, Archana truly lives up to the brigade of 'New Age' Dancers. Her credentials of being a Post Graduate in Bharatanatyam from the renowned Kalakshetra led her to believe that Dance is not only an eloquent art form but is also an effective tool to explain corporate doctrines.",
                videoID: "RadiZJQck-w"
            },
            {
                id: "ajit",
                name: "Ajit Babu",
                role: "Entrepreneur",
                image: "assets/Speaker_Pictures/ajit_babu.png",
                quote: "Disability does not define potential.",
                bio: "Ajit is the founder and CEO of 'Karwahn Concepts', a company that trains people with disabilities to make wood and steel art. Ajit was diagnosed with cerebral palsy - a condition that leads to movement disorder. Ajit, however, never let this disability define him. He built a power bank that would run on an efficient solar panel to help earthquake victims.",
                videoID: "FSv8IQXO8Hs"
            },
            {
                id: "nandita",
                name: "Nandita Mukand",
                role: "Artist",
                image: "assets/Speaker_Pictures/Nandita_Mukand.png",
                quote: "Materiality is a bridge to nature.",
                bio: "Nandita Mukand is a Singapore-based Indian born artist whose practice encompasses sculpture, installation and painting. Her works deal with Nature and Materiality, exploring themes of connection and spirituality from in an urban context. It is the concatenation of city-dwellers and the natural world.",
                videoID: "7J9cQagTQ8s"
            },
            {
                id: "pratap",
                name: "Pratap Sriram",
                role: "Industrial Engineer",
                image: "assets/Speaker_Pictures/pratap_sundar.png",
                quote: "Efficiency is an art form.",
                bio: "Pratap Sriram Sundar is the CEO and Chief Consultant at Natura Consultancy Services Pvt Ltd. After working as Director of Manufacturing in Innovation Sports, USA for six years, teaching Industrial Engineering for nine years, and receiving training from MIT Boston, he has gathered immense knowledge.",
                videoID: "ETykzhrEZu0"
            }
        ]
    },
    "2018": {
        meta: {
            title: "TEDxNITW",
            date: "OCTOBER 27, 2018",
            location: "BR AMBEDKAR HALL, NITW",
            prologue: "In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TEDTalks video and live speakers combine to spark deep discussion and connection in a small group. These local, self-organized events are branded TEDx, where x = independently organized TED event."
        },
        speakers: [
            {
                id: "tiny_nair",
                name: "Dr. Tiny Nair",
                role: "Cardiologist & Storyteller",
                image: "assets/Speaker_Pictures/tiny_nair.webp",
                quote: "Medicine is a science, but healing is an art.",
                bio: "Dr. Tiny Nair is an experienced Cardiologist in Trivandrum, who has been working with the PRS Hospital since January 1990. Not only is he immensely accomplished in his field, but he also has a flair for storytelling. With 51k followers, he is also big on Quora, having been voted Top Writer 2018. His book 'Happy At Heart' is a treasure trove of interesting anecdotes and life lessons from his medical career.",
                videoID: "4doHokOFStM"
            },
            {
                id: "vipul_rastogi",
                name: "Dr. Vipul Rastogi",
                role: "Neuropsychiatrist",
                image: "assets/Speaker_Pictures/vipul_rastogi.jpg",
                quote: "The mind is the final frontier.",
                bio: "Dr. Vipul Rastogi has joined Medanta as a Associate Consultant in Behavioural Neurology and Psychiatry. Being one of the very few psychiatrists in India who has had formal training in Neurology, he is sought after for his special expertise in providing holistic treatment of Psychiatric Disorders. He believes that Artificial Intelligence is a potential tool in neuropsychology.",
                videoID: "_XsFgz7so9E"
            },
            {
                id: "flavia_agnes",
                name: "Flavia Agnes",
                role: "Gender Rights Lawyer",
                image: "assets/Speaker_Pictures/Flavia_Agnes.jpg",
                quote: "Justice must be viable for everyone.",
                bio: "Flavia Agnes is a noted gender rights lawyer and director of Majlis, a Mumbai-based organisation that provides legal initiatives for women. A strong supporter of legal pluralism and reforms from within, she has played an important role in reforming Christian Personal Laws. Having been in an abusive marriage herself, she advocates for better designed courts for victims.",
                videoID: "IMJ5jkb2nE4"
            },
            {
                id: "manan_gupta",
                name: "Manan Gupta",
                role: "Fingerstyle Guitarist",
                image: "assets/Speaker_Pictures/manan_gupta.jpg",
                quote: "Music is the language of the lost.",
                bio: "From a very young age, Manan Gupta was fascinated by the intricacies of music. He had the special ability to play the chords of any symphony, just by listening. His unique style of playing the guitar, called the fingerstyle, inspired by Andy McKee's Drifting, is definitely a treat for the ears. He has been signed to a US-based record label 'Fretmonkey Records'.",
                videoID: "HMnyKalFmk4"
            },
            {
                id: "mani_vajipey",
                name: "Mani Vajipey",
                role: "CEO, Banyan Nation",
                image: "assets/Speaker_Pictures/mani_Vajipey.jpeg",
                quote: "Waste is a design flaw.",
                bio: "During his travels across India, Mani Vajipey was deeply disturbed by the filth and squalor. This motivated him to build an organization that would solve India's waste management challenges through technology. He is the Co-Founder and CEO of Banyan Nation, a technology driven recycling company that is changing the way India looks at plastics.",
                videoID: "UFGvQsEShq4"
            },
            {
                id: "manish_mehrotra",
                name: "Manish Mehrotra",
                role: "Chef, Indian Accent",
                image: "assets/Speaker_Pictures/Manish_Mehrotra.png",
                quote: "Flavor is a memory.",
                bio: "Manish Mehrotra is widely recognised as the most exciting modern Indian chef in the world. He has managed to leave an imprint in the culinary universe with his innovative, artistic and scientific experiments in flavours. His brainchild, Indian Accent, is the only Indian restaurant in the list of World's 50 Best for the past three years in a row.",
                videoID: "G_M54S6MthU"
            },
            {
                id: "manvendra_singh",
                name: "Manvendra Singh Gohil",
                role: "LGBTQ+ Activist",
                image: "assets/Speaker_Pictures/Manvendra_Singh_Gohil.jpeg",
                quote: "Truth is the only royalty.",
                bio: "When Manvendra Singh Gohil, the first openly gay prince of India, came out to his family, it resulted in his mother disowning him. Gohil set up the Lakshya Trust, a charity for LGBT people in his conservative home state. He has thrown open his palace doors to vulnerable Indians who’ve been shunned by their families.",
                videoID: "Vn5BGK4rQ7E"
            },
            {
                id: "nag_ashwin",
                name: "Nag Ashwin",
                role: "Filmmaker",
                image: "assets/Speaker_Pictures/Nag_Ashwin.jpg",
                quote: "We solve a problem because it exists.",
                bio: "A unique filmmaking talent to grace the Telugu film industry, Nag Ashwin stands out from the typical cinema. His directorial debut, Yevvade Subramanyam, was well received. Mahanati - a biopic of Savitri, is his recent hit. He believes that in today's world, we all fight the fire. He is an exceptional mind communicating thought provoking ideas.",
                videoID: "GKZrs0aJRnE"
            }
        ]
    },
    "2020": {
        meta: {
            title: "INTO THE MATRYOSHKA",
            date: "FEBRUARY 1, 2020",
            location: "BR AMBEDKAR HALL, NITW",
            prologue: "In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TEDTalks video and live speakers combine to spark deep discussion and connection in a small group. These local, self-organized events are branded TEDx, where x = independently organized TED event."
        },
        speakers: [
            {
                id: "akriti_khatri",
                name: "Akriti Khatri",
                role: "Private Investigator",
                image: "assets/Speaker_Pictures/Akriti_Khatri.jpg",
                quote: "Information is power.",
                bio: "Akriti Khatri is a detective who began the Venus Detective Agency, her very own private investigative agency. Born and raised in Delhi, Akriti completed a Bachelor's degree in Science and an MBA from Delhi University. Preferring to call herself an 'information gatherer' rather than an investigator, she has had a phenomenal success rate of 85%! With branches in eight cities, and over 80 employees working under her full time, she's reached the pinnacle of success.",
                videoID: null
            },
            {
                id: "chitra_vishwanath",
                name: "Chitra Vishwanath",
                role: "Architect",
                image: "assets/Speaker_Pictures/Chitra_Vishwanath.jpg",
                quote: "Building with nature, not against it.",
                bio: "Chitra Vishwanath, an architect based in Bangalore is the principal architect at Biome Environmental Solutions. Biome is making major strides in ecological architecture especially in urban settings. In a world where conventional architecture and construction practices do much harm to the environment, firms like Biome strive to bring in a holistic ecosystem-based approach. Biome has been involved in more than 700 projects of various scales.",
                videoID: "41tlOqU-6PM"
            },
            {
                id: "pavan_rao",
                name: "Pavan Rao",
                role: "Actor & Dancer",
                image: "assets/Speaker_Pictures/Pavan_Rao.jpg",
                quote: "Dance is the hidden language of the soul.",
                bio: "Actor, Dancer, Model; these are mere titles to describe Pavan Rao. His podium clinch at Peter England's Mr. India 2017 is simply one among the endless accolades he has received. The Fictitious Group, a dance troupe of which he was a part, was awarded 'India's Got Talent Season 3'. His talent has also received international recognition with his dance crew 'The Kings', who were announced World Champions at the NBC World of Dance.",
                videoID: null
            },
            {
                id: "saptarshi_prakash",
                name: "Saptarshi Prakash",
                role: "Digital Experience Designer",
                image: "assets/Speaker_Pictures/Saptarishi_Paksh.avif",
                quote: "Design is not just what it looks like, it's how it works.",
                bio: "A graduate of IIT Madras, Saptarshi Prakash has worked with some incredibly well-known startups of India like Housing.com and Zeta India and has rehauled both websites from the ground up. He is currently the Product Design Manager at Swiggy, India's largest food ordering and delivery platform. He has given over fifty UX talks and has held workshops at various universities and companies.",
                videoID: "kEN75SlNuWc"
            },
            {
                id: "seema_tomar",
                name: "Seema Tomar",
                role: "Trap Shooter",
                image: "assets/Speaker_Pictures/seema_tomar.jpg",
                quote: "Aim high, shoot higher.",
                bio: "Hailing from Johri, a village in Uttar Pradesh, Seema was expected to marry and become a housewife. However, her aptitude for shooting began to bloom. Aged 37, she is the only Indian woman to win the Silver Medal for the shotgun event at the International Shooting Sports Federation. She has secured 6 gold medals and 2 silver medals in various National Championships. Alongside her mother, she still continues to run a shooting range in her village.",
                videoID: "X3TzC-_Nnec"
            },
            {
                id: "srinivasan_sundarrajan",
                name: "Srinivasan Sundarrajan",
                role: "Scientist & Professor",
                image: "assets/Speaker_Pictures/Srinivasan_Sundarrajan.jpg",
                quote: "Innovation is the bridge between science and society.",
                bio: "Dr. Srinivasan Sundarrajan is a reputed Aerospace and Missile Scientist who has worked through all phases of missile design, production and development of prestigious missile systems like the Brahmos, Agni, Prithvi, Akash, Nag and Thrishul of DRDO. An AICTE Distinguished Professor, he serves as a member of the boards of ISRO, DAE, and CSIR. He has edited two engineering handbooks and published more than eighty technical papers.",
                videoID: "jj_4Yb8ZRO8"
            },
            {
                id: "sudip_ghose",
                name: "Sudip Ghose",
                role: "MD, VIP Industries Ltd",
                image: "assets/Speaker_Pictures/Sudip_Ghose.png",
                quote: "Leadership is about making others better.",
                bio: "Touted as a dynamo by colleagues and employees alike, Sudip Ghose is a man of relentless energy and always has a positive approach towards his work. With over two decades worth of experience, fourteen of which have been spent in positions of leadership, he is known for his 'never say die' attitude. He is currently the Managing Director of VIP Industries Limited.",
                videoID: "QoGz3djHPv0"
            }
        ]
    },
    "2021": {
        meta: {
            title: "TEDxNITWStudio",
            date: "NOVEMBER 21, 2021",
            location: "Virtual / NIT Warangal",
            prologue: "In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TEDTalks video and live speakers combine to spark deep discussion and connection in a small group. These local, self-organized events are branded TEDx, where x = independently organized TED event."
        },
        speakers: [
            {
                id: "sonali_devnani",
                name: "Sonali Devnani",
                role: "Portrait Photographer",
                image: "assets/Speaker_Pictures/Sonali_Devnani.jpg",
                quote: "Stories deserve to be told.",
                bio: "Sonali Devnani is a portrait photographer, a journalist, an independent filmmaker and most importantly a storyteller, aiming to bring a change in our society, by capturing and spreading stories through her lens. Sonali's debut documentary, 'Addicted Innocence', much like her other works, focuses on a social issue: Drug Abuse. It showcases drug abuse among underage children and has won the Best Documentary Short Film Award at the Chicago South Asian Film Festival.",
                videoID: "urL4FOwR45s"
            }
        ]
    }
};

// Helper to safely get elements
const getEl = (id) => document.getElementById(id);
const getEls = (sel) => document.querySelectorAll(sel);

// We define 'els' lazily or robustly
let els = {};

function cacheElements() {
    els = {
        // Global
        nav: getEl('mainNav'),

        // Index Page
        gateVisual: getEl('gateVisual'),
        gateText: getEl('gateText'),
        passageContainer: getEl('passageContainer'),
        waveCanvas: getEl('waveCanvas'),
        // Slider
        sliderTrack: getEl('sliderTrack'),
        slidePrev: getEl('slidePrev'),
        slideNext: getEl('slideNext'),

        reelList: getEl('reelList'),
        reelViewport: document.querySelector('.reel-viewport'),
        reelUp: getEl('reelUp'),
        reelDown: getEl('reelDown'),
        // NodeList
        reelItems: getEls('.reel-item'),

        spotlight: {
            img: getEl('spotlightImg'),
            quote: getEl('spotlightQuote'),
            author: getEl('spotlightAuthor')
        },

        // Speakers Page (Archive)
        gridContainer: getEl('gridContainer'),
        timelineFuture: getEl('timelineFuture'),
        timelineFutureLabel: getEl('timelineFutureLabel'),
        vol2017: getEl('vol2017'),
        vol2018: getEl('vol2018'),
        vol2020: getEl('vol2020'),
        vol2021: getEl('vol2021'),

        archiveMeta: getEl('archiveMeta'),
        archiveTitle: getEl('archiveTitle'),
        archiveLocation: getEl('archiveLocation'),
        archivePrologue: getEl('archivePrologue'),

        // About Page (Transmission)
        audienceGrid: getEl('audienceGrid'),

        // Drawer
        drawerPanel: getEl('drawer-panel'),
        drawerBackdrop: getEl('drawer-backdrop'),
        drawerClose: document.querySelector('.drawer-close'),

        // Drawer Content
        dImg: getEl('d-img'),
        dName: getEl('d-name'),
        dRole: getEl('d-role'),
        dQuote: getEl('d-quote'),
        dBio: getEl('d-bio'),
        dVideo: getEl('d-video')
    };
}


// ===================================
// SCROLL & PARALLAX
// ===================================

function initScroll() {
    window.addEventListener('scroll', () => {
        state.targetY = window.scrollY;
    }, { passive: true });
    update();
}

function update() {
    // Basic LERP
    const lerpFactor = 0.1;
    if (Math.abs(state.targetY - state.currentY) < 0.1) {
        state.currentY = state.targetY;
    } else {
        state.currentY += (state.targetY - state.currentY) * lerpFactor;
    }

    renderGateParallax(state.currentY);
    handleNavState(state.currentY);
    requestAnimationFrame(update);
}

function renderGateParallax(scrollY) {
    if (!els.gateText) return;

    // THREE-PHASE ZOOM GATE EFFECT (Desktop: Full Cinematic / Mobile: Simplified)
    // Phase 1 (0-70%): Text zooms in
    // Phase 2 (70-90%): Text disappears
    // Phase 3: Content appears (Mobile: 30%+ / Desktop: 90%+)

    // Extend scroll range for smoother, more controlled progression
    const maxScroll = window.innerHeight * 2.5; // Extended from 2 to 2.5 for gentler timing
    const progress = Math.min(scrollY / maxScroll, 1);

    // Cinematic easing: Power curve for weight and momentum
    const ease = Math.pow(progress, 2.5);

    // Scale needs to be large enough to create immersive zoom
    const scale = 1 + (ease * 30);

    // PHASE 1 & 2: Text Opacity
    // Zoom phase (0-70%): Full opacity
    // Fade phase (70-90%): Fade to transparent
    let opacity = 1;
    if (progress > 0.7) {
        const fadeProgress = (progress - 0.7) / 0.2; // 0 to 1 over 70%-90% range
        opacity = 1 - fadeProgress;
    }

    // Blur for depth of field effect, starts at 60%
    const blur = Math.max(0, (progress - 0.6) * 25);

    // Apply transforms with GPU acceleration
    els.gateText.style.willChange = 'transform, opacity, filter';
    els.gateText.style.transform = `translate(-50%, -50%) scale(${scale})`;
    els.gateText.style.opacity = opacity;
    els.gateText.style.filter = blur > 0 ? `blur(${blur}px)` : 'none';

    // Canvas fades with text
    if (els.waveCanvas) {
        els.waveCanvas.style.opacity = 1 - (progress * 1.2);
    }

    // PHASE 3: Content appears ONLY after text disappears
    // MOBILE: Show content much earlier (30%) to prevent hiding
    // DESKTOP: Show content at 90% for full cinematic effect
    const mainContent = document.getElementById('mainContent');
    if (mainContent) {
        const contentThreshold = state.isMobile ? 0.3 : 0.9; // Mobile: 30%, Desktop: 90%

        if (progress >= contentThreshold) {
            // Smooth fade-in for content
            const fadeRange = state.isMobile ? 0.2 : 0.1; // Mobile: longer fade (20%), Desktop: 10%
            const contentFade = Math.min((progress - contentThreshold) / fadeRange, 1);
            mainContent.style.opacity = contentFade.toString();
        } else {
            mainContent.style.opacity = '0';
        }
    }

    // Reset will-change for memory efficiency
    if (progress >= 1 || progress === 0) {
        els.gateText.style.willChange = 'auto';
    }
}

// ===================================
// WAVE ANIMATION (DIGITAL OCEAN)
// ===================================
class Wave {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width = window.innerWidth;
        this.height = canvas.height = window.innerHeight;
        this.lines = [];
        this.initLines();

        window.addEventListener('resize', () => {
            this.width = this.canvas.width = window.innerWidth;
            this.height = this.canvas.height = window.innerHeight;
            this.initLines();
        });

        window.addEventListener('mousemove', (e) => {
            state.mouseX = e.clientX;
            state.mouseY = e.clientY;
        });
    }

    initLines() {
        this.lines = [];
        const gap = 40;
        for (let y = this.height * 0.4; y < this.height; y += gap) {
            this.lines.push({
                y: y,
                baseY: y,
                amplitude: Math.random() * 20 + 10,
                speed: Math.random() * 0.02 + 0.01,
                offset: Math.random() * Math.PI * 2,
                color: Math.random() > 0.8 ? '#EB0028' : 'rgba(255,255,255,0.3)' // Red or White
            });
        }
    }

    draw(time) {
        this.ctx.fillStyle = '#050505';
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.lines.forEach(line => {
            this.ctx.beginPath();
            this.ctx.strokeStyle = line.color;
            this.ctx.lineWidth = 1;

            for (let x = 0; x <= this.width; x += 20) {
                // Interaction
                const dist = Math.hypot(x - state.mouseX, line.y - state.mouseY);
                const interaction = Math.max(0, 100 - dist) / 100; // 0 to 1 based on proximity
                const waveImpulse = Math.sin(x * 0.01 + time * line.speed + line.offset);

                // Base wave + Interaction Ripple
                const waveY = line.baseY + (waveImpulse * line.amplitude) - (interaction * 50 * Math.sin(time * 0.1));

                if (x === 0) this.ctx.moveTo(x, waveY);
                else this.ctx.lineTo(x, waveY);
            }
            this.ctx.stroke();
        });
    }
}

let sea = null;
function initWaves() {
    if (!els.waveCanvas) return;
    sea = new Wave(els.waveCanvas);
    animateWaves();
}

function animateWaves() {
    state.waveTime += 1;
    if (sea) sea.draw(state.waveTime);
    requestAnimationFrame(animateWaves);
}

// ===================================
// CAMPUS SLIDER (SPIRIT OF WARANGAL)
// ===================================
function initCampusSlider() {
    if (!els.sliderTrack) return;

    renderSlider();

    if (els.slidePrev) els.slidePrev.addEventListener('click', () => changeSlide(-1));
    if (els.slideNext) els.slideNext.addEventListener('click', () => changeSlide(1));
}

function renderSlider() {
    if (!els.sliderTrack) return;
    els.sliderTrack.innerHTML = '';

    const imgPath = state.sliderImages[state.sliderIndex];
    const img = document.createElement('img');
    img.src = imgPath;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.position = 'absolute';
    img.style.top = '0';
    img.style.left = '0';
    img.style.opacity = '0'; // Start hidden for fade in
    img.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), filter 0.4s ease';
    img.style.transform = 'scale(1.1)'; // Slight zoom out effect

    // Global Grayscale class
    img.classList.add('grayscale-hover');

    els.sliderTrack.appendChild(img);

    // Force reflow
    void img.offsetWidth;

    img.style.opacity = '1';
    img.style.transform = 'scale(1)';
}

function changeSlide(dir) {
    const count = state.sliderImages.length;
    state.sliderIndex = (state.sliderIndex + dir + count) % count;
    renderSlider(); // Re-render triggers animation
}

function handleNavState(scrollY) {
    const threshold = window.innerHeight * 0.8;
    if (scrollY > threshold && els.nav) els.nav.classList.add('scrolled-nav');
    else if (els.nav) els.nav.classList.remove('scrolled-nav');
}

// ===================================
// INFINITE REEL LOGIC
// ===================================

// Preload all reel images on page load for smooth transitions (especially on GitHub Pages)
function preloadReelImages() {
    if (!els.reelItems) return;
    els.reelItems.forEach(item => {
        const imgSrc = item.getAttribute('data-img');
        if (imgSrc) {
            const preloader = new Image();
            preloader.src = imgSrc;
        }
    });
}

function initReel() {
    if (!els.reelList) return;

    // Preload all reel images for smooth transitions
    preloadReelImages();

    // Add Click Listeners
    if (els.reelUp) els.reelUp.addEventListener('click', () => cycleReel(-1));
    if (els.reelDown) els.reelDown.addEventListener('click', () => cycleReel(1));

    startAutoPlay();

    if (state.isMobile && els.reelItems) {
        els.reelItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                state.reelIndex = index;
                updateReelPosition();
            });
        });
    }

    // Initial Position
    updateReelPosition();
}

function cycleReel(direction) {
    if (!els.reelItems || els.reelItems.length === 0) return;
    const count = els.reelItems.length;
    state.reelIndex = (state.reelIndex + direction + count) % count;
    updateReelPosition();
    resetAutoPlay();
}

function updateReelPosition() {
    if (!els.reelItems) return;
    const count = els.reelItems.length;
    if (count === 0) return;

    if (state.isMobile) {
        // Mobile: Horizontal circular queue with 3 visible items (left, center, right)
        const viewportWidth = els.reelViewport ? els.reelViewport.offsetWidth : 300;
        const visibleItems = 3;
        const centerOffset = 1; // 1 left, active, 1 right

        // Hide all items first
        els.reelItems.forEach((item, i) => {
            item.style.display = 'none';
            item.classList.remove('active');
        });

        // Show only 3 items around the active one (circular)
        for (let offset = -centerOffset; offset <= centerOffset; offset++) {
            const idx = (state.reelIndex + offset + count) % count;
            const item = els.reelItems[idx];
            item.style.display = 'flex';
            item.style.position = 'absolute';
            item.style.top = '50%';
            item.style.transform = 'translateY(-50%)';
            item.style.width = 'auto';

            // Position horizontally: left (0-33%), center (33-66%), right (66-100%)
            if (offset === -1) {
                item.style.left = '5%';
                item.style.right = 'auto';
            } else if (offset === 0) {
                item.style.left = '50%';
                item.style.transform = 'translate(-50%, -50%)';
                item.classList.add('active');
                updateSpotlight(item);
            } else if (offset === 1) {
                item.style.left = 'auto';
                item.style.right = '5%';
            }
        }

        if (els.reelList) els.reelList.style.transform = 'none';
        return;
    }

    const itemHeight = 76;
    const visibleItems = 5; // Show 5 items at a time (2 above, active, 2 below)
    const viewportHeight = 350;
    const centerOffset = Math.floor(visibleItems / 2); // 2 items above active

    // Hide all items first
    els.reelItems.forEach((item, i) => {
        item.style.display = 'none';
        item.classList.remove('active');
    });

    // Show only items around the active one (circular)
    for (let offset = -centerOffset; offset <= centerOffset; offset++) {
        const idx = (state.reelIndex + offset + count) % count;
        const item = els.reelItems[idx];
        item.style.display = 'flex';

        // Position this item relative to center
        const positionFromCenter = offset;
        const topPosition = (viewportHeight / 2) - (itemHeight / 2) + (positionFromCenter * itemHeight);
        item.style.position = 'absolute';
        item.style.top = topPosition + 'px';
        item.style.width = '100%';

        if (offset === 0) {
            item.classList.add('active');
            updateSpotlight(item);
        }
    }

    // Reset transform since we're using absolute positioning now
    if (els.reelList) els.reelList.style.transform = 'none';
}

function updateSpotlight(item) {
    if (!els.spotlight || !els.spotlight.img) return;
    const img = item.getAttribute('data-img');
    const quote = item.getAttribute('data-quote');
    const author = item.getAttribute('data-author');

    if (els.spotlight.img.src.includes(img) && els.spotlight.quote.innerText === quote) return;

    // Preload image first, then swap
    const preloader = new Image();
    preloader.onload = function () {
        els.spotlight.img.style.opacity = 0;
        setTimeout(() => {
            els.spotlight.img.src = img;
            els.spotlight.quote.innerText = quote;
            els.spotlight.author.innerText = author;
            els.spotlight.img.style.opacity = 1;
        }, 150);
    };
    preloader.onerror = function () {
        // Fallback if preload fails - just swap anyway
        els.spotlight.img.src = img;
        els.spotlight.quote.innerText = quote;
        els.spotlight.author.innerText = author;
    };
    preloader.src = img;
}

function startAutoPlay() {
    if (state.autoPlayInterval) clearInterval(state.autoPlayInterval);
    state.autoPlayInterval = setInterval(() => {
        cycleReel(1);
    }, 5000);
}

function resetAutoPlay() {
    startAutoPlay();
}

// ===================================
// ARCHIVE: GRID & DRAWER
// ===================================

function initArchive() {
    if (!els.gridContainer) return;

    // Timeline Listeners
    if (els.vol2017) {
        els.vol2017.addEventListener('click', () => switchVol("2017"));
    }
    if (els.vol2018) {
        els.vol2018.addEventListener('click', () => switchVol("2018"));
    }
    if (els.vol2020) {
        els.vol2020.addEventListener('click', () => switchVol("2020"));
    }
    if (els.vol2021) {
        els.vol2021.addEventListener('click', () => switchVol("2021"));
    }

    // Force initialization to 2021 to sync everything
    // This handles: header text, active classes, and grid rendering
    switchVol("2021");

    setupDrawer();
    setupTimeline();
}

function switchVol(year) {
    // Allow re-switching if needed for init, so remove the early return check for init
    state.currentVol = year;

    // Update Header
    const meta = archiveData[year].meta;
    if (els.archiveMeta) els.archiveMeta.innerText = `ARCHIVED EVENT // ${meta.date}`;
    if (els.archiveTitle) els.archiveTitle.innerText = meta.title;
    if (els.archiveLocation) els.archiveLocation.innerText = meta.location;
    if (els.archivePrologue) els.archivePrologue.innerText = meta.prologue;

    // Update Active State
    // Remove active from all
    if (els.vol2017) els.vol2017.classList.remove('active');
    if (els.vol2018) els.vol2018.classList.remove('active');
    if (els.vol2020) els.vol2020.classList.remove('active');
    if (els.vol2021) els.vol2021.classList.remove('active');

    // Add active to selected
    if (year === "2017" && els.vol2017) {
        els.vol2017.classList.add('active');
    } else if (year === "2018" && els.vol2018) {
        els.vol2018.classList.add('active');
    } else if (year === "2020" && els.vol2020) {
        els.vol2020.classList.add('active');
    } else if (year === "2021" && els.vol2021) {
        els.vol2021.classList.add('active');
    }

    // Update Footer Label
    const footer = document.querySelector('.archive-end-mark');
    if (footer) {
        if (year === "2017") footer.innerText = "End of Vol. I Record";
        else if (year === "2018") footer.innerText = "End of Vol. II Record";
        else if (year === "2020") footer.innerText = "End of Vol. III Record";
        else if (year === "2021") footer.innerText = "End of Vol. IV Record";
    }

    // Re-render Grid with Animation
    els.gridContainer.style.opacity = 0;
    setTimeout(() => {
        renderGrid();
        els.gridContainer.style.opacity = 1;
    }, 300);
}

function renderGrid() {
    els.gridContainer.innerHTML = ''; // Clear
    const speakers = archiveData[state.currentVol].speakers;

    speakers.forEach(speaker => {
        const card = document.createElement('div');
        card.className = 'archive-card';
        // IMPORTANT: Arrow function needed to capture correct ID
        card.onclick = function () { openDrawer(speaker.id); };

        card.innerHTML = `
            <img src="${speaker.image}" alt="${speaker.name}" class="archive-card-img">
            <div class="archive-info">
                <span class="speaker-role">${speaker.role}</span>
                <h2 class="speaker-name">${speaker.name}</h2>
                <div class="speaker-quote">"${speaker.quote}"</div>
                <div class="archive-btn">View Dossier</div>
            </div>
        `;
        els.gridContainer.appendChild(card);
    });
}

function setupDrawer() {
    if (els.drawerBackdrop) {
        els.drawerBackdrop.addEventListener('click', closeDrawer);
    }
    if (els.drawerClose) {
        els.drawerClose.addEventListener('click', closeDrawer);
    }
}

function openDrawer(id) {
    const speakers = archiveData[state.currentVol].speakers;
    const data = speakers.find(s => s.id === id);
    if (!data) return;

    // Populate data
    if (els.dImg) els.dImg.src = data.image; // uses object-position: center top from css
    if (els.dName) els.dName.innerText = data.name;
    if (els.dRole) els.dRole.innerText = data.role;
    if (els.dQuote) els.dQuote.innerText = `"${data.quote}"`;
    if (els.dBio) els.dBio.innerText = data.bio;

    // Video
    if (els.dVideo) {
        if (data.videoID) {
            els.dVideo.src = `https://www.youtube.com/embed/${data.videoID}?rel=0&modestbranding=1`;
        } else {
            els.dVideo.src = '';
        }
    }

    // Show
    if (els.drawerBackdrop) els.drawerBackdrop.classList.add('open');
    if (els.drawerPanel) els.drawerPanel.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeDrawer() {
    if (els.drawerBackdrop) els.drawerBackdrop.classList.remove('open');
    if (els.drawerPanel) els.drawerPanel.classList.remove('open');
    document.body.style.overflow = '';

    // Stop video
    if (els.dVideo) {
        setTimeout(() => {
            els.dVideo.src = '';
        }, 400);
    }
}

function setupTimeline() {
    if (!els.timelineFuture || !els.timelineFutureLabel) return;

    els.timelineFuture.addEventListener('click', () => {
        const originalText = "VOL. II: 2026";
        const tempText = "COMING SOON";

        if (els.timelineFutureLabel.innerText === tempText) return;

        // Animate Out
        els.timelineFutureLabel.style.opacity = 0;

        // Change Text & Animate In
        setTimeout(() => {
            els.timelineFutureLabel.innerText = tempText;
            els.timelineFutureLabel.style.color = 'var(--red-primary)';
            els.timelineFutureLabel.style.opacity = 1;
        }, 300);

        // Revert
        setTimeout(() => {
            els.timelineFutureLabel.style.opacity = 0;
            setTimeout(() => {
                els.timelineFutureLabel.innerText = originalText;
                els.timelineFutureLabel.style.color = '';
                els.timelineFutureLabel.style.opacity = 1;
            }, 300);
        }, 2000);
    });
}


// ===================================
// AUDIENCE GENERATION (THE TRANSMISSION)
// ===================================
function initAudience() {
    if (!els.audienceGrid) return;

    const rows = [
        { radius: 15, count: 20 },
        { radius: 25, count: 35 },
        { radius: 35, count: 45 }
    ];

    const startAngle = 25; // Degrees (0 is right, 90 is down)
    const endAngle = 155;
    const centerX = 50; // %
    const centerY = 15; // % (Speaker position)
    const aspectRatioMulti = 16 / 9; // To correct vertical distortion in %

    rows.forEach(row => {
        for (let i = 0; i < row.count; i++) {
            const progress = i / (row.count - 1);
            const angleDeg = startAngle + (progress * (endAngle - startAngle));
            const angleRad = angleDeg * (Math.PI / 180);

            // Calculate Position in %
            const x = centerX + (row.radius * Math.cos(angleRad));
            const y = centerY + (row.radius * Math.sin(angleRad) * aspectRatioMulti);

            // Create Dot
            const dot = document.createElement('div');
            dot.className = 'audience-dot';
            dot.style.left = `${x}%`;
            dot.style.top = `${y}%`;

            // Random tiny delay for staggered entrance (optional polish)
            dot.style.transitionDelay = `${Math.random() * 0.5}s`;

            els.audienceGrid.appendChild(dot);
        }
    });

    // Animate in logic could go here, but CSS handles hover states.
}

// ===================================
// STARTUP
// ===================================

function init() {
    console.log("Initializing TEDx NITW Logic...");
    cacheElements(); // Populate 'els' now that DOM is definitely ready

    initScroll();
    initWaves();
    initCampusSlider();
    initReel();
    initArchive();
    initAudience();

    // Mobile Menu
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'black';
                navLinks.style.padding = '2rem';
            }
        });
    }
}

// Run init when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init(); // Run immediately if already loaded
}
