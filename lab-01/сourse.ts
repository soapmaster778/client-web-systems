interface Course {
    name: string;
    duration: number;
    students: string[];
}

class OnlineCourse implements Course {
    constructor(
        public name: string,
        public duration: number,
        public students: string[] = []
    ) {}

    registerStudent(studentName: string): void {
        if (!this.isStudentRegistered(studentName)) {
            this.students.push(studentName);
            console.log(`${studentName} registered for ${this.name}`);
        } else {
            console.log(`${studentName} is already registered for ${this.name}`);
        }
    }

    isStudentRegistered(studentName: string): boolean {
        return this.students.includes(studentName);
    }
}

class CourseManager {
    private courses: Course[] = [];

    addCourse(course: Course): void {
        this.courses.push(course);
        console.log(`Course "${course.name}" added`);
    }

    removeCourse(courseName: string): void {
        const index: number = this.courses.findIndex(
            (course: Course) => course.name === courseName
        );

        if (index !== -1) {
            this.courses.splice(index, 1);
            console.log(`Course "${courseName}" removed`);
        } else {
            console.log(`Course "${courseName}" not found`);
        }
    }

    findCourse(courseName: string): Course | undefined {
        return this.courses.find(
            (course: Course) => course.name === courseName
        );
    }

    showCourses(): void {
        console.log("Courses:");

        for (const course of this.courses) {
            console.log(
                `${course.name}, duration: ${course.duration} hours`
            );
        }
    }
}

const typescriptCourse: OnlineCourse = new OnlineCourse( "TypeScript Basics",  40);

const javaCourse: OnlineCourse = new OnlineCourse("Java Basics", 60);

typescriptCourse.registerStudent("John");
typescriptCourse.registerStudent("Anna");
typescriptCourse.registerStudent("John");

javaCourse.registerStudent("Michael");
javaCourse.registerStudent("Kate");

console.log(
    "Is Anna registered:",
    typescriptCourse.isStudentRegistered("Anna")
);

console.log(
    "Is Michael registered:",
    typescriptCourse.isStudentRegistered("Michael")
);

const courseManager: CourseManager = new CourseManager();

courseManager.addCourse(typescriptCourse);
courseManager.addCourse(javaCourse);

courseManager.showCourses();

const foundCourse: Course | undefined = courseManager.findCourse("TypeScript Basics");

if (foundCourse !== undefined) {
    console.log(`Found course: ${foundCourse.name}`);
    console.log(`Students: ${foundCourse.students.join(", ")}`);
}

courseManager.removeCourse("Java Basics");

courseManager.showCourses();
