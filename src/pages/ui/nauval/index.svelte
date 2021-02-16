<style>
.body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ccdde5;
}

.container {
  width: 100%;
  display: grid;
  grid-template-columns: 18rem 1fr 18rem;
  gap: 2rem;
  max-width: 1400px;
  max-height: 1200px;
  background-color: #ffffff;
  overflow: hidden;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
}

.container__main {
  padding-top: 2rem;
}

.container__side {
  padding-top: 2rem;
  padding-right: 2rem;
}
</style>

<div class="body">
  <div class="container">
    <LeftNav />
    <div class="container__main">
      <SearchBar />
      <Popular />
      <Recent />
    </div>
    <div class="container__side">
      <Graph />
      <Pie />
      <Best />
      <Premium />
    </div>
  </div>
</div>

<script>
import LeftNav from "./_components/LeftNav.svelte"
import SearchBar from "./_components/SearchBar.svelte"
import Popular from "./_components/Popular.svelte"
import Recent from "./_components/Recent.svelte"
import Graph from "./_components/Graph.svelte"
import Pie from "./_components/Pie.svelte"
import Best from "./_components/Best.svelte"
import Premium from "./_components/Premium.svelte"
import { metatags } from "@roxi/routify"

metatags.title = "Nauval | Svelteception"
metatags.description = "Movie Dashboard UI by Nauval"
</script>
