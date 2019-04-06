// CODE here for your Lambda Classes
class  Person {
  constructor(personnel) {
    this.name = personnel.name
    this.age = personnel.age
    this.location = personnel.ocation
    this.gender = personnel.gender
  }
  speak(){
    return(`Hello my name is ${this.name} and I'm from ${this.location}`)
  }
}

class Instructor extends Person {
  constructor(idetails){
    super(idetails)
    // super({idetails.name, idetails.age, idetails.location, idetails.gender})
    this.speciality = idetails.speciality
    this.favLanguage = idetails.favLanguage
    this.catchPhrase = idetails.catchPhrase
  }
  demo(){
    return(`Today we are learning ${speciality}`)
  }
  grade(studentobject){
    return(`${studentobject.name} receives a perfect score on ${studentobject.subject}`)
  }
}

class Student extends Person{
  constructor(studentdetails){
    super(studentdetails)
    // super({studentdetails.name, studentdetails.age, studentdetails.location, studentdetails.gender})
    this.previousbackground = studentdetails.previousbackground
    this.classname = studentdetails.classname
    this.favsubjects = studentdetails.favsubjects
  }
  listSubjects()
  {
    favsubjects.forEach(function(elements)
    {  return (elements)
    })
  }

  PRAssignment(studentobject)
  {
  return(`${studentobject.name} has submitted a PR for ${studentobject.subject} `)
  }
  sprintChallenge(studentobject)
  {
    return(`${studentobject.name} has started ${studentobject.subject}`)
  }
  }

class ProjectManager extends Instructor {
  constructor(pmdetails){
    super(pmdetails)
    // super({pmdetails.name, pmdetails.age, pmdetails.location, pmdetails.gender, pmdetails.speciality, pmdetails.favLanguage, pmdetails.catchPhrase})
    this.gradClassname = pmdetails.gradClassname
    this.favInstructor = pmdetails.favInstructor
  }
  standup(slack){
    return(`${this.name} announces to ${slack}, standup time!`)
  }
  debugsCode(studentobject){
    return(`${name} debugs ${studentobject.name}'s code on ${studentobject.subject}' )
  }
}
const sachin = new Student{
  name: 'Sachin',
  age:'27',
  location:'Houston',
  gender: 'M',
  previousbackground: 'marketing',
  classname: 'webpt5',
  favsubjects: ['CSS', 'JS']
}

const cam = new Instructor{
  name: 'Cam',
  age:'28',
  location:'Cali',
  gender:'M',
  specialty: 'FullStack',
  favLanguage: 'JS',
  catchPhrase: 'Yum, spicy cheese bread'
}

const ron = new ProjectManager{
  name:'Ron',
  age:''26,
  location:'LA',
  gender:'M',
  gradClassname:'Webpt9',
  specialty:'JS',
  favInstructor:'Cam',
  catchPhrase:'Something in Japanese'
}
console.log(ron.standup("webpt5"));
