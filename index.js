// https://nodejs.org/api/readline.html#readline_readline

// Create a Node Program

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {
    'name': '',
    'version': '',
    'description': '',
    'main': '',
    'author': ''
}

const obj = (info) => {
    fs.writeFile('package.json', info, (err) => {
        if (err) throw err;
        console.log('package.json saved');
    });
}

// for(let i = 0; i <5; i++) {
//     rl.question('name?', (app)=> {
//         answers['name'] = app;
//     });
// }


// Figure out how to store different prompts in a object???
function getPrompt() {
    rl.question('name?', (app)=> {
        answers['name'] = app;
        if() {
            getPrompt();
        }
    });
}
getPrompt();


// Check for the first process argument to be init
// if the first argument is init, continue processing
// Use readline to ask for 5 inputs 

// Using info from package.json
// if (process.argv[2] === 'init') {
//     (rl.question('name?', (app) => {
//         rl.question('what version?', (ves) => {
//             rl.question('what is the description?', (des) => {
//                 rl.question('which main file?', (mai) => {
//                     rl.question('who is the author?', (aut) => {

//                         // answers to the questions, creating the object and keys
//                         const answers = {
//                             'name': app,
//                             'version': ves,
//                             'description': des,
//                             'main': mai,
//                             'author': aut
//                         }
//                         // need to create a string that is a json obj
//                         // using JSON.stringify to convert value to a JSON string
//                         const obj = JSON.stringify(answers, '', '\t')
//                         // using writeFile to create package.json and obj
//                         fs.writeFile('package.json', 'obj', (err) => {
//                             // if error 
//                             if (err) throw err;
//                                 console.log('package.json saved');
//                         });
//                         // need to call readline.Interface to give up input and output streams
//                         rl.close();
//                     })
//                 })
//             })
//         })
//     })
// )
// }