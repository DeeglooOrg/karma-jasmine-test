const { Dep, ClassWithDep } = require ('./class.example.js')

define ('ClassWithDep', () => {
  let dep, depSpy, cls
  beforeEach (() => {
    dep = new Dep ()
    depSpy = spyOn(dep, 'method')
    cls = new ClassWithDep (dep)
  })

  it ('should have a dependency set', () => {
    expect (cls.dep).toEqual (dep)
  })
  it ('should call dep method with a value', () => {
    const val = 4
    cls.method (val)
    expect (depSpy).toHaveBeenCalledTimes (1)
    expect (depSpy).toHaveBeenCalledWith (val)
  })

})
