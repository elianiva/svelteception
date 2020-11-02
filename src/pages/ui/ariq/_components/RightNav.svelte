<style>
.nav {
  position: relative;
  padding: 2rem;
}

.nav::before {
  content: "";
  position: absolute;
  left: 0;
  top: 2rem;
  bottom: 2rem;
  width: 0.0625rem;
  background-color: #efefef;
}

.nav__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.nav__right {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #ff8345;
}

:global(.nav__notif-icon),
:global(.nav__down-icon) {
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
}

.nav__avatar {
  width: 3rem;
  height: 3rem;
  justify-self: flex-end;
}

.nav__stat {
  margin-top: 2rem;
}

.stat__header {
  display: flex;
  justify-content: space-between;
}

.stat__title {
  font-family: "Montserrat", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
}
</style>

<div class="nav">
  <div class="nav__header">
    <Bell class="nav__notif-icon" />
    <div class="nav__right">
      <img class="nav__avatar" src="/images/ariq/avatar.png" alt="avatar" />
      <Down class="nav__down-icon" />
    </div>
  </div>
  <Calendar month="December" year="2020"/>
  <div class="nav__stat">
    <div class="stat__header">
      <span class="stat__title">
        Meeting stats
      </span>
      <span>• •</span>
    </div>
    <Graph />
  </div>
</div>

<script>
import Bell from "../icons/bell.svg"
import Down from "../icons/chevron-down.svg"
import Calendar from "./Calendar.svelte"
import Graph from "./Graph.svelte"
</script>
