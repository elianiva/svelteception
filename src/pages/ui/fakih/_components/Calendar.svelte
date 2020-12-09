<style>
.calendar {
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.08);
  color: #2a2a2a;
}

.calendar__heading {
  position: relative;
  font-family: "Nunito", sans-serif;
  text-align: center;
}

.calendar__heading :global(.icon) {
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  top: 0;
}

.calendar__heading :global(.icon):first-child {
  left: 0.5rem;
}

.calendar__heading :global(.icon):last-child {
  right: 0.5rem;
}

.heading__title {
  font-size: 1.25rem;
  line-height: 1em;
}

.heading__detail {
  font-size: 0.625rem;
  color: #555555;
}

.calendar__divider {
  border: none;
  height: 0.5px;
  width: 80%;
  margin: 0.5rem auto 0;
  background-color: #abbce3;
}

.calendar__main {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  margin-top: 1rem;
}

.calendar__row {
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  align-items: center;
  justify-items: center;
  gap: 1rem;
}

.row__number {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  min-height: 2rem;
}

.row__title {
  color: #abbce3;
}

.pink {
  position: relative;
  background-color: #ff7575;
  color: #ffffff;
  border-radius: 50%;
}

.purple {
  position: relative;
  background-color: #8d75ff;
  color: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 0.5rem rgba(141, 117, 255, 1);
}

.pink::after {
  content: "";
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: #ff7575;
}
</style>

<div class="calendar">
  <div class="calendar__heading">
    <Left class="icon" />
    <h1 class="heading__title">September 2020</h1>
    <span class="heading__detail">saturday, 12 sep 2020</span>
    <Right class="icon" />
  </div>
  <hr class="calendar__divider" />
  <div class="calendar__main">
    {#each dates as date}
      <div class="calendar__row">
        <span class="row__title"> {date.name} </span>
        {#each date.days as day}
          <span class="row__number {styling[day[1]]}">{day[0]}</span>
        {/each}
      </div>
    {/each}
  </div>
</div>

<script>
import Left from "../icons/chevron-left.svg"
import Right from "../icons/chevron-right.svg"

const styling = ["", "purple", "pink"]
const dates = [
  {
    name: "Mon",
    days: [
      [31, 0],
      [7, 0],
      [14, 0],
      [21, 0],
      [28, 0]
    ]
  },
  {
    name: "Tue",
    days: [
      [1, 0],
      [8, 0],
      [15, 0],
      [22, 0],
      [29, 0]
    ]
  },
  {
    name: "Wed",
    days: [
      [2, 0],
      [9, 0],
      [16, 0],
      [23, 0],
      [30, 0]
    ]
  },
  {
    name: "Thu",
    days: [
      [3, 0],
      [10, 0],
      [17, 0],
      [24, 2],
      [1, 0]
    ]
  },
  {
    name: "Fri",
    days: [
      [4, 0],
      [11, 0],
      [18, 0],
      [25, 0],
      [2, 0]
    ]
  },
  {
    name: "Sat",
    days: [
      [5, 0],
      [12, 1],
      [19, 0],
      [26, 0],
      [3, 0]
    ]
  },
  {
    name: "Sun",
    days: [
      [6, 0],
      [13, 0],
      [20, 0],
      [27, 0],
      [4, 0]
    ]
  }
]
</script>
