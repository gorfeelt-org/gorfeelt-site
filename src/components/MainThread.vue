<script>
import { RouterLink } from "vue-router";

export default { components: { RouterLink } };
</script>

<template>
  <div class="bg-gorfeelt-700 rounded-md mt-4 p-6">
    <div class="flex flex-wrap w-full h-85 pb-2 gap-2 text-gorfeelt-200">
      <span class="font-bold text-gorfeelt-50">Mex copypasta</span>
      <span>By /u/cockman,</span>
      <span>On /c/cock,</span>
      <span>{{ new Date().toLocaleString() }},</span>
      <span>ID: {{ Math.round(Math.random() * 69420) }}</span>
    </div>
    I was deeply offended when i joined and saw that my house was destroyed. I
    read the letter!! To be honest. I was inspired. So i dediced hey! theres
    more stuff thats not beneficial!! So i burned everything we dont use or
    need. Sorry royale spongebob. Out of anger i destroyed a bit of your farm.
    Sorry about that. But to naky and garf. Naky, i did not expect you to join
    garf, i thought we were still friends. Garf, thanks for your respawn
    anchors!!!! it helped me a lot!!!! I was sad to find we didnt have any
    glowstone so i made it myself. lolololololol mex special. goodbye
    loooooooooooooooool
    <div class="flex flex-wrap w-full h-85 pt-2 gap-2 text-gorfeelt-100">
      <router-link class="hover:underline" to="/">Upvote</router-link>
      <router-link class="hover:underline" to="/">Downvote</router-link>
      <router-link class="hover:underline" to="/">View thread</router-link>
      <span class="text-gorfeelt-200"
        >Score: {{ Math.round(Math.random() * 4000) - 2000 }}</span
      >
    </div>
  </div>
</template>
