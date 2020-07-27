const { Router } = require('express')

const router = Router()

router.get('/', require('./list'))
router.get('/:id', require('./show'))
router.post('/', require('./create'))
router.put('/:id', require('./update'))
router.delete('/:id', require('./remove'))

module.exports = router
