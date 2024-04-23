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

// Convert
latinToGeorgian("Lorem ipsum"); // ლორემ იპსუმ
```

## Types

```typescript
function georgianToLatin(text: string): string;
function latinToGeorgian(text: string): string;
```

## License

MIT