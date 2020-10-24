<style>
.sidebar {
  background-color: #ffffff;
  padding: 2rem;
}

.sidebar__brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.sidebar__logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  box-shadow: -0.5rem 0.5rem 1rem rgba(170, 117, 255, 0.2);
}

.sidebar__title {
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 900;
  color: #aa75ff;
  letter-spacing: 0.0625rem;
}

.sidebar__title span {
  position: relative;
}

.sidebar__title span::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 0.125rem;
  background-color: #aa75ff;
}

.menu__title {
  font-family: "Poppins", sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: #253a73;
  display: block;
  margin: 2rem 0 1rem;
}

.menu__items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section__title {
  font-family: "Poppins", sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: #253a73;
  display: block;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.section__profile {
  display: grid;
  grid-template-columns: 3rem 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  column-gap: 1rem;
  font-family: "Poppins", sans-serif;
  margin-bottom: 2rem;
}

.section__img {
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  grid-column: 1/2;
  grid-row: 1/3;
}

.section__name {
  grid-column: 2/3;
  grid-row: 1/2;
  color: #253a73;
  font-weight: 600;
  font-size: 1.125rem;
}

.section__username {
  grid-column: 2/3;
  grid-row: 2/3;
  color: #a5b7e2;
  font-weight: 600;
}

.section__promo {
  width: 100%;
  border-radius: 1rem;
  border: 0.25rem #ffffff solid;
  box-shadow: -0.5rem 0.5rem 1rem rgba(170, 117, 255, 0.2);
}

:global(.sidebar__icon) {
  width: 2rem;
  height: 2rem;
  color: #aa75ff;
}
</style>

<aside class="sidebar">
  <div class="sidebar__brand">
    <div class="sidebar__logo">
      <Logo class="sidebar__icon" />
    </div>
    <h1 class="sidebar__title">C<span>o</span>feed</h1>
  </div>
  <div class="sidebar__menu">
    <span class="menu__title">Menu</span>
    <div class="menu__items">
      <MenuItem icon="{Home}" title="Home" isActive="{true}" />
      <MenuItem icon="{Message}" title="Messages" />
      <MenuItem icon="{User}" title="Profile" />
      <MenuItem icon="{Bookmark}" title="Saved Post" />
      <MenuItem icon="{Settings}" title="Settings" />
    </div>
  </div>
  <div class="sidebar__section">
    <span class="section__title">Account
      <Down /></span>
    <div class="section__profile">
      <img class="section__img" src="/images/choirul/me.png" alt="me" />
      <span class="section__name">Michael</span>
      <span class="section__username">@michaelsco..</span>
    </div>
    <img
      class="section__promo"
      src="/images/choirul/get-app.png"
      alt="get-app"
    />
  </div>
</aside>

<script>
import Home from "../icons/home.svg"
import Message from "../icons/message.svg"
import User from "../icons/user.svg"
import Bookmark from "../icons/bookmark.svg"
import Settings from "../icons/gear.svg"

import Down from "../icons/down.svg"

import Logo from "../icons/logo.svg"
import MenuItem from "../_components/MenuItem.svelte"
</script>
