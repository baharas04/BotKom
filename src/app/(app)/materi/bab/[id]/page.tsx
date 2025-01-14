// src/app/materi/bab/[id]/page.tsx

import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

// Tipe data untuk materi
interface Materi {
  id: string;
  title: string;
  description: string;
  content: string;
}

// Data Dummy untuk simulasi (biasanya diambil dari API atau database)
const materiList: Materi[] = [
  { id: '1', title: 'Bab 1: Pengenalan Sistem Komputer', description: 'Pahami dasar-dasar sistem komputer.', content: 'Materi ini membahas dasar-dasar sistem komputer dan konsep-konsep penting dalam memahami cara kerja komputer.' },
  { id: '2', title: 'Bab 2: Perangkat Keras', description: 'Pelajari komponen-komponen perangkat keras komputer.', content: 'Materi ini akan menjelaskan berbagai komponen perangkat keras komputer seperti CPU, RAM, motherboard, dll.' },
  { id: '3', title: 'Bab 3: Perangkat Lunak', description: 'Mengenal berbagai jenis perangkat lunak.', content: 'Materi ini membahas perangkat lunak sistem dan aplikasi, serta cara penggunaannya dalam kehidupan sehari-hari.' },
  { id: '4', title: 'Bab 4: Sistem Operasi', description: 'Pahami peran dan jenis sistem operasi.', content: 'Materi ini akan mengenalkan Anda pada berbagai jenis sistem operasi yang digunakan di komputer dan perangkat lainnya.' },
  { id: '5', title: 'Bab 5: Jaringan Komputer', description: 'Belajar tentang jaringan komputer dan protokolnya.', content: 'Materi ini mengajarkan dasar-dasar jaringan komputer, termasuk TCP/IP, DNS, dan LAN.' },
  { id: '6', title: 'Bab 6: Pemrograman', description: 'Mengenal dunia pemrograman dan bahasa pemrograman populer.', content: 'Materi ini memperkenalkan berbagai bahasa pemrograman seperti Python, JavaScript, dan Java.' },
  { id: '7', title: 'Bab 7: Basis Data', description: 'Pahami tentang sistem basis data dan manajemennya.', content: 'Materi ini akan mengenalkan Anda pada konsep dasar database dan cara pengelolaannya menggunakan SQL.' },
  { id: '8', title: 'Bab 8: Keamanan Komputer', description: 'Menjaga keamanan data dan perangkat komputer.', content: 'Materi ini mengajarkan prinsip dasar keamanan komputer dan cara melindungi sistem dari ancaman.' },
  { id: '9', title: 'Bab 9: Teknologi AI', description: 'Mengenal perkembangan teknologi Kecerdasan Buatan.', content: 'Materi ini membahas konsep dasar kecerdasan buatan dan aplikasinya dalam berbagai bidang.' },
  { id: '10', title: 'Bab 10: Cloud Computing', description: 'Belajar tentang komputasi awan dan aplikasinya.', content: 'Materi ini menjelaskan konsep cloud computing dan berbagai layanan cloud yang ada di pasar saat ini.' },
];

// Fungsi untuk menghasilkan daftar parameter statis berdasarkan ID materi
export const generateStaticParams = () => {
  return materiList.map((materi) => ({
    id: materi.id,
  }));
};

// Mengambil materi berdasarkan ID dan menampilkannya
const MateriDetailPage = async ({ params }: { params: { id: string } }) => {
  // Memastikan params sudah tersedia sebelum mengakses id
  const { id } = await params;  // Menggunakan await untuk params yang bersifat asinkron
  
  // Cari materi berdasarkan id yang didapat dari URL
  const materi = materiList.find((item) => item.id === id);

  if (!materi) {
    return (
      <div className="max-w-screen-xl mx-auto px-4 py-8 pt-10">
        <h1 className="text-3xl font-semibold text-center mb-8">Materi Tidak Ditemukan</h1>
      </div>
    );
  }

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-8 pt-10">
      <h1 className="text-3xl font-semibold text-center mb-8">{materi.title}</h1>
      <Card className="p-4">
        <CardDescription>{materi.description}</CardDescription>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Konten Materi:</h2>
          <p>{materi.content}</p>
        </div>
        <Link href="/materi">
          <Button className="mt-4">Kembali ke Daftar Materi</Button>
        </Link>
      </Card>
    </main>
  );
};

export default MateriDetailPage;
