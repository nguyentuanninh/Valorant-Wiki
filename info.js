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
let list2 = document.querySelectorAll(".weapon");

function getList2() {
    list2 = document.querySelectorAll(".weapon");
    getWeapon("https://valorant-api.com/v1/weapons");
}

async function getWeapon(url) {
    const res = await fetch(url);
    const data = await res.json();
    showWeapon(data.data);
}

function showWeapon(data) {
    list2.forEach((weaponEl, index) => {
        weaponEl.addEventListener("click", () => {
            console.log(data[index]);
            weaponsName.innerText = data[index].displayName;
            displayIcon.src = `${data[index].displayIcon}`;
            // type.innerText= data[index].
            creds.innerText = data[index].shopData.cost;
            magazine.innerText = data[index].weaponStats.magazineSize;
            // wallPenetration.innerText = data[index].weaponStats.wallPenetration;

            // fireMode.innerText = data[index].weaponStats.fireMode
            //     ? data[index].weaponStats.fireMode
            //     : "NO";
            fireRate.innerText = data[index].weaponStats.fireRate;
            reload.innerText = data[index].weaponStats.reloadTimeSeconds;
            equip.innerText = data[index].weaponStats.equipTimeSeconds;
            runSpeed.innerText = data[index].weaponStats.runSpeedMultiplier;
            fist.innerText = data[index].weaponStats.firstBulletAccuracy;
            zoom.innerText = data[index].weaponStats.adsStats.zoomMultiplier;
        });
    });
}
