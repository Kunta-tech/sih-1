/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1541934496")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number251240746",
    "max": 999999999999,
    "min": 100000000000,
    "name": "aadhar_no",
    "onlyInt": true,
    "presentable": true,
    "required": true,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number2167223107",
    "max": 9999999999,
    "min": 1000000000,
    "name": "PI_id",
    "onlyInt": true,
    "presentable": true,
    "required": true,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1541934496")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number251240746",
    "max": 12,
    "min": 12,
    "name": "aadhar_no",
    "onlyInt": true,
    "presentable": true,
    "required": true,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number2167223107",
    "max": 10,
    "min": 10,
    "name": "PI_id",
    "onlyInt": true,
    "presentable": true,
    "required": true,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})