const API_URL = "https://valorant-api.com/v1/weapons";

const list = document.getElementById("list");

RunRun();

async function RunRun() {
    await getList(API_URL);
    getList2();
}

async function getList(url) {
    const res = await fetch(url);
    const data = await res.json();
    showList(data.data);
}

function showList(data) {
    list.innerHTML = "";
    data.forEach((weapon) => {
        const img = weapon.displayIcon;
        const name = weapon.displayName;
        const weaponEl = document.createElement("div");
        weaponEl.classList.add("weapon");
        weaponEl.classList.add("active");

        weaponEl.innerHTML = `
        <img src="${img}" class= "weapon-display img-fluid">
        <p class="weapon-name">${name}</p>
        `;
        list.appendChild(weaponEl);
    });
}
