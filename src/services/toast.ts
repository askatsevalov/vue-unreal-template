import Toast from "@/shared/Toast/Toast.vue";
import { createApp } from "vue";

const TOAST_TELEPORT_ID = "toast-teleport";
const DELAY = 5000;
export class ToastService {
  success(text: string): void {
    this._show(text, "success");
  }
  error(text: string): void {
    this._show(text, "error");
  }

  private _show(text: string, type: string) {
    const mountPoint = document.createElement("div");
    const teleport = document.getElementById(TOAST_TELEPORT_ID);
    teleport?.appendChild(mountPoint);
    const toast = createApp(Toast, { text, type });
    toast.mount(mountPoint);
    setTimeout(() => {
      toast.unmount();
      teleport?.removeChild(mountPoint);
      console.log("toast destroyed");
    }, DELAY);
  }
}

export default new ToastService();
