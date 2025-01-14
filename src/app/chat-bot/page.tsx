"use client";

import React, { useState, useEffect, useRef } from "react";
import axiosInstance from "@/lib/axios";

type Message = {
  sender: "user" | "bot";
  text: string;
  time: string;
};

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]); 
  const [input, setInput] = useState(""); 
  const [isTyping, setIsTyping] = useState(false); // State untuk animasi mengetik bot
  const messagesEndRef = useRef<HTMLDivElement | null>(null); // Ref untuk scroll otomatis ke pesan terbaru

  // Fungsi untuk mendapatkan waktu saat pesan dikirim
  const getCurrentTime = (): string => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleSendMessage = async () => {
    if (input.trim()) {
      const time = getCurrentTime(); // Mendapatkan waktu pengiriman pesan
      const newMessages: Message[] = [
        ...messages,
        { sender: "user", text: input, time },
      ];
      setMessages(newMessages); 
      setInput(""); 

      try {
        // Menambahkan animasi mengetik bot
        setIsTyping(true);

        const response = await axiosInstance.post("/message", {
          message: input,
        });

        const botMessage = response.data.response; // Pesan dari bot

        // Menambahkan pesan dari bot ke state
        setMessages([
          ...newMessages,
          { sender: "bot", text: botMessage, time: getCurrentTime() },
        ]);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        // Hentikan animasi setelah bot merespons
        setIsTyping(false);
      }
    }
  };

  // Fungsi untuk menangani tekan tombol Enter
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && input.trim()) {
      handleSendMessage();
    }
  };

  // Efek untuk scroll otomatis ke pesan terbaru setelah pesan ditambahkan
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // Akan dijalankan setiap kali `messages` berubah

  return (
    <div className="flex flex-col justify-end p-4 h-screen bg-gray-100">
      {/* Pesan Chat */}
      <div className="flex-1 overflow-y-auto space-y-4 p-2 bg-white border rounded-lg shadow-lg">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === "bot" ? "justify-start" : "justify-end"}`}>
            <div className="flex items-start space-x-2">
              {/* Ikon Pengirim Pesan */}
              <div className={`flex items-start ${msg.sender === "user" ? "order-last" : ""}`}>
                {msg.sender === "user" ? (
                  // Ikon User di ujung pesan user
                  <div className="w-8 h-8 rounded-full bg-gray-300 ml-2 flex items-center justify-center">
                    <img src="/user-avatar.png" alt="User Avatar" className="w-full h-full rounded-full" />
                  </div>
                ) : (
                  // Ikon Bot di sebelah kiri
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                    <img src="/bot-avatar.png" alt="Bot Avatar" className="w-full h-full rounded-full" />
                  </div>
                )}
              </div>

              {/* Pesan */}
              <div>
                <div
                  className={`p-2 rounded-lg max-w-xs ${
                    msg.sender === "bot" ? "bg-gray-300" : "bg-blue-500 text-white"
                  }`}
                >
                  {msg.text}
                </div>
                <div className="text-xs text-gray-500 mt-1">{msg.time}</div>
              </div>
            </div>
          </div>
        ))}

        {/* Menampilkan animasi typing bot */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="p-2 rounded-lg max-w-xs bg-gray-300 text-gray-700">
              <span className="animate-pulse">...</span> {/* Animasi typing */}
            </div>
          </div>
        )}

        {/* Elemen untuk scroll otomatis ke bawah */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input untuk menulis pesan */}
      <div className="mt-4 flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} // Mengupdate state input saat pengguna mengetik
          onKeyDown={handleKeyDown} // Menangani penekanan tombol
          placeholder="Type a message"
          className="w-full p-2 rounded-lg border border-gray-300"
        />
        <button
          onClick={handleSendMessage} // Mengirim pesan ketika tombol di-klik
          className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
