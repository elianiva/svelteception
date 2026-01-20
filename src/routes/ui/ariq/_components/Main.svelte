<style>
.main {
  padding: 2rem;
}

.main__header {
  display: flex;
  gap: 5rem;
  width: 100%;
  margin-bottom: 2rem;
}

.main__search {
  display: flex;
  align-items: center;
  border: 0.0625rem #efefef solid;
  flex: 1;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
}

:global(.search__icon) {
  width: 1.5rem;
  height: 1.5rem;
}

.search__input {
  padding: 0.25rem;
  border: none;
  outline: none;
  font-family: "Poppins", sans-serif;
}

.search__input::placeholder {
  font-family: "Poppins", sans-serif;
  color: #b0b0b0;
  letter-spacing: 0.025em;
  font-weight: 600;
}

:global(.search__icon) {
  color: #515b76;
}

.main__option {
  display: flex;
  align-items: center;
  border: 0.0625rem #efefef solid;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
}

.option__input {
  background: none;
  font-family: "Poppins", sans-serif;
  -webkit-appearance: none;
  font-weight: 600;
  color: #515b76;
  border: none;
  padding: 0.5rem;
  margin-right: -1.25rem;
}

:global(.option__icon) {
  width: 1.25rem;
  height: 1.25rem;
  color: #ff8345;
}

.main__heading {
  color: #122044;
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}
</style>

<main class="main">
  <div class="main__header">
    <div class="main__search">
      <Search class="search__icon" />
      <input class="search__input" type="text" placeholder="Search" />
    </div>
    <div class="main__option">
      <select class="option__input">
        <option value="0">This month</option>
        <option value="1">Last month</option>
        <option value="2">Past 2 months</option>
      </select>
      <Down class="option__icon" />
    </div>
  </div>
  <div class="main__content">
    <h1 class="main__heading">My Summary</h1>
    <Call />
    <Schedule />
  </div>
</main>

<script>
import Search from "../icons/search.svg"
import Down from "../icons/chevron-down.svg"
import Call from "./Call.svelte"
import Schedule from "./Schedule.svelte"
</script>
