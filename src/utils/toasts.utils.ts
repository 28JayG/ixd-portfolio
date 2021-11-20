import { toast, ToastPosition } from 'react-toastify';

type toastType = 'success' | 'warning' | 'error' | 'info';

export const toastConfig = {
  position: 'top-center' as ToastPosition,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export const toastContainerConfig = {
  position: 'top-center' as ToastPosition,
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: true,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
};

export const notify = (text: string, type?: toastType) => {
  switch (type) {
    case 'success':
      return toast.success(text, toastConfig);
    case 'warning':
      return toast.warn(text, toastConfig);
    case 'info':
      return toast.info(text, toastConfig);
    case 'error':
      return toast.error(text, toastConfig);
    default:
      return toast(text, toastConfig);
  }
};
