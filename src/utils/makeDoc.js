import { loremIpsum } from 'lorem-ipsum';

const makeDoc = (docId) => ({
  id: docId,
  text: loremIpsum({ count: 10 }),
});

export default makeDoc;
