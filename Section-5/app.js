var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department('Accounting');
accounting.addEmployee('Riyaaz');
accounting.addEmployee('Ahmed');
accounting.addEmployee('Ammarah');
accounting.employees[0] = 'Nasief';
accounting.describe();
accounting.printEmployeeInformation();
// const accountingCopy = { name: 'Nasief', describe: accounting.describe}
// accountingCopy.describe()
