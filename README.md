# js-utils
Javascript utils for frontend

## Installation
- Make sure you have NodeJS & NPM installed (or Yarn, if you prefer that)
- Use `npm i @wunderwa/js-utils --save` in your project folder
- Import `node_modules/@wunderwa/js-utils/index.js` in your project, such as:
```js
import utils from '@wunderwa/js-utils';

const total = 20;
const active = 2;
const neighbours = 2;

utils.calculatePagination(total, active, neighbours);
```


## Utils list

### calculatePagination
`calculatePagination(totalPages, activePage, pageNeighbours = 1, ellipsis = '...')`

#### To use single 

```js
import calculatePagination from '@wunderwa/js-utils/utils/calculatePagination';

calculatePagination(20, 2);          // => [1, 2, 3, 4, 5, '...', 20];
calculatePagination(20, 15);         // => [1, '...', 14, 15, 16, '...', 20];
calculatePagination(20, 20);         // => [1, '...', 16, 17, 18, 19, 20];
calculatePagination(20, 15, 2);      // => [1, '...', 13, 14, 15, 16, 17, '...', 20];
calculatePagination(20, 5, 1, '..'); // => [1, '..', 4, 5, 6, '..', 20]
                                             
```



