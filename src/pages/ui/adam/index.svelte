<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.body {
  position: relative;
  height: 120%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  background-color: #ffffff;
}

.container {
  position: relative;
  z-index: 2;
  width: 25rem;
  height: 46rem;
  overflow: hidden;
  border-radius: 1rem;
}

.container::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("/images/adam/bg.jpg");
  background-size: cover;
  filter: brightness(0.8) blur(0.25rem);
}

.navbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.25rem;
}

.navbar__hamburger {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 1.5rem;
}

.navbar__hamburger span {
  display: block;
  background-color: #efefef;
  width: 100%;
  height: 0.125rem;
}

.greet {
  font-family: "Nunito", sans-serif;
  color: #efefef;
  padding: 5rem 3rem 2rem;
}

.greet__heading {
  font-size: 1.75rem;
  font-weight: 600;
  color: #efefef;
}

.greet__date {
  font-size: 0.875rem;
  line-height: 1.75rem;
  color: #b0b0b0;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 12rem auto 2rem;
  width: 65%;
}

.form__wrapper:first-child {
  border-bottom: 0.125rem #efefef solid;
}

.form__wrapper {
  display: flex;
  padding: 0.5rem 0;
  border-bottom: 0.125rem #555555 solid;
  color: #ffffff;
}

.form__wrapper:last-child {
  border: none;
  gap: 1rem;
}

.form__input {
  position: relative;
  background: none;
  border: none;
  flex: 1;
  font-size: 1rem;
  color: #efefef;
  outline: none;
}

.form__input::placeholder {
  color: #b0b0b0;
}

.form__button {
  background: none;
  text-decoration: none;
  border: 0.25rem #efefef solid;
  padding: 0.5rem 1rem;
  flex: 1;
  color: #efefef;
  text-align: center;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all ease-out 0.2s;
}

.form__button:hover {
  background-color: #efefef;
  color: #121212;
}

.navigation {
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  left: 0;
  right: 0;
  bottom: 0;
  justify-items: center;
  padding: 2rem;
}
</style>

<div class="body">
  <div class="container">
    <nav class="navbar">
      <div class="navbar__hamburger">
        <span />
        <span />
        <span />
      </div>
    </nav>
    <section class="greet">
      <h1 class="greet__heading">Malam, Bujang.</h1>
      <span class="greet__date">Sabtu, 30 Februari 2020</span>
    </section>
    <form class="form" action="#">
      <div class="form__wrapper">
        <input class="form__input" type="text" placeholder="Username" />
        <UserIcon width="1.5rem" height="1.5rem" />
      </div>
      <div class="form__wrapper">
        <input class="form__input" type="text" placeholder="Password" />
        <LockIcon width="1.5rem" height="1.5rem" />
      </div>
      <div class="form__wrapper buttons">
        <input class="form__button" type="submit" value="Login" />
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a class="form__button" href="javascript:void(0)">Register</a>
      </div>
    </form>
    <footer class="navigation">
      <BackIcon width="1rem" height="1rem" />
      <HomeIcon width="1rem" height="1rem" />
      <RecentIcon width="1rem" height="1rem" />
    </footer>
  </div>
</div>

<script>
import UserIcon from "./icons/user.svg"
import LockIcon from "./icons/lock.svg"
import BackIcon from "./icons/back.svg"
import HomeIcon from "./icons/home.svg"
import RecentIcon from "./icons/recent.svg"

import { metatags } from "@roxi/routify"

metatags.title = "Adam | Svelteception"
metatags.description = "Malam Bujang UI by Adam"
</script>
