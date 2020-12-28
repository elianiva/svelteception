<style>
.menu {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
}

.menu__item {
  padding: 0.4rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.menu-active {
  background-color: #000000;
  color: #ffffff;
}

.item__name {
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
}

.menu__graph {
  position: relative;
  height: 20rem;
  margin: 1rem 1.5rem;
  background-image: linear-gradient(to right, #e52f9b, #cc0f80);
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 3rem repeat(11, 1fr);
  padding: 1rem;
}

.graph__label {
  position: absolute;
  left: 1rem;
  top: 1rem;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  color: #ffffff;
}

.graph__kuota {
  position: absolute;
  left: 1rem;
  top: 2.5rem;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 1.75rem;
  color: #ffffff;
}

.graph__lines:not(:first-child) {
  border-top: 0.0625rem #e5369e solid;
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0 0;
}

.graph__hour {
  position: relative;
  color: #ed8cc5;
}

.hour-active::before {
  content: "2 GB";
  text-align: center;
  padding-top: 3rem;
  position: absolute;
  top: -13rem;
  left: -0.5rem;
  right: -0.5rem;
  bottom: 1rem;
  background-image: linear-gradient(
    to bottom,
    rgba(234, 157, 202, 0.75) 30%,
    rgba(0, 0, 0, 0) 90%
  );
  border-radius: 0.5rem;
  font-family: sans-serif;
  font-size: 0.9rem;
  z-index: 3;
  backdrop-filter: blur(0.25rem);
}

.hour-active::after {
  content: "";
  position: absolute;
  top: -12.5rem;
  left: 50%;
  transform: translateX(-50%);
  height: 2rem;
  width: 2rem;
  background-image: linear-gradient(to bottom, #fb22a2, #eb028c, #d576b7);
  border-radius: 50%;
  box-shadow: 0 0 1rem rgba(230, 103, 177, 0.75);
  z-index: 5;
}

.hour-active {
  color: #ffffff;
  font-weight: 600;
}

.menu__graph :global(.graph__white-curve) {
  position: absolute;
  left: 50%;
  top: 6rem;
  transform: translateX(-50%);
  z-index: 4;
}

.menu__graph :global(.graph__pink-curve) {
  position: absolute;
  left: 50%;
  bottom: 3rem;
  transform: translateX(-50%);
}
</style>

<!-- routify:options index=1 -->
<div class="menu">
  {#each menu as itemName, index}
    <div
      class="menu__item {activeMenu === index + 1 ? 'menu-active' : ''}"
      on:click="{() => (activeMenu = index + 1)}"
    >
      <span class="item__name">{itemName}</span>
    </div>
  {/each}
</div>
<!-- This graph should be drawn using canvas in a real world app -->
<!-- since this isn't, I wouldn't even bother -->
<div class="menu__graph">
  <span class="graph__label">Pemakaian kuota</span>
  <span class="graph__kuota">5 GB</span>
  {#each new Array(11) as _}
    <div class="graph__lines"></div>
  {/each}
  <div class="graph__lines">
    <span class="graph__hour">2:00</span>
    <span class="graph__hour">3:00</span>
    <span class="graph__hour">4:00</span>
    <span class="graph__hour">5:00</span>
    <span class="graph__hour hour-active">7:00</span>
    <span class="graph__hour">8:00</span>
    <span class="graph__hour">9:00</span>
  </div>
  <WhiteCurve class="graph__white-curve" />
  <PinkCurve class="graph__pink-curve" />
</div>
<AppsPanel />

<script>
import WhiteCurve from "./icons/white-curve.svg"
import PinkCurve from "./icons/pink-curve.svg"
import AppsPanel from "./_components/AppsPanel.svelte"
import { metatags } from "@roxi/routify"

let menu = ["Harian", "Mingguan", "Bulanan", "Tahunan"]
let activeMenu = 1

metatags.title = "Voxy | Svelteception"
metatags.description = "Dataku UI by Voxy"
</script>
