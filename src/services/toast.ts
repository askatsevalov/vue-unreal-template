import UToast from "@/shared/UToast/UToast.vue";
import { createApp } from "vue";

const DELAY = 5000;
const ANIMATION_DURATION = 250;
const OFFSET = 15;

export class UToastService {
  private _elems: HTMLElement[] = [];

  private _show(text: string, type: string) {
    const toast = createApp(UToast, { text, type });
    const elem = toast.mount(document.createElement("div")).$el as HTMLElement;

    this._elems.unshift(elem);
    document.body?.prepend(elem);
    elem.style.top = `${OFFSET}px`;
    const newElementHeight = elem.offsetHeight;
    for (let i = 1; i < this._elems.length; i++) {
      const currentOffset = this._elems[i].offsetTop;
      this._elems[i].style.top = `${currentOffset +
        newElementHeight +
        OFFSET}px`;
    }

    setTimeout(() => {
      elem.classList.add("closing");

      setTimeout(() => {
        toast.unmount();
        this._elems.pop();
      }, ANIMATION_DURATION);
    }, DELAY);
  }

  success(text: string): void {
    this._show(text, "success");
  }

  error(text: string): void {
    this._show(text, "error");
  }

  warning(text: string): void {
    this._show(text, "warning");
  }

  info(text: string): void {
    this._show(text, "info");
  }
}

export default new UToastService();
