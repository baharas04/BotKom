import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const materiData = [
  {
    id: 'bab-1',
    title: 'Bab 1: Pengenalan Sistem Komputer',
    description: 'Pahami dasar-dasar sistem komputer.',
    pdfLink: '/files/materi/bab_1.pdf' // Link file PDF
  },
  {
    id: 'bab-2',
    title: 'Bab 2: Perangkat Keras',
    description: 'Pelajari komponen-komponen perangkat keras komputer.',
    pdfLink: '/files/materi/bab-2.pdf' // Link file PDF
  },
  // Tambahkan materi lainnya jika diperlukan
];

type Materi = {
  id: string;
  title: string;
  description: string;
  pdfLink: string;
};

// Halaman ini menggunakan parameter dinamis `params`
const MateriDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Mencari materi berdasarkan `id`
  const materi = materiData.find((materi) => materi.id === id);

  if (!materi) {
    return <div>Materi tidak ditemukan</div>;
  }

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-8 pt-10">
      <Card className="p-4">
        <CardTitle>{materi.title}</CardTitle>
        <CardDescription>{materi.description}</CardDescription>

        {/* Menampilkan PDF dengan iframe */}
        <div className="mt-4" style={{ width: '100%', height: '600px' }}>
          <iframe
            src={materi.pdfLink} // Link ke file PDF
            width="100%" // Memastikan lebar penuh
            height="600px" // Menentukan tinggi untuk tampilan PDF
            frameBorder="0"
            title={materi.title}
          />
        </div>

        {/* Tombol untuk kembali ke daftar materi */}
        <Link href="/materi">
          <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Kembali ke Daftar Materi</button>
        </Link>
      </Card>
    </main>
  );
};

export default MateriDetailPage;
