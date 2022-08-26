import makeDoc from './makeDoc.js';

const makeFakeDocuments = (count = 1) => Array.from(Array(count)).map((x, i) => makeDoc(`doc${i}`));

export default makeFakeDocuments;
