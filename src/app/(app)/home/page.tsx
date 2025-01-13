import { CarouselComponent } from "@/components/carousel/carousel"; 
import React from "react";
import { FaBook, FaQuestionCircle, FaRobot } from "react-icons/fa";
import { Avatar } from "@/components/ui/avatar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Home = () => {
  const carouselData = [
    {
      imageUrl: "/images/pict1.jpg",
      title: "BotKom",
      description:
        "BotKom adalah Chatbot berbasis Website yang diintegrasikan dengan bot DialogFlow sehingga kita dapat berinteraksi dengan chatbot dan tanya jawab mengenai sistem komputer.",
      altText: "Image 1",
    },
    {
      imageUrl: "/images/pict2.jpg",
      title: "Dialog Flow",
      description:
        "Dialogflow merupakan platform Natural Language Processing (NLP) yang dapat digunakan untuk membangun aplikasi percakapan dalam berbagai bahasa dan berbagai platform, baik aplikasi seluler, aplikasi web, bot, sistem respons suara interaktif, dan sebagainya.",
      altText: "Image 2",
    },
    {
      imageUrl: "/images/pict3.jpg",
      title: "Sistem Komputer",
      description:
        "Sistem komputer adalah kumpulan perangkat-perangkat komputer yang saling berhubungan dan berinteraksi satu sama lain. Fungsinya adalah untuk melakukan proses pengolahan data sehingga dapat menghasilkan informasi yang diharapkan oleh penggunanya.",
      altText: "Image 3",
    },
    {
      imageUrl: "/images/pict4.jpg",
      title: "Teknologi AI",
      description:
        "Teknologi Kecerdasan Buatan (AI) merupakan bidang ilmu komputer yang bertujuan untuk menciptakan mesin atau sistem yang mampu meniru perilaku atau tugas-tugas manusia, seperti pengenalan wajah, pemrosesan bahasa alami, dan pengambilan keputusan.",
      altText: "Image 4",
    },
  ];

  return (
    <main className="flex flex-col items-center">

      <div className="w-full px-4 bg-gray-900 py-6 mt-2 sm:mt-2">
        <CarouselComponent items={carouselData} autoplayDelay={3000} />
      </div>

      <div className="flex flex-col items-center mt-16">
        <img
          src="/images/bot.png"
          alt="Descriptive Image"
          className="h-32 w-32 object-cover rounded-lg"
        />
        <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-3xl px-4 text-center">
          BotKom adalah chatbot berbasis web yang menggunakan teknologi AI dari
          DialogFlow untuk memberikan jawaban seputar informasi komputer. Bot
          ini membantu pengguna dengan topik seperti perangkat keras, perangkat
          lunak, jaringan, dan troubleshooting, memungkinkan interaksi mudah dan
          cepat untuk menemukan solusi komputer secara instan dan praktis.
        </p>
      </div>

      <div className="mt-10 px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="flex flex-col items-center text-center p-2 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle>
                <Avatar className="bg-blue-100 h-20 w-20 flex items-center justify-center rounded-full">
                  <FaRobot className="text-4xl text-blue-600" />
                </Avatar>
              </CardTitle>
            </CardHeader>
            <CardDescription>
              <p className="text-base sm:text-lg font-semibold text-gray-700 mt-4">
                <strong>Bot</strong> <br />
                Chatbot yang membantu menjawab pertanyaan terkait komputer.
              </p>
            </CardDescription>
          </Card>
          <Card className="flex flex-col items-center text-center border p-2 border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle>
                <Avatar className="bg-green-100 h-20 w-20 flex items-center justify-center rounded-full">
                  <FaBook className="text-4xl text-green-600" />
                </Avatar>
              </CardTitle>
            </CardHeader>
            <CardDescription>
              <p className="text-base sm:text-lg font-semibold text-gray-700 mt-4">
                <strong>Materi</strong> <br />
                Akses berbagai materi dan informasi komputer.
              </p>
            </CardDescription>
          </Card>
          <Card className="flex flex-col items-center text-center p-2 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle>
                <Avatar className="bg-yellow-100 h-20 w-20 flex items-center justify-center rounded-full">
                  <FaQuestionCircle className="text-4xl text-yellow-600" />
                </Avatar>
              </CardTitle>
            </CardHeader>
            <CardDescription>
              <p className="text-base sm:text-lg font-semibold text-gray-700 mt-4">
                <strong>Petunjuk</strong> <br />
                Panduan penggunaan untuk memaksimalkan pengalaman.
              </p>
            </CardDescription>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Home;
