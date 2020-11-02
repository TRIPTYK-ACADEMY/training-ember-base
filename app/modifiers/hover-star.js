import { modifier } from 'ember-modifier';

export default modifier(function hoverStar(element, [rating]) {
  element.addEventListener('mouseenter', (event) => {
    element.title = rating;

    let parent = element.parentNode
    let sideElement = parent.querySelectorAll('button');

    sideElement.forEach(el => {
      el.style.transform = "scale(0.7)";
    })
    event.target.style.transform = "scale(2)";
  })
  
  element.addEventListener('mouseleave', () => {
    let parent = element.parentNode
    let sideElement = parent.querySelectorAll('button');

    sideElement.forEach(el => {
      el.style.transform = "scale(1)";
    })
  })
});
