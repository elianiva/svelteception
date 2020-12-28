<style>
.todo {
  grid-column: 2/3;
  grid-row: 3/4;
  background-color: var(--white);
  border-radius: 1rem;
  margin-top: 3rem;
}

.item__name {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  padding: 1rem 2rem 0.5rem 1rem;
  border-bottom: 0.0625rem var(--lightest-grey) solid;
  color: var(--black);
}

.todo__subitem {
  position: relative;
  display: grid;
  grid-template-columns: 1.5rem 1fr 5rem 2rem 0.5rem;
  align-items: center;
  padding: 0.5rem 0;
  margin: 0 1rem;
  font-family: "Roboto", sans-serif;
}

.subitem-active {
  background-color: var(--light-orange);
  padding: 0.5rem 1rem;
  margin: 0;
}

.todo__subitem :global(.stopwatch-icon) {
  color: var(--grey);
  cursor: pointer;
}

.subitem-active :global(.stopwatch-icon) {
  color: var(--orange);
}

.subitem-active::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0.25rem;
  background-color: var(--orange);
}

.todo__subitem:not(:last-child) {
  border-bottom: 0.0625rem var(--lightest-grey) solid;
}

.subitem__name {
  font-size: 0.8rem;
  color: var(--black);
  font-weight: 500;
}

.subitem__time {
  justify-self: end;
  padding-right: 0.5rem;
  font-size: 0.8rem;
  color: var(--black);
  font-weight: 500;
}

.time-active {
  font-size: 1rem;
  font-weight: 600;
}

.item__name :global(.icon),
.subitem__status :global(.icon) {
  color: var(--grey);
  cursor: pointer;
}

.subitem__menu {
  position: relative;
  grid-column: 5/6;
  width: 0.2rem;
  height: 0.2rem;
  background-color: var(--light-grey);
  border-radius: 50%;
  justify-self: end;
}

.subitem__menu::before,
.subitem__menu::after {
  content: "";
  position: absolute;
  width: 0.2rem;
  height: 0.2rem;
  background-color: var(--light-grey);
  border-radius: 50%;
}

.subitem__menu::before {
  top: 0.5rem;
}

.subitem__menu::after {
  bottom: 0.5rem;
}
</style>

<div class="todo">
  {#each data as { name, items }}
    <div class="todo__item">
      <span class="item__name">
        {name}
        <Play class="icon" />
      </span>
      {#each items as { name, time, isActive }}
        <div
          class="todo__subitem {time[1] ? 'subitem-active' : ''}"
          on:click="{() => (isActive = !isActive)}"
        >
          <Stopwatch class="stopwatch-icon" />
          <div class="subitem__name">{name}</div>
          <div class="subitem__time {time[1] ? 'time-active' : ''}">
            {time[0]}
          </div>
          <div class="subitem__status">
            {#if isActive}
              <Pause class="icon" />
            {:else}
              <Play class="icon" />
            {/if}
          </div>
          <div class="subitem__menu"></div>
        </div>
      {/each}
    </div>
  {/each}
</div>

<script>
import Stopwatch from "../icons/stopwatch.svg"
import Play from "../icons/play.svg"
import Pause from "../icons/pause.svg"
const data = [
  {
    name: "Google",
    items: [
      { name: "Create Wireframe", time: ["25m 20s", true], isActive: true }
    ]
  },
  {
    name: "Slack",
    items: [
      { name: "Slack logo design", time: ["30m 0s", false], isActive: false },
      { name: "Dashboard design", time: ["30m 0s", false], isActive: false },
      { name: "Create Wireframe", time: ["30m 0s", false], isActive: false }
    ]
  }
]
</script>
