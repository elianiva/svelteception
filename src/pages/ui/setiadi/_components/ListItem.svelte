<style>
.list {
  display: grid;
  grid-template-columns: 1fr 4fr 2fr;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-family: "Roboto", sans-serif;
  color: #787878;
  font-weight: 500;
}

.list.active {
  background-color: #fff5f4;
}

.list__number {
  justify-self: center;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  background-color: #ff7a7b;
  color: #ffffff;
  font-weight: 600;
}

.list__duration {
  justify-self: flex-end;
}
</style>

<div class="list {active ? 'active' : ''}">
  <span class="list__number">{number}</span>
  <span class="list__title">{title}</span>
  <span class="list__duration">{formatSeconds(duration)}</span>
</div>

<script>
export let number, title, duration, active

function formatSeconds(s) {
  return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s
}
</script>
