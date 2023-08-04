
/* IMPORT */

import {describe} from 'fava';
import sieve from '../dist/index.js';

/* MAIN */

describe ( 'Cryto Sieve', it => {

  it ( 'can generate prime numbers', t => {

    const actual = sieve ( 100 );
    const expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

    t.deepEqual ( actual, expected );

  });

});
