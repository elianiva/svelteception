<style>
.nav {
  position: absolute;
  padding: 1rem 2.25rem;
  border-radius: 1.5rem;
  bottom: 1rem;
  left: 1.5rem;
  right: 1.5rem;
  background-color: #ffffff;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  justify-items: center;
}

.nav__icon {
  color: #2b2b2b;
  position: relative;
}

.nav__icon.active {
  color: #ec088f;
}

.nav__icon.active::after {
  content: "";
  position: absolute;
  height: 0.25rem;
  left: 0;
  right: 0;
  bottom: -0.25rem;
  border-radius: 0.25rem;
  background-color: #ec088f;
}

.nav__icon :global(.icon) {
  width: 2rem;
  height: 2rem;
}
</style>

<div class="nav">
  <!-- svelte-ignore a11y-invalid-attribute -->
  <a class="nav__icon {data.home ? 'active' : ''}" href="/ui/voxy/home">
    {#if !data.home}
      <OutlineHome class="icon" />
    {:else}
      <FilledHome class="icon" />
    {/if}
  </a>
  <!-- svelte-ignore a11y-invalid-attribute -->
  <!-- prettier-ignore -->
  <a class="nav__icon {data.dashboard ? 'active' : ''}" href="/ui/voxy/dashboard">
    {#if !data.dashboard}
      <OutlinePie class="icon" />
    {:else}
      <FilledPie class="icon" />
    {/if}
  </a>
  <!-- svelte-ignore a11y-invalid-attribute -->
  <a class="nav__icon {data.store ? 'active' : ''}" href="/ui/voxy/store">
    {#if !data.store}
      <OutlineStore class="icon" />
    {:else}
      <FilledStore class="icon" />
    {/if}
  </a>
  <!-- svelte-ignore a11y-invalid-attribute -->
  <a class="nav__icon {data.profile ? 'active' : ''}" href="/ui/voxy/profile">
    {#if !data.profile}
      <OutlineUser class="icon" />
    {:else}
      <FilledUser class="icon" />
    {/if}
  </a>
</div>

<script>
import OutlineHome from "../icons/house-door.svg"
import FilledHome from "../icons/house-door-fill.svg"
import OutlinePie from "../icons/pie-chart-outlined.svg"
import FilledPie from "../icons/pie-chart-filled.svg"
import OutlineStore from "../icons/outline-store.svg"
import FilledStore from "../icons/baseline-store.svg"
import OutlineUser from "../icons/user-outline.svg"
import FilledUser from "../icons/user-solid.svg"

export let data = {}
</script>
