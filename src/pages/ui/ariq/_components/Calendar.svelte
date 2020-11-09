<style>
.calendar__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.calendar__name {
  font-size: 1.25rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}

.calendar__buttons {
  display: flex;
}

.calendar__button {
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  color: #ff8345;
}

.calendar__button:hover {
  filter: brightness(0.95);
}

:global(.calendar__button svg) {
  width: 2rem;
  height: 2rem;
}

.calendar__main {
  font-family: "Montserrat", sans-serif;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.calendar__row {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.row__title {
  color: #b0b0b0;
  font-weight: 600;
  font-size: 0.95rem;
}

.row__number {
  position: relative;
  font-size: 0.925rem;
  padding: 0.75rem;
}

.row__number.inactive {
  color: #b0b0b0;
}

.row__number.highlighted {
  background-color: #ff8345;
  border-radius: 50%;
  color: #ffffff;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.075);
}

.row__number.highlighted::after {
  display: none;
}

.row__number::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
}

.row__number.color-0::after {
  background-color: #ffffff;
}
.row__number.color-1::after {
  background-color: #fbaea6;
}
.row__number.color-2::after {
  background-color: #73c7f3;
}
</style>

<div class="calendar">
  <div class="calendar__header">
    <span class="calendar__name">{month} {year}</span>
    <div class="calendar__buttons">
      <button class="calendar__button">
        <Left />
      </button>
      <button class="calendar__button">
        <Right />
      </button>
    </div>
  </div>
  <div class="calendar__main">
    {#each dates as date}
      <div class="calendar__row">
        <span class="row__title"> {date.name} </span>
        {#each date.days as day}
          <span
            class="row__number color-{day[3]}"
            class:inactive="{!day[1]}"
            class:highlighted="{day[2]}"
          >{day[0]}</span>
        {/each}
      </div>
    {/each}
  </div>
</div>

<script>
import Left from "../icons/chevron-left.svg"
import Right from "../icons/chevron-right.svg"
export let month, year
const dates = [
  {
    name: "Sun",
    days: [
      [29, false, false, 0],
      [6, true, false, 0],
      [13, true, false, 0],
      [20, true, false, 0],
      [27, true, false, 0]
    ]
  },
  {
    name: "Mon",
    days: [
      [30, false, false, 0],
      [7, true, false, 1],
      [14, true, false, 0],
      [21, true, false, 0],
      [28, true, false, 0]
    ]
  },
  {
    name: "Tue",
    days: [
      [1, true, false, 0],
      [8, true, false, 0],
      [15, true, false, 2],
      [22, true, false, 0],
      [29, true, false, 0]
    ]
  },
  {
    name: "Wed",
    days: [
      [2, true, false, 0],
      [9, true, false, 1],
      [16, true, false, 0],
      [23, true, false, 0],
      [30, true, false, 0]
    ]
  },
  {
    name: "Thu",
    days: [
      [3, true, false, 0],
      [10, true, true, 0],
      [17, true, false, 0],
      [24, true, false, 1],
      [31, true, false, 0]
    ]
  },
  {
    name: "Fri",
    days: [
      [4, true, false, 2],
      [11, true, false, 0],
      [18, true, false, 0],
      [25, true, false, 0],
      [1, false, false, 0]
    ]
  },
  {
    name: "Sat",
    days: [
      [5, true, false, 0],
      [12, true, false, 0],
      [19, true, false, 0],
      [26, true, false, 0],
      [2, false, false, 0]
    ]
  }
]
</script>
