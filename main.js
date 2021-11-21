const DONE_STATUS = "Done";
const PROGRESS_STATUS = "progress";
const TO_DO_STATUS = "ToDo";
const TASK_PRIORITI_LOW = "low";
const TASK_PRIORITI_HIGH = "high";

const list = [
  {
    id: 1,
    taskName: "Go Magazine",
    taskStatus: "progress",
    taskPrioriti: "low",
  },
  {
    id: 2,
    taskName: "Call electric",
    taskStatus: "progress",
    taskPrioriti: "high",
  },
  {
    id: 3,
    taskName: "Feed Cats",
    taskStatus: "progress",
    taskPrioriti: "high",
  },
];
let countId = list.length;
function findTask(taskname) {
  return (taskIndex = list.findIndex((elem) => elem.taskName == taskname));
}

function changeStatus(taskname, statusTask = TO_DO_STATUS) {
  list[findTask(taskname)].taskStatus = statusTask;
}

function addTask(
  taskname,
  status = TO_DO_STATUS,
  prioriti = TASK_PRIORITI_LOW
) {
  if (list.find((elem) => elem.taskName == taskname)) {
    return "This task already exists, try another";
  } else {
    list.push({
      id: countId,
      taskName: taskname,
      taskStatus: status,
      taskPrioriti: prioriti,
    });
  }
  countId++;
}

function deleteTask(taskname) {
  list.splice(findTask(taskname), 1);
}
function showList() {
  let resTodo = `${TO_DO_STATUS}:\n`;
  let resProg = `In ${PROGRESS_STATUS}:\n`;
  let resDone = `${DONE_STATUS}:\n`;
  let out = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].taskStatus == TO_DO_STATUS) {
      resTodo += `${list[i].taskName} - prioriti: ${list[i].taskPrioriti}\n`;
    }
  }
  for (let i = 0; i < list.length; i++) {
    if (list[i].taskStatus == PROGRESS_STATUS) {
      resProg += `${list[i].taskName} - prioriti: ${list[i].taskPrioriti}\n`;
    }
  }
  for (let i = 0; i < list.length; i++) {
    if (list[i].taskStatus == DONE_STATUS) {
      resDone += `${list[i].taskName} - prioriti: ${list[i].taskPrioriti}\n`;
    }
  }

  console.log(resTodo + "\n" + resProg + "\n" + resDone);
}

changeStatus("Feed Cats", "Done");
deleteTask("Feed Cats");
addTask("Feed Cats");

addTask("Pet my cat", "Done", "high");
addTask("Visit grandma", "ToDo", "high");
addTask("Refactor code", "Done", "high");
addTask("Learn English", "progress", "high");

showList();
