import fs from "fs"


if (!fs.existsSync("Data.json")) {
    fs.writeFileSync("Data.json", JSON.stringify([]))
    console.log("Data.json has been created!")
}

const values = JSON.parse(fs.readFileSync("Data.json", "utf-8"))


const args = process.argv
const method = args[2] ? args[2].toLowerCase() : null


let getting_id;
let title;

if (method === "add" || method === "list" ) {
    title = args[3]
}

if (method === "update") {
    getting_id = Number(args[3])
    title = args[4]
}

if (method === "mark-done"  || method === "mark-in-progress" || method === "mark-not-done" ) {
    getting_id = Number(args[3])
}


// Adding a task 

 if (method === "add" && title) {

    const duplicate = values.filter(f => f.name === title)

    if (duplicate.length > 0) {
        console.log("Duplicate title spotted!")
        process.exit(0)
    }

    const day = new Date().toLocaleString()

    const ids = values.map(task => task.id)
    const maxId = ids.length > 0 ? Math.max(...ids) : 0
    const newId = maxId + 1


    const users = {
        id: newId,
        name: title,
        status: "mark-not-done",
        timeCreated: day,
        updatedAt: day
    }
    
    values.push(users)

    fs.writeFileSync("Data.json", JSON.stringify(values, "", 2))

    console.log(`Task added successfully (ID: ${newId})`)
}

// Updating a task

if (method === "update" && getting_id && title) {

    const finding_id = values.find(f => f.id === getting_id)

    if (!finding_id) {
        console.log("ID for task is not present!")
        process.exit(0)
    }

    finding_id.name = title
    finding_id.updatedAt = new Date().toLocaleString()

    fs.writeFileSync("Data.json", JSON.stringify(values, "", 2))

    console.log("Task updated successfully!")

}

// Marking a task as done

if (method === "mark-done" && getting_id) {

    const finding_task = values.find(f => f.id === getting_id)

    if (!finding_task) {
        console.log("ID for task is not present!")
        process.exit(0)
    }

    finding_task.status = "mark-done"
    finding_task.updatedAt = new Date().toLocaleString()

    fs.writeFileSync("Data.json", JSON.stringify(values, "", 2))

    console.log("Status of task changed to mark-done")
}

if (method === "mark-in-progress" && getting_id) {

    const finding_task = values.find(f => f.id === getting_id)

    if (!finding_task) {
        console.log("ID for task is not present!")
        process.exit(0)
    }

    finding_task.status = "mark-in-progress"
    finding_task.updatedAt = new Date().toLocaleString()

    fs.writeFileSync("Data.json", JSON.stringify(values, "", 2))

    console.log("Status of task changed to mark-in-progress")
}

if (method === "mark-not-done" && getting_id) {

    const finding_task = values.find(f => f.id === getting_id)

    if (!finding_task) {
        console.log("ID for task is not present!")
        process.exit(0)
    }

    finding_task.status = "mark-not-done"
    finding_task.updatedAt = new Date().toLocaleString()

    fs.writeFileSync("Data.json", JSON.stringify(values, "", 2))

    console.log("Status of task changed to mark-not-done")
}

















