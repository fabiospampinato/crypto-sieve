
/* HELPERS */

const {floor} = Math;

/* MAIN */

//TODO: Use windowing for the buffer, allocating a fixed-size buffer that gets repopulated when needed

const sieve = ( limit: number ): number[] => {

  return [...sieve.iterator ( limit )];

};

/* UTILITIES */

sieve.iterator = function* ( limit: number ): IterableIterator<number> {

  if ( limit < 2 ) return;

  const buffer = new Uint8Array ( Math.ceil ( limit / 2 / 8 ) ).fill ( 255 ); // 1 bit per odd number, 1 = prime, 0 = not prime

  yield 2; // The first prime, and the only even prime

  for ( let i = 1, l = Math.ceil ( limit / 2 ); i < l; i++ ) {

    const bufferIndex = floor ( i / 8 );
    const byteIndex = i % 8;

    if ( buffer[bufferIndex] & ( 1 << byteIndex ) ) { // Is prime

      const prime = ( i << 1 ) + 1;

      yield prime;

      for ( let j = i + prime; j < l; j += prime ) {

        const bufferIndex = floor ( j / 8 );
        const byteIndex = j % 8;

        buffer[bufferIndex] &=~ ( 1 << byteIndex ); // Is not prime

      }

    }

  }

};

/* EXPORT */

export default sieve;
