const html = document.querySelector("html");
const headerTop = document.querySelector(".header-top");
const headerContent = document.querySelector(".header-content");
const technologiesContent = document.querySelector(".technologies-content");
const worksTitle = document.querySelector(".works-title");
const worksFirst = document.querySelector(".works-text#first");
const worksImageFirst = document.querySelector(".wrapper-image#first");
const worksBtnFirst = document.querySelector(".project#first");
const worksSecond = document.querySelector(".works-text#second");
const worksImageSecond = document.querySelector(".wrapper-image#second");
const worksBtnSecond = document.querySelector(".project#second");
const worksThird = document.querySelector(".works-text#third");
const worksImageThird = document.querySelector(".wrapper-image#third");
const worksBtnThird = document.querySelector(".project#third");

const themeSystem = window.matchMedia("(prefers-color-scheme: dark)");
const themeMode = localStorage.getItem("themeMode");
const themeSwitch = document.querySelectorAll(".toggle");
const icon = document.querySelectorAll(".theme-icon");

if (themeSystem.matches && themeMode !== "disabled") {
  iconsTheme();
  html.classList.toggle("dark-mode");
}

const options = {
  root: null,
  threshold: 0,
  rootMargin: "-10%",
};

window.addEventListener("DOMContentLoaded", function () {
  headerTop.classList.add("active-slide-left");
  headerContent.classList.add("active-slide-left");

  const observerEvent = new IntersectionObserver(function (
    entries,
    observerEvent
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      if (entry.target.classList.contains("active-animate")) {
        return;
      }
      const element = entry.target.classList;
      const id = entry.target.id;
      if (element.contains("technologies-content")) {
        element.add("active-slide-right");
      }
      if (element.contains("works-title")) {
        element.add("active-slide-left");
      }
      if (element.contains("works-text") && id === "first") {
        element.add("active-slide-left");
      }
      if (element.contains("wrapper-image") && id === "first") {
        element.add("active-slide-right");
      }
      if (element.contains("project") && id === "first") {
        element.add("active-slide-left");
      }
      if (element.contains("works-text") && id === "second") {
        element.add("active-slide-left");
      }
      if (element.contains("wrapper-image") && id === "second") {
        element.add("active-slide-right");
      }
      if (element.contains("project") && id === "second") {
        element.add("active-slide-left");
      }
      if (element.contains("works-text") && id === "third") {
        element.add("active-slide-left");
      }
      if (element.contains("wrapper-image") && id === "third") {
        element.add("active-slide-right");
      }
      if (element.contains("project") && id === "third") {
        element.add("active-slide-left");
      }
      observerEvent.unobserve(entry.target);
    });
  },
  options);

  observerEvent.observe(technologiesContent);
  observerEvent.observe(worksTitle);
  observerEvent.observe(worksFirst);
  observerEvent.observe(worksSecond);
  observerEvent.observe(worksThird);
  observerEvent.observe(worksImageFirst);
  observerEvent.observe(worksImageSecond);
  observerEvent.observe(worksImageThird);
  observerEvent.observe(worksBtnFirst);
  observerEvent.observe(worksBtnSecond);
  observerEvent.observe(worksBtnThird);
});

function iconsToggle(icon, alt, mode) {
  if (mode === "dark") {
    icon.src = `images/social-btn-${alt}-dark.svg`;
  }
  if (mode === "light") {
    icon.src = `images/social-btn-${alt}-light.svg`;
  }
}

function iconsTheme() {
  for (let i = 0; i < icon.length; i++) {
    if (html.classList.value === "") {
      if (icon[i].getAttribute("alt") === "Toggle") {
        icon[i].src = "images/social-btn-toggle-dark.svg";
        localStorage.setItem("themeMode", "enabled");
      }
      iconsToggle(icon[i], icon[i].getAttribute("alt").toLowerCase(), "dark");
    }
    if (html.classList.value === "dark-mode") {
      if (icon[i].getAttribute("alt") === "Toggle") {
        icon[i].src = "images/social-btn-toggle-light.svg";
        localStorage.setItem("themeMode", "disabled");
      }
      iconsToggle(icon[i], icon[i].getAttribute("alt").toLowerCase(), "light");
    }
  }
}

for (let i = 0; i < themeSwitch.length; i++) {
  themeSwitch[i].addEventListener("click", function () {
    iconsTheme();
    html.classList.toggle("dark-mode");
  });
}

function toggleLanguage(lang) {
  const headerText = document.querySelector("div.header-text");
  const technologiesText = document.querySelector("div.technologies-text");
  const firstWorksText = document.querySelector("div#first");
  const secondWorksText = document.querySelector("div#second");
  const thirdWorksText = document.querySelector("div#third");

  if (lang === "english") {
    headerText.innerHTML =
      "I'm Front-End Developer and I seek to create pleasant digital experiences through my projects.";
    technologiesText.innerHTML =
      "Every Dev has its virtual toolbox. Inside my box I have HTML, CSS, JavaScript, TypeScript, React, React Native (Expo) and NextJS as my main tools.";
    firstWorksText.innerHTML =
      "I have been working on a personal project, an interactive fiction game in React Native. This game led me to create a responsive website. Written with TypeScript, I made use of the NextJS framework and the MongoDB database.";
    secondWorksText.innerHTML =
      "I developed a bot for the Discord app built with Node and the discord.js library. I used TypeScript in the project.";
    thirdWorksText.innerHTML =
      "This portfolio is also a recent project, made with HTML, CSS and JavaScript (TypeScript). Responsive layout developed with Mobile First technique.";
  }

  if (lang === "portuguese") {
    headerText.innerHTML =
      "Sou Front-End Developer e busco criar experiências digitais agradáveis por meio dos meus projetos.";
    technologiesText.innerHTML =
      "Todo Dev tem a sua caixa de ferramentas virtual. Dentro da minha caixa tenho HTML, CSS, JavaScript, TypeScript, React, React Native (Expo) e NextJS como ferramentas principais.";
    firstWorksText.innerHTML =
      "Tenho trabalhado em um projeto pessoal, um jogo de ficção interativa em React Native. Esse jogo me levou a criar um site responsivo. Escrito com TypeScript, fiz uso do framework NextJS e o banco de dados MongoDB.";
    secondWorksText.innerHTML =
      "Desenvolvi um bot para o aplicativo Discord construído com Node e a biblioteca discord.js. Utilizei TypeScript no projeto.";
    thirdWorksText.innerHTML =
      "Esse portfólio também é um projeto recente, feito com HTML, CSS e JavaScript. Layout responsivo desenvolvido com a técnica Mobile First.";
  }
}
