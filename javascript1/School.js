const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
  assignStudent: function (studentId, subject) {
    const student = this.findPerson("students", studentId);
    const availableTeachers = this.teachers.filter(
      (teacher) =>
        !teacher.students.find((stud) => stud.id === studentId) &&
        teacher.capacityLeft > 0 &&
        teacher.subjects.includes(subject)
    );
    if (availableTeachers.length > 0) {
      availableTeachers[0].students.push(student);
      availableTeachers[0].capacityLeft--;
    } else {
      console.log("Sorry, no available teachers left");
    }
  },
  assignTeachersSubject: function (teacherId, newSubject) {
    const teacher = this.findPerson("teachers", teacherId);
    if (!teacher.subjects.includes(newSubject)) {
      teacher.subjects.push(newSubject);
    }
  },
  // new method
  getAgeAverage: function () {
    const totalAge = this.students.reduce(
      (acc, student) => acc + student.age,
      0
    );
    return totalAge / this.students.length;
  }
};

