module.exports = {

  nextId: 1,

  collection: [],

  getOne(id) {
    const fullCollection = this.collection.slice();
    let match = {};
    fullCollection.forEach((element) => {
      if (element.id === Number(id)) {
          match = Object.assign({},element);
      }
    })
    return Promise.resolve(match)
  },

  getAll() {
    return Promise.resolve(this.collection.slice())
  },

  addOne(newNote) {
    const note = Object.assign({}, newNote, {
      id: this.nextId++,
      timestamp: new Date().toJSON()
    })
    this.collection.push(note)
    return Promise.resolve(note)
  }

}
