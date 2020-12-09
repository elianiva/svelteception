<style>
.graph {
  background-color: #ffffff;
  grid-column: 1/3;
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.08);
}

.graph__heading {
  display: grid;
  grid-template-columns: 5fr 1.125fr;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 0.5rem;
}

.heading__greet {
  grid-column: 1/2;
  font-size: 1.125rem;
  font-weight: 600;
  color: #8066ff;
}

.heading__score {
  grid-column: 1/2;
  grid-row: 2/3;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.5em;
  color: #2a2a2a;
}

.heading__opts {
  position: relative;
  grid-column: 2/3;
  grid-row: 1/3;
}

.opts__select {
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-color: #00c9b8;
  border: none;
  color: #ffffff;
  font-size: 1rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-overflow: "";
  width: 100%;
}

.heading__opts :global(.icon) {
  position: absolute;
  right: 0.5rem;
  top: 35%;
  color: #ffffff;
  width: 0.75rem;
  height: 0.75rem;
}

.graph__list {
  display: grid;
  grid-template-columns: 5fr 1.125fr;
}

.list__item {
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  display: block;
  color: #2a2a2a;
  margin-left: 0.75rem;
}

.list__item::before {
  content: "";
  position: absolute;
  left: -0.75rem;
  top: 20%;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
}

.list__item:nth-child(1)::before {
  background-color: #6a4bff;
}

.list__item:nth-child(2)::before {
  background-color: #b2a2ff;
}

.list__item:nth-child(3)::before {
  background-color: #d5ccff;
}

.graph__blocks {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: flex-end;
  justify-items: center;
  gap: 3.6rem;
  margin: 4rem 4rem 0;
}

.graph__block {
  position: relative;
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
  width: 100%;
  z-index: 5;
}

.block__item {
  flex: 1;
}

.block__item:nth-child(1) {
  background-color: #6a4bff;
}

.block__item:nth-child(2) {
  background-color: #b2a2ff;
}

.block__item:nth-child(3) {
  background-color: #d5ccff;
}

.block__label {
  position: absolute;
  right: -0.8rem;
  bottom: -1.5rem;
  transform: translateX(-50%);
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #abbce3;
}

.graph__line {
  position: absolute;
  border-bottom: 0.125rem dashed #d5ccff;
  left: -2rem;
  right: -4rem;
}

.graph__line:nth-last-child(1) {
  bottom: 0rem;
}

.graph__line:nth-last-child(2) {
  bottom: 4rem;
}

.graph__line:nth-last-child(3) {
  bottom: 8rem;
}

.graph__line::before {
  position: absolute;
  left: -2rem;
  bottom: -0.625rem;
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #abbce3;
}

.graph__line:nth-last-child(1)::before {
  content: "10";
}

.graph__line:nth-last-child(2)::before {
  content: "50";
}

.graph__line:nth-last-child(3)::before {
  content: "90";
}
</style>

<div class="graph">
  <div class="graph__heading">
    <span class="heading__greet">Hey, Faka</span>
    <span class="heading__score">You've got 88 scores recently!</span>
    <div class="heading__opts">
      <select class="opts__select">
        <option value="semester">semester</option>
      </select>
      <ArrowDown class="icon" />
    </div>
  </div>
  <div class="graph__list">
    <div></div>
    <div class="list__items">
      <span class="list__item">Daily Tasks</span>
      <span class="list__item">Practicum Exams</span>
      <span class="list__item">Quizz</span>
    </div>
  </div>
  <div class="graph__blocks">
    {#each data as { name, heights }}
      <div class="graph__block">
        {#each heights as height}
          <div class="block__item" style="height: {height * 2}rem;"></div>
        {/each}
        <span class="block__label">{name}</span>
      </div>
    {/each}
    <div class="graph__line"></div>
    <div class="graph__line"></div>
    <div class="graph__line"></div>
  </div>
</div>

<script>
import ArrowDown from "../icons/down-arrow.svg"

const data = [
  { name: "sem 1", heights: [3.8, 4.2, 3.8] },
  { name: "sem 2", heights: [3.5, 3.8, 3.8] },
  { name: "sem 3", heights: [4.2, 4.5, 3.5] },
  { name: "sem 4", heights: [3.7, 3.6, 3.5] },
  { name: "sem 5", heights: [3.8, 4.2, 3.8] }
]
</script>
