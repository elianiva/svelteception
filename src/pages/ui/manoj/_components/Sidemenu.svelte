<style>
.side {
  background-color: var(--white);
  padding: 2rem 0;
  border-radius: 1rem;
}

.side :global(.icon) {
  display: block;
  margin: 0 auto 2rem;
  color: var(--black);
}

.logo {
  cursor: pointer;
}

.menu__item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.25rem 0;
  padding: 1rem;
  color: var(--side-icon);
  transition: color ease-out 0.2s;
  cursor: pointer;
}

.menu__item:hover {
  color: var(--orange);
}

.menu__item.active {
  background-image: linear-gradient(
    to left,
    var(--light-orange),
    rgba(0, 0, 0, 0)
  );
  color: var(--orange);
}

.menu__item.active::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 0.25rem;
  background-color: var(--orange);
}

.menu__name {
  font-family: "Roboto", sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  color: inherit;
  text-decoration: none;
}
</style>

<aside class="side">
  <div class="logo" on:click={() => isLight.update(prev => !prev)}>
    <Logo class="icon" />
  </div>
  <div class="side__menu">
    {#each menu as { name, icon, isActive }}
      <div class="menu__item {isActive ? 'active' : ''}">
        <svelte:component this={icon} />
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a class="menu__name" href="#">{name}</a>
      </div>
    {/each}
  </div>
</aside>

<script context="module">
import { writable } from "svelte/store"
export const isLightMode = writable(true)
</script>

<script>
import Logo from "../icons/logo.svg"
import Dashboard from "../icons/dashboard.svg"
import Projects from "../icons/projects.svg"
import Task from "../icons/menu.svg"
import Calendar from "../icons/calendar.svg"
import Clock from "../icons/clock.svg"
import Pie from "../icons/pie.svg"
import Gear from "../icons/gear.svg"
export let isLight

const menu = [
  {
    name: "dashboard",
    icon: Dashboard,
    isActive: true
  },
  {
    name: "Projects",
    icon: Projects,
    isActive: false
  },
  {
    name: "My Task",
    icon: Task,
    isActive: false
  },
  {
    name: "Calendar",
    icon: Calendar,
    isActive: false
  },
  {
    name: "Time Manage",
    icon: Clock,
    isActive: false
  },
  {
    name: "Reports",
    icon: Pie,
    isActive: false
  },
  {
    name: "Settings",
    icon: Gear,
    isActive: false
  }
]
</script>
