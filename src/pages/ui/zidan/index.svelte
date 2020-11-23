<style>
.body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #88aaff;
}

.container {
  position: relative;
  height: 100vh;
  width: 100%;
  max-width: 1400px;
  max-height: 800px;
  overflow: hidden;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(328deg, #030432 0%, #386ca6 95%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.main {
  position: relative;
  margin-top: -2rem;
}

.main__subtitle {
  font-family: "Montserrat", sans-serif;
  color: #dddcdd;
  letter-spacing: 1rem;
  margin-left: 0.8em;
  font-size: 1.125rem;
}

.main__wrapper {
  display: flex;
}

.main__title {
  position: relative;
  font-family: "Montserrat", sans-serif;
  font-size: 15rem;
  line-height: 12rem;
  font-weight: 800;
  background: -webkit-linear-gradient(#dddcdd 60%, #677eb4 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.circle {
  position: absolute;
  left: -2rem;
  bottom: -2rem;
  width: 8rem;
  height: 8rem;
  border: 2rem #0051a0 solid;
  border-radius: 50%;
}

.circle-alt {
  position: absolute;
  right: -12rem;
  top: -6rem;
  width: 20rem;
  height: 20rem;
  border: 1.5rem #0051a0 solid;
  border-radius: 50%;
}

.main__title.special {
  position: relative;
  z-index: 5;
}

.desc {
  max-width: 30rem;
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  line-height: 1.75rem;
}

.desc__title {
  display: block;
  font-size: 1.25rem;
  color: #dddcdd;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  margin-bottom: 1rem;
}

.desc__highlight {
  color: #294f86;
  background-color: #dddcdd;
  padding: 0.25rem;
  border-radius: 0.25rem;
}

.desc__content {
  color: #dddcdd;
  font-family: "Open Sans", sans-serif;
}

.head {
  position: absolute;
  right: -16rem;
  top: -12rem;
  width: 40rem;
  z-index: 10;
}

.tail {
  position: absolute;
  right: -16rem;
  top: -12rem;
  width: 40rem;
}

.social {
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: #dddcdd;
}

:global(.social svg) {
  width: 2rem;
  height: 2rem;
}

.scroll {
  margin-top: -4rem;
  position: absolute;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: #dddcdd;
}

.scroll::after {
  content: "02";
  position: absolute;
  right: -2.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  color: #ffffff;
}

.scroll__bar {
  background-color: #7e96b2;
  height: 12rem;
  width: 0.25rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
}

.scroll__thumb {
  background-color: #ffffff;
  width: 100%;
  height: 4rem;
  border-radius: 1rem;
}

.bubble {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  cursor: pointer;
  transition: linear 2s, transform 0.2s;
}

.bubble--bust {
  transform: scale(1.8);
}
</style>

<div class="body">
  <div class="container" bind:this="{container}">
    <Navbar />
    <div class="main">
      <span class="main__subtitle">BETTAFISH</span>
      <div class="main__wrapper">
        <div class="circle"></div>
        <h1 class="main__title">FIS</h1><span
          class="main__title special"
        >H</span>
        <div class="circle-alt"></div>
      </div>
      <img class="head" src="/images/zidan/head.png" alt="head" />
      <img class="tail" src="/images/zidan/tail.png" alt="tail" />
    </div>
    <div class="scroll">
      <Up />
      <div class="scroll__bar">
        <div class="scroll__thumb"></div>
      </div>
      <Down />
    </div>
    <div class="social">
      <Facebook />
      <Instagram />
      <Twitter />
    </div>
    <div class="desc">
      <span class="desc__title">About The
        <span class="desc__highlight">Fish</span>
      </span>
      <p class="desc__content">
        Betta is a freshwater fish whose native habitat is in several countries
        in Southeast Asia. Including Indonesia, Thailand, Malaysia, Brunei
        Darussalam, Singapore, and Vietnam.
        <br />
        This fish has a unique shape and character and tends to be aggresive in
        defending its territory
      </p>
    </div>
  </div>
</div>

<script>
import Navbar from "./_components/Nav.svelte"
import Facebook from "./icons/fb.svg"
import Instagram from "./icons/ig.svg"
import Twitter from "./icons/tw.svg"
import Up from "./icons/up-circle.svg"
import Down from "./icons/down-circle.svg"
import { metatags } from "@sveltech/routify"

let container

metatags.title = "Zidan | Three of Something"
metatags.description = "Bettafish UI by Adam"
</script>
