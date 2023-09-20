import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const darkInitState = false;
if (browser) {
  console.log(window.localStorage)
  // const darkState =
  //   window.localStorage.theme === 'dark' ||
  //   (!('theme' in localStorage) &&
  //     window.matchMedia('(prefers-color-scheme: dark)').matches);
  // darkInitState.set(darkState);
}
export const darkMode = writable(darkInitState);

export const toggleState = () => {
  darkMode.update((state) => {
    return !state;
  });
  document.documentElement.classList.toggle('dark');
  // document.documentElement.classList.toggle('dark-mode');
};

export function modalToggle() {
	const { subscribe, update } = writable(false);
	return {
		subscribe,
    toggle: () => update((n) => !n),
    close: () => update(() => false)
	};
}

export function closeModal() {
  menuToggle.close()
  if (browser) {
    document.querySelector('html')?.classList.remove('overflow-hidden')
  }
}

export const menuToggle = modalToggle()