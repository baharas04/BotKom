"use client";

import React, { useState } from "react";
import axios from "axios";

type Message = {
  sender: "user" | "bot"; 
  text: string;
};

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState(""); 

  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessages: Message[] = [...messages, { sender: "user", text: input }];
      setMessages(newMessages); 
      setInput(""); 
      try {
        const response = await axios.post("http://localhost:8000/api/message", {
          message: input,
        });

        const botMessage = response.data.response; // Pesan dari bot
        // Menambahkan pesan dari bot ke state
        setMessages([...newMessages, { sender: "bot", text: botMessage }]);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="flex flex-col justify-end p-4 h-screen bg-gray-100">
      {/* Pesan Chat */}
      <div className="flex-1 overflow-y-auto space-y-4 p-2 bg-white border rounded-lg shadow-lg">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === "bot" ? "justify-start" : "justify-end"}`}>
            <div
              className={`p-2 rounded-lg max-w-xs ${
                msg.sender === "bot" ? "bg-gray-300" : "bg-blue-500 text-white"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input untuk menulis pesan */}
      <div className="mt-4 flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} // Mengupdate state input saat pengguna mengetik
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

export default App;
