<style>
.search-wrapper {
  display: grid;
  grid-template-columns: 1fr 3rem;
  gap: 2rem;
  align-items: center;
}
.search {
  background-color: #f0f5f8;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
}

.search__input {
  background: none;
  border: none;
  padding: 0.5rem;
  margin-left: 0.5rem;
  outline: none;
  width: 20rem;
  font-size: 1rem;
}

.search__input::placeholder {
  color: #b0b0b0;
}

.search :global(.search__icon) {
  width: 1.25rem;
  height: 1.25rem;
}

.settings {
  background-color: #2184ae;
  height: 100%;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>

<div class="search-wrapper">
  <div class="search">
    <Search class="search__icon" />
    <input
      class="search__input"
      type="text"
      placeholder="Search for movie, tv series or anything"
    />
  </div>
  <div class="settings">
    <Settings />
  </div>
</div>

<script>
import Search from "../icons/search.svg"
import Settings from "../icons/setting.svg"
</script>
