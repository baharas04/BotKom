// src/app/materi/bab/[id]/page.tsx
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

// Daftar materi untuk dijadikan data statis
const materiList = [
  { id: '1', title: 'Bab 1: Pengenalan Sistem Komputer', description: 'Pahami dasar-dasar sistem komputer.' },
  { id: '2', title: 'Bab 2: Perangkat Keras', description: 'Pelajari komponen-komponen perangkat keras komputer.' },
  { id: '3', title: 'Bab 3: Perangkat Lunak', description: 'Mengenal berbagai jenis perangkat lunak.' },
  { id: '4', title: 'Bab 4: Sistem Operasi', description: 'Pahami peran dan jenis sistem operasi.' },
  { id: '5', title: 'Bab 5: Jaringan Komputer', description: 'Belajar tentang jaringan komputer dan protokolnya.' },
  { id: '6', title: 'Bab 6: Pemrograman', description: 'Mengenal dunia pemrograman dan bahasa pemrograman populer.' },
  { id: '7', title: 'Bab 7: Basis Data', description: 'Pahami tentang sistem basis data dan manajemennya.' },
  { id: '8', title: 'Bab 8: Keamanan Komputer', description: 'Menjaga keamanan data dan perangkat komputer.' },
  { id: '9', title: 'Bab 9: Teknologi AI', description: 'Mengenal perkembangan teknologi Kecerdasan Buatan.' },
  { id: '10', title: 'Bab 10: Cloud Computing', description: 'Belajar tentang komputasi awan dan aplikasinya.' },
];

// Fungsi untuk mendapatkan parameter statis berdasarkan ID
export function generateStaticParams() {
  return materiList.map((materi) => ({
    id: materi.id,
  }));
}

// Halaman Materi Detail
const MateriDetailPage = async ({ params }: { params: { id: string } }) => {
  // Menunggu `params` dan mengakses `id` secara benar
  const { id } = await params; // Pastikan menggunakan await di sini untuk mendapatkan nilai params.id

  // Mencari materi berdasarkan ID
  const materi = materiList.find((m) => m.id === id);

  if (!materi) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold">Materi tidak ditemukan</h2>
        <p>Halaman yang Anda cari tidak ada atau ID salah.</p>
        <Link href="/materi">
          <Button className="mt-4">Kembali ke Daftar Materi</Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-8 pt-10">
      <Card className="p-8">
        <CardTitle>{materi.title}</CardTitle>
        <CardDescription>{materi.description}</CardDescription>
        <p className="mt-6 text-lg">
          Di sini akan berisi pembahasan lebih lanjut mengenai {materi.title}. Konten ini bisa disesuaikan lebih lanjut.
        </p>
        <Link href="/materi">
          <Button className="mt-4">Kembali ke Daftar Materi</Button>
        </Link>
      </Card>
    </main>
  );
};

export default MateriDetailPage;
