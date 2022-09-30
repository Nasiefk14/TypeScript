class Department {
    //private name: string;
    protected employees: string[] = [];

    constructor(private readonly id: string, public name : string){
        //this.name = n;
    }

    describe(this: Department){
        console.log(`Department (${this.id}): (${this.name}) `)
    }

    addEmployee(employee: string){
        this.employees.push(employee)
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]){
        super(id, 'Dev');
        this.admins = admins
    }
}

class AccountingDepartment extends Department{
    private lastReport: string

    get mostRecentReport() {
        if (this.lastReport) {
          return this.lastReport;
        }
        throw new Error('No report found...');
      }

    set mostRecentReport(value: string){
        if(!value){
            throw new Error('Please Pass In A Valid Value!')
        }
        this.addReport(value)
    }

    constructor(id:string, private reports: string[]){
        super(id ,'Accounting');
        this.lastReport = reports[0]
    }

    addEmployee(name: string){
        if(name === 'Nasief'){
            return;
        }
        this.employees.push(name)
    }

    addReport(text: string){
        this.reports.push(text)
        this.lastReport = text
    }

    printReports(){ 
        console.log(this.reports)
    }
}

const development = new ITDepartment('N1', ['Nasief'])

development.addEmployee('Riyaaz')
development.addEmployee('Ahmed')
development.addEmployee('Ammarah')

//accounting.employees[0] = 'Nasief'

development.describe()
development.printEmployeeInformation()

console.log(development)

const accounting = new AccountingDepartment('A1', [])


accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);


accounting.addEmployee('Nasief')
accounting.addEmployee('Feisan')

accounting.printReports()
accounting.printEmployeeInformation()


// const accountingCopy = { name: 'Nasief', describe: accounting.describe}
// accountingCopy.describe()