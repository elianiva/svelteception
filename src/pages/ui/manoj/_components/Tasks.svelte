<style>
.task {
  grid-column: 2/3;
  grid-row: 2/3;
  background-color: var(--white);
  border-radius: 1rem;
  margin-bottom: -3rem;
}

.task__title {
  display: block;
  font-family: "Montserrat", sans-serif;
  text-transform: capitalize;
  font-weight: 700;
  margin: 1.5rem 1rem 0.5rem;
  color: var(--black);
}

.task__num {
  display: inline-block;
  font-weight: 500;
  color: var(--grey);
  margin-left: 0.5rem;
}

.task__item {
  display: grid;
  grid-template-columns: 2rem 1fr 3rem 3rem 2rem;
  align-items: center;
  font-family: "Roboto", sans-serif;
  padding: 0.7rem 1rem;
  cursor: pointer;
}

.task__item:not(:last-child) {
  border-bottom: 0.0625rem var(--lightest-grey) solid;
}

.item__num {
  font-size: 0.9rem;
  color: var(--grey);
}

.item__name {
  font-size: 0.9rem;
  transition: all ease-out 0.2s;
  color: var(--black);
}

.item__msg,
.item__branch {
  color: var(--grey);
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.item__msg :global(.icon),
.item__branch :global(.icon) {
  width: 0.9rem;
  height: 0.9rem;
}

.item-complete {
  color: var(--grey);
  text-decoration: line-through;
}

.item__checkmark {
  grid-column: 5/6;
  justify-self: end;
  border: 0.125rem var(--grey) solid;
  color: var(--grey);
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease-out 0.2s;
}

.item__checkmark.completed {
  color: var(--white);
  border: none;
  background-color: var(--green);
}

.item__checkmark :global(.icon) {
  width: 1rem;
  height: 1rem;
}
</style>

<div class="task">
  <span class="task__title">My Tasks <span class="task__num">(05)</span> </span>
  {#each items as { name, isCompleted, msg, branch }, idx}
    <div class="task__item" on:click={() => (isCompleted = !isCompleted)}>
      <span class="item__num">0{idx + 1}</span>
      <span class="item__name {isCompleted ? 'item-complete' : ''}">{name}</span
      >
      {#if msg !== 0}
        <div class="item__msg">
          {msg}
          <Message class="icon" />
        </div>
      {/if}
      {#if branch !== 0}
        <div class="item__branch">
          {branch}
          <Branch class="icon" />
        </div>
      {/if}
      <div class="item__checkmark {isCompleted ? 'completed' : ''}">
        <Checkmark class="icon" />
      </div>
    </div>
  {/each}
</div>

<script>
import Message from "../icons/message.svg"
import Branch from "../icons/branch.svg"
import Checkmark from "../icons/checkmark.svg"

const items = [
  { name: "Create Wireframe", isCompleted: false, msg: 0, branch: 0 },
  { name: "Slack Logo Design", isCompleted: false, msg: 3, branch: 5 },
  { name: "Dashboard Design", isCompleted: false, msg: 0, branch: 5 },
  { name: "Create Wireframe", isCompleted: true, msg: 0, branch: 0 },
  { name: "Google Logo Design", isCompleted: true, msg: 0, branch: 0 },
  { name: "Slack Logo Design", isCompleted: false, msg: 0, branch: 0 },
  { name: "Dashboard Design", isCompleted: false, msg: 0, branch: 5 }
]
</script>
