
import React from 'react';

const messages = [
  { id: 1, text: "omg, this is amazing", sender: "them" },
  { id: 2, text: "perfect! ✅", sender: "them" },
  { id: 3, text: "Wow, this is really epic", sender: "them" },
  { id: 4, text: "How are you?", sender: "me" },
  { id: 5, text: "just ideas for next time", sender: "them" },
  { id: 6, text: "I'll be there in 2 mins ⏳", sender: "them" },
  { id: 7, text: "woohoooo", sender: "me" },
  { id: 8, text: "Haha oh man", sender: "me" },
  { id: 9, text: "Haha that's terrifying 🧟", sender: "me" },
  { id: 10, text: "aww", sender: "them" },
  { id: 11, text: "omg, this is amazing", sender: "them" },
  { id: 12, text: "woohoooo 🔥", sender: "them" },
];

function Test() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
              <h2 className="text-lg font-bold">Clothing Brand Challenge</h2>
              <p className="text-sm text-green-500">Online</p>
            </div>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full">Call</button>
        </div>
        <div className="space-y-4 overflow-y-auto h-80">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  message.sender === 'me' ? 'bg-orange-500 text-white' : 'bg-gray-200'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Type a message..."
          />
        </div>
      </div>
    </div>
  );
}

export default Test;
