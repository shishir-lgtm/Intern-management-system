export function isValidId(id) {
  return typeof id === "number";
}
export function isValidScore(score) {
  return typeof score === "number";
}

export function validateInternDetails(intern) {
  if (
    !intern.name ||
    !intern.email ||
    intern.performanceScore === undefined ||
    intern.performanceScore === null ||
    !isValidScore(intern.performanceScore) ||
    !intern.department
  ) {
    return false;
  }

  return true;
}
export function isValidDepartment(department) {
  return typeof department === "string";
}
