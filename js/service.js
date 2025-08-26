document.addEventListener('DOMContentLoaded', () => {

    // Data layanan dan tarif (Ganti dengan data Anda dari Google Sheets)
    const serviceData = {
'Pelayanan Pemeriksaan Hama/ Kesehatan/Penyakit Ikan': {
    'Pemeriksaan Hama': [
        { id: '1', name: 'Pemeriksaan Hama', unit: 'perpemeriksaan', price: 5000 }
    ],
    'Analisis/Identifikasi/Pemeriksaan Parasit': [
        { id: '3', name: 'Digesti', unit: 'percontoh', price: 20000 },
        { id: '4', name: 'Metode Mikroskopis', unit: 'percontoh', price: 15000 },
        { id: '5', name: 'Metode Konvensional', unit: 'percontoh', price: 50000 }
    ],
    'Analisis/Identifikasi/Pemeriksaan Jamur (Metode Konvensional) dengan Uji Rangkap': [
        { id: '6', name: 'Uji Rangkap', unit: 'perpemeriksaan', price: 100000 }
    ],
    'Analisis/Identifikasi/Pemeriksaan Bakteri Konvensional': [
        { id: '7', name: 'Preparat Sampel', unit: 'per penyakit per contoh', price: 15000 },
        { id: '8', name: 'Gram Negatif sampai Genus', unit: 'per penyakit per contoh', price: 50000 },
        { id: '9', name: 'Gram Negatif sampai Spesies', unit: 'per penyakit per contoh', price: 50000 },
        { id: '10', name: 'Gram Positif sampai Genus', unit: 'per penyakit per contoh', price: 75000 },
        { id: '11', name: 'Gram Positif sampai Spesies', unit: 'per penyakit per contoh', price: 175000 },
        { id: '12', name: 'Total Vibrio sp', unit: 'per contoh', price: 90000 },
        { id: '13', name: 'Angka Lempeng Total (ALT) Termofil Aerob/Mesofil Aerob', unit: 'per parameter per contoh', price: 100000 },
        { id: '14', name: 'Angka Lempeng Mesofil Anaerob', unit: 'per contoh', price: 100000 }
    ]
}

        }
    
    const categorySelect = document.getElementById('category-select');
    const subcategorySelect = document.getElementById('subcategory-select');
    const serviceSelect = document.getElementById('service-select');
    const quantityInput = document.getElementById('quantity-input');
    const unitLabel = document.getElementById('unit-label');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultBox = document.getElementById('result-box');

    // Mengisi dropdown Kategori
    function populateCategories() {
        for (const category in serviceData) {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categorySelect.appendChild(option);
        }
    }

    // Mengisi dropdown Subkategori berdasarkan Kategori yang dipilih
    function populateSubcategories(category) {
        subcategorySelect.innerHTML = '<option value="">-- Pilih Subkategori --</option>';
        serviceSelect.innerHTML = '<option value="">-- Pilih Layanan --</option>';
        if (category && serviceData[category]) {
            for (const subcategory in serviceData[category]) {
                const option = document.createElement('option');
                option.value = subcategory;
                option.textContent = subcategory;
                subcategorySelect.appendChild(option);
            }
            subcategorySelect.disabled = false;
        } else {
            subcategorySelect.disabled = true;
            serviceSelect.disabled = true;
            quantityInput.disabled = true;
            calculateBtn.disabled = true;
        }
    }

    // Mengisi dropdown Layanan berdasarkan Subkategori yang dipilih
    function populateServices(category, subcategory) {
        serviceSelect.innerHTML = '<option value="">-- Pilih Layanan --</option>';
        if (category && subcategory && serviceData[category] && serviceData[category][subcategory]) {
            serviceData[category][subcategory].forEach(service => {
                const option = document.createElement('option');
                option.value = service.id;
                option.textContent = service.name;
                serviceSelect.appendChild(option);
            });
            serviceSelect.disabled = false;
        } else {
            serviceSelect.disabled = true;
            quantityInput.disabled = true;
            calculateBtn.disabled = true;
        }
    }

    // Menangani perubahan pada dropdown
    categorySelect.addEventListener('change', (e) => {
        populateSubcategories(e.target.value);
        resultBox.style.display = 'none';
    });

    subcategorySelect.addEventListener('change', (e) => {
        const selectedCategory = categorySelect.value;
        populateServices(selectedCategory, e.target.value);
        resultBox.style.display = 'none';
    });

    serviceSelect.addEventListener('change', (e) => {
        const selectedId = e.target.value;
        const selectedCategory = categorySelect.value;
        const selectedSubcategory = subcategorySelect.value;
        const selectedService = serviceData[selectedCategory][selectedSubcategory].find(s => s.id === selectedId);

        if (selectedService) {
            unitLabel.textContent = selectedService.unit;
            quantityInput.disabled = false;
            calculateBtn.disabled = false;
        } else {
            quantityInput.disabled = true;
            calculateBtn.disabled = true;
        }
        resultBox.style.display = 'none';
    });

    // Menangani perhitungan saat tombol diklik
    calculateBtn.addEventListener('click', () => {
        const selectedId = serviceSelect.value;
        const quantity = parseFloat(quantityInput.value);

        if (!selectedId || isNaN(quantity) || quantity <= 0) {
            alert('Silakan pilih layanan dan masukkan jumlah yang valid.');
            return;
        }

        const selectedCategory = categorySelect.value;
        const selectedSubcategory = subcategorySelect.value;
        const selectedService = serviceData[selectedCategory][selectedSubcategory].find(s => s.id === selectedId);
        
        if (selectedService) {
            const totalCost = selectedService.price * quantity;
            resultBox.innerHTML = `
                <h3>Hasil Perhitungan:</h3>
                <p>Kategori: <strong>${selectedCategory}</strong></p>
                <p>Layanan: <strong>${selectedService.name}</strong></p>
                <p>Jumlah: <strong>${quantity} ${selectedService.unit}</strong></p>
                <p>Biaya Total: <strong>Rp ${totalCost.toLocaleString('id-ID')}</strong></p>
            `;
            resultBox.style.display = 'block';
        } else {
            resultBox.innerHTML = '<p>Layanan tidak ditemukan.</p>';
            resultBox.style.display = 'block';
        }
    });

    // Jalankan fungsi awal untuk mengisi dropdown kategori
    populateCategories();
});