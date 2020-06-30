// 1 Масив список покупок. Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
class Kolo {
  constructor(r) {
    this.r = r;
  }
  get radius() {
    return this.r;
  }
  set radius(r) {
    this.r = r;
  }
  get diametr() {
    return this.r * 2;
  }
  squear() {
    return Math.PI * this.r * this.r;
  }
  dovjyna() {
    return Math.PI * this.r * 2;
  }
}
let kolo = new Kolo(4);
console.log(kolo.radius);
console.log(kolo.diametr);
console.log(kolo.squear());
console.log(kolo.dovjyna());