class SearchEngine {
  constructor(docs = []) {
    this.docs = docs;
  }

  search(value) {
    if (!this.docs) return null;
    return this.docs.filter((doc) => doc.text.split(' ').includes(value)).map((doc) => doc.id);
  }
}

export default SearchEngine;
