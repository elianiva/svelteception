<style>
.nav {
  position: relative;
  background-color: #1c263d;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

.nav__win-button {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.nav__win-button button {
  width: 0.75rem;
  height: 0.75rem;
  border: none;
  border-radius: 1rem;
}

.win-button__close {
  background-color: #ff5f52;
}

.win-button__min {
  background-color: #ffbe05;
}

.win-button__max {
  background-color: #15cc35;
}

:global(.nav__logo-febrian svg) {
  color: #ffffff;
  width: 2.5rem;
  height: 2.5rem;
  margin: 2rem 0 2.5rem;
}

.nav__items {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.nav__item-febrian {
  padding: 0.5rem;
  border-radius: 0.2rem;
  cursor: pointer;
  color: #7f8592;
  transition: color ease-out 0.2s;
}

.nav__item-febrian:hover {
  color: #ffffff;
}

.nav__item-divider {
  border: none;
  height: 0.125rem;
  width: 4.5rem;
  background-color: #262f45;
}

/* use suffix to prevent conflict */
:global(.nav__item-febrian svg) {
  width: 1.25rem;
  height: 1.25rem;
}

.nav__item-febrian.active {
  position: relative;
  background-color: #5868f0;
}

.nav__item-febrian.active::after {
  content: "";
  position: relative;
  top: 0.25rem;
  right: 0.25rem;
  width: 0.25rem;
  height: 0.25rem;
  background-color: #ff3d3d;
}

:global(.nav__item-febrian.active svg) {
  color: #ffffff;
}

.nav__toggle {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  background-color: #101a31;
  color: #ffffff;
}
</style>

<aside class="nav">
  <div class="nav__win-button">
    <button class="win-button__close" aria-label="close" />
    <button class="win-button__min" aria-label="min" />
    <button class="win-button__max" aria-label="max" />
  </div>
  <div class="nav__logo-febrian">
    <Lines />
  </div>
  <div class="nav__items">
    <div class="nav__item-febrian">
      <Home />
    </div>
    <div class="nav__item-febrian active">
      <Message />
    </div>
    <div class="nav__item-febrian">
      <People />
    </div>
    <div class="nav__item-febrian">
      <Send />
    </div>
    <div class="nav__item-febrian">
      <Pie />
    </div>
    <hr class="nav__item-divider" />
    <div class="nav__item-febrian">
      <Box />
    </div>
    <div class="nav__item-febrian">
      <Setting />
    </div>
  </div>
  <div class="nav__toggle">
    <div class="toggle__item">
      <Right />
    </div>
  </div>
</aside>

<script>
import Lines from "../icons/lines.svg"
import Home from "../icons/home.svg"
import Message from "../icons/message.svg"
import People from "../icons/people.svg"
import Send from "../icons/send.svg"
import Pie from "../icons/pie.svg"
import Box from "../icons/box.svg"
import Setting from "../icons/settings.svg"
import Right from "../icons/right.svg"
</script>
