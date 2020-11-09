<style>
.nav__container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 1280px;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__logo {
  color: #DDDCDD;
}

.nav__items {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.nav__item {
  position: relative;
  font-family: "Montserrat", sans-serif;
  color: #efefef;
  text-decoration: none;
}

.nav__item::after {
  content: "";
  position: absolute;
  bottom: -0.5rem;
  left: 0.5rem;
  right: 0.5rem;
  height: 0.125rem;
  background-color: #DDDCDD;
  transform: scale(0);
  transition: transform ease-out 0.2s;
}

.nav__item:hover::after {
  transform: scale(1);
}

.active {
  color: #DDDCDD;
  font-weight: 600;
}

.nav__hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 0.5rem;
  width: 1.5rem;
  height: 1.25rem;
  cursor: pointer;
}

.nav__hamburger div {
  height: 100%;
  background-color: #DDDCDD;
}
</style>

<nav class="nav">
  <div class="nav__container">
    <div class="nav__logo">
      <Logo width="4rem" />
    </div>
    <div class="nav__items">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a class="nav__item active" href="#">ALL FISH</a>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a class="nav__item" href="#">RESEARCH</a>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a class="nav__item" href="#">SPECIES</a>
      <div class="nav__hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</nav>

<script>
import Logo from "../icons/logo.svg"
</script>
