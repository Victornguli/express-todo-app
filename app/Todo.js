// var mongoose = require("mongoose")

// var todo = new mongoose.Schema({
//     name: {
//         type: String
//     },
//     status: {
//         type: Boolean
//     }
// },
//     {
//         collection: "todos"
//     }
// )

// module.exports = mongoose.model("Todo", todo)

var fs = require("fs")
const todos = require("./Config.js")
const yargs = require("yargs")

console.log("Running Todo.js")

args = yargs.argv
var command = args._[0]
console.log("You ran the command " + command)

if (command == "addTodo"){
    todos.addTodo(args.title)
}else{
    console.log("Invalid command ! ")
}
// fs.appendFile("newfile.txt", "Writing to file\n", (err) => {
//     if(err) throw err
//     console.log("Wrote to file")
// })

// console.log(todos.addTodo())