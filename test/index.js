
/* IMPORT */

import {describe} from 'fava';
import sieve from '../dist/index.js';

/* MAIN */

describe ( 'Cryto Sieve', it => {

  it ( 'can generate prime numbers', t => {

    for ( const limit of [97, 98, 99, 100] ) {

      const actual = sieve ( limit );
      const expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

      t.deepEqual ( actual, expected );

    }

  });

  it ( 'can generate numbers as an iterator', t => {

    for ( const limit of [97, 98, 99, 100] ) {

      const actual = [];
      const expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

      for ( const prime of sieve.iterator ( limit ) ) {

        actual.push ( prime );

      }

      t.deepEqual ( actual, expected );

    }

  });

});
