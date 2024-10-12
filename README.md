# ka-to-lat

A library for converting Georgian text to Latin text. This library is useful for converting Georgian text to Latin text for search indexing, etc.

## Installation

```bash
npm install --save ka-to-lat
```

## Usage

```javascript
import { georgianToLatin, latinToGeorgian } from "ka-to-lat";

// Convert Georgian text to Latin text
georgianToLatin("ლორემ იპსუმ"); // Lorem ipsum

// Convert Latin text to Georgian text
latinToGeorgian("Lorem ipsum"); // ლორემ იპსუმ
```

## Types

```typescript
function georgianToLatin(text: string): string;

function latinToGeorgian(text: string): string;
```

## Special Cases

On the `latinToGeorgian` function, if special cases are uppercase, they do not convert correctly. For example:

```javascript
latinToGeorgian("gverdze"); // გვერძე - WRONG

latinToGeorgian("gverDZe"); // გვერდზე - CORRECT
```

## Custom String Method

The package also extends the `String` prototype with a methods called `latinToGeorgian()` and `georgianToLatin()`. This method allows you to modify the original string in a specific way. For example: 

```js
import "ka-to-lat"

const result1 = 'Gamarjoba!'.latinToGeorgian(); 
console.log(result1); // Output: "გამარჯობა!"

const result2 = 'მოგესალმები!'.georgianToLatin(); 
console.log(result2); // Output: "Mogesalmebi!"
```

## License

MIT
