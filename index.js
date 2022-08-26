import SearchEngine from './src/classes/SearchEngine.js';
import makeFakeDocuments from './src/utils/makeFakeDocuments.js';

const documents = makeFakeDocuments(10);

const searchEngine = new SearchEngine(documents);

console.log(searchEngine.search('ipsum'));
