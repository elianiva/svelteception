<style>
.panel {
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 1.5rem;
  background-color: #ffffff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.075);
}

.panel__label {
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
}

.panel__item {
  display: grid;
  grid-template-columns: 2.5fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  font-family: "Quicksand", sans-serif;
  margin: 1.5rem 0 0;
  font-weight: 500;
  row-gap: 0.5rem;
}

.item__name {
  grid-column: 1/2;
  grid-row: 1/2;
}

.item__usage {
  grid-column: 2/3;
  grid-row: 1/2;
}

.item__used {
  font-weight: 700;
}

.item__days {
  grid-column: 3/4;
  grid-row: 1/2;
  justify-self: flex-end;
  font-weight: 700;
  color: #eb008b;
}

.item__bar {
  position: relative;
  background-color: #f6f6f6;
  grid-column: 1/-1;
  grid-row: 2/3;
  height: 0.5rem;
  border-radius: 0.25rem;
}

.bar__filler {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-image: linear-gradient(to bottom right, #f31a9a, #cb0f7f, #ca68ab);
  border-radius: 0.25rem;
}
</style>

<div transition:fly="{{ duration: 100, y: -100 }}" class="panel">
  <span class="panel__label">Info Paket</span>
  {#each data as { name, used, total, days, bar }}
    <div class="panel__item">
      <span class="item__name">{name}</span>
      <span class="item__usage"><span
          class="item__used"
        >{used}</span>/{total}</span>
      <span class="item__days">{days}</span>
      <div class="item__bar">
        <div class="bar__filler" style="width: {bar}%"></div>
      </div>
    </div>
  {/each}
</div>

<script>
import { fly } from "svelte/transition"
export let data
</script>
