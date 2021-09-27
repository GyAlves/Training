const { readFileSync, writeFileSync, readFile, writeFile } = require('fs');


// Async 
const firstFile = readFileSync('/Users/gyasminalves/Desktop/projects/training/src/content/example1.txt', "utf-8")
const secondFile = readFileSync('/Users/gyasminalves/Desktop/projects/training/src/content/example2.txt', "utf-8")

writeFileSync('/Users/gyasminalves/Desktop/projects/training/src/content/result-sync.txt',
    `Here is the result : ${firstFile}, ${secondFile}`
)

// Sync 
// Callback hell 
readFile('/Users/gyasminalves/Desktop/projects/training/src/content/example1.txt', "utf8", (error, result) => {
    if (error) {
        console.log(error)
        return
    }

    const first = result

    readFile('/Users/gyasminalves/Desktop/projects/training/src/content/example2.txt', 'utf8', (error, result) => {
        if (error) {
            console.log(error)
            return
        }

        const second = result;

        writeFile('/Users/gyasminalves/Desktop/projects/training/src/content/result-async.txt', `Result: ${first}, ${second}`,
            (error, result) => {
                if (error) {
                    console.log(error)
                    return
                }

                console.log(result)
            })
    })
})
