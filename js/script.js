// Data tarif layanan yang disalin dari Google Sheet dan diubah ke JSON
// **Anda bisa mengganti data ini dengan data dari file Excel Anda**
const tarifLayanan = {
    'Sertifikat Kesehatan': 50000,
    'Sertifikat Bebas Penyakit': 75000,
    'Pemeriksaan Fisik': 20000,
    // Tambahkan data tarif lainnya di sini, contoh:
    // 'Layanan Tambahan A': 15000,
    // 'Layanan Tambahan B': 25000
};

// Logika untuk kalkulator tarif
function hitungTarif(event) {
    event.preventDefault(); // Mencegah form reload halaman

    const layanan = document.getElementById('layanan-select').value;
    const jumlah = document.getElementById('jumlah-input').value;
    const hasil = document.getElementById('hasil-biaya');

    if (layanan && jumlah > 0) {
        const biayaPerUnit = tarifLayanan[layanan];
        if (biayaPerUnit !== undefined) {
            const totalBiaya = biayaPerUnit * jumlah;
            hasil.textContent = `Total Biaya: Rp ${totalBiaya.toLocaleString('id-ID')}`;
        } else {
            hasil.textContent = 'Layanan tidak ditemukan.';
        }
    } else {
        hasil.textContent = 'Mohon isi semua data dengan benar.';
    }
}

// Menambahkan event listener setelah DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    const layananSelect = document.getElementById('layanan-select');
    const form = document.getElementById('kalkulator-form');

    // Mengisi dropdown secara otomatis dari data tarifLayanan
    if (layananSelect) {
        for (const layanan in tarifLayanan) {
            const option = document.createElement('option');
            option.value = layanan;
            option.textContent = layanan;
            layananSelect.appendChild(option);
        }
    }

    // Menambahkan event listener ke tombol hitung
    if (form) {
        form.addEventListener('submit', hitungTarif);
    }
});