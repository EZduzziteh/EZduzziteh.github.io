
// === PROJECT DATA ===

// Each project can have: 
// title, description, img, screenshots, video, tech[], colors{primary, secondary, accent, bgGradient}, links{steam, itch, demo}

const gameProjects = [
    {
        title: "Jeller Fellers",
        description: "A 3D physics-based platformer where you play as a jelly cube!",
        img: "https://img.itch.zone/aW1nLzIwODc5NDAxLnBuZw==/315x250%23c/1ebaou.png",
        screenshots: [
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2451550/f6642463670820c8ebe8d5a77935f6988277208e/ss_f6642463670820c8ebe8d5a77935f6988277208e.1920x1080.jpg?t=1765997637",
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2451550/8f4ab1628971f9c38461aae5f2e24987e968f475/ss_8f4ab1628971f9c38461aae5f2e24987e968f475.1920x1080.jpg?t=1765997637",
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2451550/365afcd16ef2f4213b6371c4480d7872ea74e437/ss_365afcd16ef2f4213b6371c4480d7872ea74e437.1920x1080.jpg?t=1765997637"
        ],
        video: "https://www.youtube.com/embed/pkNsK55cnpc",
        tech: ["Unity", "C#", "NVIDIA Flex", "GPU Optimization"],
        colors: {
            primary: "#9e4a9a",
            secondary: "#d17db8",
            accent: "#dfdbde",
            bgGradient: "linear-gradient(135deg, #dcb3e4, #a45db9, #963188)"
        },
        links: {
            steam: "https://store.steampowered.com/app/2451550/Jeller_Fellers/",
            itch: "https://ezduzziteh.itch.io/jeller-fellers"
        }
    },
    {
        title: "The Herd",
        description: "A wacky little game about getting your herd into the pen! Avoid falling off the map and use tools like launch pads and wind makers.",
        img: "https://img.itch.zone/aW1nLzIwNDI0NTU3LnBuZw==/315x250%23c/X03E7S.png",
        screenshots: ["https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2933210/14badc5b0e36d9ebe1c66851b223cbf944e0292e/ss_14badc5b0e36d9ebe1c66851b223cbf944e0292e.1920x1080.jpg?t=1754486879",
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2933210/83f7d539461d043a7e7b9a50425e7a4219503f67/ss_83f7d539461d043a7e7b9a50425e7a4219503f67.1920x1080.jpg?t=1754486879",
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2933210/fe2c81799230c9850611085f128848fd781ee173/ss_fe2c81799230c9850611085f128848fd781ee173.1920x1080.jpg?t=1754486879"
        ],
        video: "",
        tech: ["Unity", "C#"],
        colors: {
            primary: "#ff7043",
            secondary: "#857840",
            accent: "#ffcc80",
            bgGradient: "linear-gradient(135deg, #ffe0b2, #ffccbc, #ffab91)"
        },
        links: { steam: "https://store.steampowered.com/app/2933210/The_Herd/" }
    },
    {
        title: "Defence of the Arcane Realms",
        description: "Fantasy tower defense with spells and towers to fight hordes of enemies.",
        img: "https://img.itch.zone/aW1nLzE1MjY3MzU3LmpwZw==/315x250%23c/0%2FnJdu.jpg",
        screenshots: ["https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2453150/ss_4b8c1b73c35138ee9c72460e89d277d791ece086.1920x1080.jpg?t=1744755218",
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2453150/ss_b711aae667d94d78add9df6e9310a7b1f4d25d77.1920x1080.jpg?t=1744755218",
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2453150/ss_c3f2ea18243261550c2e807a2f07a5684cd7d5cd.1920x1080.jpg?t=1744755218"
        ],
        video: "https://www.youtube.com/watch?v=kc_XiA_Sh6U&feature=youtu.be",
        tech: ["Unity", "C#"],
        colors: {
            primary: "#673ab7",
            secondary: "#3f51b5",
            accent: "#d1c4e9",
            bgGradient: "linear-gradient(135deg, #e1bee7, #d1c4e9, #b39ddb)"
        },
        links: { steam: "https://store.steampowered.com/app/2453150/Defence_of_the_Arcane_Realms/" }
    },
    {
        title: "Scootpocalypse",
        description: "A game jam game about rescuing your friends and family on a mobility scooter in the apocalypse.",
        img: "https://img.itch.zone/aW1nLzIyNzMxODA1LnBuZw==/315x250%23c/T%2FOTln.png",
        screenshots: ["https://img.itch.zone/aW1hZ2UvMzgwMDg2MS8yMjk2MTU2OC5wbmc=/347x500/pXlhm0.png","https://img.itch.zone/aW1hZ2UvMzgwMDg2MS8yMjk2MTU2Ni5wbmc=/347x500/scN0m8.png","https://img.itch.zone/aW1hZ2UvMzgwMDg2MS8yMjk2MTU2Ny5wbmc=/347x500/T8QldL.png"],
        video: "",
        tech: ["Unity", "C#"],
        colors: {
            primary: "#f55d17",
            secondary: "#ffb300",
            accent: "#ffe082",
            bgGradient: "linear-gradient(135deg, #fff8e1, #ffecb3, #ffe082)"
        },
        links: { itch: "https://ezduzziteh.itch.io/scootpocalypse" }
    },
    {
        title: "Temple Explorer",
        description: "A 3D Action/Adventure game.",
        img: "https://img.itch.zone/aW1nLzE1NjkwOTI4LnBuZw==/315x250%23c/roCx3L.png",
        screenshots: ["https://img.itch.zone/aW1hZ2UvMjEzNjQ5My8xMjU5NDg0MC5wbmc=/347x500/7joYmA.png","https://img.itch.zone/aW1hZ2UvMjEzNjQ5My8xMjU5NDgzMS5wbmc=/347x500/E9%2FjEG.png"],
        video: "",
        tech: ["Unity", "C#"],
        colors: {
            primary: "#009664",
            secondary: "#4d98b6",
            accent: "#d2f3f0",
            bgGradient: "linear-gradient(135deg, #e0f2f1, #b2dfdb, #80cbc4)"
        },
        links: { itch: "https://ezduzziteh.itch.io/temple-explorer" }
    },
    {
        title: "Belt Skipper",
        description: "Pilot a malfunctioning spaceship through an asteroid field using gravity slingshots.",
        img: "https://img.itch.zone/aW1nLzM4MzE2MjYucG5n/315x250%23c/JnMN19.png",
        screenshots: ["https://img.itch.zone/aW1hZ2UvNjk1MDkxLzM4MzE2NDcucG5n/250x600/DcKfkW.png","https://img.itch.zone/aW1hZ2UvNjk1MDkxLzM4MzE2MzMucG5n/250x600/sp9wlj.png"],
        video: "https://www.youtube.com/watch?v=Omy6vstkaPQ",
        tech: ["Unity", "C#"],
        colors: {
            primary: "#2c2c2c",
            secondary: "#795548",
            accent: "#d7ccc8",
            bgGradient: "linear-gradient(135deg, #efebe9, #d7ccc8, #bcaaa4)"
        },
        links: { itch: "https://ezduzziteh.itch.io/belt-skipper" }
    },
    {
        title: "Voidfleet Admiral",
        description: "Tactical fleet combat game where you manage and pilot your own fleet.",
        img: "https://img.itch.zone/aW1nLzIwNjA0OTgzLnBuZw==/315x250%23c/ezXA5f.png",
        screenshots: ["https://img.itch.zone/aW1hZ2UvMzQ1NDE3Ny8yMDYwNTA0NC5wbmc=/original/2GCjms.png", "https://img.itch.zone/aW1hZ2UvMzQ1NDE3Ny8yMDYwNTA0Ni5wbmc=/original/zAHTt3.png"],
        video: "",
        tech: ["Unity", "C#"],
        colors: {
            primary: "#0d47a1",
            secondary: "#1976d2",
            accent: "#64b5f6",
            bgGradient: "linear-gradient(135deg, #bbdefb, #90caf9, #64b5f6)"
        },
        links: { itch: "https://ezduzziteh.itch.io/voidfleet-admiral" }
    },
    {
        title: "Bug Splat!",
        description: "An Incremental Game about squishing bugs!",
        img: "https://img.itch.zone/aW1nLzI0OTEwMDU5LnBuZw==/315x250%23c/ovPDJy.png",
        screenshots: ["https://img.itch.zone/aW1hZ2UvNDE3OTEwNi8yNDkwOTI5My5wbmc=/original/6iYL1U.png","https://img.itch.zone/aW1hZ2UvNDE3OTEwNi8yNDkwOTI5NC5wbmc=/original/ESNdZw.png"],
        video: "",
        tech: ["Unity", "C#"],
        colors: {
            primary: "#f44336",
            secondary: "#e57373",
            accent: "#ffcdd2",
            bgGradient: "linear-gradient(135deg, #ffcdd2, #ef9a9a, #e57373)"
        },
        links: { itch: "https://ezduzziteh.itch.io/bug-splat" }
    },
    {
        title: "Forlorn",
        description: "A short dungeon crawler.",
        img: "https://img.itch.zone/aW1nLzM4ODAyMTIucG5n/315x250%23c/GEFCXz.png",
        screenshots: ["https://img.itch.zone/aW1hZ2UvNDAxMTQ5LzM4ODAyMTEucG5n/347x500/%2BQvnp7.png"],
        video: "",
        tech: ["Unity", "C#"],
        colors: {
            primary: "#4e342e",
            secondary: "#6d4c41",
            accent: "#d7ccc8",
            bgGradient: "linear-gradient(135deg, #efebe9, #d7ccc8, #bcaaa4)"
        },
        links: { itch: "https://ezduzziteh.itch.io/forlorn" }
    },
    {
        title: "Harvest Pizza",
        description: "A silly game about harvesting pizza plants, making pizzas, and delivering them.",
        img: "https://img.itch.zone/aW1nLzU2MjA3NDgucG5n/315x250%23c/OsYcdP.png",
        screenshots: [],
        video: "",
        tech: ["Unity", "C#"],
        colors: {
            primary: "#ff8f00",
            secondary: "#ffb300",
            accent: "#ffe082",
            bgGradient: "linear-gradient(135deg, #fff8e1, #ffecb3, #ffe082)"
        },
        links: { itch: "https://ezduzziteh.itch.io/harvest-pizza" }
    },
    {
        title: "Bok-Mon",
        description: "A Pac-Man-like game where you play as a chicken collecting worms and avoiding wolves.",
        img: "https://img.itch.zone/aW1nLzIxNzQ0MDA4LnBuZw==/315x250%23c/kO7z4G.png",
        screenshots: ["https://img.itch.zone/aW1hZ2UvMjEzNjM5Ny8yMTc0Mzk4Ni5wbmc=/347x500/6rqqzT.png", "https://img.itch.zone/aW1hZ2UvMjEzNjM5Ny8yMTc0Mzk4Ny5wbmc=/347x500/MQ1Hxw.png"],
        video: "",
        tech: ["Unity", "C#"],
        colors: {
            primary: "#ffcc80",
            secondary: "#ffb74d",
            accent: "#ffe0b2",
            bgGradient: "linear-gradient(135deg, #fff3e0, #ffe0b2, #ffcc80)"
        },
        links: { itch: "https://ezduzziteh.itch.io/bok-mon" }
    },
    {
        title: "Trashbot",
        description: "A small side project made in an evening, inspired by Wall-E.",
        img: "https://img.itch.zone/aW1nLzIxMTgyOTE1LnBuZw==/315x250%23c/GcG%2FlS.png",
        screenshots: ["https://img.itch.zone/aW1hZ2UvMzU1NjEzMi8yMTE4Mjk2NS5wbmc=/original/LXqHw9.png","https://img.itch.zone/aW1hZ2UvMzU1NjEzMi8yMTE4Mjk2Ni5wbmc=/original/EFQMRz.png","https://img.itch.zone/aW1hZ2UvMzU1NjEzMi8yMTE4Mjk2OS5wbmc=/original/1jfrmQ.png"],
        video: "https://www.youtube.com/watch?v=CyUpf0bhzZI",
        tech: ["Unity", "C#"],
        colors: {
            primary: "#607d8b",
            secondary: "#90a4ae",
            accent: "#cfd8dc",
            bgGradient: "linear-gradient(135deg, #eceff1, #cfd8dc, #b0bec5)"
        },
        links: { itch: "https://ezduzziteh.itch.io/trashbot" }
    },
    {
        title: "Super Blocky Kong",
        description: "A 3D platformer inspired by DK 64 and Super Mario 64.",
        img: "https://img.itch.zone/aW1nLzIxNDMxODE1LnBuZw==/315x250%23c/RFhn5G.png",
        screenshots: ["https://img.itch.zone/aW1hZ2UvODQxNTIyLzIxNDMxODExLnBuZw==/original/cDj7yF.png","https://img.itch.zone/aW1hZ2UvODQxNTIyLzIxNDMxODEwLnBuZw==/original/HAwcaB.png","https://img.itch.zone/aW1hZ2UvODQxNTIyLzIxNDMxODEyLnBuZw==/original/0Wg5HX.png"],
        video: "",
        tech: ["Unity", "C#"],
        colors: {
            primary: "#1b5e20",
            secondary: "#4caf50",
            accent: "#a5d6a7",
            bgGradient: "linear-gradient(135deg, #e8f5e9, #c8e6c9, #a5d6a7)"
        },
        links: { itch: "https://ezduzziteh.itch.io/super-blocky-kong" }
    },
    {
        title: "The Last Legions",
        description: "A turn-based strategy game based on Warhammer rules.",
        img: "https://img.itch.zone/aW1nLzQ1ODQzOTMucG5n/315x250%23c/RddpT7.png",
        screenshots: ["https://img.itch.zone/aW1hZ2UvNzA3Mzc2LzQ1ODQzOTYucG5n/original/aRhPwT.png","https://img.itch.zone/aW1hZ2UvNzA3Mzc2LzQ1ODUxODcucG5n/original/uYgSUp.png","https://img.itch.zone/aW1hZ2UvNzA3Mzc2LzQ1ODQzOTQucG5n/original/Y8Rb1W.png"],
        video: "",
        tech: ["Unity", "C#"],
        colors: {
            primary: "#3e2723",
            secondary: "#795548",
            accent: "#d7ccc8",
            bgGradient: "linear-gradient(135deg, #efebe9, #d7ccc8, #bcaaa4)"
        },
        links: { itch: "https://ezduzziteh.itch.io/the-last-legions" }
    },
    {
        title: "Whack Frick",
        description: "A 3D platformer inspired by DK 64 and Super Mario 64.",
        img: "https://img.itch.zone/aW1nLzIyOTgwNDQ2LnBuZw==/315x250%23c/QS%2FYIX.png",
        screenshots: ["https://img.itch.zone/aW1hZ2UvMzcwNjQ4Ny8yMjA1NzE2My5wbmc=/347x500/gQvZFE.png","https://img.itch.zone/aW1hZ2UvMzcwNjQ4Ny8yMjA1NzE2NC5wbmc=/347x500/s%2BsDlH.png"],
        video: "",
        tech: ["Unity", "C#"],
        colors: {
            primary: "#1b5e20",
            secondary: "#4caf50",
            accent: "#a5d6a7",
            bgGradient: "linear-gradient(135deg, #e8f5e9, #c8e6c9, #a5d6a7)"
        },
        links: { itch: "https://ezduzziteh.itch.io/whack-frick" }
    },
    {
        title: "Blockbuster",
        description: "A game about busting blocks with a paddle and a bouncing ball.",
        img: "https://img.itch.zone/aW1nLzM4ODAyNDcucG5n/315x250%23c/Twr33B.png",
        screenshots: [],
        video: "",
        tech: ["Unity", "C#"],
        colors: {
            primary: "#f4511e",
            secondary: "#ff7043",
            accent: "#ffccbc",
            bgGradient: "linear-gradient(135deg, #fbe9e7, #ffccbc, #ffab91)"
        },
        links: { itch: "https://ezduzziteh.itch.io/blockbuster" }
    }
];


