// Add your Circle class here

class Circle {
    constructor(newRadius){
        this.radius = newRadius;
    }



    get diameter(){
        return this.radius * 2
    }

    get circumference(){
        return this.diameter * Math.PI
    }

    get area(){
        return (this.radius ** 2) * Math.PI
    }

    set diameter(newDiameter){
        if (newDiameter > 0){
        this.radius = (newDiameter/2)
        }
    }

    set circumference(newCircumference){
        if (newCircumference > 0){
        let pi = Math.PI;
        this.radius = ((newCircumference / 2) / pi)
        }
    }

    set area(newArea){
        if (newArea > 0){
            let pi = Math.PI;
            let rSquared = newArea / pi;
            this.radius = Math.sqrt(rSquared)
        }
    }

}