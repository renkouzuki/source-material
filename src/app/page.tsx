"use client";
import { formatText } from "@/lib/formatText";
import { useState } from "react";

export default function Home() {
  const dummy = [
    { id: 1, name: "John Doe", slug: "john-dol" },
    { id: 2, name: "Jane Smith", slug: "jane-smith" },
    { id: 3, name: "Alice Johnson", slug: "alice-johnson" },
    { id: 4, name: "Bob Brown", slug: "bob-brown" },
  ];

  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && inputValue.trim() !== "") {
      e.preventDefault();
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type @name and press Enter"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        rows={3} // Adjust initial height
      />

      <div className="mt-4 space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className="p-2 border border-gray-200 rounded-md bg-gray-50"
          >
            {formatText(msg, dummy)}
          </div>
        ))}
      </div>
    </div>
  );
}
