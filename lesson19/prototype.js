var parent = {
  value: "parentValue",
  obj: {
    objValue: "parentObjValue"
  },
  walk: function () {
    console.log("walking");
  }

};

var child = Object.create(parent);
console.log("CHILD - child.value: ", child.value);
console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
console.log("PARENT: ", parent);
console.log("CHILD: ", child);

child.value = "childValue";
child.obj.objValue = "childObjValue";
console.log("*** CHANGED: CHILD - child.value: 'child.value'");
console.log("*** CHANGED: CHILD - child.obj.objValue: 'child.obj.objValue'");
console.log("CHILD - child.value: ", child.value);
console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
console.log("PARENT: ", parent);
console.log("CHILD: ", child);


// Object constructor
function Doggo(name) {
  this.name = name;
  console.log("'this' is: ", this);
}

var myDog = new Doggo("Cassidy");
console.log("myDog: ", myDog);
