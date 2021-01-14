<style>
.sidebar {
  font-family: "Lato", sans-serif;
  background-color: #f4f4f6;
  padding: 3rem;
}

.sidebar__profile {
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-template-rows: 1fr 1fr;
  min-height: 4rem;
  column-gap: 1.5rem;
  margin-bottom: 3rem;
}

.sidebar__img {
  grid-row: 1/3;
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  align-self: center;
}

.sidebar__username {
  font-weight: 700;
  color: #1f3a7d;
  font-size: 1.25rem;
  align-self: end;
}

.sidebar__plan {
  color: #b0b0b0;
  align-self: start;
}

.sidebar__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #b0b0b0;
  font-weight: 700;
  text-decoration: none;
  font-size: 1.125rem;
  padding: 1.25rem;
  transition: color ease-out 0.2s;
}

.sidebar__item:hover {
  color: #1f3a7d;
}

.sidebar__item:not(:last-child) {
  border-bottom: 1px #efefef solid;
}

.sidebar__current {
  margin-top: 2rem;
}

.current__title {
  display: block;
  margin-bottom: 1rem;
  color: #b0b0b0;
  font-weight: 700;
  font-family: "Lato", sans-serif;
}

.current__box {
  display: grid;
  grid-template-columns: 4rem 3fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 0.25rem;
  align-items: center;
  padding: 1rem;
  background-color: #fafafa;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  cursor: pointer;
}

.current__img {
  width: 50%;
  grid-column: 1/2;
  grid-row: 1/3;
  justify-self: center;
}

.current__bookname {
  font-weight: 700;
  font-size: 1.125rem;
  color: #1f3a7d;
  grid-column: 2/3;
  grid-row: 1/2;
  align-self: end;
}

.current__author {
  font-weight: 700;
  font-size: 0.8rem;
  color: #b0b0b0;
  grid-column: 2/3;
  grid-row: 2/3;
  align-self: start;
}

:global(.current__icon) {
  grid-column: 3/4;
  grid-row: 1/3;
  color: #1f3a7d;
}
</style>

<aside class="sidebar">
  <div class="sidebar__profile">
    <img class="sidebar__img" src="/images/irvan/gigachad.jpg" alt="gigachad" />
    <span class="sidebar__username">Arthur Alvarez</span>
    <span class="sidebar__plan">Premium Plan</span>
  </div>
  <div class="sidebar__items">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a class="sidebar__item" href="#"
      >Explore
      <ChevronRight /></a
    >
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a class="sidebar__item" href="#"
      >Categories
      <ChevronRight /></a
    >
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a class="sidebar__item" href="#"
      >Saved
      <ChevronRight /></a
    >
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a class="sidebar__item" href="#"
      >Book Plans
      <ChevronRight /></a
    >
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a class="sidebar__item" href="#"
      >Preference
      <ChevronRight /></a
    >
  </div>
  <div class="sidebar__current">
    <span class="current__title">Current Book Listening</span>
    <div class="current__box">
      <img
        class="current__img"
        src="/images/irvan/monkey-grip.png"
        alt="monkey-grip"
      />
      <span class="current__bookname">Monkey Grip</span>
      <span class="current__author">Helen Warner</span>
      <Play class="current__icon" />
    </div>
  </div>
</aside>

<script>
import ChevronRight from "../icons/chevron-right.svg"
import Play from "../icons/play.svg"
</script>
