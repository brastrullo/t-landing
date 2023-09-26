import { browser } from '$app/environment';
import { writable } from 'svelte/store';

let darkInitState = false;
// if (browser) {
//   const themeState = sessionStorage.getItem("theme");
//   darkInitState = themeState ? themeState === "dark" : window.matchMedia('(prefers-color-scheme: dark)').matches
//   darkInitState ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
// }

export const darkMode = writable(darkInitState);

export const toggleState = () => {
  darkMode.update(state => {
    sessionStorage.setItem("theme", state ? 'light' : 'dark');
    return !state;
  });
  document.documentElement.classList.toggle('dark');
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