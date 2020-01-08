/*
const fs = require("fs");
let inputStream = fs.createReadStream('./public/books.json');

inputStream.on('data',function (chunk) {
    books = chunk.toString();
})
inputStream.on('end',function () {
    inputStream.close()
    console.log("books初始化完成 ")
})
*/

var express = require('express');
var router = express.Router();

var maxId = 3;
var books = [{_id: 1, name: "book1", price: 100},
    {_id: 2, name: "book2", price: 200},
    {_id: 3, name: "book3", price: 300}];

router.route('/')
    .get(function (req, res) {
        res.json(books)
    })
    .post(function (req, res) {
        let book = req.body;
        book._id = ++maxId;
        books.push(book);
        res.json(book);
    })

router.delete('/:id', function (req, res) {
    //let id = req.param("id");
    let id = req.params.id;
    let index = books.findIndex(book => book._id == id);
    books.splice(index, 1);
    res.json({})
})

module.exports = router;
