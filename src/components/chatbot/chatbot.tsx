import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";

// Data materi yang ada
const materiData = [
  { id: 'bab-1', title: 'Bab 1: Pengenalan Sistem Komputer', description: 'Pahami dasar-dasar sistem komputer.', pdfLink: '...', downloadLink: '...' },
  { id: 'bab-2', title: 'Bab 2: Perangkat Keras', description: 'Pelajari komponen-komponen perangkat keras komputer.', pdfLink: '...', downloadLink: '...' },
  { id: 'bab-3', title: 'Bab 3: Sistem Operasi', description: 'Pahami fungsi dan jenis-jenis sistem operasi.', pdfLink: '...', downloadLink: '...' },
  // More data here...
];

// Tipe Materi
type Materi = {
  id: string;
  title: string;
  description: string;
  pdfLink: string;
  downloadLink: string;
};

// Tipe untuk parameter yang diterima (params)
type MateriDetailPageProps = {
  params: {
    id: string; // Parameter yang diterima untuk ID materi
  };
};

// MateriDetailPage yang menerima props dengan tipe MateriDetailPageProps
export default function MateriDetailPage({ params }: MateriDetailPageProps) {
  const { id } = params;

  // Pastikan materi ditemukan berdasarkan ID
  const materi = materiData.find((materi) => materi.id === id);

  // Menangani kasus jika materi tidak ditemukan
  if (!materi) {
    return <div>Materi tidak ditemukan</div>;
  }

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-8 pt-10">
      <Card className="p-4">
        <CardTitle>{materi.title}</CardTitle>
        <CardDescription>{materi.description}</CardDescription>

        <div className="mt-4" style={{ width: '100%', height: '600px' }}>
          <iframe
            src={materi.pdfLink} // Link embed Google Slides atau materi terkait
            width="100%"
            height="600px"
            frameBorder="0"
            title={materi.title}
          />
        </div>

        <div className="mt-4">
          <a
            href={materi.downloadLink}
            download
            className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-center inline-block"
          >
            Download Materi (PPTX)
          </a>
        </div>

        <Link href="/materi">
          <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Kembali ke Daftar Materi
          </button>
        </Link>
      </Card>
    </main>
  );
}
