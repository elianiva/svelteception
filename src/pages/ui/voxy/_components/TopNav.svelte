<style>
.nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  background-color: #fafafa;
  padding: 1.25rem 0;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  align-items: center;
  justify-items: center;
  z-index: 10;
}

.nav__brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.nav__brand :global(.brand__logo) {
  width: 1.75rem;
  height: 1.75rem;
}

.brand__text {
  font-size: 1.5rem;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
}

.brand__text .bold {
  font-weight: 700;
}

.nav__notif {
  position: relative;
}

.nav__notif :global(.notif__icon) {
  width: 1.5rem;
  height: 1.5rem;
}

.nav__notif::after {
  position: absolute;
  content: "";
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
  right: 0;
  background-color: #eb008b;
}

.nav__toggle {
  z-index: 10;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0.3rem;
  width: 1.25rem;
  height: 1rem;
}

.toggle__item {
  background-color: #3b2c41;
  flex: 1;
  transition: all ease-out 0.1s;
}

.toggle__input {
  -webkit-appearance: none;
  z-index: 2;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  outline: none;
}

.toggle__input:checked ~ .toggle__item:nth-last-child(1) {
  transform: rotate(-45deg) translate3d(0, -0.625rem, 0);
}

.toggle__input:checked ~ .toggle__item:nth-last-child(2) {
  transform: scale(0);
}

.toggle__input:checked ~ .toggle__item:nth-last-child(3) {
  transform: rotate(45deg) translate3d(0, 0.625rem, 0);
}

.overlay {
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  z-index: 4;
}
</style>

<nav class="nav">
  <div class="nav__toggle">
    <input
      class="toggle__input"
      type="checkbox"
      aria-hidden="true"
      on:click={toggleNav}
      {checked}
    />
    <div class="toggle__item" aria-hidden="true" />
    <div class="toggle__item" aria-hidden="true" />
    <div class="toggle__item" aria-hidden="true" />
  </div>
  <div class="nav__brand">
    <Logo class="brand__logo" />
    <span class="brand__text">Data<span class="bold">ku</span></span>
  </div>
  <div class="nav__notif">
    <Bell class="notif__icon" />
  </div>
</nav>
{#if isOpen}
  <div transition:fly={{ duration: 100, y: -100 }} class="overlay">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#">LInk to nowhere</a>
  </div>
{/if}

<script>
import { fly } from "svelte/transition"
import Logo from "../icons/circle_logo.svg"
import Bell from "../icons/bell.svg"

let isOpen = false
let checked = false

const toggleNav = () => {
  isOpen = !isOpen
  checked = !checked
}
</script>
