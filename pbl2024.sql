-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 02 Jul 2024 pada 06.56
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pbl2024`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `beritas`
--

CREATE TABLE `beritas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `judul` varchar(255) NOT NULL,
  `deskripsi_awal` text NOT NULL,
  `deskripsi` longtext NOT NULL,
  `penerbit` varchar(255) NOT NULL,
  `tanggal_upload` date NOT NULL,
  `images` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `beritas`
--

INSERT INTO `beritas` (`id`, `judul`, `deskripsi_awal`, `deskripsi`, `penerbit`, `tanggal_upload`, `images`, `created_at`, `updated_at`) VALUES
(1, 'Peluncuran Aplikasi Pendidikan \'EduLearn\' Membawa Revolusi dalam Pembelajaran Online', 'Aplikasi pendidikan terbaru \'EduLearn\' mengubah paradigma pembelajaran online dengan fitur-fitur inovatif dan interaktif.', '<p class=\"isi-p\">Dalam era di mana pembelajaran jarak jauh semakin menjadi norma, peluncuran aplikasi pendidikan baru yang dinamakan \"EduLearn\" telah menarik perhatian banyak pihak. Aplikasi ini tidak hanya menyediakan akses ke berbagai materi pelajaran, tetapi juga menghadirkan fitur-fitur inovatif seperti kelas virtual 3D, ujian adaptif, dan forum diskusi yang memungkinkan interaksi antara siswa dan guru secara langsung.</p>\r\n<p class=\"isi-p\">\"EduLearn\" memperkenalkan pendekatan pembelajaran yang lebih personal dan efektif dengan menggunakan kecerdasan buatan untuk menyesuaikan kurikulum dan materi pelajaran sesuai dengan kebutuhan belajar masing-masing siswa. Selain itu, aplikasi ini juga menyediakan beragam konten multimedia, termasuk video interaktif dan simulasi, untuk memperkaya pengalaman belajar siswa. Dengan demikian, \"EduLearn\" tidak hanya menjadi alat pembelajaran yang efisien, tetapi juga membuka pintu menuju pembelajaran yang lebih menyenangkan dan terlibat bagi generasi digital masa kini.</p>', 'admin', '2024-05-22', 'svd.jpg', '2024-05-21 03:03:19', '2024-06-02 12:15:53'),
(2, 'Perusahaan Teknologi Terkemuka Rilis Fitur Keamanan Baru untuk Melindungi Privasi Pengguna', 'Perusahaan teknologi terkemuka mengumumkan peluncuran fitur keamanan terbaru yang dirancang untuk meningkatkan privasi pengguna secara online.', '<p class=\"isi-p\">Dalam upaya terus-menerus untuk meningkatkan keamanan dan privasi pengguna di era digital, perusahaan teknologi terkemuka telah meluncurkan fitur keamanan baru yang menjanjikan. Fitur ini dirancang untuk memberikan perlindungan tambahan terhadap ancaman siber, termasuk serangan malware, peretasan data, dan pelanggaran privasi. Dengan fitur ini, pengguna dapat merasa lebih aman dan terlindungi saat menjelajahi dunia online yang semakin kompleks dan berisiko.</p>\r\n<p class=\"isi-p\">Peluncuran fitur keamanan baru ini mendapat sambutan positif dari para ahli keamanan cyber dan pengguna teknologi. Fitur-fitur seperti deteksi ancaman real-time, enkripsi data end-to-end, dan kontrol privasi yang lebih granular memberikan pengguna kendali yang lebih besar atas informasi pribadi mereka. Diharapkan bahwa dengan adanya fitur-fitur keamanan ini, pengguna dapat merasakan pengalaman online yang lebih aman dan nyaman tanpa khawatir akan potensi risiko keamanan.</p>', 'admin', '2024-05-22', 'th (1).jpeg', '2024-05-24 11:18:54', '2024-06-02 12:15:37'),
(3, 'Startup Teknologi \'HealthHub\' Hadirkan Solusi Inovatif untuk Kesehatan Mental', '\"Startup teknologi \'HealthHub\' memperkenalkan platform baru yang menawarkan solusi inovatif untuk merawat kesehatan mental secara online.\"', '<p class=\"isi-p\">Dalam upaya untuk meningkatkan aksesibilitas terhadap perawatan kesehatan mental, startup teknologi \"HealthHub\" telah meluncurkan platform baru yang menghadirkan solusi inovatif bagi individu yang mencari bantuan mental secara online. Platform ini menawarkan berbagai fitur, termasuk sesi konseling virtual dengan profesional terlatih, program pelatihan kesehatan mental, dan alat-alat bantu mandiri untuk manajemen stres dan kecemasan.</p>\r\n<p class=\"isi-p\">Peluncuran platform \"HealthHub\" telah disambut dengan antusiasme oleh komunitas kesehatan mental dan pengguna teknologi. Dengan meningkatnya kesadaran akan pentingnya kesehatan mental, platform ini diharapkan dapat memberikan akses yang lebih mudah dan efektif bagi individu yang membutuhkan dukungan dan bimbingan dalam menjaga kesehatan pikiran mereka. Dengan adanya solusi inovatif seperti \"HealthHub\", diharapkan akan terjadi perubahan positif dalam penanganan kesehatan mental di masyarakat.</p>', 'admin', '2024-05-25', 'th (2).jpeg', '2024-05-24 11:22:14', '2024-06-02 12:16:35'),
(4, 'Perusahaan E-Commerce Terbesar Meluncurkan Fitur Pembayaran Baru untuk Meningkatkan Keamanan Transaksi Online', 'Perusahaan e-commerce terbesar mengumumkan peluncuran fitur pembayaran baru yang dirancang untuk meningkatkan keamanan dan kenyamanan bagi pengguna dalam bertransaksi online.', '<p class=\"isi-p\">Dalam langkah untuk memberikan pengalaman berbelanja online yang lebih aman dan nyaman bagi pelanggan, perusahaan e-commerce terbesar di dunia telah mengenalkan fitur pembayaran baru yang inovatif. Fitur ini tidak hanya memungkinkan pelanggan untuk melakukan pembayaran dengan lebih cepat dan mudah, tetapi juga menawarkan lapisan perlindungan tambahan terhadap penipuan dan pencurian identitas selama proses transaksi.</p>\r\n<p class=\"isi-p\">Peluncuran fitur pembayaran baru ini telah menjadi perhatian utama dalam industri e-commerce dan mendapat respons positif dari para pelanggan. Dengan adanya fitur-fitur keamanan seperti otentikasi dua faktor, enkripsi data yang kuat, dan pemantauan transaksi real-time, pelanggan dapat merasa lebih percaya diri saat berbelanja online. Diharapkan bahwa dengan adopsi fitur pembayaran baru ini, akan tercipta lingkungan belanja online yang lebih aman dan terpercaya bagi semua pengguna.</p>', 'admin', '2024-05-25', 'aplikasi-mobile.jpg', '2024-05-24 11:23:51', '2024-06-21 07:12:15'),
(8, 'berita terkini', 'deskripsi berita', '<p class=\"isi-p\">Dalam era di mana pembelajaran jarak jauh semakin menjadi norma, peluncuran aplikasi pendidikan baru yang dinamakan \"EduLearn\" telah menarik perhatian banyak pihak. Aplikasi ini tidak hanya menyediakan akses ke berbagai materi pelajaran, tetapi juga menghadirkan fitur-fitur inovatif seperti kelas virtual 3D, ujian adaptif, dan forum diskusi yang memungkinkan interaksi antara siswa dan guru secara langsung.</p>\r\n<p class=\"isi-p\">\"EduLearn\" memperkenalkan pendekatan pembelajaran yang lebih personal dan efektif dengan menggunakan kecerdasan buatan untuk menyesuaikan kurikulum dan materi pelajaran sesuai dengan kebutuhan belajar masing-masing siswa. Selain itu, aplikasi ini juga menyediakan beragam konten multimedia, termasuk video interaktif dan simulasi, untuk memperkaya pengalaman belajar siswa. Dengan demikian, \"EduLearn\" tidak hanya menjadi alat pembelajaran yang efisien, tetapi juga membuka pintu menuju pembelajaran yang lebih menyenangkan dan terlibat bagi generasi digital masa kini.</p>', 'admin', '2024-07-01', 'images (8).jpeg', '2024-07-01 06:35:30', '2024-07-01 06:35:30');

-- --------------------------------------------------------

