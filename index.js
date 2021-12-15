
const employee = {name: 'Sam', streetAddress: 'MainStreet'};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee , [key]: value};
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee,key, value){
    delete employee[key];
    return employee
}
