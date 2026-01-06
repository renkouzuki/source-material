export const formatText = (text, dummy) => {
  const words = text.split(" ");
  const parts = [];
  let i = 0;

  while (i < words.length) {
    if (words[i].startsWith("@")) {
      let j = i + 1;
      let matched = null;

      while (j <= words.length) {
        const candidate = words.slice(i, j).join(" ").replace(/^@/, "");
        const found = dummy.find(
          (item) => item.name.toLowerCase() === candidate.toLowerCase()
        );
        if (found) matched = j;
        j++;
      }

      if (matched) {
        parts.push(
          <a
            key={i}
            href="#"
            className="text-blue-500 underline hover:text-blue-700"
          >
            {words.slice(i, matched).join(" ")}{" "}
          </a>
        );
        i = matched;
        continue;
      }
    }

    parts.push(<span key={i}>{words[i]} </span>);
    i++;
  }

  return <span>{parts}</span>;
};