const toolProjects = [
    {
        title: "Foliage Spawner",
        description: "Automated foliage placement for large environments.",
        img: "images/tools/procedural foliage.png",
        screenshots: [],
        video: "https://www.youtube.com/watch?v=4u6GDCMFi6w",
        tech: ["Unity", "Editor Tool"],
        colors: {
            primary: "#388e3c",
            secondary: "#81c784",
            accent: "#c8e6c9",
            bgGradient: "linear-gradient(135deg, #e8f5e9, #c8e6c9, #a5d6a7)"
        },
        links: { demo: "https://www.youtube.com/watch?v=4u6GDCMFi6w" }
    },  
    {
        title: "Procedural Generation: Terrain, Overworld and Dungeons",
        description: "Created in Unreal C++, Overworld is generated procedurally, with various locations being created that you can go into, which also feature procedural generation. The terrain is dynamically generated at runtime and can be loaded/unloaded as needed",
        img: "images/tools/procedural terrain.png",
        screenshots: [],
        video: "https://www.youtube.com/watch?v=bkNxPssp4F8",
        tech: ["Unity", "Editor Tool", "C++", "Blueprint"],
        colors: {
            primary: "#925c1f",
            secondary: "#b67752",
            accent: "#c49c18",
            bgGradient: "linear-gradient(135deg, #e8f5e9, #c8e6c9, #a5d6a7)"
        },
        links: { demo: "https://www.youtube.com/watch?v=bkNxPssp4F8" }
    },  
    {
        title: "Wave Designer",
        description: "A visual scripting tool to define enemy waves, timing, and patterns for tower defense levels.",
        img: "images/tools/wavedesigner.png",
        screenshots: [],
        video: "https://www.youtube.com/watch?v=LDQ8EeYy7zg",
        tech: ["Unity", "Editor Tool"],
        colors: {
            primary: "#4d4d4d",
            secondary: "#858585",
            accent: "#e0e0e0",
            bgGradient: "linear-gradient(135deg, #e8f5e9, #828382, #555555)"
        },
        links: { demo: "https://www.youtube.com/watch?v=LDQ8EeYy7zg" }
    },
    // Add more tools here
];

