<style>
.body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c5dff6;
}

.container {
  width: 100%;
  display: grid;
  grid-template-columns: 15rem 2fr 1fr;
  max-width: 1400px;
  max-height: 1200px;
  background-color: #ffffff;
  overflow: hidden;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
}
</style>

<div class="body">
  <div class="container">
    <LeftNav />
    <Main />
    <RightNav />
  </div>
</div>

<script>
import LeftNav from "./_components/LeftNav.svelte"
import Main from "./_components/Main.svelte"
import RightNav from "./_components/RightNav.svelte"
import { metatags } from "@roxi/routify"

metatags.title = "Ariq | Svelteception"
metatags.description = "Wangkong UI by Ariq"
</script>
