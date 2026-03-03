const menu = document.querySelector('#mobile-menu'); 
const menuLinks = document.querySelector('.nav-links');

if (menu && menuLinks) {
    menu.onclick = () => {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    };
}

window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 80) {
        nav.style.padding = '15px 10%';
        nav.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        nav.style.padding = '20px 10%';
        nav.style.background = 'rgba(0, 0, 0, 0.7)';
    }
});

// Data Portofolio (Bisa kamu tambah sesuai keinginan)
const portfolioData = {
    "Iklan Digital PT Ismart": {
        type: "video",
        src: "https://www.w3schools.com/html/mov_bbb.mp4", // Ganti dengan link video kamu
        desc: "Proyek editing video untuk promosi digital di PT Ismart Media."
    },
    "Branding Produk": {
        type: "image",
        src: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1000",
        desc: "Fotografi dan desain produk untuk kebutuhan branding UMKM."
    }
    // Tambahkan item lain di sini sesuai judul <h3> di HTML
};

const modal = document.getElementById("portfolioModal");
const closeModal = document.querySelector(".close-modal");

// Fungsi buka modal
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function() {
        const title = this.querySelector('h3').innerText;
        const data = portfolioData[title];
        
        const modalBody = document.getElementById("modalBody");
        const modalTitle = document.getElementById("modalTitle");
        const modalDesc = document.getElementById("modalDesc");

        modalTitle.innerText = title;
        modalDesc.innerText = data ? data.desc : "Hasil karya kreatif oleh Faiz.";

        if (data && data.type === "video") {
            modalBody.innerHTML = `<video controls autoplay><source src="${data.src}" type="video/mp4"></video>`;
        } else {
            const imgSrc = this.querySelector('img').src;
            modalBody.innerHTML = `<img src="${imgSrc}">`;
        }

        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Kunci scroll layar belakang
    });
});

// Tutup modal
closeModal.onclick = () => {
    modal.style.display = "none";
    document.getElementById("modalBody").innerHTML = ""; // Stop video saat tutup
    document.body.style.overflow = "auto";
};

window.onclick = (event) => {
    if (event.target == modal) {
        closeModal.onclick();
    }
};
