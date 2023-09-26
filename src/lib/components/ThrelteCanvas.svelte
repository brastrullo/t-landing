<script>
  import { Canvas } from "@threlte/core";
  import SceneDefault from "./SceneDefault.svelte";
</script>

<div
class="fixed w-screen px-4 pt-6 pb-10 overflow-hidden -translate-x-1/2 -translate-y-1/2 bg-white element-100dvh overscroll-none top-1/2 left-1/2 sm:p-10 xl:pt-12 3xl:container 3xl:mx-auto dark:bg-black"
>
<div class="w-full overflow-hidden bg-gray-500 element-100dvh overscroll-none">
  <Canvas>
    <SceneDefault />
  </Canvas>
</div>
</div>