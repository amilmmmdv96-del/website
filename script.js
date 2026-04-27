// 30 kofeşopluq məlumat bazası
const shops = [];
const names = ["Coffee Moffie", "United Coffee", "Second Cup", "Gloria Jean's", "Starbucks", "Double Coffee", "Espressamente", "Coffee Lea", "Baku Roasting", "Old School", "Araz Cafe", "Viento", "Coffee Lab", "BigChefs", "M'eat Coffee", "Paul Baku", "Entrée", "Urban Coffee", "Coffee Planet", "Barista Baku", "Kofteci Ramiz Coffee", "Paris Bistro", "Merci Baku", "Malacannes", "Pascucci", "Cafe City", "Caffé Nero", "Espresso Bar", "Baku Coffee House", "Vintage Coffee"];

for (let i = 1; i <= 30; i++) {
    shops.push({
        id: i,
        name: names[i-1] || `Kofeşop №${i}`,
        img: `https://picsum.photos/seed/${i+50}/400/300`, // Hər biri üçün fərqli şəkil
        location: `Bakı şəhəri, Ünvan küçəsi ${i}`,
        contact: `+994 50 ${100 + i} 00 00`,
        about: "Bu kofeşop özünün unikal atmosferi və təzə qovrulmuş qəhvə dənələri ilə seçilir.",
        price: `${(Math.random() * 10 + 5).toFixed(2)} AZN - dən başlayaraq`
    });
}

const grid = document.getElementById('shop-grid');
const modal = document.getElementById('shopModal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

// Kartları ekrana çıxarmaq
shops.forEach(shop => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${shop.img}" alt="${shop.name}">
        <div class="card-info">
            <h3>${shop.name}</h3>
            <p>📍 ${shop.location}</p>
        </div>
    `;
    card.onclick = () => openModal(shop);
    grid.appendChild(card);
});

// Modal açmaq
function openModal(shop) {
    modalBody.innerHTML = `
        <img src="${shop.img}" class="modal-img">
        <h2>${shop.name}</h2>
        <p><strong>Haqqında:</strong> ${shop.about}</p>
        <p><strong>Ünvan:</strong> ${shop.location}</p>
        <p><strong>Əlaqə:</strong> ${shop.contact}</p>
        <p><strong>Qiymətlər:</strong> ${shop.price}</p>
        <p><strong>İş saatları:</strong> 09:00 - 22:00</p>
    `;
    modal.style.display = "block";
}

// Modalı bağlamaq
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}