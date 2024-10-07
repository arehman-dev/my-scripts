#!/usr/bin/env node

const student = {
    name : "a.rehman",
    age : "23",
    grade_in_school : 61,
    grade_in_high_school : 86,
    predict_grade : function() {
        const average = (this.grade_in_school + this.grade_in_high_school)/2 ;
        console.log ("grades in exams may be " + average )
    }
};
student.predict_grade()
