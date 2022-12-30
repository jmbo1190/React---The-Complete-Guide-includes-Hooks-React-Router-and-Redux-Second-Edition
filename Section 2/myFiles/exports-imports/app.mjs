
// import whatever was marked as default export, under any name you choose e.g. 'person' or 'prs'
import person from './person.mjs';
import prs from './person.mjs';

// import named exports, using exact name between curly braces
import { baseData } from './utility.mjs';
import { clean } from './utility.mjs';
import { baseData2, clean2 } from './utility.mjs';

import { baseData as bD } from '.utility.mjs';

// import everything that was exported as properties
import * as utilityBundle from './utility.mjs';

console.log(person);
console.log(prs);
console.log(baseData);
clean();
console.log(baseData2);
clean2();

console.log(utilityBundle.baseData2 + utilityBundle.baseData);

