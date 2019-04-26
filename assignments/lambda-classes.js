// CODE here for your Lambda Classes
class Person {
    constructor(data) {
        this.name = data.name;
        this.age = data.age;
        this.location = data.location;
        this.gender = data.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person {
    constructor(instructorData) {
        super(instructorData);
        this.specialty = instructorData.specialty;
        this.favLanguage = instructorData.favLanguage;
        this.catchPhrase = instructorData.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`)
    }
    gradeAssignment(student) {
        return student.grade = ((Math.floor(Math.random() * (1 - 0 + 1)) + 0) ? student.grade + 5 : student.grade - 5);
    }
}

class Student extends Person {
    constructor(studentData) {
        super(studentData);
        this.previousBackground = studentData.previousBackground;
        this.className = studentData.className;
        this.favSubjects = studentData.favSubjects;
        this.grade = studentData.grade;
    }

    listsSubjects() {
        this.favSubjects.forEach(function(subject) {
            console.log(subject);
        });
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
    graduate() {
        console.log(((this.grade >= 70)? `${this.name} has graduated!!!` : `${this.name} must have more assignments graded to graduate.`));
    }
}

class ProjectManager extends Instructor {
    constructor(pmData) {
        super(pmData);
        this.gradClassName = pmData.gradClassName;
        this.favInstructor = pmData.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
}

const ryan = new Student({
    name: 'Ryan',
    location: 'Dublin',
    age: 26,
    gender: 'M',
    previousBackground: 'Barista',
    className: 'Webpt6',
    favSubjects: ['HTML', 'CSS', 'Javascript'],
    grade : 70
});

const ari = new ProjectManager({
    name: 'Ari',
    location: 'SoCal',
    age: 28,
    gender: 'M',
    gradClassName: 'Labs10',
    favInstructor: 'Josh'
});

const keiran = new Instructor({
    name: 'Keiran',
    location: 'USA',
    age: 27,
    gender: 'M',
    specialty: 'Full Stack Web',
    favLanguage: 'Javascript',
    catchPhrase: 'Those are just hotdogs...'
});

// Instructor methods:
keiran.demo('Javascript classes');
keiran.grade(ryan, 'Javascript classes');

// Student methods:
ryan.listsSubjects();
ryan.PRAssignment('Javascript IV');
ryan.sprintChallenge('Javascript Fundamentals');

// PM methods:
ari.standUp('Webpt6_ari');
ari.debugsCode(ryan, 'Javascript classes')

// Stretch methods:
ari.gradeAssignment(ryan);
console.log(ryan.grade);
ryan.graduate();
keiran.gradeAssignment(ryan);
ari.gradeAssignment(ryan);
keiran.gradeAssignment(ryan);
console.log(ryan.grade);
ryan.graduate();




