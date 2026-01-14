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

//update jam
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
  
    //
/* --- FITUR FORMULIR WHATSAPP (KONTAK) --- */
function sendSecure() {
  // Mengambil nilai dari input form
  // Pastikan ID di HTML sesuai: 'nama' dan 'pesan-user'
  const nama = document.getElementById('nama').value;
  const pesan = document.getElementById('pesan-user').value;

  // Validasi sederhana (opsional): Cek apakah input kosong
  if (nama === "" || pesan === "") {
    alert("Mohon isi nama dan pesan Anda terlebih dahulu.");
    return;
  }

  // Format pesan yang akan dikirim ke WhatsApp
  const text = `Halo Admin Lombok Explore, perkenalkan nama saya ${nama}. Saya ingin menyampaikan pesan: ${pesan}`;

  // Membuka link WhatsApp di tab baru
  // Ganti nomor di bawah dengan nomor admin yang sesuai
  window.open(`https://wa.me/6281227446406?text=${encodeURIComponent(text)}`, '_blank');
}

