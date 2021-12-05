function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function () {
      console.log(`${this.title} has${this.complete ? "" : " not"} been completed`);
    },

    markCompleted: function () {
      this.complete = true;
    }
  };
  return task;
}

const task1 = newTask("Clean Cat Litter", "Take all the shit outta the litter box 😨");
const task2 = newTask("Do Laundry", "Run the washing machine");
const task3 = newTask("Wash dishes", "Run the dishwasher");
const task4 = newTask("Work on Lighthouse Labs homework", "Catch up on all the assignments");
const tasks = [task1, task2, task3, task4];

for (let t = 0; t < tasks.length; t++) {
  tasks[t].logState();
  tasks[t].markCompleted();
  tasks[t].logState();
}