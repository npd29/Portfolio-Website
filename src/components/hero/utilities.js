// import {particleMode} from './constants';
// function debounce(func, wait) {
//     let timeout;
//     return function () {
//         clearTimeout(timeout);
//         timeout = setTimeout(func, wait);
//     };
// }

// function changeColor() {
//     if (rainbowMode) {
//         myColor = [
//             (myColor[0] += delta),
//             (myColor[1] -= delta),
//             myColor[2],
//             opacity
//         ];
//         if (myColor[0] >= 255) {
//             delta = -1;
//         } else if (myColor[1] >= 255) {
//             delta = 1;
//         }
//     }
// }

// function clearCanvas() {
//     event.preventDefault();
//     background('#222');
// }

// function toggleRainbowMode() {
//     if (rainbowToggle.checked) {
//         rainbowMode = true;
//         rainbowInterval = setInterval(changeColor, 500);
//     } else {
//         clearInterval(rainbowInterval);
//         myColor = [0, 255, 255, opacity];
//         rainbowMode = false;
//     }
// }

// // Function to toggle the visibility of the settings popup
// function toggleSettingsPopup() {
//     const popup = document.getElementById('settingsPopup');
//     if (popup.style.display === 'flex') {
//         popup.style.display = 'none';
//     } else {
//         popup.style.display = 'flex';
//     }
// }

// function toggleStopAnimation() {
//     event.preventDefault();

//     if (stopAnimation) {
//         document.getElementById('playPause').src = 'images/pause.png';
//         stopAnimation = false;
//     } else {
//         document.getElementById('playPause').src = 'images/play.png';
//         stopAnimation = true;
//     }
// }

// function toggleParticleMode() {
//     if (particleRadio.checked) {
//         if (!particleMode) {
//             clearCanvas();
//             opacity = particleOpacity;
//             particleMode = true;
//             z *= 10;
//             for (var x = 0; x < numParticles; x++) {
//                 particles.push(new Particle());
//             }
//             for (var i = 0; i < particles.length; i++) {
//                 particles[i].maxspeed = 4;
//             }
//         }
//     } else {
//         if (particleMode) {
//             opacity = flowOpacity;
//             particleMode = false;
//             z /= 10;
//             particles = particles.slice(0, numParticles);
//             for (var i = 0; i < particles.length; i++) {
//                 particles[i].maxspeed = 8;
//             }
//             clearCanvas();
//         }
//     }
// }

// document.addEventListener('DOMContentLoaded', function () {
//     var projectsArray = document.querySelectorAll('.project');
//     var popup = document.querySelector('.popup');
//     var popupContent = document.querySelector('.popup-content');
//     var popupClose = document.querySelector('.popup-close');
//     var projectSection = document.querySelector('.project-section');
//     projectsArray.forEach(function (link) {
//         link.addEventListener('click', function (event) {
//             event.preventDefault();
//             var project = this.closest('.project');
//             popupContent.innerHTML = project.innerHTML;
//             popup.classList.toggle('show');
//             projectSection.classList.toggle('show-popup');
//         });
//     });

//     popupClose.addEventListener('click', function () {
//         popup.classList.remove('show');
//         projectSection.classList.remove('show-popup');
//     });
// });
export {};
