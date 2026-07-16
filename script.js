let waterCount = 0;
const maxWater = 5;

const plant = document.getElementById("plant");
const progress = document.getElementById("progress");
const waterBtn = document.getElementById("water-btn");
const fortuneBox = document.getElementById("fortune-box");
const fortuneText = document.getElementById("fortune-text");

const cloud1 = document.querySelector(".cloud1");
const cloud2 = document.querySelector(".cloud2");

const fortunes = [
    "A wild whale will bring you good vibes today!",
    "An unexpected treat is coming you way soon.",
    "A spark of inspiration will hit you today.",
    "Your luck is blooming just like this flower!",
    "The weather going to be your favorite today.",
    "Your hardwork will pay off soon."
];


waterBtn.addEventListener("click", () => {
    if (waterCount < maxWater) {
        waterCount++;

        const percentage = (waterCount / maxWater) * 100;
        progress.style.width = percentage + "%";

        plant.classList.add("shake");
        setTimeout(() => plant.classList.remove("shake"), 400);

        if (waterCount === 2) {
            plant.src = "assets/sprout.png"
        } else if (waterCount === maxWater) {
            plant.src = "assets/flower.png"
            plant.classList.add("flower")

            const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
            fortuneText.innerText = randomFortune;
            fortuneBox.classList.remove("hidden")

            waterBtn.innerText = "fully grown!"
            waterBtn.disabled = true;
            waterBtn.style.backgroundColor = "#8ec07c"
            waterBtn.style.borderColor = "#7bb068"
        }
    }
}
)

function randomizeCloud(cloud) {
    const randomTop = Math.floor(Math.random() * 25) + 10;
    cloud.style.top = `${randomTop}%`;
}

randomizeCloud(cloud1);
randomizeCloud(cloud2);

cloud1.addEventListener('animationiteration', () => randomizeCloud(cloud1));
cloud2.addEventListener('animationiteration', () => randomizeCloud(cloud2));