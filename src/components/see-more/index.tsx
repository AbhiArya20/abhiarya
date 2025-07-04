"use client";

import { useState, type KeyboardEvent } from "react";

interface ReadMoreProps {
  id: string;
  text: string;
  amountOfWords?: number;
}

export default function ReadMore({ id, text, amountOfWords = 36 }: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const splittedText = text.split(" ");
  const itCanOverflow = splittedText.length > amountOfWords;
  const beginText = itCanOverflow ? splittedText.slice(0, amountOfWords - 1).join(" ") : text;
  const endText = splittedText.slice(amountOfWords - 1).join(" ");

  const handleKeyboard = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.code === "Space" || e.code === "Enter") {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <p id={id}>
      {beginText}
      {itCanOverflow && (
        <>
          {!isExpanded && <span>...</span>}
          <span className={`${!isExpanded && "hidden"}`} aria-hidden={!isExpanded}>
            {" "}
            {endText}
          </span>
          <span
            className="text-foreground ml-2 cursor-pointer hover:underline"
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            aria-controls={id}
            onKeyDown={handleKeyboard}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "show less" : "show more"}
          </span>
        </>
      )}
    </p>
  );
}
