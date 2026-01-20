<style>
.nav {
  position: relative;
  padding: 2rem;
}

.nav::after {
  content: "";
  position: absolute;
  right: 0;
  top: 2rem;
  bottom: 2rem;
  width: 0.0625rem;
  background-color: #efefef;
}

:global(.nav__logo) {
  width: 80%;
  height: auto;
  margin-bottom: 1.5rem;
}

.nav__button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  color: #ffffff;
  background-color: #ff8345;
  box-shadow: 0 0.25rem 1rem rgba(255, 121, 69, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  transition: filter ease-out 0.2s;
}

.nav__button:hover {
  filter: brightness(0.95);
}

.nav__menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
}

.nav__ad {
  position: absolute;
  left: 2rem;
  bottom: 2rem;
  width: 75%;
  font-size: 1.25rem;
  border-radius: 1rem;
  box-shadow: 0.25rem 0 1.25rem rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.ad__header {
  padding: 1rem;
}

.ad__text {
  position: relative;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  vertical-align: middle;
}

:global(.ad__icon) {
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  bottom: 0;
  margin-left: 0.5rem;
  color: #ff8345;
}

.ad__img {
  width: 100%;
  display: block;
}
</style>

<aside class="nav">
  <Logo class="nav__logo" />
  <button class="nav__button">
    <Plus />New Meeting
  </button>
  <div class="nav__menu">
    {#each menuItems as item}
      <MenuItem {...item} />
    {/each}
  </div>
  <div class="nav__ad">
    <div class="ad__header">
      <span class="ad__text">
        Upgrade your plan
        <ArrowRight class="ad__icon" />
      </span>
    </div>
    <img class="ad__img" src="/images/ariq/ad.png" alt="ad" />
  </div>
</aside>

<script>
import Logo from "../icons/logo.svg"
import Plus from "../icons/plus.svg"
import Summary from "../icons/summary.svg"
import Calendar from "../icons/calendar.svg"
import Chat from "../icons/chat.svg"
import Video from "../icons/video.svg"
import Contact from "../icons/contact.svg"
import Settings from "../icons/settings.svg"
import ArrowRight from "../icons/arrow-right.svg"

import MenuItem from "../_components/MenuItem.svelte"

const menuItems = [
  { name: "Summary", isActive: true, icon: Summary },
  { name: "Schedule", isActive: false, icon: Calendar },
  { name: "Chat", isActive: false, icon: Chat },
  { name: "Meetings", isActive: false, icon: Video },
  { name: "Contact", isActive: false, icon: Contact },
  { name: "Settings", isActive: false, icon: Settings }
]
</script>
