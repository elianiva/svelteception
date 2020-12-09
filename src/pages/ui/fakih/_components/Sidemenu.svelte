<style>
.side {
  position: relative;
  padding: 2rem 0;
  background-color: #6a4bff;
  border-radius: 1rem;
}

.side__title {
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.side__title h1 {
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
}

.side__title span {
  font-weight: 400;
}

.side__title :global(.side__icon) {
  width: 2rem;
  height: 2rem;
}

.side__items {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.side__item {
  position: relative;
  color: #a4b6e1;
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  font-size: 1.25rem;
  font-weight: 600;
  padding: 0.5rem 2rem;
  text-decoration: none;
  transition: color ease-out 0.2s;
}

.side__item:hover {
  color: #ffffff;
}

.side__item.active {
  background-color: #f2f2f2;
  color: #6a4bff;
  border-radius: 2rem 0 0 2rem;
  margin-right: -2rem;
  padding-left: 1rem;
}

.side__item.active :global(.round-top) {
  width: 1rem;
  height: 1rem;
  position: absolute;
  right: 1rem;
  top: -1rem;
  z-index: 10;
  color: #f2f2f2;
}

.side__item.active :global(.round-bottom) {
  width: 1rem;
  height: 1rem;
  position: absolute;
  right: 1rem;
  bottom: -1rem;
  z-index: 10;
  color: #f2f2f2;
  transform: rotateZ(-90deg);
}

.side__item :global(.icon) {
  width: 1.5rem;
  height: 1.5rem;
}

.ad {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  left: 2rem;
  padding: 1rem;
  padding: 1rem;
  background-color: #ffffff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.08);
  height: 16rem;
  margin-top: 8rem;
  border-radius: 1rem;
}

.ad__title {
  display: block;
  font-family: "Poppins", sans-serif;
  text-align: center;
  font-weight: 600;
  font-size: 0.8rem;
  margin-top: 2rem;
}

.ad__saly-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.ad__saly {
  position: relative;
  width: 16rem;
  left: -2.5rem;
  top: 11.5rem;
}

.ad__goto {
  position: absolute;
  top: -2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: #6a4bff;
  border: 0.5rem solid #d4def5;
}

.ad__goto :global(.icon) {
  width: 1.5rem;
  height: 1.5rem;
}
</style>

<aside class="side">
  <div class="side__title">
    <Laptop class="side__icon" />
    <h1>Belajar.<span>care</span></h1>
  </div>
  <div class="side__items">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" class="side__item">
      <Fire class="icon" />
      Courses
    </a>
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" class="side__item">
      <Calendar class="icon" />
      Schedule
    </a>
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" class="side__item">
      <Puzzle class="icon" />
      Quizz
    </a>
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" class="side__item">
      <Discuss class="icon" />
      Discuss
    </a>
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" class="side__item active">
      <Round class="round-top" />
      <Graph class="icon" />
      Statistics
      <Round class="round-bottom" />
    </a>
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" class="side__item">
      <Setting class="icon" />
      Settings
    </a>
  </div>

  <div class="ad">
    <div class="ad__goto">
      <Right class="icon" />
    </div>
    <span class="ad__title">Download Apps <br /> version here!</span>
    <div class="ad__saly-wrapper">
      <img class="ad__saly" src="/images/fakih/saly.png" alt="" />
    </div>
  </div>
</aside>

<script>
import Laptop from "../icons/laptop.svg"
import Fire from "../icons/fire.svg"
import Calendar from "../icons/calendar.svg"
import Puzzle from "../icons/puzzle.svg"
import Discuss from "../icons/discuss.svg"
import Graph from "../icons/graph.svg"
import Setting from "../icons/gear.svg"
import Round from "../icons/rounded.svg"
import Right from "../icons/right.svg"
</script>
