const { Router } = require('express')
const notes = require('./notes')

const router = new Router()

router.get('/', (req, res) => {
  notes
    .getAll()
    .then(notes => {
      res.json(notes)
    })
})

router.get('/:id', ( { params }, res) => {
  notes
    .getOne(params.id)
    .then(result => {
      res.json(result)
    })
})

router.post('/', ({ body }, res) => {
  notes
    .addOne(body)
    .then(newNote => {
      res.status(201).json(newNote)
    })
})

module.exports = router
