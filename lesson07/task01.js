'use strict';
{
  const allStudents = ["Иванов", "Петров", "Сидоров", "Кузнецов", "Смирнов", "Попов", "Соколов"];
  const failedStudents = ["Сидоров", "Смирнов", "Попов"];

  // const newArr = [...new Set([...allStudents, ...failedStudents])];
  // console.log(`Passed students: ${newArr}`);

  const sortArr = (arr1, arr2) => {
    console.log("Сдавшие экзамен:");
    for (const elem in arr1) {
      for (const key in arr2) {
        // Compare array and check if the keys are equal
        if (arr1[elem].includes(arr2[key])) {
          // Find compared array key and delete by index of included key
          arr1.splice(elem, 1);
          continue;
        }
      }
    }
    for (let i = 0; i < arr1.length; i++) {
      console.log(`${i + 1} ${arr1[i]}`);
    }
  };
  sortArr(allStudents, failedStudents);
}