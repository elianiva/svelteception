<style>
.graph {
  background-color: #f0f5f8;
  padding: 1rem;
  border-radius: 1rem;
}

.graph__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title__text {
  font-size: 1rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
}

.title__option {
  background: none;
  color: #888f8c;
  border: none;
  font-weight: 500;
  cursor: pointer;
}

.graph__bar {
  display: grid;
  grid-template-columns: repeat(8, 1.25rem);
  font-family: "Poppins", sans-serif;
  color: #888f8c;
  font-size: 0.75rem;
  gap: 0.5rem;
  padding-top: 1rem;
}

.bar__item {
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  justify-items: center;
  gap: 0.5rem;
}

.bar__filler {
  position: relative;
  grid-row: 1/6;
  width: 100%;
  display: flex;
  justify-content: center;
}

.bar__filler-colour {
  position: absolute;
  bottom: 0;
  width: 0.75rem;
  border-radius: 1rem;
  background-color: #2184ae;
}

.bar__label {
  grid-row: 6/7;
  font-size: 0.5rem;
}
</style>

<div class="graph">
  <div class="graph__title">
    <span class="title__text">Hours Spent</span>
    <select class="title__option">
      <option value="foo">This Week</option>
      <option value="bar">Last 3 days</option>
      <option value="baz">Today</option>
    </select>
  </div>
  <div class="graph__bar">
    <div class="bar__item">
      <span class="item__number">12</span>
      <span class="item__number">9</span>
      <span class="item__number">6</span>
      <span class="item__number">3</span>
      <span class="item__number">0</span>
    </div>
    <!--this is so unrealistic, should be using canvas but this isn't a real app-->
    {#each bars as { height, label }}
      <div class="bar__item">
        <div class="bar__filler">
          <div class="bar__filler-colour" style="height: {height}%" />
        </div>
        <div class="bar__label">{label}</div>
      </div>
    {/each}
  </div>
</div>

<script>
const bars = [
  { height: 75, label: "Mon" },
  { height: 35, label: "Tue" },
  { height: 75, label: "Wed" },
  { height: 70, label: "Thu" },
  { height: 35, label: "Fri" },
  { height: 80, label: "Sat" },
  { height: 90, label: "Sun" }
]
</script>
