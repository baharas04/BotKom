import { Card } from "@/components/ui/card";
import Link from "next/link";

const AboutChatbotPage = () => {
  return (
    <main className="max-w-screen-xl mx-auto px-4 py-8 pt-10">
      <h1 className="text-3xl font-semibold text-center mb-8">Tentang Chatbot Kami</h1>
      
      <Card className="p-6 mb-8 shadow-lg">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Chatbot Kami</h2>
          <p className="text-lg text-gray-700">
            Chatbot kami dirancang untuk membantu Anda berinteraksi dengan layanan kami secara lebih efisien. Ditenagai oleh kecerdasan buatan yang canggih, chatbot ini dapat membantu menjawab pertanyaan terkait sistem komputer, memberikan dukungan, dan membimbing Anda melalui berbagai proses dengan cara yang mudah digunakan.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Fitur Tersedia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-xl p-4">
              <h3 className="text-xl font-semibold mb-2">Tersedia 24/7</h3>
              <p className="text-gray-700">
                Chatbot kami selalu tersedia, memberikan tanggapan secara real-time terhadap pertanyaan Anda kapan saja.
              </p>
            </Card>

            <Card className="shadow-xl p-4">
              <h3 className="text-xl font-semibold mb-2">Mudah Digunakan</h3>
              <p className="text-gray-700">
                Chatbot ini menawarkan antarmuka yang sederhana dan intuitif, memungkinkan pengguna untuk berinteraksi tanpa kesulitan.
              </p>
            </Card>

            <Card className="shadow-xl p-4">
              <h3 className="text-xl font-semibold mb-2">Dapat Disesuaikan</h3>
              <p className="text-gray-700">
                Chatbot kami mudah dikustomisasi untuk berbagai industri dan kebutuhan pelanggan spesifik.
              </p>
            </Card>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Cara Kerja</h2>
          <p className="text-lg text-gray-700">
            Dengan menggunakan pemrosesan bahasa alami (NLP), chatbot kami dapat memahami masukan dari pengguna dan memberikan tanggapan yang relevan dan akurat. Anda dapat mengajukan pertanyaan, meminta informasi, atau mencari panduan tentang cara menggunakan layanan kami. Chatbot ini terus belajar dan meningkat seiring waktu, memastikan pengalaman pengguna yang lebih baik.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Mengapa Memilih Chatbot Kami?</h2>
          <p className="text-lg text-gray-700">
            Dengan memilih chatbot kami, Anda memastikan bahwa pelanggan atau pengguna Anda mendapatkan bantuan terbaik, baik itu untuk menemukan informasi yang tepat, memecahkan masalah, atau membuat keputusan dengan lebih cepat. Ini adalah solusi yang hemat biaya untuk bisnis yang ingin meningkatkan kepuasan pelanggan dan menyederhanakan proses dukungan mereka.
          </p>
        </section>
      </Card>

      {/* Tombol kembali ke halaman utama */}
      <Link href="/">
        <button className="mt-8 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Kembali ke Beranda
        </button>
      </Link>
    </main>
  );
};

export default AboutChatbotPage;
