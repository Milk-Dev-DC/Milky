// Minimal interactive bits for the landing page (future: live status / commands)
document.addEventListener('DOMContentLoaded', () => {
  // smooth scroll for internal anchors (Invite and More info)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // FAQ toggle
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const a = q.nextElementSibling;
      a.style.display = a.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Modal toggle
  const openModal = document.getElementById('openModal');
  const closeModal = document.getElementById('closeModal');
  const modal = document.getElementById('modal');
  openModal.addEventListener('click', () => { modal.style.display = 'flex'; });
  closeModal.addEventListener('click', () => { modal.style.display = 'none'; });

  // Theme toggle
  const toggleBtn = document.getElementById('toggleTheme');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });

  // ================= Slider live value updates =================
  const volumeSlider = document.getElementById('volume');
  const volumeValue = document.getElementById('volumeValue');
  if (volumeSlider && volumeValue) {
    volumeSlider.addEventListener('input', () => {
      volumeValue.textContent = volumeSlider.value;
    });
  }

  const brightnessSlider = document.getElementById('brightness');
  const brightnessValue = document.getElementById('brightnessValue');
  if (brightnessSlider && brightnessValue) {
    brightnessSlider.addEventListener('input', () => {
      brightnessValue.textContent = brightnessSlider.value;
    });
  }

  // Toast enable/disable toggle
const toggleToastBtn = document.getElementById('toggleToast');
const toastContainer = document.querySelector('.toast-container');

if (toggleToastBtn && toastContainer) {
  let toastsEnabled = true;
  toggleToastBtn.addEventListener('click', () => {
    toastsEnabled = !toastsEnabled;
    toastContainer.style.display = toastsEnabled ? 'flex' : 'none';
    toggleToastBtn.textContent = toastsEnabled ? 'Disable Toasts' : 'Enable Toasts';
  });
}

const progressBar = document.getElementById('serverProgress');
const progressRange = document.getElementById('progressRange');
const progressValue = document.getElementById('progressValue');

progressRange.addEventListener('input', () => {
  const value = progressRange.value;
  progressBar.style.width = value + '%';
  progressValue.textContent = value;
});

document.querySelectorAll('.text-wavey').forEach(el => {
  const text = el.textContent;
  el.innerHTML = '';
  [...text].forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.animationDelay = `${i * 0.1}s`;
    el.appendChild(span);
  });
});
});

// Hide all cards after the first 6
const allCards = document.querySelectorAll("#cardGrid .card");
allCards.forEach((card, index) => {
  if (index >= 6) card.classList.add("hidden");
});

// Toggle reveal for extra cards
document.getElementById("toggleCards")?.addEventListener("click", () => {
  const hiddenCards = document.querySelectorAll("#cardGrid .card.hidden");
  hiddenCards.forEach(card => card.classList.toggle("show"));
  const btn = document.getElementById("toggleCards");
  btn.textContent = btn.textContent === "View More" ? "View Less" : "View More";
});

// Clickable + image card link destinations
document.querySelectorAll(".card-btn, .img-card").forEach(card => {
  card.addEventListener("click", () => {
    const link = card.getAttribute("data-link");
    if (link) window.open(link, "_blank"); // Change "_blank" → "_self" to open in same tab
  });
});

document.querySelectorAll('.stars').forEach(starContainer => {
  const rating = parseInt(starContainer.dataset.rating);
  const max = parseInt(starContainer.dataset.max);

  starContainer.innerHTML = '';
  for (let i = 1; i <= max; i++) {
    const star = document.createElement('span');
    star.classList.add('star');
    star.innerHTML = i <= rating ? '&#9733;' : '&#9734;';
    starContainer.appendChild(star);
  }
});

