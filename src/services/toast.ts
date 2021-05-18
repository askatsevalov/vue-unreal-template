import Toast from "@/shared/Toast/Toast.vue";
import { createApp } from "vue";

const TOAST_TELEPORT_ID = "toast-teleport";
const DELAY = 5000;
const ANIMATION_DURATION = 300;
export class ToastService {
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

  private _show(text: string, type: string) {
    const teleport = document.getElementById(TOAST_TELEPORT_ID);
    const toast = createApp(Toast, { text, type });
    const elem = toast.mount(document.createElement("div")).$el as HTMLElement;
    teleport?.appendChild(elem);
    console.log("🚀 > elem", elem);
    setTimeout(() => {
      elem.classList.add("closing");
      setTimeout(() => {
        toast.unmount();
      }, ANIMATION_DURATION);
    }, DELAY);
  }
}

export default new ToastService();
