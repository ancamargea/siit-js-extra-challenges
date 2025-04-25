const carsContainer = document.querySelector("#cars-container");

class Car {
  constructor(carBrand, carModel) {
    this.brand = carBrand;
    this.model = carModel;
    this.mileage = 0;
  }

  changeMileage() {
    const mileageRun = Math.floor(Math.random() * 100) + 1;
    console.log(`${this.brand} ${this.model} runs for ${mileageRun} km.`);

    this.mileage += mileageRun;
    console.log(`${this.brand} ${this.model} current mileage: ${this.mileage}`);

    return mileageRun;
  }
}

const c1 = new Car("Audi", "A5 Sportback");
const c2 = new Car("Toyota", "Corolla Hybrid");
const c3 = new Car("Nissan", "GT-R");
const c4 = new Car("BMW", "M3");

const cars = [c1, c2, c3, c4];

function renderCars() {
  carsContainer.innerHTML = "";
  cars.forEach((car) => {
    const carDiv = document.createElement("div");
    carDiv.textContent = `${car.brand} ${car.model}: ${car.mileage} km`;
    carsContainer.appendChild(carDiv);
  });
}

// Async function to simulate rounds with a delay of 2 seconds
async function runRaceRounds(rounds) {
  for (let i = 1; i <= rounds; i++) {
    console.log(`=== ROUND ${i} starts ===`);
    cars.forEach((car) => car.changeMileage());
    renderCars();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("");
  }
}

// Start the simulation
renderCars();
runRaceRounds(5);
