"use client";
import { useRef, useState } from "react";

export const useSuggestionSelector = (dummy) => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredDummy, setFilteredDummy] = useState([]);
  const [cursorPosition, setCursorPosition] = useState(0);

  const textareaRef = useRef(null);

  const handleSelect = () => {
    if (textareaRef.current) {
      setCursorPosition(textareaRef.current.selectionStart);
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setInputValue(val);
    handleSelect();

    const textUntilCursor = val.slice(0, textareaRef.current.selectionStart);
    const match = textUntilCursor.match(/@(\w*)$/);

    if (match) {
      const query = match[1].toLowerCase();
      const filtered = dummy.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
      setFilteredDummy(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      if (showSuggestions && filteredDummy.length > 0) {
        e.preventDefault();
        selectUser(filteredDummy[0]);
        return;
      }

      e.preventDefault();
      setMessages([...messages, inputValue]);
      setInputValue("");
      setShowSuggestions(false);
    }
  };

  const selectUser = (user) => {
    const start = inputValue.slice(0, cursorPosition);
    const end = inputValue.slice(cursorPosition);
    const newText = start.replace(/@(\w*)$/, `@${user.name}`) + end;

    setInputValue(newText);
    setShowSuggestions(false);

    setTimeout(() => {
      textareaRef.current.selectionStart = textareaRef.current.selectionEnd =
        start.replace(/@(\w*)$/, `@${user.name}`).length;
      textareaRef.current.focus();
    }, 0);
  };

  return {
    textareaRef,
    inputValue,
    handleChange,
    handleKeyDown,
    handleSelect,
    showSuggestions,
    filteredDummy,
    messages,
    selectUser
  };
};