const programmingProjects = [
    {
        title: "Fog of War System",
        description: "Built in Unity C#, uses a Render Texture to handle visibility in-game.",
        img: "images/programming/fog of war system.jpg",
        screenshots: [],
        video: "https://www.youtube.com/embed/rWdGUxNkFvI",
        tech: ["Unity", "C#"],
        colors: {
            primary: "#5c5c5c",
            secondary: "#252525",
            accent: "#929292",
            bgGradient: "linear-gradient(135deg, #e1f5fe, #b3e5fc, #81d4fa)"
        },
        links: { demo: "https://www.youtube.com/watch?v=rWdGUxNkFvI&feature=youtu.be" }
    },
    {
        title: "Dynamic Topic Based Dialogue System",
        description: "Created in Unreal C++, allows for various dialogue topics to be learned by the player, and asked about to npcs that know about the topic. Topics can be learned from world events, talking to npcs, or reading notes.",
        img: "images/programming/tpic based dialogue system.png",
        screenshots: [],
        video: "https://youtu.be/VmbcoLSQpNc?t=372",
        tech: ["Unreal", "C++", "Blueprint"],
        colors: {
            primary: "#c47806",
            secondary: "#7a4805",
            accent: "#d85a1f",
            bgGradient: "linear-gradient(135deg, #feefe1, #fcd0b3, #faca81)"
        },
        links: { demo: "https://youtu.be/VmbcoLSQpNc?t=372" }
    },
    {
        title: "Ocean Simulation + Wind System + Sailing System",
        description: "Built in Unity, using a custom shader to render water using layered Gerstner waves",
        img: "images/programming/ocean sailing system.png",
        screenshots: [],
        video: "https://www.youtube.com/watch?v=KUW0B8_nFng&feature=youtu.be",
        tech: ["Unity", "C#", "Shader Graph"],
        colors: {
            primary: "#0277bd",
            secondary: "#29b6f6",
            accent: "#81d4fa",
            bgGradient: "linear-gradient(135deg, #e1f5fe, #b3e5fc, #81d4fa)"
        },
        links: { demo: "https://www.youtube.com/watch?v=KUW0B8_nFng&feature=youtu.be" }
    },
    // Add more programming projects here
];

