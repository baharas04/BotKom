import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import Image from 'next/image';

const PetunjukPage = () => {
  return (
    <main className="max-w-screen-xl mx-auto px-6 py-8 pt-10 bg-gradient-to-b from-blue-50 to-white rounded-xl shadow-xl">
      {/* Judul Petunjuk Penggunaan */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-600">PETUNJUK PENGGUNAAN WEBSITE CHATBOT</h1>
        <p className="text-xl text-gray-600 mt-2">Panduan langkah demi langkah untuk menggunakan chatbot</p>
      </div>

      {/* Accordion */}
      <Accordion type="single" collapsible className="space-y-6">
        {/* Item 1 */}
        <AccordionItem value="1">
          <AccordionTrigger className="text-lg font-semibold text-white bg-blue-600 p-6 rounded-lg shadow-md no-underline">
            1. Memulai Chat dengan Bot
          </AccordionTrigger>
          <AccordionContent className="p-6 bg-gray-100 rounded-md shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <p className="text-lg text-gray-700">
                  Klik tombol hijau di pojok kanan bawah pada HOME untuk memulai interaksi dengan chatbot.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/assets/p1.png"
                  alt="Memulai Chat"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Item 2 */}
        <AccordionItem value="2">
          <AccordionTrigger className="text-lg font-semibold text-white bg-blue-600 p-6 rounded-lg shadow-md no-underline">
            2. Memulai Chat Baru
          </AccordionTrigger>
          <AccordionContent className="p-6 bg-gray-100 rounded-md shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <p className="text-lg text-gray-700">
                  Klik pada tombol conversation untuk memulai chat baru dengan chatbot.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/assets/p4.png"
                  alt="Memulai Chat Baru"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Item 3 */}
        <AccordionItem value="3">
          <AccordionTrigger className="text-lg font-semibold text-white bg-blue-600 p-6 rounded-lg shadow-md no-underline">
            3. Menu About
          </AccordionTrigger>
          <AccordionContent className="p-6 bg-gray-100 rounded-md shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <p className="text-lg text-gray-700">
                  Untuk mengetahui lebih lengkap chatbot dan fitur yang tersedia, buka menu "About".
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/assets/p5.png"
                  alt="Menu About"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Item 4 */}
        <AccordionItem value="4">
          <AccordionTrigger className="text-lg font-semibold text-white bg-blue-600 p-6 rounded-lg shadow-md no-underline">
            4. Membaca Materi
          </AccordionTrigger>
          <AccordionContent className="p-6 bg-gray-100 rounded-md shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <p className="text-lg text-gray-700">
                  Buka menu "Materi" di halaman utama untuk membaca materi tambahan.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/assets/p2.png"
                  alt="Membaca Materi"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Item 5 */}
        <AccordionItem value="5">
          <AccordionTrigger className="text-lg font-semibold text-white bg-blue-600 p-6 rounded-lg shadow-md no-underline">
            5. Menu Petunjuk
          </AccordionTrigger>
          <AccordionContent className="p-6 bg-gray-100 rounded-md shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <p className="text-lg text-gray-700">
                  Untuk memahami cara menggunakan website chatbot, klik "Lihat Petunjuk".
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/assets/p3.png"
                  alt="Menyelesaikan Sesi Chat"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
};

export default PetunjukPage;
