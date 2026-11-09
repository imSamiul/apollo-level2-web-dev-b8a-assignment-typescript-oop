function multiplyValue(value, multiplier) {
    if (multiplier === undefined) {
        return value * 2;
    }
    return value * multiplier;
}
multiplyValue(10);
multiplyValue(10, 5);
multiplyValue(7, 0);
function processInput(value) {
    if (typeof value === 'string') {
        return value.trim().toLowerCase();
    }
    else if (typeof value === 'number') {
        return value * 10;
    }
    else {
        return value ? 'Active' : 'Inactive';
    }
}
processInput('  TypeScript  ');
processInput(7);
processInput(true);
processInput(false);
function formatCoordinate(coordinate) {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} ${latitude} ${longitude}`;
}
function concatenateArrays(...arrays) {
    return arrays.flat();
}
concatenateArrays(['a', 'b'], ['c', 'd']);
concatenateArrays([1, 2], [3, 4], [5]);
function getPopularCourses(courses, minStudents) {
    return courses.filter((course) => course.isPublished && course.students >= minStudents);
}
// Sample Input:
const courses = [
    { title: 'TypeScript Mastery', students: 120, isPublished: true },
    { title: 'Draft Course', students: 200, isPublished: false },
    { title: 'Basic HTML', students: 45, isPublished: true },
    { title: 'Next.js Pro', students: 85, isPublished: true },
];
getPopularCourses(courses, 80);
function pluckValues(items, key) {
    return items.map((item) => item[key]);
}
// Sample Usage:
const users = [
    { id: 1, name: 'Rakib', role: 'Admin' },
    { id: 2, name: 'Sadia', role: 'Editor' },
    { id: 3, name: 'Tariq', role: 'Subscriber' },
];
pluckValues(users, 'name');
pluckValues(users, 'id');
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const manager = new Manager('Alice', 50000, 'Engineering');
manager.getDetails();
manager.getRoleInfo();
async function validateAgeAsync(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve('Access Granted');
            }, 1000);
        }
        else {
            reject(new Error('Access Denied: Must be 18 or older'));
        }
    });
}
async () => {
    await validateAgeAsync(20);
    await validateAgeAsync(15);
};
export {};