// === RENDER FUNCTION ===
function renderCards(projects, containerSelector) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = "";

    projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";

        card.innerHTML = `
            <img src="${project.img}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;

        card.addEventListener("click", () => openOverlay(project));

        container.appendChild(card);
    });
}
// ================================
// TAB LOGIC
// ================================
document.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll("nav a");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", e => {
            e.preventDefault();
            const target = tab.dataset.tab;

            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            tab.classList.add("active");
            document.getElementById(target).classList.add("active");
        });
    });

    renderCards(gameProjects, ".project-grid");
    renderCards(toolProjects, ".tool-grid");
    renderCards(programmingProjects, ".programming-grid");
});


// ================================
// YOUTUBE URL FIXER
// ================================
function getEmbedURL(url) {
    if (!url) return "";

    if (url.includes("youtube.com/embed")) return url;

    if (url.includes("watch?v=")) {
        const id = url.split("watch?v=")[1].split("&")[0];
        const timeMatch = url.match(/[?&]t=(\d+)/);
        const start = timeMatch ? `?start=${timeMatch[1]}` : "";
        return `https://www.youtube.com/embed/${id}${start}`;
    }

    if (url.includes("youtu.be/")) {
        const id = url.split("youtu.be/")[1].split("?")[0];
        const timeMatch = url.match(/[?&]t=(\d+)/);
        const start = timeMatch ? `?start=${timeMatch[1]}` : "";
        return `https://www.youtube.com/embed/${id}${start}`;
    }

    return url;
}


