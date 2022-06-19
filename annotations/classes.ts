1

// create class and methods inside it
class Vehicle {
    drive(): void {
        console.log('fast and furious')
    }

    honk(): void {
        console.log('beep')
    }
}

// instance of a class
// instance has access to all methods inside class
const vehicle = new Vehicle()
vehicle.drive()
vehicle.honk()

2. 

// create class and methods inside it
class Vehicle {
    drive(): void {
        console.log('fast and furious')
    }

    honk(): void {
        console.log('beep')
    }
}

// car is the type of Vehicle
// by using extends we can copy all methods from Vehicle to class Car 
class Car extends Vehicle {
    // we can override a method on child class - INHERITANCE
   drive(): void {
    console.log('vroom')
   }
}

const car = new Car()
car.drive()
car.honk()

3. 

// create class and methods inside it
class Vehicle {
    drive(): void {
        console.log('fast and furious')
    }

    honk(): void {
        console.log('beep')
    }
}

// car is the type of Vehicle
// by using extends we can copy all methods from Vehicle to class Car 
class Car extends Vehicle {
    // we can override a method on child class - INHERITANCE
   drive(): void {
    console.log('vroom')
   }
}

const car = new Car()
car.drive()
car.honk()


4. 

// add modifiers public, private, 
// method private - we can't call it from outside method 

// create class and methods inside it
class Vehicle {
    public drive(): void {
        console.log('fast and furious')
    }

    public honk(): void {
        console.log('beep')
    }
}

// car is the type of Vehicle
// by using extends we can copy all methods from Vehicle to class Car 
// private is not used for security reasons, it is used by coder to prevent from calling a method outside the class
// protected it works like private but we have more flexibility
class Car extends Vehicle {
    // we can override a method on child class - INHERITANCE
    private drive(): void {
    console.log('vroom')
   }

   startDrivingProcess(): void {
    this.drive()
   }
}

const car = new Car()
car.startDrivingProcess()
car.honk()


5. FIELDS IN CLASSES 

class Vehicle {
    constructor(public color: string) {}
    protected honk(): void {
      console.log('beep');
    }
  }
  
  const vehicle = new Vehicle('orange');
  console.log(vehicle.color);
  
  // class Car extends Vehicle {
  //  private drive(): void {
  //    console.log('vroom');
  //  }
  //  startDrivingProcess(): void {
  //    this.drive();
  //    this.honk();
  //  }
  // }

  6. FIELDS WITH INHERITANCE 

  class Vehicle {
    constructor(public color: string) {}
  
    protected honk(): void {
      console.log('beep');
    }
  }
  
  const vehicle = new Vehicle('orange');
  console.log(vehicle.color);
  
  class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
      super(color);
    }
  
    private drive(): void {
      console.log('vroom');
    }
  
    startDrivingProcess(): void {
      this.drive();
      this.honk();
    }
  }
  
  const car = new Car(4, 'red');
  car.startDrivingProcess();

/*

// create class and methods inside it
class Vehicle {
    drive(): void {
        console.log('fast and furious')
    }

    honk(): void {
        console.log('beep')
    }
}

// instance of a class
// instance has access to all methods inside class
const vehicle = new Vehicle()
vehicle.drive()
vehicle.honk()

*/

/*

// create class and methods inside it
class Vehicle {
    drive(): void {
        console.log('fast and furious')
    }

    honk(): void {
        console.log('beep')
    }
}

// car is the type of Vehicle
// by using extends we can copy all methods from Vehicle to class Car 
class Car extends Vehicle {
    // we can override a method on child class - INHERITANCE
   drive(): void {
    console.log('vroom')
   }
}

const car = new Car()
car.drive()
car.honk()

*/