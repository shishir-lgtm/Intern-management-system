export function isValidId(id) {
  return typeof id === "number" && Number.isFinite(id);
}
export function isValidScore(score) {
  return typeof score === "number" && Number.isFinite(score);
}

export function validateInternDetails(intern) {
  if (
    typeof intern.name !== "string" ||
    intern.name.trim() === "" ||
    typeof intern.email !== "string" ||
    intern.email.trim() === "" ||
    !isValidScore(intern.performanceScore) ||
    !isValidDepartment(intern.department)
  ) {
    return false;
  }

  return true;
}
export function isValidDepartment(department) {
  return typeof department === "string" && department.trim() !== "";
}