--
-- Struktur dari tabel `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('456f2361d677372141da13ecbc8f27b83f5b6a15', 'i:1;', 1719825408),
('456f2361d677372141da13ecbc8f27b83f5b6a15:timer', 'i:1719825408;', 1719825408),
('9a3e61b6bcc8abec08f195526c3132d5a4a98cc0', 'i:1;', 1718932580),
('9a3e61b6bcc8abec08f195526c3132d5a4a98cc0:timer', 'i:1718932580;', 1718932580),
('a2092f63a2f91825e2c72496b104e027c2a5b0f0', 'i:2;', 1718472778),
('a2092f63a2f91825e2c72496b104e027c2a5b0f0:timer', 'i:1718472778;', 1718472778),
('ac3e7b007d7ab0ba379faa8ab62d9da35c5444f4', 'i:1;', 1718961292),
('ac3e7b007d7ab0ba379faa8ab62d9da35c5444f4:timer', 'i:1718961292;', 1718961292),
('ac9c957760424d463fbc0a28712e09dcd11a9415', 'i:1;', 1718933294),
('ac9c957760424d463fbc0a28712e09dcd11a9415:timer', 'i:1718933294;', 1718933294),
('captcha_00f0abe022c8401444fccc41b634bb7f', 'a:6:{i:0;s:1:\"c\";i:1;s:1:\"9\";i:2;s:1:\"h\";i:3;s:1:\"4\";i:4;s:1:\"h\";i:5;s:1:\"7\";}', 1718935128),
('captcha_01143c7189b989e617caa8c2382b9cb7', 'a:6:{i:0;s:1:\"a\";i:1;s:1:\"y\";i:2;s:1:\"d\";i:3;s:1:\"p\";i:4;s:1:\"8\";i:5;s:1:\"p\";}', 1718935092),
('captcha_02bfbb2937f3f935e4593398521c7431', 'a:6:{i:0;s:1:\"h\";i:1;s:1:\"q\";i:2;s:1:\"b\";i:3;s:1:\"f\";i:4;s:1:\"t\";i:5;s:1:\"j\";}', 1718982769),
('captcha_0a2fa3d9621560d4990a8b28cd1e758a', 'a:6:{i:0;s:1:\"p\";i:1;s:1:\"q\";i:2;s:1:\"z\";i:3;s:1:\"e\";i:4;s:1:\"d\";i:5;s:1:\"2\";}', 1718939359),
('captcha_0efafa3e1c504b754fe73123ee1d999d', 'a:6:{i:0;s:1:\"e\";i:1;s:1:\"t\";i:2;s:1:\"h\";i:3;s:1:\"z\";i:4;s:1:\"t\";i:5;s:1:\"j\";}', 1718953592),
('captcha_115fb10a47d426607efced5fce9cdf8c', 's:9:\"20 + 6 = \";', 1719825886),
('captcha_11ef209254cbfc91307344c7dfe1a0b8', 'a:6:{i:0;s:1:\"f\";i:1;s:1:\"c\";i:2;s:1:\"e\";i:3;s:1:\"f\";i:4;s:1:\"b\";i:5;s:1:\"y\";}', 1718935101),
('captcha_138260a6ec8412811f25d8328d7bb395', 'a:6:{i:0;s:1:\"z\";i:1;s:1:\"t\";i:2;s:1:\"m\";i:3;s:1:\"3\";i:4;s:1:\"a\";i:5;s:1:\"p\";}', 1718935083),
('captcha_1d145d075efc31eb03d7565a006a8232', 'a:6:{i:0;s:1:\"g\";i:1;s:1:\"e\";i:2;s:1:\"4\";i:3;s:1:\"q\";i:4;s:1:\"r\";i:5;s:1:\"9\";}', 1718935919),
('captcha_2281163354ae9ccb4921be5d451174da', 'a:6:{i:0;s:1:\"7\";i:1;s:1:\"r\";i:2;s:1:\"d\";i:3;s:1:\"r\";i:4;s:1:\"c\";i:5;s:1:\"f\";}', 1718974672),
('captcha_2599a28a09aa872eae5f746750acb09c', 's:9:\"22 + 4 = \";', 1719825671),
('captcha_27aa7c10c42ec300ab618182d8b09425', 'a:9:{i:0;s:1:\"y\";i:1;s:1:\"8\";i:2;s:1:\"f\";i:3;s:1:\"y\";i:4;s:1:\"a\";i:5;s:1:\"t\";i:6;s:1:\"a\";i:7;s:1:\"y\";i:8;s:1:\"g\";}', 1718935615),
('captcha_27c7d61ab8dca6b459bfec6811a06dc4', 's:9:\"29 + 9 = \";', 1719536695),
('captcha_27e3d046c4ce7ec9786d4b71b3bfe940', 'a:6:{i:0;s:1:\"a\";i:1;s:1:\"n\";i:2;s:1:\"x\";i:3;s:1:\"3\";i:4;s:1:\"h\";i:5;s:1:\"x\";}', 1718968032),
('captcha_282332376ddce9be451e6a24b2cb458a', 's:9:\"26 + 9 = \";', 1719536454),
('captcha_2fd98a969c99702aebf8e0ca2cc2c622', 's:9:\"10 + 6 = \";', 1719824421),
('captcha_32619f5fb932f864c73dec6aa6264688', 's:9:\"26 + 3 = \";', 1719535965),
('captcha_348769a464b0b8c43f8167383a0ad500', 's:9:\"18 + 2 = \";', 1719498347),
('captcha_360bbb92cd99f9d8259864aded84e892', 'a:9:{i:0;s:1:\"t\";i:1;s:1:\"c\";i:2;s:1:\"y\";i:3;s:1:\"j\";i:4;s:1:\"3\";i:5;s:1:\"q\";i:6;s:1:\"x\";i:7;s:1:\"z\";i:8;s:1:\"a\";}', 1718935611),
('captcha_367a8e942ea10bf577a812cc9ee3b3e0', 'a:6:{i:0;s:1:\"r\";i:1;s:1:\"f\";i:2;s:1:\"h\";i:3;s:1:\"g\";i:4;s:1:\"y\";i:5;s:1:\"x\";}', 1718984030),
('captcha_37b6cc173ced072e164089a34f1a87f9', 's:9:\"25 + 2 = \";', 1719824422),
('captcha_3c52b029d3e65742366e3ae94cc32752', 'a:6:{i:0;s:1:\"y\";i:1;s:1:\"p\";i:2;s:1:\"e\";i:3;s:1:\"c\";i:4;s:1:\"x\";i:5;s:1:\"e\";}', 1718947727),
('captcha_3caa05fd5a5f64ed8bf7db810a0a748a', 'a:6:{i:0;s:1:\"q\";i:1;s:1:\"y\";i:2;s:1:\"p\";i:3;s:1:\"m\";i:4;s:1:\"e\";i:5;s:1:\"p\";}', 1718947743),
('captcha_3cf215caaad06469b06ddd3e6289d28e', 's:9:\"28 + 5 = \";', 1719498599),
('captcha_3d9bc28814b07d65b8cdf90486bcd33b', 'a:9:{i:0;s:1:\"b\";i:1;s:1:\"b\";i:2;s:1:\"x\";i:3;s:1:\"r\";i:4;s:1:\"m\";i:5;s:1:\"q\";i:6;s:1:\"f\";i:7;s:1:\"t\";i:8;s:1:\"e\";}', 1718935286),
('captcha_3e0c41b50826aeb5bb7389d92492da9b', 's:9:\"19 + 7 = \";', 1719825897),
('captcha_3e630da81a0877c49984407b478459bd', 'a:6:{i:0;s:1:\"2\";i:1;s:1:\"h\";i:2;s:1:\"c\";i:3;s:1:\"a\";i:4;s:1:\"4\";i:5;s:1:\"a\";}', 1719497777),
('captcha_3f1c4ca254969c78546f2143d32024e5', 's:9:\"10 + 5 = \";', 1719498419),
('captcha_410d3fd282bc2a7d5cc7539d73fb32ec', 'a:9:{i:0;s:1:\"8\";i:1;s:1:\"r\";i:2;s:1:\"d\";i:3;s:1:\"8\";i:4;s:1:\"a\";i:5;s:1:\"c\";i:6;s:1:\"q\";i:7;s:1:\"8\";i:8;s:1:\"8\";}', 1718935273),
('captcha_438abf250b38fd1fd780ca7b13308123', 'a:6:{i:0;s:1:\"a\";i:1;s:1:\"q\";i:2;s:1:\"g\";i:3;s:1:\"m\";i:4;s:1:\"e\";i:5;s:1:\"g\";}', 1718939309),
('captcha_47d1099c1aac6798829b95730d3239a5', 'a:6:{i:0;s:1:\"2\";i:1;s:1:\"r\";i:2;s:1:\"4\";i:3;s:1:\"m\";i:4;s:1:\"t\";i:5;s:1:\"d\";}', 1718974673),
('captcha_4854dcbe1fd572dbd3c1f11ea2cf0465', 's:9:\"28 + 1 = \";', 1719824418),
('captcha_4efb2cffd36c861e29168dcbb163bc0e', 's:9:\"10 + 1 = \";', 1719539556),
('captcha_4f16489710d313b888adb7b525290ac8', 'a:6:{i:0;s:1:\"e\";i:1;s:1:\"p\";i:2;s:1:\"n\";i:3;s:1:\"y\";i:4;s:1:\"9\";i:5;s:1:\"d\";}', 1718978195),
('captcha_500b070344280dfe34ec39a74d1e8b45', 's:9:\"25 + 2 = \";', 1719825890),
('captcha_50c270746ffaa607bbf2f7a4b1f3757e', 'a:6:{i:0;s:1:\"j\";i:1;s:1:\"j\";i:2;s:1:\"b\";i:3;s:1:\"f\";i:4;s:1:\"r\";i:5;s:1:\"p\";}', 1718937142),
('captcha_51750ad32f11c04d1be5d420f7d1f372', 'a:6:{i:0;s:1:\"h\";i:1;s:1:\"d\";i:2;s:1:\"r\";i:3;s:1:\"r\";i:4;s:1:\"d\";i:5;s:1:\"q\";}', 1719497529),
('captcha_52198358afa4ec375d386a576e70ce24', 's:9:\"18 + 9 = \";', 1719825666),
('captcha_53274b461070fa7fff07fb1aade0043a', 'a:6:{i:0;s:1:\"n\";i:1;s:1:\"q\";i:2;s:1:\"x\";i:3;s:1:\"y\";i:4;s:1:\"2\";i:5;s:1:\"d\";}', 1718978193),
('captcha_5bf49b99947dfaef9e3f7d38cfadc20e', 'a:6:{i:0;s:1:\"f\";i:1;s:1:\"g\";i:2;s:1:\"t\";i:3;s:1:\"e\";i:4;s:1:\"p\";i:5;s:1:\"d\";}', 1718936179),
('captcha_5fd33417883594c9d732ba5b33e62cec', 's:9:\"12 + 7 = \";', 1719840458),
('captcha_60d566d0bd0b1ad65e63fad505a8c390', 'a:6:{i:0;s:1:\"7\";i:1;s:1:\"e\";i:2;s:1:\"b\";i:3;s:1:\"b\";i:4;s:1:\"m\";i:5;s:1:\"3\";}', 1718956200),
('captcha_621896145dfdce95f23589467349bf98', 's:9:\"24 + 2 = \";', 1719535598),
('captcha_625d4ea2ac9da5409eaf76e2a1872a16', 'a:6:{i:0;s:1:\"j\";i:1;s:1:\"c\";i:2;s:1:\"t\";i:3;s:1:\"t\";i:4;s:1:\"j\";i:5;s:1:\"7\";}', 1718935632),
('captcha_6354ee5e4ae6c8358df6f2add726bc0b', 'a:9:{i:0;s:1:\"b\";i:1;s:1:\"b\";i:2;s:1:\"z\";i:3;s:1:\"h\";i:4;s:1:\"y\";i:5;s:1:\"n\";i:6;s:1:\"q\";i:7;s:1:\"r\";i:8;s:1:\"b\";}', 1718935013),
('captcha_68ce3a24d8bf244e912872a1626c95a2', 'a:6:{i:0;s:1:\"e\";i:1;s:1:\"r\";i:2;s:1:\"x\";i:3;s:1:\"q\";i:4;s:1:\"j\";i:5;s:1:\"c\";}', 1718939165),
('captcha_69b4ac4b6c042f0212a0fec4cee6c488', 's:9:\"23 + 7 = \";', 1719537227),
('captcha_69c8e54941524da9930eddb67bdf4e84', 's:9:\"14 + 6 = \";', 1719824942),
('captcha_69e33694c0e943332a1769b465160117', 's:9:\"27 + 6 = \";', 1719498242),
('captcha_6b64ee9f31aeab33d453f18399338c8a', 'a:9:{i:0;s:1:\"f\";i:1;s:1:\"p\";i:2;s:1:\"b\";i:3;s:1:\"t\";i:4;s:1:\"j\";i:5;s:1:\"x\";i:6;s:1:\"n\";i:7;s:1:\"6\";i:8;s:1:\"7\";}', 1718934735),
('captcha_6ebe3193a403b1ca8bbfbd29f0e31657', 'a:9:{i:0;s:1:\"n\";i:1;s:1:\"j\";i:2;s:1:\"g\";i:3;s:1:\"a\";i:4;s:1:\"h\";i:5;s:1:\"f\";i:6;s:1:\"n\";i:7;s:1:\"r\";i:8;s:1:\"u\";}', 1718934775),
('captcha_720c12d80b4264f5677ebf9c2d15ac8b', 'a:6:{i:0;s:1:\"m\";i:1;s:1:\"t\";i:2;s:1:\"9\";i:3;s:1:\"p\";i:4;s:1:\"q\";i:5;s:1:\"t\";}', 1718974666),
('captcha_72fcfc12695737639f21e2144d883d03', 's:9:\"30 + 5 = \";', 1719825898),
('captcha_73e8f579b4fb2d0dc38ed1537aaed241', 'a:6:{i:0;s:1:\"m\";i:1;s:1:\"m\";i:2;s:1:\"h\";i:3;s:1:\"g\";i:4;s:1:\"m\";i:5;s:1:\"n\";}', 1718978154),
('captcha_75e226247cf0c85156d3cd4c95a1aca0', 'a:6:{i:0;s:1:\"e\";i:1;s:1:\"4\";i:2;s:1:\"4\";i:3;s:1:\"z\";i:4;s:1:\"t\";i:5;s:1:\"r\";}', 1719497843),
('captcha_772054ef61dc8b263dcf250dc99603f8', 'a:6:{i:0;s:1:\"q\";i:1;s:1:\"2\";i:2;s:1:\"x\";i:3;s:1:\"z\";i:4;s:1:\"q\";i:5;s:1:\"r\";}', 1719003829),
('captcha_78eae20e9b74f16184a267364a40e72f', 's:9:\"25 + 8 = \";', 1719824417),
('captcha_7c79c35b4d289dca504651493462607b', 'a:9:{i:0;s:1:\"j\";i:1;s:1:\"g\";i:2;s:1:\"t\";i:3;s:1:\"8\";i:4;s:1:\"u\";i:5;s:1:\"r\";i:6;s:1:\"b\";i:7;s:1:\"h\";i:8;s:1:\"a\";}', 1718934738),
('captcha_855add86faf1c49c7f7551f9adf1b820', 's:9:\"18 + 9 = \";', 1719537560),
('captcha_85bd005093e8271d450752f4ce038ee7', 'a:6:{i:0;s:1:\"p\";i:1;s:1:\"b\";i:2;s:1:\"c\";i:3;s:1:\"g\";i:4;s:1:\"d\";i:5;s:1:\"7\";}', 1718937101),
('captcha_861ece55c963fdd392b714a09f4a666c', 'a:6:{i:0;s:1:\"t\";i:1;s:1:\"8\";i:2;s:1:\"n\";i:3;s:1:\"x\";i:4;s:1:\"y\";i:5;s:1:\"c\";}', 1718950026),
('captcha_86d09b11771bc2e0686b8923cffbb362', 'a:9:{i:0;s:1:\"7\";i:1;s:1:\"f\";i:2;s:1:\"p\";i:3;s:1:\"f\";i:4;s:1:\"u\";i:5;s:1:\"9\";i:6;s:1:\"h\";i:7;s:1:\"e\";i:8;s:1:\"x\";}', 1718934778),
('captcha_86dbfaf4b902c65adbf39feeb0097242', 'a:6:{i:0;s:1:\"z\";i:1;s:1:\"m\";i:2;s:1:\"j\";i:3;s:1:\"r\";i:4;s:1:\"n\";i:5;s:1:\"u\";}', 1718982775),
('captcha_8a42a703539ec276369c901773724bcb', 's:9:\"15 + 5 = \";', 1719825896),
('captcha_910e835e04d94a4ba3a6994f28e38287', 'a:6:{i:0;s:1:\"q\";i:1;s:1:\"h\";i:2;s:1:\"b\";i:3;s:1:\"q\";i:4;s:1:\"y\";i:5;s:1:\"9\";}', 1718982901),
('captcha_964e47edfa749c437a4583def6ffa6a8', 'a:6:{i:0;s:1:\"z\";i:1;s:1:\"6\";i:2;s:1:\"p\";i:3;s:1:\"b\";i:4;s:1:\"9\";i:5;s:1:\"j\";}', 1718982795),
('captcha_96bcf65bec8a52c695a49edce3c72fdd', 'a:9:{i:0;s:1:\"u\";i:1;s:1:\"q\";i:2;s:1:\"f\";i:3;s:1:\"d\";i:4;s:1:\"y\";i:5;s:1:\"x\";i:6;s:1:\"y\";i:7;s:1:\"p\";i:8;s:1:\"b\";}', 1718935354),
('captcha_9797e4648d9ea2d3c2b0c804353b526f', 's:9:\"27 + 9 = \";', 1719839006),
('captcha_9b95a1ac74e3b53ce8894ef9327ceac9', 'a:6:{i:0;s:1:\"p\";i:1;s:1:\"n\";i:2;s:1:\"q\";i:3;s:1:\"n\";i:4;s:1:\"y\";i:5;s:1:\"b\";}', 1718953650),
('captcha_9cd192dee2cad7f233d0b0018770ee3a', 'a:9:{i:0;s:1:\"u\";i:1;s:1:\"7\";i:2;s:1:\"x\";i:3;s:1:\"e\";i:4;s:1:\"y\";i:5;s:1:\"m\";i:6;s:1:\"e\";i:7;s:1:\"r\";i:8;s:1:\"d\";}', 1718934975),
('captcha_9cf5a5b271b02ac4d6350e13b6267261', 'a:6:{i:0;s:1:\"j\";i:1;s:1:\"q\";i:2;s:1:\"n\";i:3;s:1:\"p\";i:4;s:1:\"f\";i:5;s:1:\"q\";}', 1718935897),
('captcha_9d97015c57bdb6fcbaf2f580189f3e9f', 'a:6:{i:0;s:1:\"u\";i:1;s:1:\"p\";i:2;s:1:\"m\";i:3;s:1:\"h\";i:4;s:1:\"h\";i:5;s:1:\"q\";}', 1719498121),
('captcha_9fef136a2f6b9b57bfca93aa3e827984', 's:9:\"16 + 4 = \";', 1719498424),
('captcha_a087264a94a9e8aa49c0d8437e16c2bb', 'a:6:{i:0;s:1:\"b\";i:1;s:1:\"3\";i:2;s:1:\"p\";i:3;s:1:\"z\";i:4;s:1:\"c\";i:5;s:1:\"c\";}', 1718974662),
('captcha_a13752af2636c05a3d8071a7eeeee2ab', 'a:6:{i:0;s:1:\"p\";i:1;s:1:\"p\";i:2;s:1:\"g\";i:3;s:1:\"b\";i:4;s:1:\"x\";i:5;s:1:\"n\";}', 1718943890),
('captcha_a23a3b2adb015a7bcc7c096105d6d2d0', 's:9:\"11 + 3 = \";', 1719806254),
('captcha_a28310d50faa6a6799ca7298d05afb10', 'a:6:{i:0;s:1:\"9\";i:1;s:1:\"m\";i:2;s:1:\"r\";i:3;s:1:\"t\";i:4;s:1:\"b\";i:5;s:1:\"r\";}', 1718937287),
('captcha_a530ae6eb97f57330b7ad13d37347e5b', 'a:6:{i:0;s:1:\"7\";i:1;s:1:\"x\";i:2;s:1:\"4\";i:3;s:1:\"f\";i:4;s:1:\"b\";i:5;s:1:\"z\";}', 1718939142),
('captcha_a945f17f52ecb35ea5e33ee51aefacf5', 's:9:\"17 + 9 = \";', 1719535476),
('captcha_aa67472afea245335f5a521d6ed9b0ff', 's:9:\"13 + 3 = \";', 1719498422),
('captcha_aadaafe2c112abffeffdaba6557c2278', 'a:6:{i:0;s:1:\"j\";i:1;s:1:\"p\";i:2;s:1:\"y\";i:3;s:1:\"7\";i:4;s:1:\"f\";i:5;s:1:\"m\";}', 1718977311),
('captcha_ab0a628f57425de4c49d3eca52a5783b', 'a:6:{i:0;s:1:\"j\";i:1;s:1:\"b\";i:2;s:1:\"h\";i:3;s:1:\"j\";i:4;s:1:\"h\";i:5;s:1:\"p\";}', 1718982843),
('captcha_abb981cd1980d25b54543bc226c106d5', 'a:6:{i:0;s:1:\"n\";i:1;s:1:\"y\";i:2;s:1:\"p\";i:3;s:1:\"u\";i:4;s:1:\"d\";i:5;s:1:\"z\";}', 1718936351),
('captcha_ac4b2ddd8ad7ec6eebd6abd889b30f6a', 's:9:\"14 + 1 = \";', 1719537549),
('captcha_acaf17d30b1c9d9f8a2bddd4aafc8739', 'a:6:{i:0;s:1:\"4\";i:1;s:1:\"r\";i:2;s:1:\"d\";i:3;s:1:\"6\";i:4;s:1:\"2\";i:5;s:1:\"h\";}', 1718974670),
('captcha_ae4a7763dda7e0f1421f5e6c85b3cb50', 'a:6:{i:0;s:1:\"a\";i:1;s:1:\"c\";i:2;s:1:\"6\";i:3;s:1:\"2\";i:4;s:1:\"g\";i:5;s:1:\"c\";}', 1718977374),
('captcha_b186fb47e02ce6a5ba8b7744256698cf', 's:9:\"16 + 7 = \";', 1719577350),
('captcha_b91d272efadd595118289f8e2f0b828b', 's:9:\"30 + 9 = \";', 1719821264),
('captcha_b9aa246ce757d508e466b394b62ae393', 's:9:\"22 + 6 = \";', 1719825665),
('captcha_bc051e14631a9b1556117f821a16408f', 'a:6:{i:0;s:1:\"b\";i:1;s:1:\"m\";i:2;s:1:\"3\";i:3;s:1:\"r\";i:4;s:1:\"j\";i:5;s:1:\"b\";}', 1718953671),
('captcha_bcc89d73283d275f17356a2cb00e4f35', 'a:6:{i:0;s:1:\"7\";i:1;s:1:\"b\";i:2;s:1:\"y\";i:3;s:1:\"m\";i:4;s:1:\"x\";i:5;s:1:\"j\";}', 1718935902),
('captcha_bfd96099ede5bf2cd568eaadc4a49f54', 'a:9:{i:0;s:1:\"y\";i:1;s:1:\"b\";i:2;s:1:\"2\";i:3;s:1:\"p\";i:4;s:1:\"p\";i:5;s:1:\"f\";i:6;s:1:\"b\";i:7;s:1:\"z\";i:8;s:1:\"u\";}', 1718935491),
('captcha_bff9675549fdc2be75d1230e3b62fe60', 's:9:\"26 + 4 = \";', 1719825758),
('captcha_c06c21aa0ce9caae254c2844c3b2402e', 'a:6:{i:0;s:1:\"c\";i:1;s:1:\"f\";i:2;s:1:\"c\";i:3;s:1:\"x\";i:4;s:1:\"f\";i:5;s:1:\"t\";}', 1718937787),
('captcha_c0e8ed781c65776b1beb36492e0c2b0f', 'a:9:{i:0;s:1:\"c\";i:1;s:1:\"b\";i:2;s:1:\"d\";i:3;s:1:\"t\";i:4;s:1:\"g\";i:5;s:1:\"u\";i:6;s:1:\"a\";i:7;s:1:\"p\";i:8;s:1:\"b\";}', 1718935266),
('captcha_c16dc18af63ce6711ec1a0e50b1397cf', 's:9:\"11 + 9 = \";', 1719825889),
('captcha_c35761d297779c9351dd08a3358208c2', 's:9:\"23 + 8 = \";', 1719825324),
('captcha_c72e388c0d9ac856f492d4417ca5caa4', 's:9:\"10 + 9 = \";', 1719536574),
('captcha_ca4a940164ad76faa0c7d07aa7ec2736', 's:9:\"14 + 6 = \";', 1719535607),
('captcha_cabe612725cc337d486d2f144aa18f0b', 's:9:\"11 + 3 = \";', 1719825759),
('captcha_d0c007f396832594578c39a7d21d5162', 's:9:\"22 + 8 = \";', 1719824248),
('captcha_d32190bd8c99fd2cd80aff9543fbe8b5', 'a:6:{i:0;s:1:\"c\";i:1;s:1:\"t\";i:2;s:1:\"3\";i:3;s:1:\"e\";i:4;s:1:\"u\";i:5;s:1:\"b\";}', 1718936307),
('captcha_d6fa65e7b54fafc668781d3aa9cbc41f', 'a:6:{i:0;s:1:\"x\";i:1;s:1:\"f\";i:2;s:1:\"d\";i:3;s:1:\"u\";i:4;s:1:\"r\";i:5;s:1:\"x\";}', 1718942359),
('captcha_d76fa0e229e4690b121f42dff93a1057', 's:9:\"29 + 4 = \";', 1719825769),
('captcha_d78777a95c1bbebb31875965b009f2a5', 'a:6:{i:0;s:1:\"a\";i:1;s:1:\"j\";i:2;s:1:\"u\";i:3;s:1:\"g\";i:4;s:1:\"3\";i:5;s:1:\"q\";}', 1718936589),
('captcha_d7ae5c71e0f9cd330d6fa81cda817545', 's:9:\"29 + 4 = \";', 1719825888),
('captcha_da39cd996db915cccda5f39a2b78e94f', 'a:6:{i:0;s:1:\"j\";i:1;s:1:\"e\";i:2;s:1:\"g\";i:3;s:1:\"m\";i:4;s:1:\"x\";i:5;s:1:\"b\";}', 1719498134),
('captcha_dd7254aa88557020a5da92a918bfe674', 's:9:\"21 + 3 = \";', 1719536403),
('captcha_dd9f64d8b402c92753c9100e609829c2', 'a:6:{i:0;s:1:\"e\";i:1;s:1:\"g\";i:2;s:1:\"y\";i:3;s:1:\"e\";i:4;s:1:\"m\";i:5;s:1:\"m\";}', 1718974669),
('captcha_e377230470c362617c082303ed08c275', 'a:9:{i:0;s:1:\"e\";i:1;s:1:\"b\";i:2;s:1:\"f\";i:3;s:1:\"u\";i:4;s:1:\"q\";i:5;s:1:\"m\";i:6;s:1:\"u\";i:7;s:1:\"d\";i:8;s:1:\"c\";}', 1718935475),
('captcha_e4ddf87b695d35641084d3e2c61a53b9', 'a:6:{i:0;s:1:\"x\";i:1;s:1:\"u\";i:2;s:1:\"r\";i:3;s:1:\"c\";i:4;s:1:\"g\";i:5;s:1:\"f\";}', 1718947757),
('captcha_e5a4a13b3003a47020b086f79865588e', 'a:6:{i:0;s:1:\"d\";i:1;s:1:\"2\";i:2;s:1:\"8\";i:3;s:1:\"9\";i:4;s:1:\"d\";i:5;s:1:\"h\";}', 1719498108),
('captcha_e6d55cd71ba1bd6ece70a0c4dff7ad80', 'a:6:{i:0;s:1:\"u\";i:1;s:1:\"n\";i:2;s:1:\"j\";i:3;s:1:\"3\";i:4;s:1:\"t\";i:5;s:1:\"m\";}', 1718964751),
('captcha_e88c4f0272463167e126962e1aa12b3a', 'a:6:{i:0;s:1:\"z\";i:1;s:1:\"r\";i:2;s:1:\"2\";i:3;s:1:\"3\";i:4;s:1:\"g\";i:5;s:1:\"r\";}', 1718937151),
('captcha_ea8b7174a3d396edf0646d8c2affa04a', 'a:9:{i:0;s:1:\"u\";i:1;s:1:\"y\";i:2;s:1:\"a\";i:3;s:1:\"y\";i:4;s:1:\"p\";i:5;s:1:\"x\";i:6;s:1:\"r\";i:7;s:1:\"z\";i:8;s:1:\"2\";}', 1718934876),
('captcha_ec33f18dbda6f2e2347b767a1d66ffc6', 'a:9:{i:0;s:1:\"u\";i:1;s:1:\"b\";i:2;s:1:\"2\";i:3;s:1:\"j\";i:4;s:1:\"f\";i:5;s:1:\"q\";i:6;s:1:\"x\";i:7;s:1:\"j\";i:8;s:1:\"m\";}', 1718935479),
('captcha_ec8b0fb4016b432546ef89d8fe39a62b', 'a:6:{i:0;s:1:\"q\";i:1;s:1:\"q\";i:2;s:1:\"d\";i:3;s:1:\"b\";i:4;s:1:\"q\";i:5;s:1:\"r\";}', 1718938345),
('captcha_ecd0972a33b902f94889adebc7e58725', 's:9:\"11 + 3 = \";', 1719825325),
('captcha_edadf435371cb45091c0c43cb1471ea8', 'a:6:{i:0;s:1:\"m\";i:1;s:1:\"m\";i:2;s:1:\"7\";i:3;s:1:\"d\";i:4;s:1:\"e\";i:5;s:1:\"y\";}', 1718938308),
('captcha_edd02d30846a8f774cdcb148a0aa3e60', 's:9:\"24 + 2 = \";', 1719498412),
('captcha_f1fe0f58585c5e4f94ea2df53bde09ba', 's:9:\"10 + 1 = \";', 1719821258),
('captcha_f396f0563b7e235ab9c954a867616fd5', 's:9:\"22 + 2 = \";', 1719825758),
('captcha_f4ca1b066bb299f7296518dee89e8e23', 's:9:\"12 + 2 = \";', 1719498269),
('captcha_f7042ada4c336f6c33ee40e5d8a9e436', 'a:6:{i:0;s:1:\"z\";i:1;s:1:\"t\";i:2;s:1:\"r\";i:3;s:1:\"2\";i:4;s:1:\"d\";i:5;s:1:\"t\";}', 1718935174),
('captcha_f9e81447a33da1dfb70210a21ec1cf5a', 'a:6:{i:0;s:1:\"u\";i:1;s:1:\"p\";i:2;s:1:\"m\";i:3;s:1:\"h\";i:4;s:1:\"g\";i:5;s:1:\"u\";}', 1719498114),
('captcha_fad17bf4ec3d2aa997754ffdd6677d9a', 's:9:\"23 + 8 = \";', 1719536633),
('captcha_fde25fc2522f783a28a09112aafd2bb7', 's:9:\"19 + 5 = \";', 1719824037),
('habib|127.0.0.1', 'i:1;', 1718982754),
('habib|127.0.0.1:timer', 'i:1718982754;', 1718982754),
('jurigamedeveoper@gmail.com|127.0.0.1', 'i:3;', 1718647564),
('jurigamedeveoper@gmail.com|127.0.0.1:timer', 'i:1718647564;', 1718647564),
('petugas@gmail.com|127.0.0.1', 'i:1;', 1718974857),
('petugas@gmail.com|127.0.0.1:timer', 'i:1718974857;', 1718974857),
('reyhan@gmail.com|127.0.0.1', 'i:1;', 1719541313),
('reyhan@gmail.com|127.0.0.1:timer', 'i:1719541313;', 1719541313),
('reza@gmail|127.0.0.1', 'i:3;', 1718765953),
('reza@gmail|127.0.0.1:timer', 'i:1718765953;', 1718765953);

-- --------------------------------------------------------

--
-- Struktur dari tabel `juaras`
--

CREATE TABLE `juaras` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `reg_lomba_id` bigint(20) UNSIGNED NOT NULL,
  `juara` enum('Juara 1','Juara 2','Juara 3','Juara Harapan 1') NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `kriterias`
--

CREATE TABLE `kriterias` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_kriteria` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `kriterias`
--

