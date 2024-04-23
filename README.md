# ka-to-lat
A library for converting Georgian text to Latin text. This library is useful for converting Georgian text to Latin text for search indexing, etc.

## Installation
```bash
npm install --save ka-to-lat
```

## Usage
```javascript
const kaToLat = require('ka-to-lat');

console.log(kaToLat('გამარჯობა ლათინურად')); // gamarjoba latinurad
```

## Types
```typescript
function kaToLat(text: string): string;
```

## License
MIT
```