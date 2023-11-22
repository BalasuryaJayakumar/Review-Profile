const proInfoArray = [
    {
        id: 1,
        name: "Liza Abraham",
        role: "INTERN",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est exercitationem qui mollitia illum cumque facere sapiente aperiam dolorum explicabo iste reiciendis atque veritatis vero, voluptas optio, accusantium provident repellendus modi.",
        img: "image/liza.jpg"
    },
    {
        id: 2,
        name: "Mark Wonder",
        role: "BACKEND DEVELOPER",
        para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro assumenda perspiciatis vero qui tenetur accusantium suscipit optio illo doloribus adipisci odit eum, doloremque sed consectetur voluptatem, eaque quia reprehenderit numquam.",
        img: "image/mark.jpg"
    },
    {
        id: 3,
        name: "Ben Dev",
        role: "WEB DEVELOPER",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut provident quia laborum maxime culpa quis dignissimos quo dicta illum explicabo exercitationem possimus, eum autem est unde maiores laboriosam nihil vel!",
        img: "image/Ben.jpg"
    },
    {
        id: 4,
        name: "Jane Page",
        role: "HUMAN RESOURCE",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas rem ea nam labore magni corporis tenetur quibusdam, laboriosam nihil vel! dolor sit amet labore magni corporis tenetur.",
        img: "image/jane.jpg"
    },
    {
        id: 5,
        name: "Ramesh Kumar",
        role: "MANAGER",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas rem ea nam labore magni corporis tenetur quibusdam, accusamus pariatur non officia molestiae sed, nesciunt vitae repellendus ipsa architecto rerum.",
        img: "image/ramesh kumar.jpg"
    }
];

const proImg = document.querySelector(".profile_img");
const proName = document.querySelector(".profile_name");
const proRole = document.querySelector(".profile_role");
const proPara = document.querySelector(".lorem_para");

const preBtn = document.querySelector(".prev_profile");
const nextBtn = document.querySelector(".next_profile");
const randBtn = document.querySelector(".randbtn");

let proNumber = 0;

window.addEventListener("DOMContentLoaded", (event) => {
    chngProFunc();
})

const chngProFunc = () => {
    const infoData = proInfoArray[proNumber];
    proImg.src = infoData.img;
    proName.textContent = infoData.name;
    proRole.textContent = infoData.role;
    proPara.textContent = infoData.para;
}

nextBtn.addEventListener("click", (event) => {
    proNumber++;
    if (proNumber > proInfoArray.length-1) {
        proNumber = 0;
    }
    chngProFunc();
});

preBtn.addEventListener("click", (event) => {
    proNumber--;
    if (proNumber < 0) {
        proNumber = proInfoArray.length - 1;
    }
    chngProFunc();
});

randBtn.addEventListener("click", (event) => {
    proNumber = Math.floor(Math.random() * proInfoArray.length);
    chngProFunc();
});