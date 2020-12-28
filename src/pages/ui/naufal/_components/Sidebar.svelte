<style>
.side {
  background-color: #fafafa;
  padding: 1.25rem;
  font-family: "Roboto", sans-serif;
}

.side__logo {
  width: 8rem;
}

.side__profile {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.profile__img {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  box-shadow: 0 0 0 0.125rem #fafafa, 0 0 0 0.25rem #d3d3d3;
}

.profile__name {
  display: block;
  margin: 1rem 0 0.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1em;
}

.profile__username {
  font-size: 1rem;
  line-height: 1em;
  color: #b0b0b0;
}

.profile__stats {
  display: flex;
  align-items: center;
  margin-top: 2rem;
}

.stats__item {
  text-align: center;
  padding: 0 1.5rem;
}

.stats__item:nth-child(2) {
  border-left: 0.0625rem #d3d3d3 solid;
  border-right: 0.0625rem #d3d3d3 solid;
}

.item__count {
  font-weight: 600;
  display: block;
}

.item__label {
  font-weight: 400;
  color: #b0b0b0;
  font-size: 0.8rem;
}

.side__menu,
.side__alt-menu {
  display: flex;
  flex-direction: column;
  gap: 1.625rem;
  margin-top: 2rem;
  padding: 2rem 0 2rem;
  margin: 0 1rem;
}

.side__menu {
  border-bottom: 0.0625rem #efefef solid;
}

.menu__item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  cursor: pointer;
}

.menu__item:hover,
.menu__item:hover .menu__title {
  transition: color ease-out 0.2s;
  color: #d96453;
}

.menu__item :global(.menu__icon) {
  width: 1.5rem;
  height: 1.5rem;
}

.menu__title {
  font-weight: 600;
  color: #343434;
}

.menu__item.active .menu__title {
  background-image: linear-gradient(to bottom, #962fbf, #fa7e1e);
  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
}

.menu__count {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  right: 1rem;
  background-color: #ec5151;
  color: #ffffff;
  font-size: 0.8rem;
  border-radius: 50%;
}

.menu__arrow {
  position: absolute;
  background-color: #ffffff;
  right: -2.5rem;
  padding: 0.25rem 0.75rem;
  display: flex;
  align-items: center;
  border-radius: 1.25rem 0 0 1.25rem;
}

.menu__arrow :global(.arrow__icon) {
  width: 1.75rem;
  height: 1.75rem;
}
</style>

<aside class="side">
  <img class="side__logo" src="/images/naufal/logo.webp" alt="instagram-logo" />
  <div class="side__profile">
    <img class="profile__img" src="/images/naufal/naufal.webp" alt="profile" />
    <span class="profile__name">Naufal Hanif R</span>
    <span class="profile__username">@gajah.ngesot</span>
    <div class="profile__stats">
      <div class="stats__item">
        <span class="item__count">1</span>
        <span class="item__label">Posts</span>
      </div>
      <div class="stats__item">
        <span class="item__count">1,2k</span>
        <span class="item__label">Followers</span>
      </div>
      <div class="stats__item">
        <span class="item__count">900</span>
        <span class="item__label">Following</span>
      </div>
    </div>
  </div>
  <div class="side__menu">
    {#each menuItems as { title, icon, isActive, count }}
      <div class="menu__item {isActive ? 'active' : ''}">
        <svelte:component this="{icon}" class="menu__icon" />
        <span class="menu__title">{title}</span>
        {#if count > 0}<span class="menu__count">{count}</span>{/if}
        {#if isActive}
          <div class="menu__arrow">
            <LeftArrow class="arrow__icon" />
          </div>
        {/if}
      </div>
    {/each}
  </div>
  <div class="side__alt-menu">
    {#each altMenuItems as { title, icon, isActive, count }}
      <div class="menu__item {isActive ? 'active' : ''}">
        <svelte:component this="{icon}" class="menu__icon" />
        <span class="menu__title">{title}</span>
      </div>
    {/each}
  </div>
</aside>

<script>
import Feed from "../icons/home.svg"
import Explore from "../icons/search.svg"
import Direct from "../icons/send-outline.svg"
import Notification from "../icons/heart-outlined.svg"
import Profile from "../icons/user.svg"
import Settings from "../icons/gear.svg"
import LeftArrow from "../icons/left.svg"
import Switch from "../icons/switch.svg"
import Logout from "../icons/log-out.svg"

const menuItems = [
  { title: "Feed", icon: Feed, isActive: true, count: 0 },
  { title: "Explore", icon: Explore, isActive: false, count: 0 },
  { title: "Direct", icon: Direct, isActive: false, count: 3 },
  { title: "Notification", icon: Notification, isActive: false, count: 5 },
  { title: "Profile", icon: Profile, isActive: false },
  { title: "Settings", icon: Settings, isActive: false }
]

const altMenuItems = [
  { title: "Switch Accounts", icon: Switch },
  { title: "Logout", icon: Logout }
]
</script>
