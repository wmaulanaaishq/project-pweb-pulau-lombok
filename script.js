        // Slider Logic
    let nextBtn = document.querySelector(".next");
    let prevBtn = document.querySelector(".prev");

    nextBtn.addEventListener("click", function () {
      let items = document.querySelectorAll(".item");
      document.querySelector(".slide").appendChild(items[0]);
    });

    prevBtn.addEventListener("click", function () {
      let items = document.querySelectorAll(".item");
      document.querySelector(".slide").prepend(items[items.length - 1]);
    });

        function updateClock() {
      const now = new Date();
      document.getElementById('real-time-clock').innerText = now.toLocaleTimeString('id-ID', {hour:'2-digit', minute:'2-digit'});
    }
    setInterval(updateClock, 1000); updateClock();
    document.getElementById('year').innerText = new Date().getFullYear();

    
    const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      // Opsional: stop observe setelah muncul sekali biar performa ringan
      observer.unobserve(entry.target);
    }
  });
};

const revealOptions = {
  threshold: 0.15 // Animasi mulai saat 15% elemen terlihat
};

const observer = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => observer.observe(el));
