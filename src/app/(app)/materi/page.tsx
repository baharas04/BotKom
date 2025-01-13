import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import Link from 'next/link'; // Import Link dari Next.js untuk navigasi
import React from 'react';

const MateriPage = () => {
  const materiList = [
    { id: 'bab-1', title: 'Bab 1: Pengenalan Sistem Komputer', description: 'Pahami dasar-dasar sistem komputer.' },
    { id: 'bab-2', title: 'Bab 2: Perangkat Keras', description: 'Pelajari komponen-komponen perangkat keras komputer.' },
    { id: 'bab-3', title: 'Bab 3: Perangkat Lunak', description: 'Mengenal berbagai jenis perangkat lunak.' },
    { id: 'bab-4', title: 'Bab 4: Sistem Operasi', description: 'Pahami peran dan jenis sistem operasi.' },
    { id: 'bab-5', title: 'Bab 5: Jaringan Komputer', description: 'Belajar tentang jaringan komputer dan protokolnya.' },
    { id: 'bab-6', title: 'Bab 6: Pemrograman', description: 'Mengenal dunia pemrograman dan bahasa pemrograman populer.' },
    { id: 'bab-7', title: 'Bab 7: Basis Data', description: 'Pahami tentang sistem basis data dan manajemennya.' },
    { id: 'bab-8', title: 'Bab 8: Keamanan Komputer', description: 'Menjaga keamanan data dan perangkat komputer.' },
    { id: 'bab-9', title: 'Bab 9: Teknologi AI', description: 'Mengenal perkembangan teknologi Kecerdasan Buatan.' },
    { id: 'bab-10', title: 'Bab 10: Cloud Computing', description: 'Belajar tentang komputasi awan dan aplikasinya.' },
  ];

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-8 pt-10">
      <h1 className="text-3xl font-semibold text-center mb-8">Daftar Materi</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {materiList.map((materi, index) => (
          <Card key={index} className="p-4">
            <CardTitle>{materi.title}</CardTitle>
            <CardDescription>{materi.description}</CardDescription>
            <Link href={`/materi/${materi.id}`}>
              <Button className="mt-4 w-full">Baca Selengkapnya</Button>
            </Link>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default MateriPage;
