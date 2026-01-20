<style>
.card {
  background-color: var(--white);
  border-radius: 1rem;
  padding: 1rem;
}

.card__top {
  display: grid;
  grid-template-columns: 3rem 1fr 2rem 1rem;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  column-gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.card__img-wrapper {
  grid-row: 1/3;
  padding: 0.5rem;
  background-color: var(--lightest-orange);
  border-radius: 0.5rem;
}

.card__short-name {
  grid-row: 1/2;
  font-family: "Poppins", sans-serif;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--black);
}

.card__full-name {
  grid-row: 2/3;
  font-family: "Roboto", sans-serif;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--grey);
}

.card__star {
  grid-row: 1/3;
  color: #ffa700;
  padding: 0.25rem;
  border-radius: 50%;
  border: 0.0625rem var(--light-grey) solid;
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
}

.card__menu {
  position: relative;
  grid-row: 1/3;
  width: 0.25rem;
  height: 0.25rem;
  background-color: var(--light-grey);
  border-radius: 50%;
}

.card__menu::before,
.card__menu::after {
  content: "";
  position: absolute;
  width: 0.25rem;
  height: 0.25rem;
  background-color: var(--light-grey);
  border-radius: 50%;
}

.card__menu::before {
  top: 0.5rem;
}

.card__menu::after {
  bottom: 0.5rem;
}

.card__detail {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.75rem;
}

.detail__progress {
  background: none;
  padding: 0.5rem;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.75rem;
  border-radius: 0.25rem;
}

.detail__priority {
  background: none;
  padding: 0.5rem;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  border-radius: 0.5rem;
}

.detail__progress.grey {
  background-color: var(--lightest-grey);
  color: var(--light-grey);
}

.detail__progress.green {
  background-color: var(--light-green);
  color: var(--green);
}

.detail__priority.high {
  border: 0.0625rem var(--orange) solid;
  color: var(--orange);
}

.detail__priority.medium {
  border: 0.0625rem var(--green) solid;
  color: var(--green);
}

.card__task {
  margin-bottom: 0.25rem;
}

.task__label {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: var(--light-grey);
  font-size: 0.9rem;
}

.task__label .hl {
  color: var(--black);
}

.task__bar {
  position: relative;
  height: 0.3rem;
  width: 100%;
  border-radius: 0.5rem;
  margin: 0.5rem 0;
}

.task__bar::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 75%;
  border-radius: 0.5rem;
}

.bar-blue {
  background-color: var(--light-blue-ish);
}

.bar-pink {
  background-color: var(--light-pink);
}

.bar-blue::before {
  background-color: var(--blue-ish);
}

.bar-pink::before {
  background-color: var(--pink);
}

.card__category {
  display: flex;
  gap: 0.5rem;
}

.category__item {
  background: none;
  padding: 0.5rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 0.25rem;
  margin: 0.5rem 0;
}

.category-green {
  background-color: var(--light-green);
  color: var(--green);
}

.category-yellow {
  background-color: var(--light-yellow);
  color: var(--yellow);
}

.category-blue {
  background-color: var(--light-blue);
  color: var(--blue);
}

.card__people {
  display: flex;
  margin: 0.5rem 0;
}

.people__img {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 0.125rem var(--white) solid;
  transition: margin ease-out 0.2s;
  cursor: pointer;
}

.people__img:not(:first-child) {
  margin-left: -0.5rem;
}

.card__people:hover .people__img {
  margin-left: 0;
}

.people__img.fake {
  border: 0.125rem var(--lightest-grey) solid;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 0.75rem;
  color: var(--light-grey);
}

.card__due {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  background-color: var(--light-orange);
  color: var(--orange);
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
}
</style>

<div class="card" style="grid-column: {pos[0]}; grid-row: {pos[1]};">
  <div class="card__top">
    <div class="card__img-wrapper">
      <img class="card__img" src="/images/manoj/{shortName}.svg" alt="" />
    </div>
    <span class="card__short-name">{shortName}</span>
    <span class="card__full-name">{fullName}</span>
    <div class="card__star">
      <Star class="icon" />
    </div>
    <div class="card__menu" />
  </div>
  <div class="card__detail">
    <div class="detail__progress {progress.color}">{progress.name}</div>
    <div class="detail__priority {priority}">{priority} priority</div>
  </div>
  <div class="card__task">
    <span class="task__label"
      >Task Done:
      <span class="hl">{tasks[0]}</span>/{tasks[1]}
    </span>
    <div class="task__bar bar-{taskColor}" />
  </div>
  <div class="card__category">
    {#each categories as { name, color }}
      <div class="category__item category-{color}">{name}</div>
    {/each}
  </div>
  <div class="card__people">
    <img class="people__img" src="/images/manoj/blue.webp" alt="" />
    <img class="people__img" src="/images/manoj/purple.webp" alt="" />
    <img class="people__img" src="/images/manoj/pink.webp" alt="" />
    <img class="people__img" src="/images/manoj/orange.webp" alt="" />
    <img class="people__img" src="/images/manoj/yellow.webp" alt="" />
    <div class="people__img fake">+5</div>
  </div>
  <div class="card__due">due date: {dueDate}</div>
</div>

<script>
import Star from "../icons/star.svg"
export let shortName, fullName, priority, tasks
export let dueDate, progress, pos, categories, taskColor
</script>
