<style>
.calendar {
  grid-column: 3/4;
  grid-row: 2/3;
  background-color: var(--white);
  border-radius: 1rem;
  padding: 1rem;
}

.calendar__heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--black);
}

.heading__title {
  display: block;
  font-family: "Poppins", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  padding: 0.5rem 0.5rem 0;
}

.heading__buttons {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.heading__button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: var(--orange);
  color: var(--white);
  border-radius: 50%;
  padding: 0.25rem;
  cursor: pointer;
  outline: none;
  transition: filter ease-out 0.1s;
}

.heading__button:hover {
  filter: brightness(1.4);
}

.heading__button :global(.icon) {
  width: 1.25rem;
  height: 1.25rem;
  color: #ffffff;
}

.calendar__main {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-family: "Roboto", sans-serif;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color: var(--black);
}

.calendar__row {
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  align-items: center;
  justify-items: center;
  gap: 0.5rem;
}

.row__number {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1.5rem;
  min-height: 1.5rem;
  color: var(--side-icon);
  padding: 0.75rem;
}

.row__title {
  color: var(--black);
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
}

.faded {
  color: var(--lightest-grey-alt);
}

.circle {
  background-color: var(--orange);
  border-radius: 50%;
  color: #ffffff;
}

.dot::before {
  content: "";
  position: absolute;
  bottom: 0;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background-color: var(--orange);
}

.double-dot::before {
  content: "";
  position: absolute;
  left: 0.9rem;
  bottom: 0;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background-color: var(--yellow);
}

.double-dot::after {
  content: "";
  position: absolute;
  right: 0.9rem;
  bottom: 0;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background-color: var(--blue);
}
</style>

<div class="calendar">
  <div class="calendar__heading">
    <span class="heading__title">Feb 2020</span>
    <div class="heading__buttons">
      <button class="heading__button">
        <Prev class="icon" />
      </button>
      <button class="heading__button">
        <Next class="icon" />
      </button>
    </div>
  </div>
  <div class="calendar__main">
    {#each dates as date}
      <div class="calendar__row">
        <span class="row__title"> {date.name} </span>
        {#each date.days as day}
          <span
            class="row__number {stylings[day[1]]}"
          >{day[0] < 10 ? `0${day[0]}` : day[0]}</span>
        {/each}
      </div>
    {/each}
  </div>
</div>

<script>
import Prev from "../icons/left.svg"
import Next from "../icons/right.svg"

const stylings = ["", "faded", "circle", "dot", "double-dot"]
const dates = [
  {
    name: "Sun",
    days: [
      [26, 1],
      [2, 0],
      [9, 0],
      [16, 0],
      [23, 0]
    ]
  },
  {
    name: "Mon",
    days: [
      [27, 1],
      [3, 3],
      [10, 0],
      [17, 0],
      [24, 0]
    ]
  },
  {
    name: "Tue",
    days: [
      [28, 1],
      [4, 0],
      [11, 0],
      [18, 0],
      [25, 0]
    ]
  },
  {
    name: "Wed",
    days: [
      [29, 1],
      [5, 2],
      [12, 0],
      [19, 4],
      [26, 0]
    ]
  },
  {
    name: "Thu",
    days: [
      [30, 1],
      [6, 0],
      [13, 0],
      [20, 0],
      [27, 0]
    ]
  },
  {
    name: "Fri",
    days: [
      [31, 1],
      [7, 0],
      [14, 0],
      [21, 0],
      [28, 0]
    ]
  },
  {
    name: "Sat",
    days: [
      [1, 0],
      [8, 0],
      [15, 0],
      [22, 0],
      [29, 0]
    ]
  }
]
</script>
