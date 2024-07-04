import { strict } from "assert";
import { stderr } from "process";

// define interface for Student object
interface Student{
  name: string;
  score : number;
};

// assign interface/type to the function definition properly
function findTopNames(students:any) {
  let FilterStudents = students.filter((std:any) => std.score > 8);
  let StudenNameList = FilterStudents.map((mama:any) => mama.name);
  return StudenNameList;
};

// assign interface/type to the student1 object properly
const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;


//660610747 ชิตพันธ์ พะหงษา