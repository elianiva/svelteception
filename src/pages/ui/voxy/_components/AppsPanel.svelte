<style>
.panel {
  border-radius: 0.5rem;
  background-color: #ffffff;
  margin: 0 1.5rem;
  padding: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.075);
}

.panel__label {
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
}

.panel__item {
  display: grid;
  grid-template-columns: 4rem 1fr 6rem;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  margin: 2rem 0 0;
  row-gap: 0.25rem;
}

.item__img {
  grid-row: 1/-1;
  width: 2.5rem;
  height: 2.5rem;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
}

.item__name {
  grid-row: 1/-1;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
}

.item__time,
.item__usage {
  justify-self: flex-end;
  font-family: "Quicksand", sans-serif;
}

.item__usage {
  font-weight: 700;
}

.item__time {
  color: #c6c6c6;
  font-weight: 500;
  font-family: "Quicksand", sans-serif;
}
</style>

<div class="panel">
  <span class="panel__label">Berdasarkan Aplikasi</span>
  {#each data as { name, usage, time }}
    <div class="panel__item">
      <img
        class="item__img"
        src="/images/voxy/{name.toLowerCase()}.webp"
        alt=""
      />
      <span class="item__name">{name}</span>
      <span class="item__usage">{usage}</span>
      <span class="item__time">{time}</span>
    </div>
  {/each}
</div>

<script>
const data = [
  { name: "Instagram", usage: "-2GB", time: "07:00 AM" },
  { name: "Twitter", usage: "-1GB", time: "06:00 AM" },
  { name: "Zoom", usage: "-308MB", time: "01:00 AM" },
  { name: "Behance", usage: "-128MB", time: "00:00 AM" }
]
</script>
