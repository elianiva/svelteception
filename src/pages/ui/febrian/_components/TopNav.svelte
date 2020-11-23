<style>
.nav {
  display: grid;
  grid-template-columns: 1fr 2rem 13rem;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  border-bottom: 0.0625rem #ebebeb solid;
}

.nav__divider {
  width: 0.0625rem;
  background-color: #ebebeb;
  align-self: center;
  justify-self: center;
  height: 100%;
}

.nav__main {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__title {
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  color: #1c263d;
  letter-spacing: 0.025em;
}

.nav__notification {
  position: relative;
  padding: 0.5rem;
  border: 0.0625rem #ebebeb solid;
  border-radius: 2rem;
  background: none;
  transition: background-color ease-out 0.2s;
  cursor: pointer;
  outline: none;
}

.nav__notification:hover {
  background-color: #ebebeb;
}

.nav__notification::after {
  content: "3";
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  width: 1rem;
  height: 1rem;
  background-color: #ff5959;
  border-radius: 50%;
  font-size: 0.8rem;
  color: #ffffff;
}

:global(.nav__notification svg) {
  color: #8791ac;
  width: 1.25rem;
  height: 1.25rem;
}

.nav__side {
  display: grid;
  grid-template-columns: 2.25rem 1fr 2.25rem;
  align-items: center;
  column-gap: 0.5rem;
}

.side__img {
  grid-column: 1/2;
  grid-row: 1/3;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 1rem;
}

.side__name {
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  grid-column: 2/4;
  color: #1c263d;
}

.side__status {
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 0.75rem;
  grid-column: 2/4;
  grid-row: 2/3;
  color: #b0b0b0;
  padding-left: 0.75rem;
}

.side__status::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 0.5rem;
  height: 0.5rem;
  background-color: #79a21d;
  border-radius: 1rem;
}

.side__button {
  grid-column: 4/5;
  grid-row: 1/3;
  background: none;
  border: 0.0625rem #ebebeb solid;
  border-radius: 2rem;
  color: #b0b0b0;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color ease-out 0.2s;
  outline: none;
}

.side__button:hover {
  background-color: #ebebeb;
}
</style>

<nav class="nav">
  <div class="nav__main">
    <h1 class="nav__title">Messages</h1>
    <button class="nav__notification">
      <Bell />
    </button>
  </div>
  <div class="nav__divider"></div>
  <div class="nav__side">
    <img class="side__img" src="/images/febrian/owner.jpg" alt="febrian" />
    <span class="side__name">Yus Febrianto</span>
    <span class="side__status">Available</span>
    <button class="side__button">
      <Down />
    </button>
  </div>
</nav>

<script>
import Bell from "../icons/bell.svg"
import Down from "../icons/down.svg"
</script>
