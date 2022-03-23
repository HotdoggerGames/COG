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
class object {
    constructor (Name = '',Transform = transform) {
        this.Transform = Transform;
        this.Name = Name;
        document.getElementById(Name).style.left = Transform.x + 'px';
        document.getElementById(Name).style.top = Transform.y + 'px';
    };
}