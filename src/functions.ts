const georgianToLatinMap: { [key: string]: string } = {
    ა: "a",
    ბ: "b",
    გ: "g",
    დ: "d",
    ე: "e",
    ვ: "v",
    ზ: "z",
    თ: "T",
    ი: "i",
    კ: "k",
    ლ: "l",
    მ: "m",
    ნ: "n",
    ო: "o",
    პ: "p",
    ჟ: "j",
    რ: "r",
    ს: "s",
    ტ: "t",
    უ: "u",
    ფ: "f",
    ქ: "k",
    ღ: "gh",
    ყ: "y",
    შ: "sh",
    ჩ: "ch",
    ც: "c",
    ძ: "dz",
    წ: "ts",
    ჭ: "ch",
    ხ: "kh",
    ჯ: "j",
    ჰ: "h",
  }; // Map of Georgian characters to Latin characters
  
  // Function to convert Georgian text to Latin text
  export const georgianToLatin = (georgianText: string) => {
    let latinText = "";
    for (let char of georgianText) {
      if (georgianToLatinMap.hasOwnProperty(char)) {
        latinText += georgianToLatinMap[char]; // Replace characters in the map
      } else {
        latinText += char; // Keep characters not in the map unchanged
      }
    }
    return latinText;
  };
  