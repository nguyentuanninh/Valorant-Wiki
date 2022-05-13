// const API_URL = "https://valorant-api.com/v1/weapons";

const weaponsName = document.getElementById("weapons-name");
const displayIcon = document.getElementById("displayIcon");
const type = document.getElementById("type");
const creds = document.getElementById("creds");
const magazine = document.getElementById("magazine");
const wallPenetration = document.getElementById("wall-penetration");
const fireMode = document.getElementById("fire-mode");
const fireRate = document.getElementById("fire-rate");
const reload = document.getElementById("reload-time-seconds");
const equip = document.getElementById("equip-time-seconds");
const runSpeed = document.getElementById("run-speed-multiplier");
const fist = document.getElementById("first-bullet-accuracy");
const zoom = document.getElementById("zoom-multiplier");

getWeapon("https://valorant-api.com/v1/weapons");

async function getWeapon(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data);
    showWeapon(data.data);
}

const list2 = document.querySelectorAll(".weapon");

function showWeapon(data) {
    list2.forEach((weaponEl) => {
        weaponEl.addEventListener("click", () => {});
    });
}
