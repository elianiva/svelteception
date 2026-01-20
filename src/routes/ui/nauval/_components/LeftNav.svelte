<style>
.nav {
  background-color: #f0f5f8;
  padding: 2.5rem;
}

.nav__top {
  text-align: center;
}

.top__img {
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  margin: 0 auto 1rem;
}

.top__name {
  font-family: "Poppins", sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: #242424;
}

.top__email {
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  color: #888c8f;
}

.nav__menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
}

.menu__item {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  gap: 1rem;
  color: #888c8f;
  cursor: pointer;
  transition: all ease-out 0.1s;
}

.menu__item:hover {
  background-color: #2184ae;
  color: #ffffff;
}

.menu__item:first-child {
  background-color: #2184ae;
  color: #ffffff;
}

.menu__item:first-child :global(.item__icon) {
  color: #ffffff;
}

.menu__item :global(.item__icon) {
  width: 1.5rem;
  height: 1.5rem;
}

.item__label {
  font-family: "Poppins", sans-serif;
}
</style>

<aside class="nav">
  <div class="nav__top">
    <img class="top__img" src="/images/nauval/profile.webp" alt="profile" />
    <span class="top__name">Bruce Wayne</span>
    <span class="top__email">brucewayne@gmail.com</span>
  </div>
  <div class="nav__menu">
    {#each menuItems as { label, icon }}
      <div class="menu__item">
        <svelte:component this={icon} class="item__icon" />
        <span class="item__label">{label}</span>
      </div>
    {/each}
  </div>
</aside>

<script>
import Home from "../icons/home.svg"
import Movie from "../icons/video.svg"
import List from "../icons/list.svg"
import Download from "../icons/download.svg"
import Community from "../icons/people.svg"
import Settings from "../icons/gear.svg"
import Statistics from "../icons/graph.svg"
import Logout from "../icons/logout.svg"

const menuItems = [
  { label: "Dashboard", icon: Home },
  { label: "Movie & Series", icon: Movie },
  { label: "List", icon: List },
  { label: "Downloaded", icon: Download },
  { label: "Statistics", icon: Statistics },
  { label: "Community", icon: Community },
  { label: "Settings", icon: Settings },
  { label: "Logout", icon: Logout }
]
</script>
