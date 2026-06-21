

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const openFormBtn = document.getElementById("openFormBtn");
const block6FormWrap = document.getElementById("block6FormWrap");
const block6Form = document.getElementById("block6Form");

const revealItems = document.querySelectorAll(".reveal");




/* запуск музыки при первом касании */

function startMusicOnce() {
  bgMusic.play().catch(() => {});

  document.removeEventListener('touchstart', startMusicOnce);
  document.removeEventListener('click', startMusicOnce);

  musicBtn.classList.remove('off');
}

document.addEventListener('touchstart', startMusicOnce, { once: true });
document.addEventListener('click', startMusicOnce, { once: true });

/* кнопка пауза / воспроизведение */

musicBtn.addEventListener('click', () => {

  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.classList.remove('off');
  } else {
    bgMusic.pause();
    musicBtn.classList.add('off');
  }

});

/* анкета показать / скрыть */
if (openFormBtn && block6FormWrap) {
  openFormBtn.addEventListener("click", function () {
    block6FormWrap.classList.toggle("show");
  });
}



/* плавное появление блоков */
if (revealItems.length) {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealItems.forEach((item) => {
    observer.observe(item);
  });
}

/* таймер */
const weddingDate = new Date('2026-08-22T00:00:00');

function updateCountdown() {

  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (diff % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const seconds = Math.floor(
    (diff % (1000 * 60)) /
    1000
  );

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent =
    String(hours).padStart(2, '0');

  document.getElementById('minutes').textContent =
    String(minutes).padStart(2, '0');

  document.getElementById('seconds').textContent =
    String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

const guestYes = document.getElementById('guestYes');
const guestFields = document.getElementById('guestFields');

document
.querySelectorAll('input[name="Гость"]')
.forEach(radio => {

radio.addEventListener('change', () => {

if (guestYes.checked) {
guestFields.classList.add('show');
} else {
guestFields.classList.remove('show');
}

});

});

const allergyYes = document.getElementById('allergyYes');
const allergyField = document.getElementById('allergyField');

document
.querySelectorAll('input[name="Аллергия"]')
.forEach(radio => {

radio.addEventListener('change', () => {

if (allergyYes.checked) {
allergyField.classList.add('show');
} else {
allergyField.classList.remove('show');
}

});

});

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
(entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {
entry.target.classList.add('show');
}

});

},
{
threshold:0.15
}
);

revealElements.forEach(item => {
revealObserver.observe(item);
});