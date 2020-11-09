<style>
.graph {
  padding: 1rem;
  border: 0.0625rem #efefef solid;
  border-radius: 1rem;
  margin-top: 1rem;
}

.graph__main {
  position: relative;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 2rem repeat(4, 1fr);
  font-family: "Montserrat", sans-serif;
}

.main__treshold {
  grid-column: 2/6;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 3rem;
  border-bottom: 0.125rem #ff8345 solid;
  background-color: rgba(255, 255, 255, 0.75);
}

.main__item {
  display: grid;
  align-items: flex-end;
  justify-items: center;
  grid-template-rows: repeat(5, 1fr);
  gap: 1.5rem;
}

.main__item span {
  font-size: 0.8rem;
  color: #b0b0b0;
  font-weight: 600;
}

.main__bar {
  grid-row: 1/5;
  width: 100%;
  background-color: red;
  border-radius: 0.5rem 0.5rem 0 0;
}

.graph__labels {
  display: flex;
  gap: 1rem;
  font-family: "Montserrat", sans-serif;
  font-size: 0.95rem;
  margin-top: 1rem;
}

[class^="label__item"] {
  position: relative;
  padding-left: 0.75rem;
}

[class^="label__item"]::after {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
}

.label__item--1::after {
  background-color: #73c7f3;
}

.label__item--2::after {
  background-color: #fbaea6;
}

.label__item--3::after {
  background-color: #ff8345;
}

.label__item--4::after {
  background-color: #65b2a8;
}
</style>

<div class="graph">
  <div class="graph__main">
    <div class="main__treshold"></div>
    <div class="main__item">
      <span>20</span>
      <span>10</span>
      <span>5</span>
      <span>0</span>
    </div>
    {#each data as bar}
      <div class="main__item">
        <div
          class="main__bar"
          style="height: {bar.value}%; background-color: {bar.color}"
        ></div>
        <span class="main__label">{bar.month}</span>
      </div>
    {/each}
  </div>
  <div class="graph__labels">
    {#each labels as label, index}
      <span class="label__item--{index + 1}">{label}</span>
    {/each}
  </div>
</div>

<script>
const labels = ["Design", "Business", "Team", "Other"]
const data = [
  { month: "Jun", value: 50, color: "#FBAEA6" },
  { month: "Jul", value: 25, color: "#65B2A8" },
  { month: "Aug", value: 40, color: "#FF8345" },
  { month: "Sep", value: 80, color: "#74C7F3" }
]
</script>
