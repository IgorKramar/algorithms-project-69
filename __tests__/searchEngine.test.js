import { expect } from 'chai';
import SearchEngine from '../src/classes/SearchEngine.js';

describe('Первые тесты поведения поискового движка', () => {
  const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
  const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
  const doc3 = { id: 'doc3', text: "I'm your shooter." };
  const docs = [doc1, doc2, doc3];

  it('Поиск по документам', () => {
    const searchEngine = new SearchEngine(docs);
    expect(searchEngine.search('shoot')).to.deep.equal(['doc1', 'doc2']);
  });

  it('Поиск по пустому списку документов', () => {
    const searchEngine = new SearchEngine();
    expect(searchEngine.search('')).to.deep.equal([]);
  });
});
