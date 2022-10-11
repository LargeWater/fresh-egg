// import { useState } from "preact/hooks";
// import { Button } from "../components/Button.tsx";
// import { type Style } from "https://deno.land/x/crayon@3.3.2/mod.ts";
// import { type Attribute } from "https://deno.land/x/crayon@3.3.2/mod.ts";



export default function Egg(){ 
  return(
    <div class="p-4 mx-auto max-w-screen-md">
      <img
        src="/egg.png"
        alt="the fresh egg"
        class="mx-auto" 
        onClick={() => alert("🥚egg🥚")}
      />
      <p class="mx-auto">
        click the egg
      </p>
    </div>
  )
}
