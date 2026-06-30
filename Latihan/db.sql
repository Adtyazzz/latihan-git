create table mahasiswa(
    nim INT(10) PRIMARY KEY,
    nama CHAR(255) NOT NULL,
    prodi CHAR(255) NOT NULL,
    jenisKelamin ENUM('Laki-laki','Perempuan'),
    alamat TEXT NOT NULL,
    noHp CHAR(25)
);


INSERT INTO mahasiswa(nim, nama, prodi, jenisKelamin, alamat, noHp)
VALUES (2311102, "Muhammad Aditya Dwi Saputra", "TIK", "Laki-laki", "Samarinda", "0812345");


INSERT INTO mahasiswa(nim, nama, prodi, jenisKelamin, alamat, noHp)
VALUES (2311107, "Yulita", "TIK", "Perempuan", "Samarinda", "0812325");

UPDATE mahasiswa
SET nama = "Aditya"
WHERE nim=2311102;


DELETE FROM mahasiswa WHERE nim=2311107
WHERE * FROM mahasiswa WHERE=nama;