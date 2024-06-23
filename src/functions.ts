const georgianToLatinMap: { [key: string]: string | string[] } = {
  ა: "a",
  ბ: "b",
  გ: "g",
  დ: "d",
  ე: "e",
  ვ: "v",
  ზ: "z",
  თ: "t",
  ი: "i",
  კ: "k",
  ლ: "l",
  მ: "m",
  ნ: "n",
  ო: "o",
  პ: "p",
  ჟ: "zh",
  რ: "r",
  ს: "s",
  ტ: "t",
  უ: "u",
  ფ: "f",
  ქ: "q",
  ღ: "gh",
  ყ: "y",
  შ: "sh",
  ჩ: "ch",
  ც: "c",
  ძ: "dz",
  წ: "ts",
  ჭ: "ch",
  ხ: ["kh", "x"],
  ჯ: "j",
  ჰ: "h",
}; // Map of Georgian characters to Latin characters

// Function to convert Georgian text to Latin text
export const georgianToLatin = (georgianText: string) => {
  let latinText = "";
  for (let char of georgianText) {
    if (georgianToLatinMap.hasOwnProperty(char)) {
      const latinEquivalent = georgianToLatinMap[char];
      if (Array.isArray(latinEquivalent)) {
        // If the Latin equivalent is an array, take the first element
        latinText += latinEquivalent[0];
      } else {
        latinText += latinEquivalent; // Otherwise, use the single Latin equivalent
      }
    } else {
      latinText += char; // Keep characters not in the map unchanged
    }
  }
  // Capitalize the first letter of the Latin text
  return latinText.charAt(0).toUpperCase() + latinText.slice(1);
};

// Function to convert Latin text to Georgian text
export const latinToGeorgian = (latinText: string) => {
  let georgianText = "";

  for (let i = 0; i < latinText.length; i++) {
    let char = latinText[i];
    // Check for special cases of two Latin characters mapping to one Georgian character
    if (char === "g" && latinText[i + 1] === "h") {
      georgianText += "ღ";
      i++;
      continue;
    } else if (
      char === "k" &&
      latinText[i + 1] === "h" &&
      char.toLowerCase() &&
      latinText[i + 1].toLowerCase()
    ) {
      georgianText += "ხ";
      i++;
      continue;
    } else if (
      char === "t" &&
      latinText[i + 1] === "s" &&
      char.toLowerCase() &&
      latinText[i + 1].toLowerCase()
    ) {
      georgianText += "წ";
      i++;
      continue;
    } else if (
      char === "d" &&
      latinText[i + 1] === "z" &&
      char.toLowerCase() &&
      latinText[i + 1].toLowerCase()
    ) {
      georgianText += "ძ";
      i++;
      continue;
    } else if (
      char === "s" &&
      latinText[i + 1] === "h" &&
      char.toLowerCase() &&
      latinText[i + 1].toLowerCase()
    ) {
      georgianText += "შ";
      i++;
      continue;
    } else if (
      char === "c" &&
      latinText[i + 1] === "h" &&
      char.toLowerCase() &&
      latinText[i + 1].toLowerCase()
    ) {
      georgianText += "ჩ";
      i++;
      continue;
    } else if (
      char === "z" &&
      latinText[i + 1] === "h" &&
      char.toLowerCase() &&
      latinText[i + 1].toLowerCase()
    ) {
      georgianText += "ჟ";
      i++;
      continue;
    } else {
      // Find the Georgian character corresponding to the Latin character
      char = char.toLowerCase(); // Convert to lowercase for case-insensitive comparison
      let georgianChar = Object.keys(georgianToLatinMap).find((key) => {
        const latinEquivalent = georgianToLatinMap[key];
        return Array.isArray(latinEquivalent)
          ? latinEquivalent.includes(char)
          : latinEquivalent === char;
      });
      georgianText += georgianChar ? georgianChar : char;
    }
  }
  return georgianText; // Return the converted Georgian text
};
