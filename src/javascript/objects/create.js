// OBJECT.CREATE()
// Usando argumento propertiesObject com Object.create()

var obj;

// creates an object with a null prototype
o = {};
o = Object.create(Object.prototype);

obj = Object.create(Object.prototype, {
    // defining foo as a normal value property
    foo: { writable: true, configurable: true, value: "Hello" },

    //defining bar an accessor (getter-setter) property
    bar: {
        configurable: false,
        get: function () { return 10; },
        set: function (value) { console.log('Setting `o.bar` to', value); }
    }
})
