export class Keyboard {
  //해시 : class 안에서 선언하면 이 변수 값은 private 값이 되어 클래스 밖에서 값을 조회하거나 덮어쓸수 없음
  #switchEl;
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#switchEl = document.getElementById("switch");
    console.log(this.#switchEl);
  }

  #addEvent() {
    this.#switchEl.addEventListener("change", (event) => {
      document.documentElement.setAttribute(
        "theme",
        event.target.checked ? "dark-mode" : ""
      );
      console.log(event.target.checked);
    });
  }
}
