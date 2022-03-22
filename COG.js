class transform {constructor (vector2); }
class vector2 {constructor (x,y);}
class vector3 {constructor (x,y,z);}
class input {
    constructor ();
    
    create(functioN) {
        window.addEventListener(
            "keydown",
            function(event) {window[functioN](event.key)}
            )
    }
    }