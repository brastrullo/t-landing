import { browser } from '$app/environment'
import type { Writable } from 'svelte/store'

export const toggleModal = (subscriberCallback: Writable<boolean>) => {
  subscriberCallback.update((n: boolean) => !n)
  if (browser) {
    document.querySelector('body')?.classList.toggle('overflow-hidden')
  }
}