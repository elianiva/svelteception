<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

* {
  color: #282828;
}

.navbar {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background-color: #ffffff;
}

.navbar__hamburger {
  display: flex;
  flex-direction: column;
  height: 1rem;
  width: 1.5rem;
  gap: 0.25rem;
}

.navbar__hamburger span {
  display: block;
  flex: 1;
  border-radius: 1rem;
  background-color: #121212;
}

.navbar__title {
  font-family: "Poppins", sans-serif;
}

.navbar__search {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  font-family: "Poppins", sans-serif;
  margin-left: 1rem;
}

.navbar__search input {
  width: 100%;
  padding: 0.75rem;
  padding-left: 2.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #f4f4f4;
}

.navbar__search::placeholder {
  color: #787878;
}

.search__icon {
  width: 1rem;
  height: 1rem;
  position: absolute;
  left: 1rem;
}
</style>

<nav class="navbar">
  <div class="navbar__hamburger"><span></span> <span></span> <span></span></div>
  <h1 class="navbar__title">MyKantin</h1>
  <div class="navbar__search">
    <img class="search__icon" src="../images/rizqi/search.svg" alt="" />
    <input type="text" placeholder="Cari Makan Bang?" />
  </div>
</nav>
