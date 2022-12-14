import { projects } from './data.js';

const handleBackgroundOpacity = () => {
  const logosArray = [...document.querySelectorAll(".fixed-background *")];

  const scrollPosition = window.scrollY;
  const viewportHeight = document.documentElement.clientHeight;
  const totalPageHeight = document.documentElement.scrollHeight;

  const distanceToBottom = totalPageHeight - (scrollPosition + viewportHeight);

  const setHighOpacity = () =>
    logosArray.forEach((logo) => logo.classList.remove("med-opacity"));

  const setMediumOpacity = () => {
    logosArray.forEach((logo) => logo.classList.add("med-opacity"));
    logosArray.forEach((logo) => logo.classList.remove("low-opacity"));
  };

  const setLowOpacity = () => {
    logosArray.forEach((logo) => logo.classList.remove("med-opacity"));
    logosArray.forEach((logo) => logo.classList.add("low-opacity"));
  };

  const isInUpperHalf = scrollPosition < totalPageHeight / 2;

  // Max opacity at top and decrease as it goes down
  if (isInUpperHalf) {
    if (scrollPosition < 100) {
      setHighOpacity();
    } else if (scrollPosition > 100 && scrollPosition < 300) {
      setMediumOpacity();
    } else if (scrollPosition > 300) {
      setLowOpacity();
    }
  } // Opacity goes up again when it approaches to the bottom
  else {
    if (distanceToBottom < 100) {
      setHighOpacity();
    } else if (distanceToBottom > 100 && distanceToBottom < 300) {
      setMediumOpacity();
    } else if (distanceToBottom > 300) {
      setLowOpacity();
    }
  }
};

window.addEventListener('scroll', handleBackgroundOpacity);


const buildProjectCard = (project) => {
  return `<div class="card">
            <a target="_blank" href="${project.projectSrc}">
                <img src="${project.imageSrc}" alt="${project.title}" srcset="">
                <div class="card__content">
                    <p>
                        ${project.description}
                    </p>
                    <h3>${project.title}</h3>
                </div>
            </a>
        </div>`;
};

(function printScreen() {
    const cardsContainer = document.querySelector('.projects .cards-container');
    
    projects.forEach((project) => {
        cardsContainer.innerHTML += buildProjectCard(project);
    });   
})();