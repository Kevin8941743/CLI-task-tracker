# Task Tracker CLI

A simple command-line Task Tracker built with Node.js.  
This application allows you to add, update, delete, and manage tasks stored in a local JSON file.

---

## Features

- Add a new task
- Update a task description
- Delete a task
- Mark a task as:
  - `mark-not-done`
  - `mark-in-progress`
  - `mark-done`
- List all tasks
- Filter tasks by status
- Automatically stores tasks in a JSON file

---

##  Installation

1. Clone the repository:

```bash
git clone https://github.com/Kevin8941743/CLI-task-tracker
```

2. Navigate into the project folder:

```bash
cd CLI-task-tracker
```

3. Make sure Node.js is installed:

```bash
node -v
```

---

##  Usage

Run commands using:

```bash
node server.js <command> [arguments]
```

---

## 📝 Commands

### Add a Task

```bash
node server.js add "Buy milk"
```

---

### Update a Task

```bash
node server.js update 1 "Buy almond milk"
```

---

### Delete a Task

```bash
node server.js delete 1
```

---

### Mark Task as Done

```bash
node server.js mark-done 1
```

---

### Mark Task as In Progress

```bash
node server.js mark-in-progress 1
```

---

### Mark Task as Todo

```bash
node server.js mark-not-done 1
```

---

### List All Tasks

```bash
node server.js list
```

---

### List Tasks by Status

```bash
node server.js list mark-done
node server.js list mark-not-done
node server.js list mark-in-progress
```

---

##  Data Structure

Each task is stored in `Data.json` with the following format:

```json
{
  "id": 1,
  "description": "Buy milk",
  "status": "todo",
  "createdAt": "2026-02-16T10:00:00",
  "updatedAt": "2026-02-16T10:00:00"
}
```

---

##  Built With

- Node.js
- File System Module (`fs`)

---

## License

This project is open source and available under the MIT License.
