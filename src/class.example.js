class Dep {
  method () {}
}
class ClassWithDep {
  constructor (dep) {
    this.dep = dep
  }
  method (x) {
    this.dep.method (x)
  }
}

module.exports = {
  Dep,
  ClassWithDep,
}
