
/* IMPORT */

import benchmark from 'benchloop';
import sieve from '../dist/index.js';

/* MAIN */

benchmark ({
  iterations: 1,
  name: '1K',
  fn: () => {
    sieve ( 1_000 );
  }
});

benchmark ({
  iterations: 1,
  name: '1M',
  fn: () => {
    sieve ( 1_000_000 );
  }
});

benchmark ({
  iterations: 1,
  name: '1B',
  fn: () => {
    sieve ( 1_000_000_000 );
  }
});

benchmark.summary ();
