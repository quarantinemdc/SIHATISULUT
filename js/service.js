document.addEventListener('DOMContentLoaded', () => {

    // Data layanan dan tarif
    const servicesData = {
        'Pelayanan Pengujian Kualitas Air dan Lingkungan': {
            
            'Biotik': [
                { id: '1', name: 'Enterococcus Faecalis', unit: 'percontoh', price: 100000 },
                { id: '2', name: 'Escherichia Coli', unit: 'percontoh', price: 375000 },
                { id: '3', name: 'Bakteri Pereduksi Sulfit', unit: 'percontoh', price: 100000 },
                { id: '4', name: 'Total Plate Count (TPC) / Angka Lempeng Total (ALT)', unit: 'percontoh', price: 100000 },
                { id: '5', name: 'Total Bakteri pada Air Tambak/Laut/Total Bakteri pada Sedimen Tambak/Laut', unit: 'percontoh', price: 50000 },
                { id: '6', name: 'Total Vibrio pada Air Tambak/Laut/Total Bakteri pada Sedimen Tambak/Laut', unit: 'percontoh', price: 55000 },
               
            ],
            'Abiotik': [
                { id: '7', name: 'Suhu', unit: 'percontoh', price: 1000 },
                { id: '8', name: 'Karbondioksida', unit: 'percontoh', price: 25000 },
                { id: '9', name: 'Total Bahan Organik', unit: 'percontoh', price: 30000 },
                { id: '10', name: 'Chemical Oxygen Demand (COD) Titrasi', unit: 'percontoh', price: 120000 },
                { id: '11', name: 'Chemical Oxygen Demand (COD) Spectrophotometer', unit: 'percontoh', price: 120000 },
                { id: '12', name: 'Chemical Oxygen Demand (COD Test Kit) Carbon Oxygen Demand (COD)', unit: 'percontoh', price: 80000 },
                { id: '13', name: 'Nitrogen Total (Test Kit)', unit: 'percontoh', price: 75000 },
                { id: '14', name: 'Besi (Fe)', unit: 'percontoh', price: 30000 },
                { id: '15', name: 'Kadar Amonia/N-Amonia (Spectrophotometer/Phenat)', unit: 'percontoh', price: 60000 },
                { id: '16', name: 'Kadar Amonia (Preparasi Kit)', unit: 'percontoh', price: 110000 },
                { id: '17', name: 'Kadar Amonium (kit)', unit: 'percontoh', price: 25000 },
                { id: '18', name: 'Kadar Biologi Oxygen Demand (BOD) Titrasi', unit: 'percontoh', price: 60000 },
                { id: '19', name: 'Oksigen Terlarut Dissolved Oxygen (DO) dengan Metode Titrasi', unit: 'percontoh', price: 30000 },
                { id: '20', name: 'Oksigen Terlarut Dissolved Oxygen (DO) dengan DO Meter', unit: 'percontoh', price: 40000 },
                { id: '21', name: 'Oksigen Terlarut (Kit)', unit: 'percontoh', price: 45000 },
                { id: '22', name: 'Hidrogen Sulfida', unit: 'percontoh', price: 50000 },
                { id: '23', name: 'Kadar Nitrat (Kit)', unit: 'percontoh', price: 80000 },
                { id: '24', name: 'N-Nitrat (N-NO3) dan N-Nitrit (N-NO2) dengan Metode Kolorimetri Kadmium', unit: 'percontoh', price: 150000 },
                { id: '25', name: 'Kadar Nitrit (Kit)', unit: 'percontoh', price: 20000 },
                { id: '26', name: 'Kadar Nitrit (Spectrophotometer)', unit: 'percontoh', price: 60000 },
                { id: '27', name: 'Kadar Fosfat (Kit)', unit: 'percontoh', price: 65000 },
                { id: '28', name: 'Preparasi Logam (Pb/Cu/Cd/Zn/Hg) Contoh Air (Metode Sepktrofotomentri Serapan Atom (SSA)', unit: 'percontoh', price: 125000 },
                { id: '29', name: 'Baca Kandungan Logam Berat (Pb/Cu/Zn)', unit: 'percontoh', price: 50000 },
                { id: '30', name: 'Baca Kandungan Logam Berat (Raksa/Hg', unit: 'percontoh', price: 150000 },
                { id: '31', name: 'Baca Kandungan Logam Berat (Sianida/CN/Ion Chromatography)', unit: 'percontoh', price: 230000 },
                { id: '32', name: 'Kesadahan Total Titrasi', unit: 'percontoh', price: 25000 },
                { id: '33', name: 'Kesadahan Metode Titrasi (Mg/Ca)', unit: 'percontoh', price: 50000 },
                { id: '34', name: 'Alakalinitas (Tes Kit)', unit: 'percontoh', price: 11000 },
                { id: '35', name: 'Padatan Tersuspensi Total (Total Suspended Solid)', unit: 'percontoh', price: 20000 },
                { id: '36', name: 'Kadar Klorin', unit: 'percontoh', price: 50000 },
                { id: '37', name: 'Kadar Sulfat (Spectrophotometer)', unit: 'percontoh', price: 130000 },
                { id: '38', name: 'Kadar Sulfit (Kit)', unit: 'percontoh', price: 250000 },
                { id: '39', name: 'Kadar Merkuri', unit: 'persampel', price: 250000 },
                { id: '40', name: 'Kadar Logam Berat (Selain Merkuri)', unit: 'persampel', price: 190000 },
                { id: '41', name: 'Salinitas', unit: 'percontoh', price: 5000 },
                { id: '42', name: 'Turbiditas (Kekeruhan) / Secchi Disk', unit: 'percontoh', price: 2000 },
                { id: '43', name: 'Turbiditas (Kekeruhan) Turbidimeter', unit: 'percontoh', price: 30000 },
                { id: '44', name: 'pH Indikator', unit: 'percontoh', price: 2000 },
                { id: '45', name: 'pH Meter', unit: 'percontoh', price: 15000 },
                { id: '46', name: 'Nitrogen Organik (Kj)', unit: 'percontoh', price: 150000 },
                { id: '47', name: 'Nitrogen Bebas', unit: 'percontoh', price: 75000 },
                { id: '48', name: 'Analisis Sulfur Potassium Chloride (SKCL)', unit: 'percontoh', price: 30000 },
             ]
        },
        'Pelayanan Pemeriksaan Hama/Kesehatan/Penyakit Ikan': {
            'Pemeriksaan Hama': [
                { id: '49', name: 'Hama', unit: 'perpemeriksaan', price: 5000 },
            ],

            'Analisis/Identifikasi/Pemeriksaan Parasit': [
                { id: '50', name: 'Analis/identifikasi/pemeriksaan parasit (Digesti)', unit: 'percontoh', price: 20000 },
                { id: '51', name: 'Analis/identifikasi/pemeriksaan parasit (Metode Mikroskopis)', unit: 'percontoh', price: 15000 },
                { id: '52', name: 'Analis/identifikasi/pemeriksaan parasit (Metode Konvensional)', unit: 'percontoh', price: 50000 },
            ],
            'Analis/identifikasi/pemeriksaan jamur' : [
                { id: '52', name: 'Metode Konvensional dengan Uji Rangkap', unit: 'perpemeriksaan', price: 100000 },
            ],
            'Analisis/Identifikasi/Pemeriksaan Bakteri Konvensional': [
                { id: '53', name: 'Preparat Sampel', unit: 'per penyakit per contoh', price: 15000 },
                { id: '54', name: 'Gram Negatif sampai Genus', unit: 'per penyakit per contoh', price: 50000 },
                { id: '55', name: 'Gram Negatif sampai Spesies', unit: 'per penyakit per contoh', price: 50000 },
                { id: '56', name: 'Gram Positif sampai Genus', unit: 'per penyakit per contoh', price: 75000 },
                { id: '57', name: 'Gram Positif sampai Spesies', unit: 'per penyakit per contoh', price: 175000 },
                { id: '58', name: 'Total Vibrio sp', unit: 'per contoh', price: 90000 },
                { id: '59', name: 'Angka Lempeng Total (ALT) Termofil Aerob/Mesofil Aerob', unit: 'per parameter per contoh', price: 100000 },
                { id: '60', name: 'Angka Lempeng Mesofil Anaerob', unit: 'per contoh', price: 100000 },
                { id: '61', name: 'Bakteri Halophilik ', unit: 'per contoh', price: 125000 },
                { id: '62', name: 'Vibrio Parahaemolyticus ', unit: 'per contoh', price: 375000 },
                { id: '63', name: 'Total Bakteri Pembusuk', unit: 'per contoh', price: 250000 },
                { id: '64', name: 'Perhitungan Vibrio sp Total/Vibrio Genus/Total Vibrio sp  ', unit: 'per contoh', price: 120000 },
            ],
            'Analisis/Identifikasi/Pemeriksaan Bakteri dengan Kit': [
                { id: '65', name: 'gram negatif.', unit: 'perpenyakit percontoh', price: 215000 },
                { id: '66', name: 'gram positif', unit: 'perpenyakit percontoh', price: 220000 },
            ],
            'Pemeriksaan Sampel Ikan Lengkap ': [
                { id: '67', name: 'Parasit, Bakteri, dan Jamur', unit: 'percontoh', price: 350000 }
            ],
            'Analisis/Identifikasi/Pemeriksaan Darah ': [
                { id: '68', name: 'Diferensial Leukosit', unit: 'percontoh', price: 50000 },
                { id: '69', name: 'Hematokrit ', unit: 'percontoh', price: 20000 },
                { id: '70', name: 'Glukosa Darah', unit: 'percontoh', price: 20000 },
                { id: '71', name: 'Jumlah Darah Merah', unit: 'percontoh', price: 50000 },
                { id: '72', name: 'Jumlah Darah Putih ', unit: 'percontoh', price: 50000 },
            ],
            'Analisis/Identifikasi/Pemeriksaan Metode Histologi ': [
                { id: '73', name: 'Pembuatan Preparasi Histologi (Fiksasi, Preparasi, Pewarnaan, dan Pembacaan Hasil Analisis Data)', unit: 'perpreparat', price: 150000 },
                { id: '74', name: 'Pembuatan Foto Histologi ', unit: 'perfoto', price: 250000 },
                { id: '75', name: 'Analisi Histopatologi', unit: 'percontoh', price: 50000 },
            ],
            'Analisis/Identifikasi/Pemeriksaan dengan Metode Imunologi': [
                { id: '76', name: 'Uji Aglutinasi ', unit: 'percontoh', price: 125000 },
                { id: '77', name: 'Immunocyto/Histokimia (In Vivo) ', unit: 'perpenyakit', price: 300000 },
                { id: '78', name: 'Immunocyto/Histokimia (In Vitro) ', unit: 'perpenyakit', price: 200000 },
                { id: '78', name: 'Uji Hormon dengan Metode Enszyme Linked Immunosorbent Assay (ELISA)  ', unit: 'percontoh', price: 300000 },
            ],
            'Analisis/Identifikasi/Pemeriksaan Parasit, Bakteri, Jamur, Virus, Enzim, Hormon, dan Protein dengan Metode Biologi (Pengkayaan)': [
                { id: '79', name: 'Esktrasi Deoxyribonucleic Acid (DNA)/Ribonucleic Acid (RNA)', unit: 'percontoh', price: 85000 },
                { id: '80', name: 'PCR Konvensional Deoxyribonucleic Acid (DNA) dengan Single Step  ', unit: 'perparameter percontoh', price: 250000 },
                { id: '81', name: 'PCR Deoxyribonucleic Acid (DNA) dengan Nested Step/Polymerase Chain Reaction (PCR) Toll Like Receptor-3 (TLR-3) ', unit: 'perpenyakit percontoh', price: 300000 },
                { id: '82', name: 'PCR Ribonucleic Acid (RNA) dengan Semi dan/atau Nested Step ', unit: 'perpenyakit percontoh', price: 350000 },
                { id: '83', name: 'PCR untuk Deteksi White Spot Syndrome Virus (WSSV) dengan Kit ', unit: 'percontoh', price: 250000 },
                { id: '84', name: 'PCR untuk Deteksi Koi Herpes Virus (KHV) ', unit: 'percontoh', price: 230000 },
                { id: '85', name: 'Polymerase Chain Reaction Kuantitatif (qPCR)/Deteksi Gen/Ekspresi Gen', unit: 'per parameter per contoh', price: 325000 },
                { id: '86', name: 'Ready to Run Fragment Analysis dengan Sampel berasal dari Aplikon (Random Amplified Polymorphic Deoxyribonucleic Acid (RAPD)) ', unit: 'percontoh', price: 200000 },
                { id: '87', name: 'Analisis Mikrosatelit/Analisa Random Amplified Polymorphic Deoxyribonucleic Acid ', unit: 'per jenis primer per contoh', price: 220000 },
                { id: '88', name: 'Restriction Fragment Length Polymorphism (RFLP) ', unit: 'percontoh', price: 180000 },
                { id: '89', name: 'Analisis Mayor Histocompatibility Complex (MHC) ', unit: 'percontoh', price: 250000 },
                { id: '90', name: 'Analisis Mitochondrial Deoxyribonucleic Acid ', unit: 'percontoh', price: 250000 },
                { id: '91', name: 'Pelayanan Transfer Gen dengan Elektroforator', unit: 'percontoh', price: 115000 },
                { id: '92', name: 'Konsentrasi Deoxyribonucleic Acid (DNA)/Ribonucleic Acid (RNA) (Fluorometri)', unit: 'percontoh', price: 45000 },
                
            ],
            'Analisis/Identifikasi/Pemeriksaan dengan Metode Sekuensing ': [
                { id: '93', name: 'Analisis/Identifikasi/Pemeriksaan dengan Metode Sekuensing (Sekuensing lengkap Forward)', unit: 'percontoh', price: 300000 },
                { id: '94', name: 'Analisis/Identifikasi/Pemeriksaan dengan Metode Sekuensing (Sekuensing lengkap Reverse)', unit: 'percontoh', price: 300000 },
                { id: '95', name: 'Analisis/Identifikasi/Pemeriksaan dengan Metode Sekuensing (Purifikasi Produk Polymerase Chain Reaction (PCR))', unit: 'percontoh', price: 50000 },
                { id: '96', name: 'Analisis/Identifikasi/Pemeriksaan dengan Metode Sekuensing (Analisa Basic Local Alignment Search Tool (BLAST))', unit: 'percontoh', price: 90000 }

            ],
          
        },
        'Bioassay': {
            'Toksisitas': [
                { id: '97', name: 'Akut (Uji pada Hewan Uji)', unit: 'per satu bahan uji', price: 3150000 },
                { id: '98', name: 'Letal (Uji pada Hewan Uji)', unit: 'percontoh', price: 2450000 }
            ],
            'Uji Sensitivitas': [
                { id: '99', name: 'Uji Sensitivitas', unit: 'percontoh', price: 150000 }
            ],
            'Uji Bioassay ': [
                { id: '100', name: 'Uji Bioassay terhadap Udang Windu ', unit: 'percontoh', price: 300000 },
                { id: '101', name: 'Uji Bioassay terhadap Ikan Liar', unit: 'percontoh', price: 300000 }
            ],
            'Uji Akumulasi': [
                { id: '102', name: 'Uji Akumulasi', unit: 'percontoh', price: 300000 }
            ]
        },
                'Bahan Acuan': {
            'Pembuatan Preparat Bakteri': [
                { id: '103', name: 'Pembuatan Preparat Bakteri', unit: 'per preparat', price: 50000 },
            ],
            'Penyediaan Kultur Acuan Bakteri': [
                { id: '104', name: 'Penyediaan Kultur Acuan Bakteri', unit: 'per isolat', price: 200000 },
            ],
            'Basah Beku (Liquid Drying)': [
                { id: '105', name: 'Basah Beku (Liquid Drying)', unit: 'per isolat', price: 600000 },
            ],
            'Kering Beku (Freeze Drying)': [
                { id: '106', name: 'Kering Beku (Freeze Drying)', unit: 'per isolat', price: 500000 },
            ],
            'Preparat (Histo/Parasit) Spesimen': [
                { id: '107', name: 'Preparat (Histo/Parasit) Spesimen', unit: 'per penyakit', price: 100000 },
            ],
            'Plasmid DNA dengan Metode Cloning Kit': [
                { id: '108', name: 'Plasmid Deoxyribonucleic Acid (DNA) dengan Metode Cloning Kit', unit: 'per isolat', price: 2000000 },
            ],
            'Cytopathic Effect Virus': [
                { id: '109', name: 'Cytopathic Effect (SPE) Virus', unit: 'per flask', price: 1000000 },
            ],
            'Pelayanan Pembuatan Bahan Acuan Kimia': [
                { id: '110', name: 'Pelayanan Pembuatan Bahan Acuan Kimia', unit: 'per paket (50 botol)', price: 18500000 },
            ],
            'Pelayanan Pembuatan Bahan Acuan Mikrobiologi': [
                { id: '111', name: 'Pelayanan Pembuatan Bahan Acuan Mikrobiologi', unit: 'per paket (50 ampul)', price: 10000000 },
            ],
        },
        'Uji Khusus Sediaan Biologik': {
            'Kit Diagnostik': [
                { id: '112', name: 'Kit Diagnostik Penyakit Viral Ikan', unit: 'per contoh', price: 2500000 },
                { id: '113', name: 'Kit Diagnostik Penyakit Bakterial Ikan', unit: 'per contoh', price: 2500000 },
            ]
        },
        'Pelayanan Uji Keamanan dan Mutu Produk Ikan': {
            'Uji Mikrobiologi Produk Ikan': [
                { id: '114', name: 'Angka Lempeng Total (ALT)/Total Plate Count (TPC)', unit: 'per contoh', price: 75000 },
                { id: '115', name: 'Angka Lempeng Total (ALT) Termofil Aerob/Mesofil Aerob', unit: 'per contoh', price: 100000 },
                { id: '116', name: 'Angka Lempeng Total (ALT) Termofil Anaerob', unit: 'per contoh', price: 100000 },
                { id: '117', name: 'Identifikasi Bakteri/Kapang/Khamir (paket uji pendahuluan, isolasi, mikroskopis, biokimia/konvensional)', unit: 'per contoh per paket', price: 1000000 },
                { id: '118', name: 'Total Coliform', unit: 'per contoh', price: 75000 },
                { id: '119', name: 'Total Coliform, Produk Kekerangan', unit: 'per contoh', price: 150000 },
                { id: '120', name: 'Identifikasi Escherichia Coli', unit: 'per contoh', price: 300000 },
                { id: '121', name: 'Vibrio Cholerae/Vibrio Parahaemolyticus', unit: 'per contoh', price: 375000 },
                { id: '122', name: 'Salmonella', unit: 'per contoh', price: 350000 },
                { id: '123', name: 'Staphylococcus Aureus', unit: 'per contoh', price: 450000 },
                { id: '124', name: 'Total Staphylococcus Aureus', unit: 'per contoh', price: 300000 },
                { id: '125', name: 'Listeria Monocytogenes', unit: 'per contoh', price: 350000 },
                { id: '126', name: 'Clostridium Perfringens', unit: 'per contoh', price: 400000 },
                { id: '127', name: 'Pengkayaan Escherichia Coli PCR - Produk Perikanan Segar selain Kekerangan', unit: 'per contoh', price: 7500 },
                { id: '128', name: 'Pengkayaan Escherichia Coli PCR - Produk Perikanan Segar jenis Kekerangan', unit: 'per contoh', price: 12000 },
                { id: '129', name: 'Pengkayaan Escherichia Coli PCR - Produk Perikanan Dingin/Beku selain Kekerangan', unit: 'per contoh', price: 72000 },
                { id: '130', name: 'Pengkayaan Escherichia Coli PCR - Produk Perikanan Dingin/Beku jenis Kekerangan', unit: 'per contoh', price: 120000 },
                { id: '131', name: 'Pengkayaan Escherichia Coli PCR - Produk Perikanan Jenis Daging Kekerangan', unit: 'per contoh', price: 126000 },
                { id: '132', name: 'Pengkayaan Salmonella spp. PCR', unit: 'per contoh', price: 24000 },
                { id: '133', name: 'Pengkayaan Vibrio Cholerae PCR', unit: 'per contoh', price: 85000 },
                { id: '134', name: 'Pengkayaan Vibrio Parahaemolyticus PCR', unit: 'per contoh', price: 100000 },
                { id: '135', name: 'Pengkayaan Staphylococcus Aureus PCR', unit: 'per contoh', price: 100000 },
            ]
        },
                'Jasa Tindakan Karantina': {
            'Pemeriksaan Klinis (Ekspor dan Impor)': [
                { id: '136', name: 'Pemeriksaan Klinis (Ekspor dan Impor)', unit: '', price: 0 },
            ],
            'Pelayanan Pengasingan dan/atau Penahanan Media Pembawa (Ekspor dan Impor)': [
                { id: '137', name: 'Pelayanan Pengasingan dan/atau Penahanan Media Pembawa (Ekspor dan Impor)', unit: '', price: 0 },
            ],
            'Pelayanan Pengamatan (Ekspor dan Impor)': [
                { id: '138', name: 'Pelayanan Pengamatan (Ekspor dan Impor)', unit: '', price: 0 },
            ],
            'Pelayanan Perlakuan (Ekspor dan Impor)': [
                { id: '139', name: 'Pelayanan Perlakuan (Ekspor dan Impor)', unit: '', price: 0 },
            ],
            'Jasa Sarana dalam Rangka Tindakan Karantina': [
                { id: '140', name: 'Pergerakan Kontainer (Kosong) 20’ Reefer/Non Reefer', unit: 'per boks', price: 100000 },
                { id: '141', name: 'Pergerakan Kontainer (Kosong) 40’ Reefer/Non Reefer', unit: 'per boks', price: 12500 },
                { id: '142', name: 'Pergerakan Kontainer isi 20’ Reefer/Non Reefer', unit: 'per boks', price: 200000 },
                { id: '143', name: 'Pergerakan Kontainer isi 40’ Reefer/Non Reefer', unit: 'per boks', price: 250000 },
                { id: '144', name: 'Penumpukan Masa Karantina (isi) 20’ Reefer/Non Reefer', unit: 'per boks per hari', price: 25000 },
                { id: '145', name: 'Penumpukan Masa Karantina (isi) 40’ Reefer/Non Reefer', unit: 'per boks per hari', price: 50000 },
                { id: '146', name: 'Penumpukan setelah Masa Karantina atau Penitipan Kontainer (isi) 20’ Reefer/Non Reefer Hari ke-1', unit: 'per boks per hari', price: 80000 },
                { id: '147', name: 'Penumpukan setelah Masa Karantina atau Penitipan Kontainer (isi) 20’ Reefer/Non Reefer Hari ke-2', unit: 'per boks per hari', price: 160000 },
                { id: '148', name: 'Penumpukan setelah Masa Karantina atau Penitipan Kontainer (isi) 20’ Reefer/Non Reefer Hari ke-3', unit: 'per boks per hari', price: 240000 },
                { id: '149', name: 'Penumpukan setelah Masa Karantina atau Penitipan Kontainer (isi) 20’ Reefer/Non Reefer Hari ke-4 dst', unit: 'per boks per hari', price: 320000 },
                { id: '150', name: 'Penumpukan setelah Masa Karantina atau Penitipan Kontainer (isi) 40’ Reefer/Non Reefer Hari ke-1', unit: 'per boks per hari', price: 160000 },
                { id: '151', name: 'Penumpukan setelah Masa Karantina atau Penitipan Kontainer (isi) 40’ Reefer/Non Reefer Hari ke-2', unit: 'per boks per hari', price: 320000 },
                { id: '152', name: 'Penumpukan setelah Masa Karantina atau Penitipan Kontainer (isi) 40’ Reefer/Non Reefer Hari ke-3', unit: 'per boks per hari', price: 480000 },
                { id: '153', name: 'Penumpukan setelah Masa Karantina atau Penitipan Kontainer (isi) 40’ Reefer/Non Reefer Hari ke-4 dst', unit: 'per boks per hari', price: 640000 },
                { id: '154', name: 'Penumpukan setelah Masa Karantina atau Penitipan Kontainer (kosong) 20’ Reefer/Non Reefer Hari ke-1', unit: 'per boks per hari', price: 45000 },
                { id: '155', name: 'Penumpukan setelah Masa Karantina atau Penitipan Kontainer (kosong) 20’ Reefer/Non Reefer Hari ke-2', unit: 'per boks per hari', price: 90000 },
                { id: '156', name: 'Penumpukan setelah Masa Karantina atau Penitipan Kontainer (kosong) 20’ Reefer/Non Reefer Hari ke-3', unit: 'per boks per hari', price: 135000 },
                { id: '157', name: 'Penumpukan setelah Masa Karantina atau Penitipan Kontainer (kosong) 20’ Reefer/Non Reefer Hari ke-4 dst', unit: 'per boks per hari', price: 180000 },
                { id: '158', name: 'Penumpukan setelah Masa Karantina atau Penitipan Kontainer (kosong) 40’ Reefer/Non Reefer Hari ke-1', unit: 'per boks per hari', price: 90000 },
                { id: '159', name: 'Penumpukan setelah Masa Karantina atau Penitipan Kontainer (kosong) 40’ Reefer/Non Reefer Hari ke-2', unit: 'per boks per hari', price: 180000 },
                { id: '160', name: 'Penumpukan setelah Masa Karantina atau Penitipan Kontainer (kosong) 40’ Reefer/Non Reefer Hari ke-3', unit: 'per boks per hari', price: 270000 },
                { id: '161', name: 'Penumpukan setelah Masa Karantina atau Penitipan Kontainer (kosong) 40’ Reefer/Non Reefer Hari ke-4 dst', unit: 'per boks per hari', price: 360000 },
                { id: '162', name: 'Pemakaian listrik Masa Karantina 20’ Reefer', unit: 'per 8 jam', price: 115000 },
                { id: '163', name: 'Pemakaian listrik Masa Karantina 40’ Reefer', unit: 'per 8 jam', price: 165000 },
                { id: '164', name: 'Pemakaian listrik penitipan barang 20’ Reefer', unit: 'per 8 jam', price: 175000 },
                { id: '165', name: 'Pemakaian listrik penitipan barang 40’ Reefer', unit: 'per 8 jam', price: 250000 },
                { id: '166', name: 'Pelayanan Pengamatan', unit: 'per 8 jam', price: 58000 },
            ],
            'Dokumen Tindakan Karantina': [
                { id: '167', name: 'Sertifikat Kesehatan Ikan dan Produk Ikan (Ekspor)', unit: 'per sertifikat', price: 25000 },
                { id: '168', name: 'Sertifikat Pelepasan (Impor)', unit: 'per sertifikat', price: 10000 },
            ],
            'Uji Profisiensi': [
                { id: '169', name: 'Uji Profisiensi dengan Parameter Parasit, Jamur, Bakteri, Virus, dan Kimia untuk Hama Penyakit Ikan Karantina, Mutu, dan Keamanan Produk Ikan', unit: 'per sampel per parameter', price: 1500000 },
            ],
        }


    };

    const categorySelect = document.getElementById('category-select');
    const subcategorySelect = document.getElementById('subcategory-select');
    const serviceSelect = document.getElementById('service-select');
    const quantityInput = document.getElementById('quantity-input');
    const unitLabel = document.getElementById('unit-label');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultBox = document.getElementById('result-box');

    function populateCategories() {
        for (const category in servicesData) {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categorySelect.appendChild(option);
        }
    }

    function populateSubcategories(category) {
        subcategorySelect.innerHTML = '<option value="">-- Pilih Subkategori --</option>';
        serviceSelect.innerHTML = '<option value="">-- Pilih Layanan --</option>';
        if (category && servicesData[category]) {
            for (const subcategory in servicesData[category]) {
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

    function populateServices(category, subcategory) {
        serviceSelect.innerHTML = '<option value="">-- Pilih Layanan --</option>';
        if (category && subcategory && servicesData[category] && servicesData[category][subcategory]) {
            servicesData[category][subcategory].forEach(service => {
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
        const selectedService = servicesData[selectedCategory][selectedSubcategory].find(s => s.id === selectedId);

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

    calculateBtn.addEventListener('click', () => {
        const selectedId = serviceSelect.value;
        const quantity = parseFloat(quantityInput.value);

        if (!selectedId || isNaN(quantity) || quantity <= 0) {
            alert('Silakan pilih layanan dan masukkan jumlah yang valid.');
            return;
        }

        const selectedCategory = categorySelect.value;
        const selectedSubcategory = subcategorySelect.value;
        const selectedService = servicesData[selectedCategory][selectedSubcategory].find(s => s.id === selectedId);
        
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

    populateCategories();
});