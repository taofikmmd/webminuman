document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;

        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga').innerHTML;
        let judul = parent.querySelector('.card-text').innerHTML;
        let deskripsi = parent.querySelector('.deskripsi')
            ? parent.querySelector('.deskripsi').innerHTML
            : '<i>tidak ada informasi yang tersedia</i>';

        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        document.querySelector('.modalTitle').innerHTML = judul;
        let image = document.createElement('img');
        image.src = gambar;
        image.classList.add('w-100');
        document.querySelector('.modalImage').innerHTML = '';
        document.querySelector('.modalImage').appendChild(image);
        document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
        document.querySelector('.modalHarga').innerHTML = harga;
        // const nohp = '6289654232550';
        // let pesan = `https://api.whatsapp.com/send?phone={nohp}&text=Halo Kak Saya Pesan Produk ini ${gambar}`;

        // document.querySelector('.btnBeli').href = pesan;
        // Keranjang



    });
});
let cart = [];
const cartItems = document.getElementById('cartItems');
const checkoutBtn = document.getElementById('checkoutBtn');
const nohp = "6289654232550"; // Ganti nomor WA

document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', function () {
        const name = this.dataset.name;
        const price = this.dataset.price;
        cart.push({ name, price });
        renderCart();
    });
});

function renderCart() {
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        cartItems.innerHTML += `<li>${item.name} - Rp ${item.price} <button class="btn btn-sm btn-danger ms-2" onclick="removeItem(${index})">x</button></li>`;
    });
}

function removeItem(index) {
    cart.splice(index, 1);
    renderCart();
}

checkoutBtn.addEventListener('click', function () {
    if (cart.length === 0) {
        alert("Keranjang kosong!");
        return;
    }
    let message = "Halo, saya ingin memesan:\n";
    cart.forEach(item => {
        message += `- ${item.name} (Rp ${item.price})\n`;
    });
    const url = `https://api.whatsapp.com/send?phone=${nohp}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
});
document.getElementById("searchInput").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let products = document.querySelectorAll(".product-card");
    let found = false;
    products.forEach(product => {
        // Ambil semua teks di dalam kartu produk
        let text = product.innerText.toLowerCase();

        if (text.includes(filter)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }

    });
    // cek kalau tidak ada produk
    const notFoundMessage = document.getElementById("notFoundMessage");
    if (!found) {
        notFoundMessage.style.display = "block";
    } else {
        notFoundMessage.style.display = "none";
    }
});
