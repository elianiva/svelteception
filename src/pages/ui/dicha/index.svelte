<style>
.body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c5d5ff;
}

.container {
  position: relative;
  display: grid;
  width: 100%;
  height: 100%;
  max-width: 1366px;
  max-height: 768px;
  grid-template-columns: 20rem 1fr;
  border-radius: 0.5rem;
  /* overflow: hidden; */
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
}

.navbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  z-index: 2;
}

.navbar__container {
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 0 auto;
  max-width: 1200px;
}

.navbar__title {
  position: relative;
  font-family: "Roboto Slab", sans-serif;
  color: #ffffff;
  font-weight: 500;
  flex: 1;
  font-size: 2rem;
}

.navbar__title::after {
  content: "";
  position: absolute;
  display: block;
  bottom: -0.25rem;
  height: 0.25rem;
  width: 2rem;
  background-color: #ffffff;
}

.navbar__items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 1.5rem;
  list-style: none;
}

.navbar__item {
  position: relative;
}

.navbar__item:nth-child(1)::before {
  content: "";
  position: absolute;
  display: block;
  left: -7rem;
  top: calc(50% - 0.25rem);
  background-color: #2d1c5e;
  height: 0.25rem;
  width: 5rem;
}

.navbar__item a {
  font-family: "Montserrat", sans-serif;
  font-size: 1.125rem;
  text-decoration: none;
  color: #2d1c5e;
  transition: color ease-out 0.2s;
}

.navbar__item a:hover {
  color: #8b66f6;
  font-weight: 600;
}

.sidebar {
  position: relative;
  background-color: #9976fb;
  padding: 2rem;
}

.sidebar__quote {
  position: relative;
  margin: 0 auto;
  font-family: "M PLUS 1p", sans-serif;
  font-size: 1.125rem;
  color: #e3daff;
  margin-top: 8rem;
  width: 32ch;
}

.sidebar__quote::before {
  content: "“";
  left: -2.5rem;
  top: -2rem;
}

.sidebar__quote::after {
  content: "”";
  right: 0;
  bottom: -4rem;
}

.sidebar__quote::before,
.sidebar__quote::after {
  position: absolute;
  font-family: "Merriweather", serif;
  font-size: 4.5rem;
  color: #8b66f6;
}

.sidebar__icons {
  position: absolute;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 2rem;
  left: 2rem;
  bottom: 2rem;
}

.sidebar__icon img {
  width: 2rem;
  height: 2rem;
}

.highlight {
  color: #9976fb;
}

.main {
  display: flex;
  align-items: flex-start;
  padding: 8rem 3rem 3rem;
  gap: 4rem;
}

.main__left {
  position: relative;
}

.main__heading {
  font-family: "Montserrat", sans-serif;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.main__typography {
  font-family: "M PLUS 1p";
  font-size: 1.125rem;
  font-weight: 400;
  color: #675793;
  max-width: 60ch;
  margin-bottom: 1.5rem;
}

.main__btn {
  font-family: "M PLUS 1p";
  color: #ffffff;
  font-weight: 500;
  padding: 1rem 2rem;
  outline: none;
  border: none;
  background-color: #9976fb;
  box-shadow: 0 0.25rem 0.5rem rgba(153, 118, 251, 0.25);
  cursor: pointer;
}

.main__btn:hover {
  filter: brightness(1.1);
}

.main__thumbnail {
  position: relative;
  bottom: -4rem;
  left: -10rem;
}

.main__thumbnail::after {
  content: "";
  position: absolute;
  display: block;
  top: 1rem;
  right: 11.5rem;
  bottom: 0;
  width: 0.5rem;
  height: 10rem;
  background-color: #2d1c5e;
}

.main__thumbnail img {
  border: 1rem #ffffff solid;
  position: absolute;
  overflow: hidden;
}

.main__right {
  position: relative;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
}

.main__right::before {
  content: "ISEKAI";
  position: absolute;
  font-family: "Megrim", cursive;
  font-size: 3rem;
  letter-spacing: 1.5rem;
  color: #d8caff;
  left: -10.5rem;
  bottom: 10.5rem;
  transform: rotateZ(-90deg);
}

.main__right::after {
  content: "異世界";
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  background-color: #ffffff;
  z-index: 3;
}

.main__img {
  position: relative;
  height: 24rem;
  width: 24rem;
  z-index: 2;
}

.main__border {
  position: absolute;
  top: -1rem;
  right: -1rem;
  width: 24rem;
  height: 24rem;
  border: 0.25rem #d8caff solid;
}
</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Megrim&display=swap"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@400;500&display=swap"
  />
</svelte:head>

<div class="body">
  <div class="container">
    <nav class="navbar">
      <div class="navbar__container">
        <h1 class="navbar__title">Isekai</h1>
        <ul class="navbar__items">
          <li class="navbar__item">
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a href="javascript:void(0)">HOME</a>
          </li>
          <li class="navbar__item">
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a href="javascript:void(0)">EXPLORE</a>
          </li>
          <li class="navbar__item">
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a href="javascript:void(0)">GALLERY</a>
          </li>
          <li class="navbar__item">
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a href="javascript:void(0)">ABOUT</a>
          </li>
        </ul>
      </div>
    </nav>
    <aside class="sidebar">
      <p class="sidebar__quote">
        This world is too smol, Isekai is where we supposed to live.
        <br />
        ー RandomGuy2030
      </p>
      <div class="sidebar__icons">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a class="sidebar__icon" href="javascript:void(0)">
          <img src="{images.twitter}" alt="twitter" />
        </a>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a class="sidebar__icon" href="javascript:void(0)">
          <img src="{images.instagram}" alt="instagram" />
        </a>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a class="sidebar__icon" href="javascript:void(0)">
          <img src="{images.facebook}" alt="facebook" />
        </a>
      </div>
    </aside>
    <main class="main">
      <div class="main__left">
        <h1 class="main__heading">
          Isekai, World of
          <span class="highlight">Future</span>.
        </h1>
        <p class="main__typography">
          This world is too small for you. Let me take you to the world of
          future where everyone lives up to their own dream.
        </p>
        <button class="main__btn">SHOW ME</button>
        <div class="main__thumbnail">
          <img src="{images.thumb}" alt="flower" />
        </div>
      </div>
      <div class="main__right">
        <img class="main__img" src="{images.img}" alt="isekai" />
        <div class="main__border"></div>
      </div>
    </main>
  </div>
</div>

<script>
const images = {
  twitter: "/images/dicha/twitter.svg",
  instagram: "/images/dicha/instagram.svg",
  facebook: "/images/dicha/facebook.svg",
  thumb: "/images/dicha/thumb.png",
  img: "/images/dicha/square-img.png"
}

import { metatags } from "@sveltech/routify"

metatags.title = "Dicha | Svelteception"
metatags.description = "Isekai landing page UI by Dicha"
</script>
