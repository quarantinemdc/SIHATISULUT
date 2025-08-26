document.addEventListener('DOMContentLoaded', () => {
    // Data lengkap komoditas dari dokumen RENCANA.doc
    const komoditasData = {
        'koi': {
            nama: 'Ikan Koi',
            deskripsi: 'Koi merupakan salah satu jenis ikan yang banyak diburu oleh para pecinta ikan hias. Koi biasanya dipelihara sebagai hiasan dengan tujuan keindahan dan keberuntungan di dalam rumah dan luar rumah. Jenis ikan koi dibedakan tergantung dari warnanya, polanya, dan ukurannya. Beberapa unsur warnanya adalah putih, hitam, merah, kuning, biru, dan krem. Jenis koi paling dikenal adalah jenis Gosanke, yang terdiri dari Kohaku, Taisho Sanshoku, and Showa Sanshoku.',
            ketentuan: [
                'Berasal dari Instalasi Karantina Ikan atau telah dilakukan Tindakan Karantina Ikan sebelumnya',
                'Pemeriksaan fisik, kesesuaian jenis, dan jumlah',
                'Pemeriksaan administratif dan kesesuaian dokumen',
                'Barang bawaan berupa produk ikan yang dikeluarkan dari wilayan NKRI paling berat 10kg (sepuluh kilogram)'
            ]
        },
        'nila': {
            nama: 'Ikan Nila',
            deskripsi: 'Indonesia memiliki sumber daya alam yang melimpah sehingga budidaya ikan ini telah berkembang pesat, menjadikannya salah satu komoditas unggulan di sektor perikanan. Kualitas air dan iklim tropis Indonesia mendukung pertumbuhan ikan nila yang optimal.',
            ketentuan: [
                'Berasal dari Instalasi Karantina Ikan atau telah dilakukan Tindakan Karantina Ikan sebelumnya',
                'Pemeriksaan fisik, kesesuaian jenis, dan jumlah',
                'Pemeriksaan administratif dan kesesuaian dokumen',
                'Barang bawaan berupa produk ikan yang dikeluarkan dari wilayan NKRI paling berat 10kg (sepuluh kilogram)'
            ]
        },
        'tuna': {
            nama: 'Tuna',
            deskripsi: 'Tuna adalah ikan laut pelagik yang termasuk tribus Thunnini, terdiri dari beberapa spesies dari famili skombride, terutama genus Thunnus. Ikan ini adalah perenang andal (pernah diukur mencapai 77 km/jam). Tidak seperti kebanyakan ikan yang memiliki daging berwarna putih, daging tuna berwarna merah muda sampai merah tua. Hal ini karena otot tuna lebih banyak mengandung myoglobin daripada ikan lainnya.',
            ketentuan: [
                'Berasal dari Instalasi Karantina Ikan atau telah dilakukan Tindakan Karantina Ikan sebelumnya',
                'Pemeriksaan fisik, kesesuaian jenis, dan jumlah',
                'Pemeriksaan administratif dan kesesuaian dokumen',
                'Barang bawaan berupa produk ikan yang dikeluarkan dari wilayan NKRI paling berat 10kg (sepuluh kilogram)'
            ]
        },
        'cakalang': {
            nama: 'Cakalang',
            deskripsi: 'Ikan Cakalang (Katsuwonus pelamis) adalah ikan berukuran sedang dari familia Scombridae. Ikan ini merupakan satu-satunya spesies ikan tuna dari genus Katsuwonus. Cakalang terbesar, panjang tubuhnya bisa mencapai 1 m dengan berat lebih dari 18 kg. Cakalang yang banyak tertangkap berukuran panjang sekitar 50 cm. Nama-nama lainnya di antaranya cakalan, cakang, kausa, kambojo, karamojo, turingan, dan ada pula yang menyebutnya tongkol kerai.',
            ketentuan: [
                'Berasal dari Instalasi Karantina Ikan atau telah dilakukan Tindakan Karantina Ikan sebelumnya',
                'Pemeriksaan fisik, kesesuaian jenis, dan jumlah',
                'Pemeriksaan administratif dan kesesuaian dokumen',
                'Barang bawaan berupa produk ikan yang dikeluarkan dari wilayan NKRI paling berat 10kg (sepuluh kilogram)'
            ]
        },
        'layang': {
            nama: 'Layang',
            deskripsi: 'Layang adalah nama sejenis ikan yang termasuk genus Decapterus, famili Carangidae. Ikan-ikan berukuran kecil hingga sedang ini merupakan ikan konsumsi yang cukup penting, dipasarkan dalam keadaan segar atau diolah sebagai ikan pindang, ikan asin, dan lain-lain.',
            ketentuan: [
                'Berasal dari Instalasi Karantina Ikan atau telah dilakukan Tindakan Karantina Ikan sebelumnya',
                'Pemeriksaan fisik, kesesuaian jenis, dan jumlah',
                'Pemeriksaan administratif dan kesesuaian dokumen',
                'Barang bawaan berupa produk ikan yang dikeluarkan dari wilayah NKRI paling berat 10kg (sepuluh kilogram)'
            ]
        },
        'julung-julung': {
            nama: 'Julung-Julung',
            deskripsi: 'Julung-julung (suku Hemiramphidae) adalah sekelompok ikan penghuni permukaan (zona epipelagik) yang tersebar luas menghuni perairan hangat dunia. Julung-julung merupakan sumber pangan pada sejumlah tempat,  Ikan Julung-Julung banyak ditemukan di beberapa tempat seperti di Gorontalo, Sulawesi Tengah, dan Sulawesi Utara.',
            ketentuan: [
                'Berasal dari Instalasi Karantina Ikan atau telah dilakukan Tindakan Karantina Ikan sebelumnya',
                'Pemeriksaan fisik, kesesuaian jenis, dan jumlah',
                'Pemeriksaan administratif dan kesesuaian dokumen',
                'Barang bawaan berupa produk ikan yang dikeluarkan dari wilayah NKRI paling berat 10kg (sepuluh kilogram)'
            ]
        },
        'lobster-pasir': {
            nama: 'Lobster Pasir',
            deskripsi: 'Merupakan jenis lobster bernilai ekonomi tinggi yang sering diekspor hidup. Wajib diperiksa karena berisiko membawa penyakit krustasea seperti White Spot Syndrome dan perlu dijaga kualitas penanganannya.',
            ketentuan: [
                'Tidak dalam kondisi bertelur',
                'Karapas diatas 8cm atau berat lebih dari 200gr per ekor untuk lobster (Panulirus spp)'
            ]
        },
        'lobster-lainnya': {
            nama: 'Lobster Lainnya',
            deskripsi: 'Merupakan jenis lobster bernilai ekonomi tinggi yang sering diekspor hidup. Wajib diperiksa karena berisiko membawa penyakit krustasea seperti White Spot Syndrome dan perlu dijaga kualitas penanganannya.',
            ketentuan: [
                'Tidak dalam kondisi bertelur',
                'Ukuran panjang karapas di atas 6 cm atau berat di atas 150 gram per ekor untuk lobster pasir (Panulirus homarus), lobster batu (Panulirus penicillatus), lobster batik (Panulirus longipes), dan lobster pakistan (Panulirus polyphagus).'
            ]
        },
        'kepiting': {
            nama: 'Kepiting',
            deskripsi: 'Komoditas krustasea ekspor unggulan, hidup di hutan mangrove. Wajib diperiksa karena dapat menjadi vektor penyakit dan harus memenuhi standar mutu ekspor.',
            ketentuan: [
                'Tidak dalam kondisi bertelur yang terlihat pada Abdomen luar',
                'Karapas diatas 12cm atau diatas dari 150gr per ekor',
                'Penangkapan Kepiting (Scylla spp.) harus dilakukan dengan menggunakan alat penangkapan ikan yang bersifat statis atau pasif.'
            ]
        },
        'rajungan': {
            nama: 'Rajungan',
            deskripsi: 'Rajungan adalah komoditas perikanan bernilai ekspor yang umum ditangkap di perairan pantai. Wajib diperiksa karena sensitif terhadap penurunan mutu dan potensi cemaran mikrobiologis.',
            ketentuan: [
                'Tidak dalam kondisi bertelur yang terlihat pada Abdomen luar',
                'Ukuran lebar karapas di atas 10 (sepuluh) cm atau berat di atas 60 (enam puluh) gram per ekor',
                'Pengambilan Rajungan (Portunus spp.) harus dilakukan dengan menggunakan alat penangkapan ikan yang bersifat statis atau pasif'
            ]
        }
    };

    // Logika untuk menampilkan modal
    const modal = document.getElementById('commodity-modal');
    const modalDetails = document.getElementById('modal-details');
    const closeBtn = document.querySelector('.close-btn');
    const cards = document.querySelectorAll('.commodity-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const komoditasId = card.getAttribute('data-komoditas');
            const data = komoditasData[komoditasId];

            if (data) {
                const ketentuanList = data.ketentuan.map(item => `<li>${item}</li>`).join('');
                modalDetails.innerHTML = `
                    <h2>${data.nama}</h2>
                    <h3>Deskripsi:</h3>
                    <p>${data.deskripsi}</p>
                    <h3>Ketentuan:</h3>
                    <ul>${ketentuanList}</ul>
                `;
                modal.style.display = 'block';
            }
        });
    });

    // Menutup modal saat tombol close diklik atau area luar modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Logika pencarian
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('keyup', (e) => {
        const searchText = e.target.value.toLowerCase();
        cards.forEach(card => {
            const komoditasName = card.querySelector('h3').textContent.toLowerCase();
            if (komoditasName.includes(searchText)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});