INSERT INTO `kriterias` (`id`, `name_kriteria`, `created_at`, `updated_at`) VALUES
(72, 'Originalitas', '2024-06-06 11:52:18', '2024-06-06 11:52:18'),
(73, 'GamePlay', '2024-06-06 11:52:18', '2024-06-06 11:52:18'),
(74, 'Audio', '2024-06-06 11:56:29', '2024-06-06 11:56:29'),
(75, 'Kesesuaian tema', '2024-06-06 11:56:29', '2024-06-06 11:56:29'),
(76, 'Kecepatan Penyelesaian', '2024-06-06 12:56:24', '2024-06-06 12:56:24'),
(77, 'Kualitas dan Kedalaman Analisis', '2024-06-06 12:56:24', '2024-06-06 12:56:24'),
(78, 'Teknik dan Metodologi yang Digunakan', '2024-06-06 12:56:24', '2024-06-06 12:56:24'),
(79, 'Pemahaman Konsep dan Prinsip Keamanan', '2024-06-06 12:56:24', '2024-06-06 12:56:24'),
(80, 'Desain Sistem', '2024-06-19 17:24:39', '2024-06-19 17:24:39'),
(81, 'Fungsionalitas', '2024-06-19 17:24:39', '2024-06-19 17:24:39'),
(82, 'Originalitas Ide', '2024-06-19 17:24:39', '2024-06-19 17:24:39'),
(83, 'Sustainability', '2024-06-19 17:24:39', '2024-06-19 17:24:39'),
(84, 'Usability', '2024-06-19 17:46:31', '2024-06-19 17:46:31'),
(85, 'Aesthetics', '2024-06-19 17:46:31', '2024-06-19 17:46:31'),
(86, 'User Experience', '2024-06-19 17:46:31', '2024-06-19 17:46:31'),
(87, 'Responsiveness', '2024-06-19 17:46:31', '2024-06-19 17:46:31'),
(88, 'Technical Expertise', '2024-06-19 17:50:59', '2024-06-19 17:50:59'),
(89, 'Adherence to Theme', '2024-06-19 17:50:59', '2024-06-19 17:50:59'),
(90, 'Content and Narrative', '2024-06-19 17:50:59', '2024-06-19 17:50:59'),
(91, 'Technology and Implementation', '2024-06-19 17:50:59', '2024-06-19 17:50:59'),
(93, 'warna', '2024-07-01 06:30:39', '2024-07-01 06:30:39');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kriteria_lombas`
--

CREATE TABLE `kriteria_lombas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `lomba_id` bigint(20) UNSIGNED NOT NULL,
  `kriteria_id` bigint(20) UNSIGNED NOT NULL,
  `bobot` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `kriteria_lombas`
--

