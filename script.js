import { interns } from "./data/interns.js";
import {
  isValidId,
  isValidScore,
  validateInternDetails,
  isValidDepartment,
} from "./utils/validation.js";
// addinging new intern in interns array
const newIntern = {
  id: 105,
  name: "Amit",
  email: "amit@example.com",
  performanceScore: 90,
  department: "HR",
};
function addnewIntern(newIntern) {
  if (!isValidId(newIntern.id)) {
    console.log("Please provide a valid ID for the new intern.");
    return;
  }

  if (!validateInternDetails(newIntern)) {
    console.log("Please provide all the required details for the new intern.");
    return;
  }

  const InternExist = interns.some((intern) => {
    return intern.id === newIntern.id;
  });
  if (InternExist) {
    console.log("Intern with this ID already exists.");
  } else {
    interns.push(newIntern);
    console.log("New intern added:", newIntern);
  }
}
// Read the Intern data
function readInterns(id) {
  if (!isValidId(id)) {
    console.log("Please provide a valid ID to read the intern data.");
    return;
  }
  const findIntern = interns.find((intern) => {
    return intern.id === id;
  });
  if (findIntern) {
    console.log("Intern found:", findIntern);
    console.log(findIntern.email);
  } else {
    console.log("Intern not found.");
  }
}
// update Performance score of intern
function updatePerformanceScore(id, newScore) {
  if (!isValidId(id)) {
    console.log(
      "Please provide a valid ID to update the intern's performance score.",
    );
    return;
  }
  if (!isValidScore(newScore)) {
    console.log("Please provide a valid performance score to update.");
    return;
  }
  const findIntern = interns.find((intern) => {
    return intern.id === id;
  });
  if (findIntern) {
    findIntern.performanceScore = newScore;
    console.log("Performance score updated:", findIntern);
  } else {
    console.log("Intern not found.");
  }
}
//filter by department
function filterByDepartment(department) {
  if (!isValidDepartment(department)) {
    console.log("Please provide a valid department name.");
    return;
  }
  const filteredInterns = interns.filter((intern) => {
    return intern.department === department;
  });
  console.log(`Interns in ${department} department:`, filteredInterns);
}

//calculate average performance score
function calculateAveragePerformanceScore() {
  const totalScore = interns.reduce((sum, intern) => {
    return sum + intern.performanceScore;
  }, 0);
  const averageScore = totalScore / interns.length;
  console.log("Average performance score:", averageScore);
}

//testing of all functions
addnewIntern(newIntern);
readInterns("102");
updatePerformanceScore(105, "95");
calculateAveragePerformanceScore();
filterByDepartment("development");
