# Crypto Sieve

Low memory-usage implementation of a Sieve of Eratosthenes.

## Install

```sh
npm install crypto-sieve
```

## Usage

```ts
import sieve from 'crypto-sieve';

// Let's generate all prime numbers <= 100

sieve ( 100 ); // => [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

// It can be used as an iterator also

for ( const prime of sieve.iterator ( 100 ) ) {

  // Do something with prime...

}
```

## License

MIT © Fabio Spampinato
