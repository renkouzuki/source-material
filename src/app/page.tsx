"use client";
import { formatText } from "@/lib/formatText";
import { useSuggestionSelector } from "@/hooks/useSuggestionSelector";

export default function Home() {
  const dummy = [
    { id: 1, name: "John Doe", slug: "john-doe" },
    { id: 2, name: "Jane Smith", slug: "jane-smith" },
    { id: 3, name: "Alice Johnson", slug: "alice-johnson" },
    { id: 4, name: "Bob Brown", slug: "bob-brown" },
  ];

  const {
    textareaRef,
    inputValue,
    handleChange,
    handleKeyDown,
    handleSelect,
    showSuggestions,
    filteredDummy,
    messages,
    selectUser,
  } = useSuggestionSelector(dummy);

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onSelect={handleSelect}
          placeholder="Type @name and press Enter"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows={3}
        />

        {showSuggestions && filteredDummy.length > 0 && (
          <div className="absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
            {filteredDummy.map((item) => (
              <div
                key={item.id}
                onClick={() => selectUser(item)}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>

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