// ================================
// RENDER CARDS
// ================================
function renderCards(projects, containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    container.innerHTML = "";

    projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";

        card.innerHTML = `
            <img src="${project.img}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;

        card.addEventListener("click", () => openOverlay(project));
        container.appendChild(card);
    });
}


// ================================
// OVERLAY SETUP (uses your CSS)
// ================================
const overlay = document.createElement("div");
overlay.className = "project-overlay"; // uses your CSS
overlay.style.display = "none";

overlay.innerHTML = `
    <div class="overlay-content"></div>
    <button class="close-overlay">&times;</button>
`;

document.body.appendChild(overlay);


// ================================
// OVERLAY LOGIC
// ================================
function openOverlay(project) {

    const content = overlay.querySelector(".overlay-content");

    // Apply project theme colors (optional)
    if (project.colors) {
        document.documentElement.style.setProperty("--primary", project.colors.primary);
        document.documentElement.style.setProperty("--secondary", project.colors.secondary);
        document.documentElement.style.setProperty("--accent", project.colors.accent);
        document.documentElement.style.setProperty("--bg-gradient", project.colors.bgGradient);
    }

    content.innerHTML = `
        <section class="hero">
            <h1>${project.title}</h1>
            <p class="tagline">${project.description}</p>
        </section>

        ${project.screenshots && project.screenshots.length > 0
            ? `<section>
                 <div class="gallery">
                     ${project.screenshots.map(src => `<img src="${src}">`).join("")}
                 </div>
               </section>`
            : ""}

        ${project.video
            ? `<section>
                 <div class="video-container">
                    <iframe
                        src="${getEmbedURL(project.video)}"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                 </div>
               </section>`
            : ""}

        ${project.tech && project.tech.length > 0
            ? `<section>
                 <div class="tech-grid">
                    ${project.tech.map(t => `<div>${t}</div>`).join("")}
                 </div>
               </section>`
            : ""}

        ${project.links
            ? `<section>
                 ${Object.entries(project.links)
                    .map(([k, v]) =>
                        `<a href="${v}" target="_blank">${k.toUpperCase()}</a>`
                    ).join(" ")}
               </section>`
            : ""}
    `;

    overlay.style.display = "flex";

    // Close button
    overlay.querySelector(".close-overlay").onclick = () => {
        overlay.style.display = "none";
        content.innerHTML = ""; // clears video (stops playback)
    };

    setupLightbox();
}


// ================================
// LIGHTBOX
// ================================
function setupLightbox() {

    let lightbox = overlay.querySelector(".lightbox");

    if (!lightbox) {
        lightbox = document.createElement("div");
        lightbox.className = "lightbox";

        lightbox.innerHTML = `
            <span class="close">&times;</span>
            <img class="lightbox-content">
        `;

        overlay.appendChild(lightbox);

        lightbox.querySelector(".close").onclick = () => {
            lightbox.style.display = "none";
        };

        lightbox.onclick = (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = "none";
            }
        };
    }

    const images = overlay.querySelectorAll(".gallery img");
    const lbImg = lightbox.querySelector(".lightbox-content");

    images.forEach(img => {
        img.onclick = () => {
            lbImg.src = img.src;
            lightbox.style.display = "flex";
        };
    });
}
