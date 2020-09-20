<style>
.sidenav {
  width: 20rem;
  display: flex;
  flex-direction: column;
  border-right: 0.125rem #eaeaea solid;
}

.sidenav__container {
  padding: 1rem;
}
</style>

<aside class="sidenav">
  <img class="sidenav__banner" src="../images/aghits/banner.png" alt="banner" />
  <div class="sidenav__container">
    <Menu
      title="Arceru"
      items="{[{ href: '#', text: 'Dashboard', active: true }, { href: '#', text: 'Friends', active: false }, { href: '#', text: 'Economy', active: false }]}"
    />
    <Menu
      title="Servers"
      items="{[{ href: '#', text: 'Survival', active: false }, { href: '#', text: 'Creative', active: false }, { href: '#', text: 'Skyblock', active: false }]}"
    />
    <Card username="Hatsuselzuna" />
  </div>
</aside>

<script>
import Menu from "./Menu.svelte"
import Card from "./Smallcard.svelte"
</script>
