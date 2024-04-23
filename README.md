# ka-to-lat
A library for converting Georgian text to Latin text. This library is useful for converting Georgian text to Latin text for search indexing, etc.

## Installation
```bash
npm install --save ka-to-lat
```

## Usage
```javascript
import { georgianToLatin } from "ka-to-lat";

console.log(georgianToLatin('გამარჯობა ლათინურად')); // gamarjoba latinurad
```

## Types
```typescript
function georgianToLatin(text: string): string;
```

## License
MIT
```