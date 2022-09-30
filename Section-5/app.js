class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //private name: string;
        this.employees = [];
        //this.name = n;
    }
    describe() {
        console.log(`Department (${this.id}): (${this.name}) `);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'Dev');
        this.admins = admins;
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found...');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please Pass In A Valid Value!');
        }
        this.addReport(value);
    }
    addEmployee(name) {
        if (name === 'Nasief') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const development = new ITDepartment('N1', ['Nasief']);
development.addEmployee('Riyaaz');
development.addEmployee('Ahmed');
development.addEmployee('Ammarah');
//accounting.employees[0] = 'Nasief'
development.describe();
development.printEmployeeInformation();
console.log(development);
const accounting = new AccountingDepartment('A1', []);
accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);
accounting.addEmployee('Nasief');
accounting.addEmployee('Feisan');
accounting.printReports();
accounting.printEmployeeInformation();
// const accountingCopy = { name: 'Nasief', describe: accounting.describe}
// accountingCopy.describe()
