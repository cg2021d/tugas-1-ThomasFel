# Tugas 1 Grafika Komputer 2021

05111940000062 - Thomas Felix B.

## WebGL

### Barang: Dasi Kupu-Kupu

Tampak Atas

<img src="https://github.com/cg2021d/tugas-1-ThomasFel/blob/main/img/bawah.jpg" height="400">

Tampak Bawah

<img src="https://github.com/cg2021d/tugas-1-ThomasFel/blob/main/img/atas.jpg" height="400">

Tampak Kiri

<img src="https://github.com/cg2021d/tugas-1-ThomasFel/blob/main/img/kiri.jpg" height="400" style="transform: rotate(90deg)">

Tampak Kanan

<img src="https://github.com/cg2021d/tugas-1-ThomasFel/blob/main/img/kanan.jpg" height="400">

## Hasil

- Tampak atas (*canvas* sebelah kiri)
- Tampak bawah (*canvas* sebelah kanan)

<img src="https://github.com/cg2021d/tugas-1-ThomasFel/blob/main/img/ss1.gif">

### Live demo: [di sini](https://cg2021d.github.io/tugas-1-ThomasFel/Tugas%201%20-%20WebGL/ "Goto di sini")

## Mencoba Three.js

Dalam tugas ini menggunakan **Three.js** dengan mengaplikasikan beberapa *geometry* seperti **Box**, **Cone**, **Torus**, **Sphere**, dan lain-lain. Ada pula beberapa *material* yang digunakan: **MeshBasic**, **MeshToon**, **MeshNormal**, **MeshPong**, dan sebagainya. Dan juga penggunaan beberapa jenis *lighting* untuk mengatur pencahayaan, yaitu **Directional**, **Ambient**, **Point**, **Hemisphere**, dan **Spot**.

Selain itu, juga memakai **GridHelper** untuk mendefinisikan *grid* atau *array* garis 2D. Dan terakhir **OrbitControls** untuk membuat kita bebas menggerakkan kamera yang mengarah ke objek.

## Hasil

<img src="https://github.com/cg2021d/tugas-1-ThomasFel/blob/main/img/ss2.gif">

### Live demo: [di sini](https://cg2021d.github.io/tugas-1-ThomasFel/Tugas%202%20-%20Mencoba%20Three.js/ "Goto di sini")

## User Interactive (Three.js)

Dalam tugas ini membuat objek baru yang muncul di posisi dan mempunyai warna secara acak (*random*). Tiap penambahannya makin lama akan makin cepat. Jika jumlah objek sudah mencapai batas, hentikan proses penambahan. Lalu, pilih 2 objek dengan warna yang sama, jika 2 objek tersebut sudah terpilih, maka hapus objek-objek tersebut dan tambahkan skor.

## Fitur

- *Generate* kubus/*cube* sebanyak 69 buah dengan warna dan posisi acak saat website pertama kali dibuka.
- Lalu, kubus akan di-*generate* sebanyak 5 buah secara otomatis dengan warna acak tiap 5 detik.
- Interval akan berkurang 0,5 detik tiap kubus di-*generate* secara otomatis dengan interval terkecil sebesar 1 detik.
- Objek memiliki limit penambahan sebanyak 200 buah. Jika objek telah berjumlah 195 buah, maka objek tidak akan di-*generate*.
- Untuk sistem skor, jika dengan tepat memilih kubus dengan warna yang sama, skor akan bertambah sebanyak 100. Jika salah, maka akan dikurangi sebanyak 25 poin.
- Jika skor bernilai minus, maka akan direset menjadi 0.

## Hasil

<img src="https://github.com/cg2021d/tugas-1-ThomasFel/blob/main/img/ss3.gif">

### Live demo: [di sini](https://cg2021d.github.io/tugas-1-ThomasFel/Tugas%203%20-%20User%20Interactive%20(Three.js)/ "Goto di sini")