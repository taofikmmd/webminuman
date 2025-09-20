document.querySelectorAll('.btnKeranjang').forEach(item => {
    item.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;
        let tombolModalKeranjang = document.querySelector('.btnModalKeranjang');
        tombolModalKeranjang.click();

        // const nohp = '6289654232550';
        // let pesan = `https://api.whatsapp.com/send?phone={nohp}&text=Halo Kak Saya Pesan Produk ini ${gambar}`;

        // document.querySelector('.btnBeli').href = pesan;
        // Keranjang

    });
});