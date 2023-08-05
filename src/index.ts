
/* HELPERS */

const {floor} = Math;

/* MAIN */

//TODO: Use windowing for the buffer, allocating a fixed-size buffer that gets repopulated when needed

const sieve = ( limit: number ): number[] => {

  return [...sieve.iterator ( limit )];

};

/* UTILITIES */

sieve.iterator = function* ( limit: number = Infinity ): IterableIterator<number> {

  const buffer = new Uint8Array ( Math.ceil ( limit / 8 ) ).fill ( 255 ); // 1 bit per number, 1 = prime, 0 = not prime

  for ( let i = 2; i <= limit; i++ ) {

    const bufferIndex = floor ( i / 8 );
    const byteIndex = i % 8;

    if ( buffer[bufferIndex] & ( 1 << byteIndex ) ) { // Is prime

      yield i;

      for ( let j = i + i; j <= limit; j += i ) {

        const bufferIndex = floor ( j / 8 );
        const byteIndex = j % 8;

        buffer[bufferIndex] &=~ ( 1 << byteIndex ); // Is not prime

      }

    }

  }

};

/* EXPORT */

export default sieve;
