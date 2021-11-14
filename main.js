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
      id: list.length + 1, // Как сделать так что бы задачи при добавлении или удалении имели уникальный id, или переопределяли id попорядку (как просто переномировать еще можно придумать, но где правильней всего вызывать этот метод)
      taskName: taskname,
      taskStatus: status,
      taskPrioriti: prioriti,
    });
  }
}

function deleteTask(taskname) {
  list.splice(findTask(taskname), 1);
  // list.filter((elem) => elem.taskName !== taskname); Почему не работает такая конструкция + нельзя переназначить list поскольку это CONST
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

  console.log(resTodo + "\n" + resProg + "\n" + resDone); // Как можно лаконичней без циклов вывести все такси по группам?
}

// Функция по приоритетам не работает = \
// function showBy(prioriti) {
//   let newlist = list.reduce((elem, item, index) => {
//     (elem += item.taskName + " " + item.taskStatus), " ";
//   });
//   console.log(newlist);
// }
// showBy("priority");
changeStatus("Feed Cats", "Done");
deleteTask("Feed Cats");
addTask("Feed Cats");

addTask("Pet my cat", "Done", "high");
addTask("Visit grandma", "ToDo", "high");
addTask("Refactor code", "Done", "high");
addTask("Learn English", "progress", "high");

showList();
