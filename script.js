// 1 Створити обєкт авто з характеристиками

let car = {
  devel: 'Reno',
  model: 'Reno Laguna',
  year: 2015,
  speed: 80,

  information() {
    console.log(car.devel, car.model, car.year, car.speed);
  },
  travel(hou = 0) {
    let time;
    time = hou / this.speed;
    let rest = Math.floor(time / 4);
    time += rest;
    return time;
  },
  allTravel(time) {
    let h = Math.floor(time);
    let m = Math.floor((time - h) * 60);
    let s = Math.floor((time - h) * 60 - Math.floor((time - h)) * 60);
    return `${h > 9 ? h : '0' + h}:${m > 9 ? m : '0' + m}:${s > 9 ? s : '0' + s}:`
  }
}

console.log(car.information());
console.log(car.travel(100));
console.log(car.allTravel(car.travel(100)));

// 3  Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:

let time = {
  hour: 1,
  minutes: 1,
  second: 1,
  day: 1,
  
  ecran() {
    document.write(`${this.hour}:${this.minutes}:${this.second}`);
  },

  secondChange (sec) {
    let h =sec / 3600;
    this.hour += Math.floor(h);
    let m = (sec - Math.floor(h) * 3600) / 60;
    this.minutes += Math.floor(m);
    this.second += sec - Math.floor(h) * 3600 - Math.floor(m) * 60;

    let d = 0;
    if (this.second >= 60) {
      this.second %= 60;
      this.minutes += Math.floor(this.second / 60);
    }
    if (this.minutes >=60) {
      this.minutes %= 60;
      this.hour += Math.floor(this.minutes / 60);
    } 
    if (this.hour > 23) {
      this.hour %= 24;
      this.day = Math.floor(this.hour / 24);
    }
    return time;
    },

   minuteChange (min) {
      let h =min / 3600;
      this.hour += Math.floor(h);
      this.minutes += min - Math.floor(h) * 60;
      if (this.minutes >= 60) {
        this.minutes %= 60;
        this.hour += Math.floor(h / 60);
      }
      if (this.hour > 23) {
        this.hour %= 24;
        this.day = Math.floor(this.hour / 24);
      }
      return time;
      },

      hourChange (hour) {
     this.hour = (this.hour + hour) % 24;
       let d = 0;
        if (this.hour > 23) {
          this.day = Math.floor(this.hour / 24);
        }
        return time;
        },
      };
  time.hour = +prompt("Введіть години", 0);
  time.minutes = +prompt("Введіть хвилини", 0);
  time.second = +prompt("Введіть секунди", 0);
  
  time.ecran();
  console.log(time.secondChange(3600));
  console.log(time.minuteChange(1400));
  console.log(time.hourChange(45));



