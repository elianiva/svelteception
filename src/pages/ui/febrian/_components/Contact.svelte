<style>
.contact {
  cursor: pointer;
  transition: background-color ease-out 0.2s;
}

.contact:hover {
  background-color: #f4f6f9;
}

.contact:first-child {
  background-color: #f4f6f9;
}

.contact__wrapper {
  padding: 0.5rem 1rem 0.5rem 0;
  margin-left: 1rem;
  display: grid;
  grid-template-columns: 3rem 1fr;
  grid-template-rows: 1.5rem 1rem 2rem;
  column-gap: 0.25rem;
  row-gap: 0.125rem;
  align-items: center;
  justify-content: center;
}

.contact:not(:last-child) .contact__wrapper {
  border-bottom: 0.0625rem #ebebeb solid;
}

.contact__img-wrapper {
  position: relative;
  grid-column: 1/2;
  grid-row: 1/3;
  width: 2.5rem;
  height: 2.5rem;
}

.contact__img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.contact__placeholder {
  position: relative;
  grid-column: 1/2;
  grid-row: 1/3;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 600;
}

.contact__img-wrapper.active::after,
.contact__placeholder.active::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0.5rem;
  height: 0.5rem;
  border: 0.125rem #ffffff solid;
  border-radius: 50%;
  background-color: #2dda53;
}

.contact__placeholder.yellow {
  background-color: #ffc912;
}

.contact__placeholder.blue {
  background-color: #3663f5;
}

.contact__placeholder.red {
  background-color: #ff5f52;
}

.contact__name {
  grid-column: 2/3;
  grid-row: 1/2;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
}

.contact__time {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: #b0b0b0;
  font-size: 0.75rem;
}

.contact__last {
  font-family: "Open Sans", sans-serif;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #7b869a;
}

.contact__unread {
  font-family: "Open Sans", sans-serif;
  background-color: #5868f0;
  padding: 0 0.5rem;
  border-radius: 1rem;
  color: #ffffff;
}

.contact__level {
  grid-column: 2/3;
  display: flex;
  gap: 0.5rem;
  align-self: end;
}

.level__status,
.level__severity {
  position: relative;
  font-family: "Poppins", sans-serif;
  padding: 0.25rem 0.5rem;
  border: 0.0625rem #ebebeb solid;
  font-size: 0.75rem;
  background-color: #ffffff;
  border-radius: 1rem;
  color: #787878;
}

.level__severity {
  padding-left: 1rem;
}

.level__severity::before {
  content: "";
  position: absolute;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
}

.level__severity.high::before {
  background-color: #ff5f52;
}

.level__severity.medium::before {
  background-color: #15cc35;
}

.level__severity.low::before {
  background-color: #ffbe05;
}
</style>

<div class="contact">
  <div class="contact__wrapper">
    {#if img}
      <div class="contact__img-wrapper {isActive ? 'active' : ''}">
        <img class="contact__img" src={img} alt="name" />
      </div>
    {:else}
      <div class="contact__placeholder {isActive ? 'active' : ''} {colour}">
        {name.split(" ")[0][0]}{name.split(" ")[1][0]}
      </div>
    {/if}
    <span class="contact__name"
      >{name}
      <span class="contact__time">{time}</span>
    </span>
    <span class="contact__last">
      {lastChat}
      {#if typeof unread === "number"}
        <span class="contact__unread">{unread}</span>
      {:else if unread}
        <Checkmark width="1.125rem" height="1.125rem" />
      {:else}
        <CheckmarkAlt
          width="1.125rem"
          height="1.125rem"
          style="color: #38B1FF"
        />
      {/if}
    </span>
    <div class="contact__level">
      <div class="level__status">{STATUS[status - 1]}</div>
      <div
        class="level__severity {severity === 1
          ? 'low'
          : severity === 2
          ? 'medium'
          : 'high'}"
      >
        {SEVERITY[severity - 1]}
      </div>
    </div>
  </div>
</div>

<script>
import Checkmark from "../icons/checkmark.svg"
import CheckmarkAlt from "../icons/checkmark-2.svg"

const STATUS = ["In Progress", "Pending", "Complete"]
const SEVERITY = ["Low", "Medium", "High"]

export let img, name, lastChat, status, severity, unread, time, isActive
export let colour = ""
</script>
