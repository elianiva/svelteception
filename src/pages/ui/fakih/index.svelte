<style>
.body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8066ff;
}

.container {
  width: 100%;
  display: grid;
  grid-template-columns: 14rem 1fr;
  gap: 1.25rem;
  max-width: 1400px;
  max-height: 1200px;
  background-color: #f2f2f2;
  overflow: hidden;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 3rem 24rem 1fr 1fr;
  gap: 1.25rem;
}

.nav {
  grid-column: 1/-1;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: flex-end;
}

.nav__notif {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 0.75rem;
  height: 100%;
  border-radius: 0.5rem;
  background-color: #ffffff;
  color: #6a4bff;
  cursor: pointer;
}

.nav__notif::after {
  content: "";
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #ff7979;
  border-radius: 50%;
  right: 0.85rem;
  top: 0.8rem;
}

.nav__notif :global(.icon) {
  width: 1.5rem;
  height: 1.5rem;
}

.nav__profile {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #6a4bff;
  height: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
}

.nav__profile :global(.icon) {
  color: #ffffff;
}

.profile__img {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
}

.profile__name {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: #ffffff;
  margin-right: 1rem;
}

.report {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #6a4bff;
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.08);
  color: #2a2a2a;
  margin-top: 4rem;
  overflow: hidden;
}

.report::after {
  content: "";
  position: absolute;
  right: -4rem;
  left: -2rem;
  top: 5rem;
  bottom: -5rem;
  background-image: linear-gradient(
    to top right,
    rgba(0, 0, 0, 0) 50%,
    rgba(255, 255, 255, 0.2) 80%
  );
  transform: rotateZ(-20deg);
}

.report__title {
  font-family: "Poppins", sans-serif;
  font-size: 1.25rem;
  text-align: center;
  color: #ffffff;
}

.report :global(.icon) {
  width: 4rem;
  height: 4rem;
  color: #ffffff;
  margin-top: 1rem;
}
</style>

<div class="body">
  <div class="container">
    <Sidemenu />
    <main class="main">
      <nav class="nav">
        <div class="nav__notif">
          <Bell class="icon" />
        </div>
        <div class="nav__profile">
          <img class="profile__img" src="/images/fakih/dude.jpeg" alt="" />
          <span class="profile__name">Faka</span>
          <ArrowDown class="icon" />
        </div>
      </nav>
      <Score />
      <Calendar />
      <Pie />
      <Awards />
      <Growth />
      <Participant />
      <div class="report">
        <h1 class="report__title">
          Download Your
          <br />
          Statistical Report Here
        </h1>
        <Download class="icon" />
      </div>
    </main>
  </div>
</div>

<script>
import ArrowDown from "./icons/down-arrow.svg"
import Bell from "./icons/bell.svg"
import Download from "./icons/download.svg"
import Sidemenu from "./_components/Sidemenu.svelte"
import Score from "./_components/Score.svelte"
import Calendar from "./_components/Calendar.svelte"
import Pie from "./_components/Pie.svelte"
import Awards from "./_components/Awards.svelte"
import Growth from "./_components/Growth.svelte"
import Participant from "./_components/Participant.svelte"
import { metatags } from "@roxi/routify"

metatags.title = "Fakih | Svelteception"
metatags.description = "Belajar App by Fakih"
</script>