INSERT INTO `kriteria_lombas` (`id`, `lomba_id`, `kriteria_id`, `bobot`, `created_at`, `updated_at`) VALUES
(49, 23, 91, 20, '2024-06-19 17:53:40', '2024-06-19 17:53:40'),
(50, 23, 90, 30, '2024-06-19 17:53:40', '2024-06-19 17:53:40'),
(51, 23, 89, 30, '2024-06-19 17:53:40', '2024-06-19 17:53:40'),
(52, 23, 88, 20, '2024-06-19 17:53:40', '2024-06-19 17:53:40'),
(53, 24, 81, 40, '2024-06-19 17:59:13', '2024-06-19 17:59:13'),
(54, 24, 80, 20, '2024-06-19 17:59:13', '2024-06-19 17:59:13'),
(55, 24, 84, 30, '2024-06-19 17:59:13', '2024-06-19 17:59:13'),
(56, 24, 86, 10, '2024-06-19 17:59:13', '2024-06-19 17:59:13'),
(61, 19, 72, 40, '2024-06-27 16:23:37', '2024-06-27 16:23:37'),
(62, 19, 73, 30, '2024-06-27 16:23:37', '2024-06-27 16:23:37'),
(63, 19, 74, 10, '2024-06-27 16:23:37', '2024-06-27 16:23:37'),
(64, 19, 75, 20, '2024-06-27 16:23:37', '2024-06-27 16:23:37'),
(65, 20, 79, 30, '2024-06-27 16:24:08', '2024-06-27 16:24:08'),
(66, 20, 78, 10, '2024-06-27 16:24:08', '2024-06-27 16:24:08'),
(67, 20, 77, 20, '2024-06-27 16:24:08', '2024-06-27 16:24:08'),
(68, 20, 76, 40, '2024-06-27 16:24:08', '2024-06-27 16:24:08'),
(69, 21, 80, 20, '2024-06-27 16:24:40', '2024-06-27 16:24:40'),
(70, 21, 81, 30, '2024-06-27 16:24:40', '2024-06-27 16:24:40'),
(71, 21, 82, 30, '2024-06-27 16:24:40', '2024-06-27 16:24:40'),
(72, 21, 83, 20, '2024-06-27 16:24:40', '2024-06-27 16:24:40'),
(77, 22, 87, 10, '2024-06-28 09:24:02', '2024-06-28 09:24:02'),
(78, 22, 86, 40, '2024-06-28 09:24:02', '2024-06-28 09:24:02'),
(79, 22, 85, 20, '2024-06-28 09:24:02', '2024-06-28 09:24:02'),
(80, 22, 84, 30, '2024-06-28 09:24:02', '2024-06-28 09:24:02'),
(81, 25, 72, 20, '2024-07-01 06:33:00', '2024-07-01 06:33:00'),
(82, 25, 73, 20, '2024-07-01 06:33:00', '2024-07-01 06:33:00'),
(83, 25, 74, 20, '2024-07-01 06:33:00', '2024-07-01 06:33:00'),
(84, 25, 75, 40, '2024-07-01 06:33:00', '2024-07-01 06:33:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `lombas`
--

CREATE TABLE `lombas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_lomba` varchar(255) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `kontak` varchar(255) DEFAULT NULL,
  `pj` varchar(255) DEFAULT NULL,
  `tempat` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `sertifikat` varchar(255) DEFAULT NULL,
  `biaya_pendaftaran` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `lombas`
--

INSERT INTO `lombas` (`id`, `name_lomba`, `description`, `kontak`, `pj`, `tempat`, `picture`, `sertifikat`, `biaya_pendaftaran`, `created_at`, `updated_at`) VALUES
(19, 'Game Developer', '<h5 class=\"deskripsil\"><b>A. Deskripsi</b></h5>\r\n<a class=\"deskripsil deskripsil-detail\">Lomba Game Developer adalah suatu kompetisi yang ditujukan pada para calon peserta untuk berkreativitas merancang permainan digital dengan tema yang diusung adalah “Creative Design Innovation in the Digital Era to Realize Indonesia Emas 2045”.\r\n</a>\r\n<a class=\"deskripsil deskripsil-detail\">Dari tema tersebut para calon peserta akan mengungkapkan permasalahan dan tantangan yang dihadapi oleh masyarakat Indonesia dan memberikan solusi melalui perancangan permainan digital yang interaktif dan edukatif dengan tujuan untuk mencapai Indonesia Emas 2045. Selain merancang sesuai kebutuhan dan kegunaan, para calon peserta juga perlu menggunakan kreativitas mereka agar permainan yang dihasilkan lebih unik, variatif, dan memiliki daya tarik.\r\n</a>\r\n<a class=\"deskripsil deskripsil-detail\"> Tujuan dari kompetisi ini adalah mengajak para sinergis muda untuk berkolaborasi dalam tim menyalurkan kemampuan desain dan pengembangan permainan mereka yang akan berdampak positif bagi pengguna. Selain itu, dengan diselenggarakannya kompetisi ini maka akan memperluas jaringan para pengembang game untuk dapat dilirik oleh perusahaan atau organisasi.\r\n</a>\r\n<br><br>\r\n<h5 class=\"deskripsil\"><b>B. Tema Lomba</b></h5>\r\n<a class=\"deskripsil deskripsil-detailnew\">Kompetisi kali ini mengusung tema “Creative Design Innovation in the Digital Era to Realize Indonesia Emas 2045”\r\n</a>\r\n<br><br>\r\n<h5 class=\"deskripsil\"><b>C. Ketentuan Peserta</b></h5>\r\n<ol class=\"deskripsil-detail2\">\r\n    <li>Peserta merupakan seorang mahasiswa/i aktif program Diploma (D1-D4)/Sarjana (S1) dari Perguruan Tinggi Negeri/Swasta yang dibuktikan dengan Kartu Tanda Mahasiswa (KTM).</li>\r\n    <li>Perlombaan bersifat tim dengan minimal anggota 2 orang dan maksimal 3 orang dari institusi atau perguruan tinggi yang sama. Selain itu, diperbolehkan untuk lintas program studi bagi mahasiswa/i perguruan tinggi.</li>\r\n    <li>Setiap peserta hanya diperbolehkan mengirimkan satu karya terbaik. </li>\r\n    <li>Peserta hanya diperbolehkan berada dalam satu tim game developer.</li>\r\n    <li>Peserta dikenakan biaya pendaftaran sebesar Rp 50.000,00 per tim.</li>\r\n    <li> Peserta bersedia mengikuti seluruh rangkaian kegiatan yang telah dijadwalkan oleh panitia.</li>\r\n    <li>Peserta yang tidak memenuhi persyaratan dinyatakan gugur.</li>\r\n</ol>\r\n<br>\r\n<h5 class=\"deskripsil\"><b>D. Ketentuan Lomba</b></h5>\r\n<ol class=\"deskripsil-detail2\">\r\n    <li>Setiap peserta hanya diperbolehkan mengembangkan satu platform (desktop atau mobile) untuk dijadikan sebagai studi kasus.</li>\r\n    <li>Karya yang diusulkan merupakan karya orisinil peserta dan belum pernah diikutsertakan dalam kompetisi sejenis serta belum pernah dipublikasikan dalam bentuk apapun.</li>\r\n    <li>Karya tidak boleh mengandung unsur pornografi, SARA, sadisme atau hal-hal yang bersifat merendahkan atau melecehkan pihak lain.</li>\r\n    <li>Karya dibatasi untuk pengguna software berbasis permainan digital.</li>\r\n    <li>Karya harus sesuai dengan tema yaitu “Creative Design Innovation in the Digital Era to Realize Indonesia Emas 2045”.</li>\r\n    <li>Karya yang diterima adalah karya yang dikirimkan sesuai dengan batas waktu yang telah ditentukan.</li>\r\n    <li>Penilaian dilakukan oleh dewan juri yang telah ditetapkan oleh panitia.</li>\r\n    <li>Dewan Juri adalah pihak yang memiliki wewenang memberikan penilaian sesuai dengan kriteria yang telah ditetapkan. Penilaian dari dewan juri bersifat mutlak dan tidak dapat diganggu gugat.</li>\r\n    <li>Pemenang perlombaan merupakan tim dengan nilai tertinggi dari semua aspek penilaian yang telah ditetapkan oleh panitia. Keputusan juri tidak dapat diganggu gugat.</li>\r\n</ol>', '81245678667', 'Robert', 'Jebres, Surakarta', 'picture_files/NkkcMabNOHMsGdOUBPzkq1buhuGQjnhHITeWYVhu.jpg', 'sertifikat_files/8ZBOljZLPBmG5CiSppt7k4MMRUY2R2j9rOKdequ4.pdf', 50000, '2024-06-14 00:19:40', '2024-06-27 16:23:37'),
(20, 'Cyber Security', '<h5 class=\"deskripsil\"><b>A. Deskripsi</b></h5>\r\n<a class=\"deskripsil deskripsil-detail\">Lomba Cyber Security adalah suatu kompetisi yang ditujukan pada para calon peserta untuk berkreativitas dalam merancang dan mengembangkan solusi keamanan siber dengan tema yang diusung adalah “Creative Design Innovation in the Digital Era to Realize Indonesia Emas 2045”.\r\n</a>\r\n<a class=\"deskripsil deskripsil-detail\">Dari tema tersebut para calon peserta akan mengungkapkan permasalahan dan tantangan keamanan siber yang dihadapi oleh masyarakat Indonesia dan memberikan solusi melalui perancangan sistem keamanan yang efektif dan inovatif dengan tujuan untuk mencapai Indonesia Emas 2045. Selain merancang sesuai kebutuhan dan kegunaan, para calon peserta juga perlu menggunakan kreativitas mereka agar solusi keamanan siber yang dihasilkan lebih unik, variatif, dan memiliki daya tarik.\r\n</a>\r\n<a class=\"deskripsil deskripsil-detail\">Tujuan dari kompetisi ini adalah mengajak para sinergis muda untuk berkolaborasi dalam tim menyalurkan kemampuan desain dan pengembangan sistem keamanan siber yang akan berdampak positif bagi pengguna. Selain itu, dengan diselenggarakannya kompetisi ini maka akan memperluas jaringan para ahli keamanan siber untuk dapat dilirik oleh perusahaan atau organisasi.\r\n</a>\r\n<br><br>\r\n<h5 class=\"deskripsil\"><b>B. Tema Lomba</b></h5>\r\n<a class=\"deskripsil deskripsil-detailnew\">Kompetisi kali ini mengusung tema “Creative Design Innovation in the Digital Era to Realize Indonesia Emas 2045”\r\n</a>\r\n<br><br>\r\n<h5 class=\"deskripsil\"><b>C. Ketentuan Peserta</b></h5>\r\n<ol class=\"deskripsil-detail2\">\r\n    <li>Peserta merupakan seorang mahasiswa/i aktif program Diploma (D1-D4)/Sarjana (S1) dari Perguruan Tinggi Negeri/Swasta yang dibuktikan dengan Kartu Tanda Mahasiswa (KTM).</li>\r\n    <li>Perlombaan bersifat tim dengan minimal anggota 2 orang dan maksimal 3 orang dari institusi atau perguruan tinggi yang sama. Selain itu, diperbolehkan untuk lintas program studi bagi mahasiswa/i perguruan tinggi.</li>\r\n    <li>Setiap peserta hanya diperbolehkan mengirimkan satu karya terbaik. </li>\r\n    <li>Peserta hanya diperbolehkan berada dalam satu tim cyber security.</li>\r\n    <li>Peserta dikenakan biaya pendaftaran sebesar Rp 50.000,00 per tim.</li>\r\n    <li>Peserta bersedia mengikuti seluruh rangkaian kegiatan yang telah dijadwalkan oleh panitia.</li>\r\n    <li>Peserta yang tidak memenuhi persyaratan dinyatakan gugur.</li>\r\n</ol>\r\n<br>\r\n<h5 class=\"deskripsil\"><b>D. Ketentuan Lomba</b></h5>\r\n<ol class=\"deskripsil-detail2\">\r\n    <li>Setiap peserta hanya diperbolehkan mengembangkan satu jenis solusi keamanan siber untuk dijadikan sebagai studi kasus.</li>\r\n    <li>Karya yang diusulkan merupakan karya orisinil peserta dan belum pernah diikutsertakan dalam kompetisi sejenis serta belum pernah dipublikasikan dalam bentuk apapun.</li>\r\n    <li>Karya tidak boleh mengandung unsur pornografi, SARA, sadisme atau hal-hal yang bersifat merendahkan atau melecehkan pihak lain.</li>\r\n    <li>Karya harus sesuai dengan tema yaitu “Creative Design Innovation in the Digital Era to Realize Indonesia Emas 2045”.</li>\r\n    <li>Karya yang diterima adalah karya yang dikirimkan sesuai dengan batas waktu yang telah ditentukan.</li>\r\n    <li>Penilaian dilakukan oleh dewan juri yang telah ditetapkan oleh panitia.</li>\r\n    <li>Dewan Juri adalah pihak yang memiliki wewenang memberikan penilaian sesuai dengan kriteria yang telah ditetapkan. Penilaian dari dewan juri bersifat mutlak dan tidak dapat diganggu gugat.</li>\r\n    <li>Pemenang perlombaan merupakan tim dengan nilai tertinggi dari semua aspek penilaian yang telah ditetapkan oleh panitia. Keputusan juri tidak dapat diganggu gugat.</li>\r\n</ol>', '87654456789', 'Hadi', 'Jebres, Surakarta', 'picture_files/jCj9paHOkpu1tly0bk119JsuCV928nziw8lJMzb2.jpg', 'sertifikat_files/gaDEL8lYTJeO1pBpwGVVB2Zr1utkvczqGsCzeRQQ.pdf', 50000, '2024-06-14 01:18:55', '2024-06-27 16:24:08'),
(21, 'IOT', '<h5 class=\"deskripsil\"><b>A. Deskripsi</b></h5>\r\n<a class=\"deskripsil deskripsil-detail\">Lomba IoT (Internet of Things) adalah suatu kompetisi yang ditujukan pada para calon peserta untuk berkreativitas dalam merancang dan mengembangkan solusi IoT dengan tema yang diusung adalah “Creative Design Innovation in the Digital Era to Realize Indonesia Emas 2045”.\r\n</a>\r\n<a class=\"deskripsil deskripsil-detail\">Dari tema tersebut para calon peserta akan mengungkapkan permasalahan dan tantangan yang dihadapi oleh masyarakat Indonesia dan memberikan solusi melalui perancangan sistem IoT yang efektif dan inovatif dengan tujuan untuk mencapai Indonesia Emas 2045. Selain merancang sesuai kebutuhan dan kegunaan, para calon peserta juga perlu menggunakan kreativitas mereka agar solusi IoT yang dihasilkan lebih unik, variatif, dan memiliki daya tarik.\r\n</a>\r\n<a class=\"deskripsil deskripsil-detail\">Tujuan dari kompetisi ini adalah mengajak para sinergis muda untuk berkolaborasi dalam tim menyalurkan kemampuan desain dan pengembangan sistem IoT yang akan berdampak positif bagi pengguna. Selain itu, dengan diselenggarakannya kompetisi ini maka akan memperluas jaringan para ahli IoT untuk dapat dilirik oleh perusahaan atau organisasi.\r\n</a>\r\n<br><br>\r\n<h5 class=\"deskripsil\"><b>B. Tema Lomba</b></h5>\r\n<a class=\"deskripsil deskripsil-detailnew\">Kompetisi kali ini mengusung tema “Creative Design Innovation in the Digital Era to Realize Indonesia Emas 2045”\r\n</a>\r\n<br><br>\r\n<h5 class=\"deskripsil\"><b>C. Ketentuan Peserta</b></h5>\r\n<ol class=\"deskripsil-detail2\">\r\n    <li>Peserta merupakan seorang mahasiswa/i aktif program Diploma (D1-D4)/Sarjana (S1) dari Perguruan Tinggi Negeri/Swasta yang dibuktikan dengan Kartu Tanda Mahasiswa (KTM).</li>\r\n    <li>Perlombaan bersifat tim dengan minimal anggota 2 orang dan maksimal 3 orang dari institusi atau perguruan tinggi yang sama. Selain itu, diperbolehkan untuk lintas program studi bagi mahasiswa/i perguruan tinggi.</li>\r\n    <li>Setiap peserta hanya diperbolehkan mengirimkan satu karya terbaik. </li>\r\n    <li>Peserta hanya diperbolehkan berada dalam satu tim IoT.</li>\r\n    <li>Peserta dikenakan biaya pendaftaran sebesar Rp 50.000,00 per tim.</li>\r\n    <li>Peserta bersedia mengikuti seluruh rangkaian kegiatan yang telah dijadwalkan oleh panitia.</li>\r\n    <li>Peserta yang tidak memenuhi persyaratan dinyatakan gugur.</li>\r\n</ol>\r\n<br>\r\n<h5 class=\"deskripsil\"><b>D. Ketentuan Lomba</b></h5>\r\n<ol class=\"deskripsil-detail2\">\r\n    <li>Setiap peserta hanya diperbolehkan mengembangkan satu jenis solusi IoT untuk dijadikan sebagai studi kasus.</li>\r\n    <li>Karya yang diusulkan merupakan karya orisinil peserta dan belum pernah diikutsertakan dalam kompetisi sejenis serta belum pernah dipublikasikan dalam bentuk apapun.</li>\r\n    <li>Karya tidak boleh mengandung unsur pornografi, SARA, sadisme atau hal-hal yang bersifat merendahkan atau melecehkan pihak lain.</li>\r\n    <li>Karya harus sesuai dengan tema yaitu “Creative Design Innovation in the Digital Era to Realize Indonesia Emas 2045”.</li>\r\n    <li>Karya yang diterima adalah karya yang dikirimkan sesuai dengan batas waktu yang telah ditentukan.</li>\r\n    <li>Penilaian dilakukan oleh dewan juri yang telah ditetapkan oleh panitia.</li>\r\n    <li>Dewan Juri adalah pihak yang memiliki wewenang memberikan penilaian sesuai dengan kriteria yang telah ditetapkan. Penilaian dari dewan juri bersifat mutlak dan tidak dapat diganggu gugat.</li>\r\n    <li>Pemenang perlombaan merupakan tim dengan nilai tertinggi dari semua aspek penilaian yang telah ditetapkan oleh panitia. Keputusan juri tidak dapat diganggu gugat.</li>\r\n</ol>', '812348773838', 'Jokowidodo', 'Jebres, Surakarta', 'picture_files/sYTs84Fqr8eqVC64rSuvx6d9Pb6bJ3Cp9fACUhzG.jpg', 'sertifikat_files/XnBK0jxAnCKO9dutdtViRMGSscfCtmAhBU4K7tiA.pdf', 50000, '2024-06-19 17:27:56', '2024-06-27 16:24:40'),
(22, 'UI/UX', '<h5 class=\"deskripsil\"><b>A. Deskripsi</b></h5>\r\n<a class=\"deskripsil deskripsil-detail\">Lomba UI/UX (User Interface/User Experience) adalah suatu kompetisi yang ditujukan pada para calon peserta untuk berkreativitas dalam merancang dan mengembangkan solusi UI/UX dengan tema yang diusung adalah “Creative Design Innovation in the Digital Era to Realize Indonesia Emas 2045”.\r\n</a>\r\n<a class=\"deskripsil deskripsil-detail\">Dari tema tersebut para calon peserta akan mengungkapkan permasalahan dan tantangan yang dihadapi oleh masyarakat Indonesia dan memberikan solusi melalui perancangan antarmuka dan pengalaman pengguna yang efektif dan inovatif dengan tujuan untuk mencapai Indonesia Emas 2045. Selain merancang sesuai kebutuhan dan kegunaan, para calon peserta juga perlu menggunakan kreativitas mereka agar solusi UI/UX yang dihasilkan lebih unik, variatif, dan memiliki daya tarik.\r\n</a>\r\n<a class=\"deskripsil deskripsil-detail\">Tujuan dari kompetisi ini adalah mengajak para sinergis muda untuk berkolaborasi dalam tim menyalurkan kemampuan desain dan pengembangan UI/UX yang akan berdampak positif bagi pengguna. Selain itu, dengan diselenggarakannya kompetisi ini maka akan memperluas jaringan para ahli UI/UX untuk dapat dilirik oleh perusahaan atau organisasi.\r\n</a>\r\n<br><br>\r\n<h5 class=\"deskripsil\"><b>B. Tema Lomba</b></h5>\r\n<a class=\"deskripsil deskripsil-detailnew\">Kompetisi kali ini mengusung tema “Creative Design Innovation in the Digital Era to Realize Indonesia Emas 2045”\r\n</a>\r\n<br><br>\r\n<h5 class=\"deskripsil\"><b>C. Ketentuan Peserta</b></h5>\r\n<ol class=\"deskripsil-detail2\">\r\n    <li>Peserta merupakan seorang mahasiswa/i aktif program Diploma (D1-D4)/Sarjana (S1) dari Perguruan Tinggi Negeri/Swasta yang dibuktikan dengan Kartu Tanda Mahasiswa (KTM).</li>\r\n    <li>Perlombaan bersifat tim dengan minimal anggota 2 orang dan maksimal 3 orang dari institusi atau perguruan tinggi yang sama. Selain itu, diperbolehkan untuk lintas program studi bagi mahasiswa/i perguruan tinggi.</li>\r\n    <li>Setiap peserta hanya diperbolehkan mengirimkan satu karya terbaik. </li>\r\n    <li>Peserta hanya diperbolehkan berada dalam satu tim UI/UX.</li>\r\n    <li>Peserta dikenakan biaya pendaftaran sebesar Rp 50.000,00 per tim.</li>\r\n    <li>Peserta bersedia mengikuti seluruh rangkaian kegiatan yang telah dijadwalkan oleh panitia.</li>\r\n    <li>Peserta yang tidak memenuhi persyaratan dinyatakan gugur.</li>\r\n</ol>\r\n<br>\r\n<h5 class=\"deskripsil\"><b>D. Ketentuan Lomba</b></h5>\r\n<ol class=\"deskripsil-detail2\">\r\n    <li>Setiap peserta hanya diperbolehkan mengembangkan satu jenis solusi UI/UX untuk dijadikan sebagai studi kasus.</li>\r\n    <li>Karya yang diusulkan merupakan karya orisinil peserta dan belum pernah diikutsertakan dalam kompetisi sejenis serta belum pernah dipublikasikan dalam bentuk apapun.</li>\r\n    <li>Karya tidak boleh mengandung unsur pornografi, SARA, sadisme atau hal-hal yang bersifat merendahkan atau melecehkan pihak lain.</li>\r\n    <li>Karya harus sesuai dengan tema yaitu “Creative Design Innovation in the Digital Era to Realize Indonesia Emas 2045”.</li>\r\n    <li>Karya yang diterima adalah karya yang dikirimkan sesuai dengan batas waktu yang telah ditentukan.</li>\r\n    <li>Penilaian dilakukan oleh dewan juri yang telah ditetapkan oleh panitia.</li>\r\n    <li>Dewan Juri adalah pihak yang memiliki wewenang memberikan penilaian sesuai dengan kriteria yang telah ditetapkan. Penilaian dari dewan juri bersifat mutlak dan tidak dapat diganggu gugat.</li>\r\n    <li>Pemenang perlombaan merupakan tim dengan nilai tertinggi dari semua aspek penilaian yang telah ditetapkan oleh panitia. Keputusan juri tidak dapat diganggu gugat.</li>\r\n</ol>', '876543456712', 'Hadi', 'Jebres, Surakarta', 'picture_files/QcJDUops1i7clboCCGDZjFxyjAG6RA058HpmRA15.jpg', 'sertifikat_files/S4TnvNn4jDAKSRM8eMI5AG3S6N2I4fX2t3fJYneL.pdf', 50000, '2024-06-19 17:48:37', '2024-06-28 09:24:02'),
(23, 'AR/VR', '<h5 class=\"deskripsil\"><b>A. Deskripsi</b></h5>\n            <a class=\"deskripsil deskripsil-detail\">Lomba AR/VR adalah suatu kompetisi yang ditujukan pada para calon\n                peserta\n                untuk berkreativitas merancang antarmuka pengguna (UI) dan pengalaman\n                pengguna (UX) dengan tema yang diusung adalah “Creative Design Innovation in the Digital Era to Realize\n                Indonesia Emas 2045”.\n            </a>\n            <a class=\"deskripsil deskripsil-detail\">Dari tema tersebut para calon peserta akan mengungkapkan\n                permasalahan dan\n                tantangan yang dihadapi oleh masyarakat Indonesia dan memberikan solusi melalui perancangan aplikasi\n                mobile, situs web, atau sistem interaktif lain dengan\n                tujuan untuk mencapai tujuan Indonesia Emas 2045. Selain merancang sesuai\n                kebutuhan dan kegunaan, para calon peserta juga perlu menggunakan kretivitas\n                mereka agar desain UI/UX dapat lebih unik, variatif, dan memiliki daya tarik.\n            </a>\n            <a class=\"deskripsil deskripsil-detail\"> Tujuan dari kompetisi ini adalah mengajak para sinergis muda untuk\n                berkolaborasi dalam tim menyalurkan kemampuan desain mereka dalam\n                menyajikan suatu UI/UX yang akan berdampak positif bagi pengguna. Selain itu,\n                dengan diselenggarakan kompetisi ini maka akan memperluas jaringan para\n                desiner UI/UX untuk dapat dilirik oleh perusahaan atau organisasi.\n            </a>\n            <br><br>\n            <h5 class=\"deskripsil\"><b>B. Tema Lomba</b></h5>\n            <a class=\"deskripsil deskripsil-detailnew\">Kompetisi kali ini mengusung tema “Creative Design Innovation in\n                the Digital Era to Realize Indonesia Emas 2045”\n            </a>\n            <br><br>\n            <h5 class=\"deskripsil\"><b>C. Ketentuan Peserta</b></h5>\n            <ol class=\"deskripsil-detail2\">\n                <li>Peserta merupakan seorang mahasiswa/i aktif program Diploma (D1-D4)/Sarjana (S1) dari Perguruan\n                    Tinggi Negeri/Swasta yang dibuktikan dengan Kartu Tanda Mahasiswa (KTM).</li>\n                <li>Perlombaan bersifat tim dengan minimal anggota 2 orang dan maksimal 3 orang dari institusi atau\n                    perguruan tinggi yang sama. Selain itu, diperbolehkan untuk lintas program studi bagi mahasiswa/i\n                    perguruan tinggi.</li>\n                <li>Setiap peserta hanya diperbolehkan mengirimkan satu karya terbaik. </li>\n                <li>Peserta hanya diperbolehkan berada dalam satu tim UI/UX.</li>\n                <li>Peserta dikenakan biaya pendaftaran sebesar Rp 50.000,00 per tim.</li>\n                <li> Peserta bersedia mengikuti seluruh rangkaian kegiatan yang telah dijadwalkan oleh panitia.</li>\n                <li>Peserta yang tidak memenuhi persyaratan dinyatakan gugur.</li>\n            </ol>\n            <br>\n            <h5 class=\"deskripsil\"><b>D. Ketentuan Lomba</b></h5>\n            <ol class=\"deskripsil-detail2\">\n                <li>Setiap peserta hanya diperbolehkan mengambil satu platform (web atau\n                    mobile) untuk dijadikan sebagai studi kasus.</li>\n                <li>Karya yang diusulkan merupakan karya orisinil peserta dan belum pernah\n                    diikutsertakan dalam kompetisi sejenis serta belum pernah dipublikasikan\n                    dalam bentuk apapun.</li>\n                <li>Karya tidak boleh mengandung unsur pornografi, SARA, sadisme atau hal-hal\n                    yang bersifat merendahkan atau melecehkan pihak lain.</li>\n                <li>Karya dibatasi untuk pengguna software berbasis mobile application.</li>\n                <li>Karya harus sesuai dengan tema yaitu “Creative Design Innovation in the\n                    Digital Era to Realize Indonesia Emas 2045”.</li>\n                <li>Karya yang diterima adalah karya yang dikirimkan sesuai dengan batas waktu\n                    yang telah ditentukan.</li>\n                <li>Penilaian dilakukan oleh dewan juri yang telah ditetapkan oleh panitia.</li>\n                <li>Dewan Juri adalah pihak yang memiliki wewenang memberikan penilaian\n                    sesuai dengan kriteria yang telah ditetapkan. 7. 8.Penilaian dari dewan juri bersifat mutlak dan\n                    tidak dapat diganggu gugat.</li>\n                <li>Pemenang perlombaan merupakan tim dengan nilai tertinggi dari semua aspek\n                    penilaian yang telah ditetapkan oleh panitia. Keputusan juri tidak dapat diganggu gugat.</li>\n            </ol>', '9876543456777', 'Muhaimin', 'Jebres, Surakarta', 'picture_files/js4DKkiue5AbyYVxQr8YuV1oNbLfopHVDlDBxUE9.jpg', 'sertifikat_files/BlNpwLuQ1OaXhOcEfiYFdtg84t5TDxkBrRoodgLp.pdf', 50000, '2024-06-19 17:53:40', '2024-06-19 17:53:40'),
(24, 'Mobile Aplication', '<h5 class=\"deskripsil\"><b>A. Deskripsi</b></h5>\n<a class=\"deskripsil deskripsil-detail\">Lomba Mobile Application adalah suatu kompetisi yang ditujukan pada para calon peserta untuk berkreativitas dalam merancang dan mengembangkan aplikasi mobile dengan tema yang diusung adalah “Creative Design Innovation in the Digital Era to Realize Indonesia Emas 2045”.\n</a>\n<a class=\"deskripsil deskripsil-detail\">Dari tema tersebut para calon peserta akan mengungkapkan permasalahan dan tantangan yang dihadapi oleh masyarakat Indonesia dan memberikan solusi melalui perancangan aplikasi mobile yang efektif dan inovatif dengan tujuan untuk mencapai Indonesia Emas 2045. Selain merancang sesuai kebutuhan dan kegunaan, para calon peserta juga perlu menggunakan kreativitas mereka agar solusi aplikasi mobile yang dihasilkan lebih unik, variatif, dan memiliki daya tarik.\n</a>\n<a class=\"deskripsil deskripsil-detail\">Tujuan dari kompetisi ini adalah mengajak para sinergis muda untuk berkolaborasi dalam tim menyalurkan kemampuan desain dan pengembangan aplikasi mobile yang akan berdampak positif bagi pengguna. Selain itu, dengan diselenggarakannya kompetisi ini maka akan memperluas jaringan para ahli aplikasi mobile untuk dapat dilirik oleh perusahaan atau organisasi.\n</a>\n<br><br>\n<h5 class=\"deskripsil\"><b>B. Tema Lomba</b></h5>\n<a class=\"deskripsil deskripsil-detailnew\">Kompetisi kali ini mengusung tema “Creative Design Innovation in the Digital Era to Realize Indonesia Emas 2045”\n</a>\n<br><br>\n<h5 class=\"deskripsil\"><b>C. Ketentuan Peserta</b></h5>\n<ol class=\"deskripsil-detail2\">\n    <li>Peserta merupakan seorang mahasiswa/i aktif program Diploma (D1-D4)/Sarjana (S1) dari Perguruan Tinggi Negeri/Swasta yang dibuktikan dengan Kartu Tanda Mahasiswa (KTM).</li>\n    <li>Perlombaan bersifat tim dengan minimal anggota 2 orang dan maksimal 3 orang dari institusi atau perguruan tinggi yang sama. Selain itu, diperbolehkan untuk lintas program studi bagi mahasiswa/i perguruan tinggi.</li>\n    <li>Setiap peserta hanya diperbolehkan mengirimkan satu karya terbaik. </li>\n    <li>Peserta hanya diperbolehkan berada dalam satu tim mobile application.</li>\n    <li>Peserta dikenakan biaya pendaftaran sebesar Rp 50.000,00 per tim.</li>\n    <li>Peserta bersedia mengikuti seluruh rangkaian kegiatan yang telah dijadwalkan oleh panitia.</li>\n    <li>Peserta yang tidak memenuhi persyaratan dinyatakan gugur.</li>\n</ol>\n<br>\n<h5 class=\"deskripsil\"><b>D. Ketentuan Lomba</b></h5>\n<ol class=\"deskripsil-detail2\">\n    <li>Setiap peserta hanya diperbolehkan mengembangkan satu jenis solusi aplikasi mobile untuk dijadikan sebagai studi kasus.</li>\n    <li>Karya yang diusulkan merupakan karya orisinil peserta dan belum pernah diikutsertakan dalam kompetisi sejenis serta belum pernah dipublikasikan dalam bentuk apapun.</li>\n    <li>Karya tidak boleh mengandung unsur pornografi, SARA, sadisme atau hal-hal yang bersifat merendahkan atau melecehkan pihak lain.</li>\n    <li>Karya harus sesuai dengan tema yaitu “Creative Design Innovation in the Digital Era to Realize Indonesia Emas 2045”.</li>\n    <li>Karya yang diterima adalah karya yang dikirimkan sesuai dengan batas waktu yang telah ditentukan.</li>\n    <li>Penilaian dilakukan oleh dewan juri yang telah ditetapkan oleh panitia.</li>\n    <li>Dewan Juri adalah pihak yang memiliki wewenang memberikan penilaian sesuai dengan kriteria yang telah ditetapkan. Penilaian dari dewan juri bersifat mutlak dan tidak dapat diganggu gugat.</li>\n    <li>Pemenang perlombaan merupakan tim dengan nilai tertinggi dari semua aspek penilaian yang telah ditetapkan oleh panitia. Keputusan juri tidak dapat diganggu gugat.</li>\n</ol>', '87654345678', 'Joko susilo', 'Jebres, Surakarta', 'picture_files/zQoQXNIhTvufO7fn5LDfttLnOirT1LZazYDYPqzE.jpg', 'sertifikat_files/ILn4zgTpDyWCnUpKMvR3kDgG8SFRiJQEDKhE0voO.pdf', 50000, '2024-06-19 17:59:13', '2024-06-19 17:59:13'),
(25, 'Desain Grafis', 'deskripsi lomba = <h5 class=\"deskripsil\"><b>A. Deskripsi</b></h5>\r\n<a class=\"deskripsil deskripsil-detail\">Lomba Game Developer adalah suatu kompetisi yang ditujukan pada para calon peserta untuk berkreativitas merancang permainan digital dengan tema yang diusung adalah “Creative Design Innovation in the Digital Era to Realize Indonesia Emas 2045”.\r\n</a>\r\n<a class=\"deskripsil deskripsil-detail\">Dari tema tersebut para calon peserta akan mengungkapkan permasalahan dan tantangan yang dihadapi oleh masyarakat Indonesia dan memberikan solusi melalui perancangan permainan digital yang interaktif dan edukatif dengan tujuan untuk mencapai Indonesia Emas 2045. Selain merancang sesuai kebutuhan dan kegunaan, para calon peserta juga perlu menggunakan kreativitas mereka agar permainan yang dihasilkan lebih unik, variatif, dan memiliki daya tarik.\r\n</a>\r\n<a class=\"deskripsil deskripsil-detail\"> Tujuan dari kompetisi ini adalah mengajak para sinergis muda untuk berkolaborasi dalam tim menyalurkan kemampuan desain dan pengembangan permainan mereka yang akan berdampak positif bagi pengguna. Selain itu, dengan diselenggarakannya kompetisi ini maka akan memperluas jaringan para pengembang game untuk dapat dilirik oleh perusahaan atau organisasi.\r\n</a>\r\n<br><br>\r\n<h5 class=\"deskripsil\"><b>B. Tema Lomba</b></h5>\r\n<a class=\"deskripsil deskripsil-detailnew\">Kompetisi kali ini mengusung tema “Creative Design Innovation in the Digital Era to Realize Indonesia Emas 2045”\r\n</a>\r\n<br><br>\r\n<h5 class=\"deskripsil\"><b>C. Ketentuan Peserta</b></h5>\r\n<ol class=\"deskripsil-detail2\">\r\n    <li>Peserta merupakan seorang mahasiswa/i aktif program Diploma (D1-D4)/Sarjana (S1) dari Perguruan Tinggi Negeri/Swasta yang dibuktikan dengan Kartu Tanda Mahasiswa (KTM).</li>\r\n    <li>Perlombaan bersifat tim dengan minimal anggota 2 orang dan maksimal 3 orang dari institusi atau perguruan tinggi yang sama. Selain itu, diperbolehkan untuk lintas program studi bagi mahasiswa/i perguruan tinggi.</li>\r\n    <li>Setiap peserta hanya diperbolehkan mengirimkan satu karya terbaik. </li>\r\n    <li>Peserta hanya diperbolehkan berada dalam satu tim game developer.</li>\r\n    <li>Peserta dikenakan biaya pendaftaran sebesar Rp 50.000,00 per tim.</li>\r\n    <li> Peserta bersedia mengikuti seluruh rangkaian kegiatan yang telah dijadwalkan oleh panitia.</li>\r\n    <li>Peserta yang tidak memenuhi persyaratan dinyatakan gugur.</li>\r\n</ol>\r\n<br>\r\n<h5 class=\"deskripsil\"><b>D. Ketentuan Lomba</b></h5>\r\n<ol class=\"deskripsil-detail2\">\r\n    <li>Setiap peserta hanya diperbolehkan mengembangkan satu platform (desktop atau mobile) untuk dijadikan sebagai studi kasus.</li>\r\n    <li>Karya yang diusulkan merupakan karya orisinil peserta dan belum pernah diikutsertakan dalam kompetisi sejenis serta belum pernah dipublikasikan dalam bentuk apapun.</li>\r\n    <li>Karya tidak boleh mengandung unsur pornografi, SARA, sadisme atau hal-hal yang bersifat merendahkan atau melecehkan pihak lain.</li>\r\n    <li>Karya dibatasi untuk pengguna software berbasis permainan digital.</li>\r\n    <li>Karya harus sesuai dengan tema yaitu “Creative Design Innovation in the Digital Era to Realize Indonesia Emas 2045”.</li>\r\n    <li>Karya yang diterima adalah karya yang dikirimkan sesuai dengan batas waktu yang telah ditentukan.</li>\r\n    <li>Penilaian dilakukan oleh dewan juri yang telah ditetapkan oleh panitia.</li>\r\n    <li>Dewan Juri adalah pihak yang memiliki wewenang memberikan penilaian sesuai dengan kriteria yang telah ditetapkan. Penilaian dari dewan juri bersifat mutlak dan tidak dapat diganggu gugat.</li>\r\n    <li>Pemenang perlombaan merupakan tim dengan nilai tertinggi dari semua aspek penilaian yang telah ditetapkan oleh panitia. Keputusan juri tidak dapat diganggu gugat.</li>\r\n</ol>', '8125373836272', 'Afkar triwardana', 'Jebres, Surakarta', 'picture_files/7fjkS5JX8yEZBLGjbOm9k1lJtGRlUQwVTQQcXVI5.jpg', 'sertifikat_files/wU030iajjT5l3vYUKt9iiauwxzF9yoEuYeDkVfI5.pdf', 50000, '2024-07-01 06:33:00', '2024-07-01 06:33:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `messages`
--

CREATE TABLE `messages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `value` longtext NOT NULL,
  `phone` varchar(255) NOT NULL,
  `status` enum('sudah_dibaca','belum_dibaca') NOT NULL DEFAULT 'belum_dibaca',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `messages`
--

INSERT INTO `messages` (`id`, `name`, `email`, `value`, `phone`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Haris', 'Haris@gmail.com', 'Assalamualaikum pak/ibu untuk sertifikatnya diunduhnya tanggal berapa?', '8124566287', 'sudah_dibaca', '2024-05-23 09:29:45', '2024-05-23 09:35:22'),
(2, 'Antony', 'Antony@gmail.com', 'Maaf  kak apakah boleh anggotanya hanya 4 orang?', '87654345678', 'sudah_dibaca', '2024-05-23 09:33:13', '2024-05-24 03:10:01'),
(3, 'Farhan', 'Farhan@gmail.com', 'Maaf kak, kapan pengumuman lolos atau tidaknya?', '8725425', 'sudah_dibaca', '2024-05-23 09:34:00', '2024-06-02 13:20:55'),
(4, 'Markus Horison', 'morison@gmail.com', 'Kapan dilaksanakan presentasi offline kak ?', '8652426171', 'belum_dibaca', '2024-05-23 09:34:54', '2024-05-23 09:34:54'),
(5, 'hallo', 'iqbal@gmail.com', 'hallo gaes', '8123456789', 'belum_dibaca', '2024-06-30 18:51:31', '2024-06-30 18:51:31'),
(6, 'Haris', 'haris@gmail.com', 'assalamuaikum', '8124566287', 'belum_dibaca', '2024-06-30 18:53:16', '2024-06-30 18:53:16');

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_04_30_035119_create_sponsors_table', 1),
(5, '2024_05_13_081909_create_lombas_table', 1),
(6, '2024_05_13_081933_create_kriterias_table', 1),
(7, '2024_05_13_082303_create_kriteria_lombas__table', 1),
(8, '2024_05_13_120935_create_user_lombas_table', 1),
(9, '2024_05_13_232855_create_messages_table', 1),
(10, '2024_05_15_004212_add_two_factor_columns_to_users_table', 1),
(11, '2024_05_17_192303_create_setting_event_table', 1),
(12, '2024_05_21_014306_create_visits_table', 2),
(13, '2024_05_21_022357_create_team_table', 2),
(14, '2024_05_21_022455_create_team_lombas_table', 2),
(15, '2024_05_21_022542_create_certificate_table', 2),
(17, '2024_05_21_135941_create_team_members_table', 3),
(18, '2024_05_22_055356_create_submissions_table', 4),
(19, '2024_05_22_061630_create_kriteria_lombas_table', 5),
(25, '2024_05_23_230018_create_notifikasis_table', 10),
(38, '2024_05_22_073937_create_reg_lombas_table', 11),
(41, '2024_05_25_090928_create_creations_table', 11),
(43, '2024_05_21_103032_add_team_id_to_users_table', 12),
(44, '2024_05_22_062127_create_kriteria_lombas__table', 12),
(45, '2024_05_22_110604_create_certificates_table', 12),
(46, '2024_05_23_233522_create_notifikasis_table', 12),
(47, '2024_05_26_184442_create_team_lombas_table', 12),
(48, '2024_05_26_190238_create_reg_lombas_table', 13),
(49, '2024_05_27_151450_create_values_table', 14),
(50, '2024_05_27_194627_add_lomba_id_to_reg_lombas_table', 15),
(63, '2024_05_28_110904_add_user_juri_id_to_values_table', 16),
(64, '2024_06_02_211038_add_lomba_id_to_team_table', 17),
(65, '2024_06_06_030937_add_user_id_to_submissions_table', 18),
(66, '2024_06_06_032753_add_lomba_id_to_submissions_table', 19),
(67, '2024_06_06_055850_add_team_member_ids_to_reg_lombas_table', 20),
(68, '2024_06_06_143127_create_reg_lomba_team_members_table', 21),
(69, '2024_06_06_143739_create_reg_lomba_team_members_table', 22),
(70, '2024_06_06_144401_create_reg_lomba_team_members_table', 23),
(71, '2024_06_06_160223_create_bobots_table', 24),
(72, '2024_06_06_160822_create_kriteria_lombas_table', 25),
(73, '2024_06_06_161001_create_kriteria_lomba_bobots_table', 26),
(74, '2024_06_06_183718_create_kriteria_bobots_table', 27),
(75, '2024_06_06_194412_create_kriteria_lomba_bobots_table', 28),
(76, '2024_06_08_134352_create_values_table', 29),
(77, '2024_06_08_171026_create_values_table', 30),
(78, '2024_06_09_015650_create_values_table', 31),
(79, '2024_06_09_035530_create_values_table', 32),
(80, '2024_06_09_051306_create_values_table', 33),
(81, '2024_06_09_053407_create_values_table', 34),
(82, '2024_06_09_084415_create_values_table', 35),
(83, '2024_06_09_124908_create_values_team_table', 36),
(84, '2024_06_09_134626_add_value_total_to_reg_lomba_table', 37),
(85, '2024_06_12_114719_create_values_team_table', 38),
(86, '2024_06_12_115751_create_values_table', 39),
(87, '2024_06_12_151500_create_values_table', 40),
(88, '2024_06_12_151735_create_values_table', 41),
(89, '2024_06_12_152036_create_values_table', 42),
(90, '2024_06_12_161625_create_values_table', 43),
(91, '2024_06_12_172512_create_values_table', 44),
(92, '2024_06_12_172718_create_values_table', 45),
(93, '2024_06_12_174731_create_values_table', 46),
(94, '2024_06_12_182236_create_values_table', 47),
(95, '2024_06_13_000153_create_values_table', 48),
(96, '2024_06_13_002601_add_reg_lomba_id_to_values_table', 49),
(97, '2024_06_13_025623_create_values_table', 50),
(98, '2024_06_14_031555_create_bobots_table', 51),
(99, '2024_06_14_041651_create_kriteria_lombas_table', 52),
(100, '2024_06_14_042353_create_kriteria_lombas_table', 53),
(101, '2024_06_14_042502_create_kriteria_lombas_table', 54),
(102, '2024_06_14_132612_create_user_status_table', 55),
(103, '2024_06_15_035755_create_values_table', 56),
(104, '2024_06_15_041508_create_values_table', 57),
(105, '2024_06_15_131031_create_values_table', 58),
(106, '2024_06_15_165956_create_values_table', 59),
(107, '2024_06_18_140142_add_user_id_to_notifikaisis_table', 60),
(108, '2024_06_18_141701_create_notifikasis_table', 61),
(109, '2024_06_18_145903_create_notifikasis_table', 62),
(110, '2024_06_18_192334_create_juaras_table', 63),
(111, '2024_07_01_114318_create_notifikasis_table', 64);

-- --------------------------------------------------------

--
-- Struktur dari tabel `notifikasis`
--

CREATE TABLE `notifikasis` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `team_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `description` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` enum('sudah_dibaca','belum_dibaca') NOT NULL DEFAULT 'belum_dibaca'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `notifikasis`
--

INSERT INTO `notifikasis` (`id`, `team_id`, `user_id`, `description`, `created_at`, `updated_at`, `status`) VALUES
(2, 547, 431, 'anda gagal lo abangku', '2024-07-01 04:59:50', '2024-07-01 05:56:58', 'sudah_dibaca');

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `password_reset_tokens`
--

INSERT INTO `password_reset_tokens` (`email`, `token`, `created_at`) VALUES
('admin@gmail.com', '$2y$12$lGbWPX8zM5Dny/UxjoFFfek8N1rvVrLonwbARUX2c5zGHAqBrY9ii', '2024-06-21 08:13:47'),
('habib@gmail.com', '$2y$12$QxzxQ6S./KYBdFER01MSMOPI7TYlnbnwZ9DmWwBr./JnA6D0ZRCc2', '2024-06-21 08:13:19');

-- --------------------------------------------------------

--
-- Struktur dari tabel `reg_lombas`
--

CREATE TABLE `reg_lombas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `team_id` bigint(20) UNSIGNED DEFAULT NULL,
  `submission_id` bigint(20) UNSIGNED DEFAULT NULL,
  `value_total` int(11) NOT NULL DEFAULT 0,
  `status` enum('belum_dinilai','sudah_dinilai') NOT NULL DEFAULT 'belum_dinilai',
  `lomba_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status_kelulusan` enum('lolos','tidak_lolos','terverifikasi','menunggu') NOT NULL DEFAULT 'menunggu'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `reg_lombas`
--

INSERT INTO `reg_lombas` (`id`, `user_id`, `team_id`, `submission_id`, `value_total`, `status`, `lomba_id`, `created_at`, `updated_at`, `status_kelulusan`) VALUES
(96, 431, 541, 56, 90, 'sudah_dinilai', 20, '2024-06-27 23:02:31', '2024-06-28 05:39:44', 'lolos'),
(97, 431, 532, 54, 80, 'sudah_dinilai', 19, '2024-06-28 00:01:04', '2024-06-28 05:23:35', 'lolos'),
(98, 431, 542, 57, 90, 'sudah_dinilai', 21, '2024-06-28 03:24:52', '2024-06-30 23:21:33', 'terverifikasi'),
(99, 440, 536, 55, 70, 'sudah_dinilai', 19, '2024-06-28 03:55:15', '2024-06-30 21:42:03', 'terverifikasi'),
(101, 435, 544, 59, 0, 'belum_dinilai', 22, '2024-06-28 04:09:44', '2024-06-28 08:42:25', 'tidak_lolos'),
(102, 431, 545, 60, 0, 'belum_dinilai', 23, '2024-06-30 23:12:41', '2024-06-30 23:12:41', 'terverifikasi'),
(103, 431, 547, 61, 0, 'belum_dinilai', 22, '2024-07-01 03:25:20', '2024-07-01 04:59:52', 'tidak_lolos'),
(104, 431, 548, 62, 0, 'belum_dinilai', 24, '2024-07-01 14:59:17', '2024-07-01 14:59:17', 'menunggu');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('OTScnKzw3kfMz20iVEvqNdmOsaEU1bCsHpM7t3U1', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiYTRKaVF3a2NTS1ViZFNseldldkJlZUlRdjBwMXNBNUtDUjZJYzh6UCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1719871174);

-- --------------------------------------------------------

--
-- Struktur dari tabel `settings`
--

CREATE TABLE `settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `judul` varchar(255) NOT NULL,
  `sub_judul` varchar(255) DEFAULT NULL,
  `judul_des` varchar(255) DEFAULT NULL,
  `deskripsi` longtext DEFAULT NULL,
  `mulai` date DEFAULT NULL,
  `berakhir` date DEFAULT NULL,
  `des_pendaftaran` varchar(255) DEFAULT NULL,
  `pengumpulan` date DEFAULT NULL,
  `des_pengumpulan` varchar(255) DEFAULT NULL,
  `pengumuman` date DEFAULT NULL,
  `des_pengumuman` varchar(255) DEFAULT NULL,
  `presentasi` date DEFAULT NULL,
  `des_presentasi` varchar(255) DEFAULT NULL,
  `whatsApp` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `youtube` varchar(255) DEFAULT NULL,
  `logo1` varchar(255) DEFAULT NULL,
  `logo2` varchar(255) DEFAULT NULL,
  `logo3` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `settings`
--

INSERT INTO `settings` (`id`, `name`, `judul`, `sub_judul`, `judul_des`, `deskripsi`, `mulai`, `berakhir`, `des_pendaftaran`, `pengumpulan`, `des_pengumpulan`, `pengumuman`, `des_pengumuman`, `presentasi`, `des_presentasi`, `whatsApp`, `instagram`, `email`, `youtube`, `logo1`, `logo2`, `logo3`, `created_at`, `updated_at`) VALUES
(9, 'OLINAS 2024', 'Olimpiade Informatika Nusantara', 'Olinas 2024', 'Apa itu OLINAS ?', 'Olimpiade Informatika Nusantara (OLINAS) 2024 adalah kompetisi IT nasional untuk siswa SMP dan SMA. Terdiri dari dua tahap: tahap 1 online dan tahap 2 offline. Kompetisi ini mengasah kemampuan dalam pemrograman, algoritma, dan struktur data. Peserta berkesempatan meraih medali, sertifikat, dan peluang ikut kompetisi internasional. Dapatkan pengalaman menantang dan seru serta tunjukkan bakat IT-mu. Informasi lebih lanjut dan pendaftaran melalui situs web resmi dan media sosial kami. Bergabunglah sekarang!', '2024-08-17', '2024-09-16', 'Peserta mendaftar secara online dengan mengisi formulir dan memenuhi persyaratan sebelum batas waktu.', '2024-08-23', 'Peserta mengirimkan karya sesuai pedoman dan format yang ditentukan melalui platform yang ditunjuk sebelum batas waktu.', '2024-09-12', 'Daftar finalis diumumkan di situs web resmi dan media sosial penyelenggara setelah penilaian karya.', '2024-09-15', 'Finalis mempresentasikan karya mereka di hadapan dewan juri, menjelaskan ide dan menjawab pertanyaan.', '81278458353', '@olinas_2024', 'olimpiadeitnas2024@gmail.com', 'olinas@official_', 'settings/SFJYeYIo7U8wE30CqUaf4tyUbOo177sjoQLIw02y.png', 'settings/Slj7X9lQMSIMAQ39e5Zim82zs7Um7gIAc0srkkGE.jpg', 'settings/Qus8hdEnZLFZeYZ5cyL3XRfsCNcXuWZR8Yr4HpsL.png', '2024-06-17 00:05:57', '2024-06-27 07:13:24');

-- --------------------------------------------------------

--
-- Struktur dari tabel `setting_event`
--

CREATE TABLE `setting_event` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_event` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `sub_title` varchar(255) DEFAULT NULL,
  `date_start` datetime DEFAULT NULL,
  `date_end` datetime DEFAULT NULL,
  `title_description` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `logo1` varchar(255) DEFAULT NULL,
  `logo2` varchar(255) DEFAULT NULL,
  `logo3` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `sponsors`
--

CREATE TABLE `sponsors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `link_file` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `sponsors`
--

INSERT INTO `sponsors` (`id`, `name`, `link_file`, `logo`, `created_at`, `updated_at`) VALUES
(10, 'SV UNS', 'https://vokasi.uns.ac.id/', 'sponsors/avytIS701TOD1WGwWBFq3Unx8iktaKQoNo6sXx0Z.png', '2024-05-30 07:37:58', '2024-06-02 12:12:27'),
(11, 'Universitas Sebelas maret', 'https://uns.ac.id/', 'sponsors/j87swfo1QSGD5LfAjRBBO1utOaZa10O7M7w23aj3.png', '2024-05-30 07:38:59', '2024-05-30 07:38:59'),
(12, 'Emailkomp', 'https://www.instagram.com/emailkompuns/', 'sponsors/rIjK7rCXsq71qMar73qJByXcRuYd0FXC4fbWj8yD.png', '2024-05-30 07:39:33', '2024-05-30 07:39:33'),
(14, 'D3TI', 'https://d3ti.vokasi.uns.ac.id/', 'sponsors/4KG3qDOog9iJswS9Rk4pIbEYerBuiUS6alP0X8V4.png', '2024-06-02 11:52:07', '2024-06-02 11:52:07');

-- --------------------------------------------------------

--
-- Struktur dari tabel `submissions`
--

CREATE TABLE `submissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `team_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `lomba_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `surat` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `submissions`
--

INSERT INTO `submissions` (`id`, `title`, `description`, `link`, `file`, `team_id`, `user_id`, `lomba_id`, `created_at`, `updated_at`, `surat`) VALUES
(54, 'Voyage of the Celestial Explorers', 'Voyage of the Celestial Explorers adalah sebuah permainan petualangan luar angkasa yang mengajak pemain untuk menjelajahi galaksi yang luas dan memikat. Dengan grafis yang memukau dan gameplay yang inovatif, pemain akan memimpin ekspedisi ke dalam wilayah-wilayah kosmos yang belum pernah terjamah sebelumnya. Tantangannya adalah untuk menemukan sumber daya yang langka, menghadapi ancaman dari makhluk luar angkasa, dan membangun peradaban yang kokoh di tengah-tengah bintang-bintang.', 'https://drive.google.com/drive/folders/1K218Rv_EP718TDqxbrkLcEsn8USVoajf?usp=drive_link', 'file_lomba/HVO3OBdvLifVP41bOCgOBEaosAVBB55Brpyes2ek.jpg', 532, 431, 19, '2024-06-14 10:11:20', '2024-06-14 10:17:58', 'surat_lomba/YKrPXoyzA8xJsixKm4tsZUhGJYLMPEYkEADeo6iD.pdf'),
(55, 'Pejuang Rimba', '\"Pejuang Rimba\" adalah game aksi dan strategi di mana pemain berperan sebagai penjaga hutan yang harus melindungi ekosistem dari ancaman luar. Dengan gameplay yang menggabungkan pertarungan, taktik, dan manajemen sumber daya, game ini mengajarkan pentingnya konservasi alam sambil memberikan hiburan yang seru.', 'https://drive.google.com/drive/folders/1K218Rv_EP718TDqxbrkLcEsn8USVoajf?usp=drive_link', 'file_lomba/1Lh7yDiig8iGAnZ3GLZirpB1nYtIiX1OoVVLh7fB.jpg', 536, 440, 19, '2024-06-15 10:59:57', '2024-06-15 10:59:57', 'surat_lomba/Z6F6E7ZFXt9HiiPQ52aN5UyuhyQ2TgGxiZ7N1VXD.pdf'),
(56, 'Securing the Digital Frontier: A Comprehensive Approach to Cyber Defense', 'Penelitian ini bertujuan untuk mengidentifikasi dan menganalisis kerentanan keamanan yang umum terjadi dalam infrastruktur IT modern. Kami memaparkan strategi baru untuk meningkatkan keamanan dengan fokus pada deteksi dini dan respons cepat terhadap ancaman.', 'https://drive.google.com/drive/folders/1K218Rv_EP718TDqxbrkLcEsn8USVoajf?usp=drive_link', 'file_lomba/E1C2x46efY8dFb8nxLBWBoXYYFQ4inYCYjl9BIcx.zip', 541, 431, 20, '2024-06-27 21:14:40', '2024-06-27 21:14:40', 'surat_lomba/CbYdWhQGAE283xYBXdQnd6z3eYXEzIsbHd7uncuP.pdf'),
(57, 'Smart Agriculture: Revolutionizing Farming with IoT', 'Penelitian ini mengeksplorasi penerapan teknologi IoT dalam sektor pertanian untuk meningkatkan efisiensi dan produktivitas. Kami mengembangkan dan menguji sistem sensor yang dapat memantau kondisi tanah, cuaca, dan pertumbuhan tanaman secara real-time, serta memberikan rekomendasi berbasis data untuk optimisasi penggunaan air dan nutrisi.', 'https://drive.google.com/drive/folders/1K218Rv_EP718TDqxbrkLcEsn8USVoajf?usp=drive_link', 'file_lomba/wSxm5yhXb6F7dghraL6dzLx1IcV2hZsNHJmntbbN.zip', 542, 431, 21, '2024-06-28 03:24:40', '2024-06-28 03:24:40', 'surat_lomba/CNcMAYvjB2zkCN36mW0gkEF9VzwL9ucm7uUeeXjd.pdf'),
(59, 'Enhancing Accessibility in Mobile Applications', 'Penelitian ini mengembangkan desain antarmuka untuk aplikasi mobile yang lebih mudah diakses oleh pengguna dengan berbagai kebutuhan khusus. Kami memfokuskan pada penggunaan warna kontras tinggi, teks yang dapat diperbesar, dan navigasi yang mudah digunakan. Studi ini juga melibatkan uji coba dengan kelompok pengguna yang memiliki disabilitas untuk memastikan bahwa desain kami memenuhi standar aksesibilitas.', 'https://drive.google.com/drive/folders/1K218Rv_EP718TDqxbrkLcEsn8USVoajf?usp=drive_link', 'file_lomba/LJsprVa1VEiG1auCRF7rbwB0xyyUS3WXRgszj8kW.zip', 544, 435, 22, '2024-06-28 04:09:10', '2024-06-28 04:09:10', 'surat_lomba/Ae5Ifb0nz3CBXInmHoIFtBEYBSpkDfhBCqlzvMTN.pdf'),
(60, 'Safari Virtual: Menjelajahi Hutan Tropis Melalui Realitas Augmented', 'Pengalaman VR yang memungkinkan pengguna untuk menjelajahi kehidupan hutan tropis secara interaktif. Dengan menggunakan teknologi AR, pengguna dapat melihat dan belajar tentang flora dan fauna yang unik, sambil berinteraksi dengan lingkungan simulasi yang realistis.', 'ftvdeiyf', 'file_lomba/T0j4fVJR3NAlBLR6FWdHZC1UXqBhIr83mblPMVGZ.zip', 545, 431, 23, '2024-06-30 23:11:15', '2024-06-30 23:11:15', 'surat_lomba/c0UfNXts4IJr4CFj7JItE6lTkRM7cW7ZYuuwO51i.pdf'),
(61, 'coba', 'coba saja', 'https://drive.google.com/drive/folders/1K218Rv_EP718TDqxbrkLcEsn8USVoajf?usp=drive_link', 'file_lomba/I9gqxqqwgbKLcfK2DNo4WcJX1c24FopNTtpVKSww.zip', 547, 431, 22, '2024-07-01 03:24:47', '2024-07-01 03:24:47', 'surat_lomba/KbVnCDHH2jG74Hyj9jDUJrjpXTHM1wGasR7xGfrl.pdf'),
(62, 'AR untuk Pendidikan: Pembelajaran Interaktif dalam Sejarah Dunia Kuno\"', 'Platform AR yang dirancang untuk membawa pengguna kembali ke era kuno melalui rekonstruksi digital kota-kota kuno, artefak bersejarah, dan peristiwa penting. Melalui AR, pengguna dapat belajar dengan cara yang lebih interaktif dan memahami konteks sejarah secara mendalam.', 'https://drive.google.com/drive/folders/1K218Rv_EP718TDqxbrkLcEsn8USVoajf?usp=drive_link', 'file_lomba/b38RAfBiMSjdrhPZvmAWvjrRlg6yk3k8u1A9iwdB.zip', 548, 431, 24, '2024-07-01 06:39:21', '2024-07-01 06:40:20', 'surat_lomba/ZQpNAX72exi9pdSQxgzucMAclIykSuB7XyhDpHwx.pdf');

-- --------------------------------------------------------

--
-- Struktur dari tabel `team`
--

CREATE TABLE `team` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_team` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `instansi` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `payment` varchar(255) DEFAULT NULL,
  `status` enum('unverified','verified') NOT NULL DEFAULT 'unverified',
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `lomba_id` bigint(20) UNSIGNED DEFAULT NULL,
  `certificate` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `team`
--

INSERT INTO `team` (`id`, `name_team`, `email`, `instansi`, `phone`, `payment`, `status`, `user_id`, `lomba_id`, `certificate`, `created_at`, `updated_at`) VALUES
(532, 'SKYLINUX', 'kurniawan23@gmail.com', 'Universitas Lampung', '0823456789876', 'payments/hgqk4P0RRtKriffCKmEljTzmqm2LhZNV4CyIS3eK.jpg', 'verified', 431, 19, NULL, '2024-06-14 08:29:33', '2024-06-28 03:10:55'),
(536, 'ROBOLINUX', 'afkartriwardana24@gmail.com', 'Universitas Sebelas Maret', '08126373838392', 'payments/RVDNSuNikRHOaGjuDa2b05XJnzS5UjZC9fkFMzlm.png', 'verified', 440, 19, NULL, '2024-06-15 10:55:20', '2024-06-19 00:25:31'),
(541, 'XLINUX', 'hanz@gmail.com', 'Universitas Lampung', '0817236355734', 'payments/gXGG9PCxSpdKSOs8S2CMB5ZYY6m5TH4W9p51zHRK.png', 'verified', 431, 20, NULL, '2024-06-27 07:41:23', '2024-06-27 23:26:43'),
(542, 'X-RAPS LINUX', 'raps@gmail.com', 'Universitas Lampung', '0817236355734', 'payments/Aaz0beb6IWrJSScYNT1t8g1p24S7cWoThu3ppc1t.png', 'verified', 431, 21, NULL, '2024-06-27 23:02:58', '2024-06-28 04:04:10'),
(544, 'ZERO-LINUX', 'zero@gmail.com', 'Universitas Lampung', '081263547383823', 'payments/gOexlQjT2CosIC8U6olBEYdSma8v87EQrj4ldQV4.jpg', 'unverified', 435, 22, NULL, '2024-06-28 04:06:31', '2024-06-28 04:11:07'),
(545, 'H2O-LINUX', 'h2o@gmail.com', 'Universitas Lampung', '0817236355734', 'payments/xJLyNcRA8cap1GlMdq5YzNO19Q2Cblg1Xx98cxjn.jpg', 'verified', 431, 23, NULL, '2024-06-28 05:52:00', '2024-06-30 23:13:42'),
(547, 'coba', 'coba@gmail.com', 'Universitas Lampung', '0817236355734', 'payments/LXHW22a1Zf0kVJr73ock2FdCObHgryw1hitBNRL8.jpg', 'unverified', 431, 22, NULL, '2024-07-01 03:22:20', '2024-07-01 03:22:51'),
(548, 'B-Linux', 'linux@gmail.com', 'Universitas Lampung', '0817236355734', 'payments/ujirOhGtGp4Tbtp4kGwEL9SGPEfdggPlPXpQl0c9.jpg', 'unverified', 431, 24, NULL, '2024-07-01 06:37:22', '2024-07-01 06:37:47');

--
-- Trigger `team`
--
DELIMITER $$
CREATE TRIGGER `update_status_kelulusan` AFTER UPDATE ON `team` FOR EACH ROW BEGIN
    IF NEW.status = 'verified' THEN
        UPDATE reg_lombas
        SET status_kelulusan = 'terverifikasi'
        WHERE team_id = NEW.id;
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Struktur dari tabel `team_members`
--

CREATE TABLE `team_members` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `team_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `role` enum('Ketua','Anggota') NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `team_members`
--

INSERT INTO `team_members` (`id`, `team_id`, `user_id`, `role`, `created_at`, `updated_at`) VALUES
(456, 532, 431, 'Ketua', '2024-06-14 09:57:05', '2024-06-14 09:57:05'),
(457, 532, 435, 'Anggota', '2024-06-14 09:57:05', '2024-06-14 09:57:05'),
(458, 532, 436, 'Anggota', '2024-06-14 09:57:05', '2024-06-14 09:57:05'),
(459, 532, 437, 'Anggota', '2024-06-14 09:57:05', '2024-06-14 09:57:05'),
(460, 536, 440, 'Ketua', '2024-06-15 10:57:51', '2024-06-15 10:57:51'),
(461, 536, 438, 'Anggota', '2024-06-15 10:57:51', '2024-06-15 10:57:51'),
(462, 536, 441, 'Anggota', '2024-06-15 10:57:51', '2024-06-15 10:57:51'),
(463, 536, 439, 'Anggota', '2024-06-15 10:57:51', '2024-06-15 10:57:51'),
(464, 536, 442, 'Anggota', '2024-06-15 10:57:51', '2024-06-15 10:57:51'),
(465, 541, 431, 'Ketua', '2024-06-27 20:50:08', '2024-06-27 20:50:08'),
(466, 541, 435, 'Anggota', '2024-06-27 20:50:08', '2024-06-27 20:50:08'),
(467, 541, 436, 'Anggota', '2024-06-27 20:50:08', '2024-06-27 20:50:08'),
(468, 541, 437, 'Anggota', '2024-06-27 20:50:08', '2024-06-27 20:50:08'),
(469, 542, 431, 'Ketua', '2024-06-28 03:22:22', '2024-06-28 03:22:22'),
(470, 542, 435, 'Anggota', '2024-06-28 03:22:22', '2024-06-28 03:22:22'),
(471, 542, 436, 'Anggota', '2024-06-28 03:22:22', '2024-06-28 03:22:22'),
(472, 542, 437, 'Anggota', '2024-06-28 03:22:22', '2024-06-28 03:22:22'),
(478, 544, 435, 'Ketua', '2024-06-28 04:07:47', '2024-06-28 04:07:47'),
(479, 544, 431, 'Anggota', '2024-06-28 04:07:47', '2024-06-28 04:07:47'),
(480, 544, 436, 'Anggota', '2024-06-28 04:07:47', '2024-06-28 04:07:47'),
(481, 544, 437, 'Anggota', '2024-06-28 04:07:47', '2024-06-28 04:07:47'),
(482, 545, 431, 'Ketua', '2024-06-30 23:02:05', '2024-06-30 23:02:05'),
(483, 545, 435, 'Anggota', '2024-06-30 23:02:05', '2024-06-30 23:02:05'),
(484, 545, 436, 'Anggota', '2024-06-30 23:02:05', '2024-06-30 23:02:05'),
(485, 545, 437, 'Anggota', '2024-06-30 23:02:05', '2024-06-30 23:02:05'),
(486, 547, 431, 'Ketua', '2024-07-01 03:23:10', '2024-07-01 03:23:10'),
(487, 547, 435, 'Anggota', '2024-07-01 03:23:10', '2024-07-01 03:23:10'),
(488, 548, 431, 'Ketua', '2024-07-01 06:38:17', '2024-07-01 06:38:17'),
(489, 548, 435, 'Anggota', '2024-07-01 06:38:17', '2024-07-01 06:38:17'),
(490, 548, 436, 'Anggota', '2024-07-01 06:38:17', '2024-07-01 06:38:17'),
(491, 548, 437, 'Anggota', '2024-07-01 06:38:17', '2024-07-01 06:38:17');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `instansi` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `role` tinyint(4) NOT NULL DEFAULT 3,
  `password` varchar(255) NOT NULL,
  `two_factor_secret` text DEFAULT NULL,
  `two_factor_recovery_codes` text DEFAULT NULL,
  `nik` varchar(255) DEFAULT NULL,
  `email_verification_status` enum('unverified','verified') NOT NULL DEFAULT 'unverified',
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` enum('aktif','nonaktif') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'aktif',
  `google_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `phone`, `instansi`, `photo`, `role`, `password`, `two_factor_secret`, `two_factor_recovery_codes`, `nik`, `email_verification_status`, `remember_token`, `created_at`, `updated_at`, `status`, `google_id`) VALUES
(2, 'Admin Utama', 'admin', 'admin@gmail.com', NULL, NULL, NULL, 1, '$2y$12$bYGHy.RKDT.WThL6DiRUjuuAhs0ynr8HRJFlSDjPqlR3C9aW04Ob.', NULL, NULL, NULL, 'verified', NULL, '2024-05-21 23:06:59', '2024-06-06 15:37:27', 'aktif', NULL),
(8, 'Petugas 1', 'petugas 1', 'petugas1@gmail.com', NULL, NULL, NULL, 2, '$2y$12$RFzb/XHAEy07M1cegeViCu7F3LC19iRti2Bs93OszvuJEG02C/kBm', NULL, NULL, NULL, 'verified', NULL, '2024-05-22 04:27:21', '2024-06-30 21:03:54', 'aktif', NULL),
(431, 'Reza Kurniawan', 'reza123', 'reza@gmail.com', '0817236355734', 'Universitas Lampung', 'photo_peserta/Kxwi6nr0je6LqFWqMm3N12HwIOGI0Z95oed2KPha.jpg', 3, '$2y$12$Y7X9dhc6Gg1UEI95CogqOO4DneZbbJyKZOrxHBos6ElebzLdYimIO', NULL, NULL, '8484736352543276', 'verified', NULL, '2024-06-14 07:41:03', '2024-06-14 09:52:11', 'aktif', NULL),
(432, 'Sudirman', 'sudirman01', 'jurigamedeveloper@gmail.com', NULL, NULL, NULL, 4, '$2y$12$Tjz95Nwhsbbnar8dY3zGKuf.3R/OLnXaeCw.S8SBUYGsYkctEmTQy', NULL, NULL, NULL, 'verified', NULL, '2024-06-14 09:09:22', '2024-06-14 09:09:22', 'aktif', NULL),
(433, 'Efendi', 'efendi32', 'juricybersecurity@gmail.com', NULL, NULL, NULL, 4, '$2y$12$314P9CPQ3a1X/1DsegoBZeqHUD052byD5SmVUzvWPHlln5QNIn4Ly', NULL, NULL, NULL, 'verified', NULL, '2024-06-14 09:14:49', '2024-06-14 09:14:49', 'aktif', NULL),
(434, 'admin2', 'admin2', 'adminsecound@gmail.com', NULL, NULL, NULL, 1, '$2y$12$X7cPCZZX/NSM1cjEKAfCDuBJ9ZR1gPuJ/90Yj7MMAq9Z9PGxmg8W.', NULL, NULL, NULL, 'verified', NULL, '2024-06-14 09:26:40', '2024-06-14 09:26:40', 'aktif', NULL),
(435, 'Bastian Andre', 'Andre32', 'andre@gmail.com', '081263547383823', 'Universitas Lampung', 'photo_peserta/zrJiHirgv5b3ZzTVLZktRLmf1qzpwW8Q6GpX9CLp.jpg', 3, '$2y$12$YEMUrSfb6FP7iMQ0eqOpP.P6Lf.AAKKfNKDeJP7fKCEWzGnZd36yy', NULL, NULL, '6432567891234567', 'verified', NULL, '2024-06-14 09:31:02', '2024-06-14 09:46:18', 'aktif', NULL),
(436, 'Zahra Zulfa', 'zahra34', 'zahra@gmail.com', '0812773839393', 'Univeritas Lampung', 'photo_peserta/zUUmXftrX0S5o0ZWbnYjITfZMhnLTXIK711MB8JJ.jpg', 3, '$2y$12$vpxLmA4Qi5yu7LLFtmtiiu0t0lwNeJ0NB3w1ZdB.McwcxJKH1dKce', NULL, NULL, '6500083627865433', 'verified', NULL, '2024-06-14 09:37:47', '2024-06-14 09:48:21', 'aktif', NULL),
(437, 'Bagas', 'Bagas43', 'bagas@gmail.com', '0812635343627', 'Universitas Lampung', 'photo_peserta/ejxYBGNdCIlvlNBIyLQKms4cJ0jbHrwwlvdDIWGq.jpg', 3, '$2y$12$a4BOi4XYfQNvjOG0sjGVi.enR6jqRMgBYSHPYsDZVbnTJtf5hziJS', NULL, NULL, '8764456786432516', 'verified', NULL, '2024-06-14 09:53:24', '2024-06-14 09:55:25', 'aktif', NULL),
(438, 'Iqbal Farhan Rasyid', 'ifr321', 'iqbalfarhanrasyid0003@gmail.com', '0812634563733', 'Universitas Sebelas Maret', 'photo_peserta/FNnOmARw7b65UMdWzJcu9qJFjJlqJ1YyqnfhKDkM.jpg', 3, '$2y$12$dDpLIqbrBIEV84w0mbQLZO6..qcFAswAm9NaU0EUbOEy9/HKMyxpu', NULL, NULL, '6789253678543278', 'verified', NULL, '2024-06-15 10:29:06', '2024-06-15 10:34:47', 'aktif', NULL),
(439, 'Habib Shohiburrotib', 'bib21', 'habib@gmail.com', '081873657382', 'Universitas Sebelas Maret', 'photo_peserta/jWKKcqCLnXa0DuU5N8N0aAJLIQkoSSe0ouYnf7Ez.jpg', 3, '$2y$12$yLZliMNk72aIi0E2Wj3hu.qbir1RQJogtCBIDxS7nCeYOwMMSDsVK', NULL, NULL, '9865434567823456', 'verified', NULL, '2024-06-15 10:36:14', '2024-06-28 03:56:22', 'aktif', NULL),
(440, 'M. Afkar Triwardana', 'afkr21', 'afkar@gmail.com', '08126373838392', 'Universitas Sebelas Maret', 'photo_peserta/of9DQJNjNQfrtNMLgkAfxjCNze2vbutNLLHUZcRk.jpg', 3, '$2y$12$yfEPtda8DudJXVUno/thROWOPy7KL/IYnPzDez8JbmX6fhVCXulVG', NULL, NULL, '9326567865434567', 'verified', NULL, '2024-06-15 10:39:26', '2024-06-15 10:40:49', 'aktif', NULL),
(441, 'M Haidar Taqi', 'taqi12', 'taqi@gmail.com', '081654567821222', 'Universitas Sebelas Maret', 'photo_peserta/oXuAachSCKIKygvixsLalOJEnoOyfGHQMfnFngb9.jpg', 3, '$2y$12$CbXc1c94byBvb6wNn0RGHOYGlnPU1lmyJxliCwL7ew4H3luekhek2', NULL, NULL, '0987654323456789', 'verified', NULL, '2024-06-15 10:41:46', '2024-06-15 11:00:39', 'aktif', NULL),
(442, 'Lutfi Iffah Latifah', 'fi23', 'lutfi@gmail.com', '086545678934322', 'Universitas Sebelas Maret', 'photo_peserta/KLHz1RHinMj9zNMn00261X1A7x7Z4tkpqKvdgIF2.jpg', 3, '$2y$12$wogyFn6uw2Jr4JsqlDkQouQ9jwdTXrzP5TUox881uB1rWZaDlbGdy', NULL, NULL, '9765434567666000', 'verified', NULL, '2024-06-15 10:46:25', '2024-06-15 10:47:34', 'aktif', NULL),
(493, 'Jurilomba2', 'admin7', 'jurimulti@gmail.com', NULL, NULL, NULL, 4, '$2y$12$LcVAPEKudjFohE2BW0Y6KOzDf/Ixo2PcY4JdnJi/Z4EI1uqCvyAVG', NULL, NULL, NULL, 'verified', NULL, '2024-06-28 03:18:11', '2024-06-28 03:18:11', 'aktif', ''),
(494, 'josua', 'josua123', 'iqfarryd12@gmail.com', NULL, NULL, NULL, 3, '$2y$12$cB10OAAAqYpwQuJRlmxQHObgzyrwz36nCTetJHI5IsPgVic7hAA2u', NULL, NULL, NULL, 'verified', NULL, '2024-07-01 02:14:44', '2024-07-01 02:15:48', 'aktif', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_lombas`
--

CREATE TABLE `user_lombas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `lomba_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `user_lombas`
--

INSERT INTO `user_lombas` (`id`, `user_id`, `lomba_id`, `created_at`, `updated_at`) VALUES
(17, 432, 19, NULL, NULL),
(18, 433, 20, NULL, NULL),
(19, 493, 21, NULL, NULL),
(20, 493, 22, NULL, NULL),
(21, 493, 23, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_status`
--

CREATE TABLE `user_status` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `status_ketua_team` enum('terdaftar','belum_terdaftar','sudah_submit') NOT NULL DEFAULT 'belum_terdaftar',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `lomba_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `user_status`
--

INSERT INTO `user_status` (`id`, `user_id`, `status_ketua_team`, `created_at`, `updated_at`, `lomba_id`) VALUES
(16, 431, 'sudah_submit', '2024-06-14 14:41:03', '2024-06-28 00:01:04', 19),
(24, 440, 'sudah_submit', '2024-06-15 17:39:26', '2024-06-28 03:55:16', 19),
(29, 431, 'sudah_submit', '2024-06-27 07:41:23', '2024-06-27 23:02:32', 20),
(32, 431, 'sudah_submit', '2024-06-27 23:02:58', '2024-06-28 03:24:52', 21),
(33, 440, 'sudah_submit', '2024-06-28 03:58:33', '2024-06-28 04:03:16', 22),
(34, 435, 'sudah_submit', '2024-06-28 04:06:31', '2024-06-28 04:09:45', 22),
(35, 431, 'sudah_submit', '2024-06-28 05:52:00', '2024-06-30 23:12:42', 23),
(37, 431, 'sudah_submit', '2024-07-01 03:22:20', '2024-07-01 03:25:20', 22),
(38, 431, 'sudah_submit', '2024-07-01 06:37:22', '2024-07-01 14:59:17', 24);

-- --------------------------------------------------------

--
-- Struktur dari tabel `values`
--

CREATE TABLE `values` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `reg_lomba_id` bigint(20) UNSIGNED NOT NULL,
  `kriteria_lomba_id` bigint(20) UNSIGNED NOT NULL,
  `value_count` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `values`
--

INSERT INTO `values` (`id`, `user_id`, `reg_lomba_id`, `kriteria_lomba_id`, `value_count`, `created_at`, `updated_at`) VALUES
(133, 433, 96, 65, 27, '2024-06-27 23:32:15', '2024-06-27 23:55:57'),
(134, 433, 96, 66, 9, '2024-06-27 23:32:15', '2024-06-27 23:53:42'),
(135, 433, 96, 67, 18, '2024-06-27 23:32:15', '2024-06-27 23:55:57'),
(136, 433, 96, 68, 36, '2024-06-27 23:32:15', '2024-06-27 23:55:57'),
(137, 432, 97, 61, 32, '2024-06-28 03:11:51', '2024-06-28 03:11:51'),
(138, 432, 97, 62, 24, '2024-06-28 03:11:51', '2024-06-28 03:11:51'),
(139, 432, 97, 63, 8, '2024-06-28 03:11:51', '2024-06-28 03:11:51'),
(140, 432, 97, 64, 16, '2024-06-28 03:11:51', '2024-06-28 03:11:51'),
(141, 493, 98, 69, 18, '2024-06-28 04:46:18', '2024-06-30 23:21:33'),
(142, 493, 98, 70, 27, '2024-06-28 04:46:18', '2024-06-30 23:21:33'),
(143, 493, 98, 71, 27, '2024-06-28 04:46:18', '2024-06-30 23:21:33'),
(144, 493, 98, 72, 18, '2024-06-28 04:46:18', '2024-06-30 23:21:33'),
(149, 432, 99, 61, 28, '2024-06-30 21:11:06', '2024-06-30 21:42:03'),
(150, 432, 99, 62, 21, '2024-06-30 21:11:06', '2024-06-30 21:42:03'),
(151, 432, 99, 63, 7, '2024-06-30 21:11:06', '2024-06-30 21:42:03'),
(152, 432, 99, 64, 14, '2024-06-30 21:11:06', '2024-06-30 21:42:03');

-- --------------------------------------------------------

--
-- Struktur dari tabel `visits`
--

CREATE TABLE `visits` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `visit_count` int(11) NOT NULL DEFAULT 0,
  `visit_month` varchar(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `visits`
--

INSERT INTO `visits` (`id`, `visit_count`, `visit_month`, `created_at`, `updated_at`) VALUES
(1, 1, 'Januari', '2024-06-18 20:30:14', '2024-06-18 20:30:14'),
(2, 23, 'Februari', '2024-06-18 20:30:14', '2024-06-18 20:30:14'),
(3, 34, 'Maret', '2024-06-18 20:30:14', '2024-06-18 20:30:14'),
(4, 12, 'April', '2024-06-18 20:30:14', '2024-06-18 20:30:14'),
(5, 45, 'Mei', '2024-06-18 20:30:14', '2024-06-18 20:30:14'),
(6, 709, 'Juni', '2024-06-18 06:15:28', '2024-06-28 09:39:25'),
(7, 321, 'Juli', '2024-06-18 20:30:14', '2024-07-01 14:59:24'),
(8, 67, 'Agustus', '2024-06-18 20:30:14', '2024-06-18 20:30:14'),
(9, 78, 'September', '2024-06-18 20:30:14', '2024-06-18 20:30:14'),
(10, 89, 'Oktober', '2024-06-18 20:30:14', '2024-06-18 20:30:14'),
(11, 90, 'November', '2024-06-18 20:30:14', '2024-06-18 20:30:14'),
(12, 21, 'Desember', '2024-06-18 20:30:14', '2024-06-18 20:30:14');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `beritas`
--
ALTER TABLE `beritas`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indeks untuk tabel `juaras`
--
ALTER TABLE `juaras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `juaras_reg_lomba_id_foreign` (`reg_lomba_id`);

--
-- Indeks untuk tabel `kriterias`
--
ALTER TABLE `kriterias`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `kriteria_lombas`
--
ALTER TABLE `kriteria_lombas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kriteria_lombas_lomba_id_foreign` (`lomba_id`),
  ADD KEY `kriteria_lombas_kriteria_id_foreign` (`kriteria_id`);

--
-- Indeks untuk tabel `lombas`
--
ALTER TABLE `lombas`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `notifikasis`
--
ALTER TABLE `notifikasis`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifikasis_team_id_foreign` (`team_id`),
  ADD KEY `notifikasis_user_id_foreign` (`user_id`);

--
-- Indeks untuk tabel `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indeks untuk tabel `reg_lombas`
--
ALTER TABLE `reg_lombas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `reg_lombas_team_id_foreign` (`team_id`) USING BTREE,
  ADD KEY `reg_lombas_user_id_foreign` (`user_id`),
  ADD KEY `reg_lombas_submission_id_foreign` (`submission_id`),
  ADD KEY `reg_lombas_lomba_id_foreign` (`lomba_id`) USING BTREE;

--
-- Indeks untuk tabel `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indeks untuk tabel `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `setting_event`
--
ALTER TABLE `setting_event`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `sponsors`
--
ALTER TABLE `sponsors`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `submissions`
--
ALTER TABLE `submissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `submissions_team_id_foreign` (`team_id`) USING BTREE,
  ADD KEY `submissions_user_id_foreign` (`user_id`),
  ADD KEY `submissions_lomba_id_foreign` (`lomba_id`) USING BTREE;

--
-- Indeks untuk tabel `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`) USING BTREE,
  ADD KEY `lomba_id` (`lomba_id`) USING BTREE;
ALTER TABLE `team` ADD FULLTEXT KEY `team_email_unique` (`email`);

--
-- Indeks untuk tabel `team_members`
--
ALTER TABLE `team_members`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uix_user_team` (`user_id`,`team_id`),
  ADD KEY `team_members_team_id_foreign` (`team_id`),
  ADD KEY `team_members_user_id_foreign` (`user_id`) USING BTREE;

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indeks untuk tabel `user_lombas`
--
ALTER TABLE `user_lombas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_lombas_user_id_foreign` (`user_id`),
  ADD KEY `user_lombas_lomba_id_foreign` (`lomba_id`);

--
-- Indeks untuk tabel `user_status`
--
ALTER TABLE `user_status`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_status_user_id_foreign` (`user_id`),
  ADD KEY `user_status_lomba_id_foreign` (`lomba_id`);

--
-- Indeks untuk tabel `values`
--
ALTER TABLE `values`
  ADD PRIMARY KEY (`id`),
  ADD KEY `values_user_id_foreign` (`user_id`),
  ADD KEY `values_reg_lomba_id_foreign` (`reg_lomba_id`),
  ADD KEY `values_kriteria_lomba_id_foreign` (`kriteria_lomba_id`);

--
-- Indeks untuk tabel `visits`
--
ALTER TABLE `visits`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `beritas`
--
ALTER TABLE `beritas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `juaras`
--
ALTER TABLE `juaras`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `kriterias`
--
ALTER TABLE `kriterias`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT untuk tabel `kriteria_lombas`
--
ALTER TABLE `kriteria_lombas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT untuk tabel `lombas`
--
ALTER TABLE `lombas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT untuk tabel `messages`
--
ALTER TABLE `messages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;

--
-- AUTO_INCREMENT untuk tabel `notifikasis`
--
ALTER TABLE `notifikasis`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `reg_lombas`
--
ALTER TABLE `reg_lombas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT untuk tabel `settings`
--
ALTER TABLE `settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `setting_event`
--
ALTER TABLE `setting_event`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `sponsors`
--
ALTER TABLE `sponsors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT untuk tabel `submissions`
--
ALTER TABLE `submissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT untuk tabel `team`
--
ALTER TABLE `team`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=549;

--
-- AUTO_INCREMENT untuk tabel `team_members`
--
ALTER TABLE `team_members`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=492;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=495;

--
-- AUTO_INCREMENT untuk tabel `user_lombas`
--
ALTER TABLE `user_lombas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT untuk tabel `user_status`
--
ALTER TABLE `user_status`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT untuk tabel `values`
--
ALTER TABLE `values`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=153;

--
-- AUTO_INCREMENT untuk tabel `visits`
--
ALTER TABLE `visits`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `juaras`
--
ALTER TABLE `juaras`
  ADD CONSTRAINT `juaras_reg_lomba_id_foreign` FOREIGN KEY (`reg_lomba_id`) REFERENCES `reg_lombas` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `kriteria_lombas`
--
ALTER TABLE `kriteria_lombas`
  ADD CONSTRAINT `kriteria_lombas_kriteria_id_foreign` FOREIGN KEY (`kriteria_id`) REFERENCES `kriterias` (`id`),
  ADD CONSTRAINT `kriteria_lombas_lomba_id_foreign` FOREIGN KEY (`lomba_id`) REFERENCES `lombas` (`id`);

--
-- Ketidakleluasaan untuk tabel `notifikasis`
--
ALTER TABLE `notifikasis`
  ADD CONSTRAINT `notifikasis_team_id_foreign` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `notifikasis_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `reg_lombas`
--
ALTER TABLE `reg_lombas`
  ADD CONSTRAINT `reg_lombas_lomba_id_foreign` FOREIGN KEY (`lomba_id`) REFERENCES `lombas` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `reg_lombas_submission_id_foreign` FOREIGN KEY (`submission_id`) REFERENCES `submissions` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `reg_lombas_team_id_foreign` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `reg_lombas_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `submissions`
--
ALTER TABLE `submissions`
  ADD CONSTRAINT `submissions_lomba_id_foreign` FOREIGN KEY (`lomba_id`) REFERENCES `lombas` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `submissions_team_id_foreign` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `submissions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Ketidakleluasaan untuk tabel `team`
--
ALTER TABLE `team`
  ADD CONSTRAINT `team_lomba_id_foreign` FOREIGN KEY (`lomba_id`) REFERENCES `lombas` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `team_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `team_members`
--
ALTER TABLE `team_members`
  ADD CONSTRAINT `team_members_team_id_foreign` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `team_members_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `user_lombas`
--
ALTER TABLE `user_lombas`
  ADD CONSTRAINT `user_lombas_lomba_id_foreign` FOREIGN KEY (`lomba_id`) REFERENCES `lombas` (`id`),
  ADD CONSTRAINT `user_lombas_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ketidakleluasaan untuk tabel `user_status`
--
ALTER TABLE `user_status`
  ADD CONSTRAINT `user_status_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `values`
--
ALTER TABLE `values`
  ADD CONSTRAINT `values_kriteria_lomba_id_foreign` FOREIGN KEY (`kriteria_lomba_id`) REFERENCES `kriteria_lombas` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `values_reg_lomba_id_foreign` FOREIGN KEY (`reg_lomba_id`) REFERENCES `reg_lombas` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `values_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
