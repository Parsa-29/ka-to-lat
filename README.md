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

## License

MIT
