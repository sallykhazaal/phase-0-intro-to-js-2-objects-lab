const employee = {name :"Sam", streetAddress: "11 Broadway"}
function updateEmployeeWithKeyAndValue(object, key, value) {const newEmployee = { ...employee}}
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {employee.streetAddress = "12 Broadway" 
    return object}
function deleteFromEmployeeByKey(object, key) {const newEmployee = { ...employee}; delete employee.name; return newEmployee}