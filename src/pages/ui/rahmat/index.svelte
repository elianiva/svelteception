<style>
.body {
  display: flex;
  position: relative;
  background-color: #121212;
  min-height: 100vh;
  min-width: 1800px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.container {
  min-width: 1800px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #ffffff;
  height: 30rem;
  background-image: url("/images/rahmat/texture.svg");
  background-repeat: repeat;
  overflow: hidden;
}

.inner-box {
  position: absolute;
  top: 2rem;
  left: 2rem;
  right: 2rem;
  bottom: 2rem;
  border: 0.2rem #fa7796 solid;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-wrapper {
  position: relative;
  height: 100%;
}

.main-img {
  position: relative;
  z-index: 10;
  top: -3rem;
  height: 49.75rem;
}

.pink {
  position: absolute;
  top: -4rem;
  left: calc(50% + 1rem);
  transform: translateX(-50%);
  width: 21rem;
  height: 21rem;
  background-color: #fa7796;
  border-radius: 50%;
  overflow: hidden;
}

.pink::before {
  content: "ignorant";
  font-family: "SegoeUI", serif;
  font-style: italic;
  font-size: 1.5rem;
  color: #7d7d7d;
  position: absolute;
  left: -2rem;
  top: 6.5rem;
  padding-left: 5rem;
  padding-right: 2rem;
  border-radius: 1.25rem;
  text-align: center;
  background-color: #ffffff;
  transform: rotateZ(45deg);
}

.pink::after {
  content: "";
  position: absolute;
  width: 11rem;
  height: 2rem;
  border-radius: 1rem;
  top: 10rem;
  left: 6rem;
  background-color: #ffffff;
  transform: rotateZ(45deg);
}

.blue {
  position: absolute;
  bottom: -5rem;
  right: 0;
  width: 25rem;
  height: 25rem;
  background-color: #5a9bd5;
  border-radius: 50%;
  overflow: hidden;
}

.blue::before {
  content: "cuteness";
  font-family: "SegoeUI", serif;
  font-style: italic;
  font-size: 1.5rem;
  color: #808080;
  position: absolute;
  bottom: 12.5rem;
  right: -4rem;
  padding-right: 4rem;
  padding-left: 1rem;
  border-radius: 1.25rem;
  text-align: center;
  background-color: #ffffff;
  transform: rotateZ(-45deg);
}

.blue::after {
  content: "";
  position: absolute;
  width: 11rem;
  height: 2rem;
  border-radius: 1rem;
  top: 13rem;
  right: 2.5rem;
  background-color: #ffffff;
  transform: rotateZ(-45deg);
}

.yellow {
  position: absolute;
  bottom: -4rem;
  left: 1rem;
  width: 20rem;
  height: 20rem;
  background-color: #f8e886;
  border-radius: 50%;
  overflow: hidden;
}

.yellow::before {
  content: "jealous";
  font-family: "SegoeUI", serif;
  font-style: italic;
  font-size: 1.5rem;
  color: #808080;
  position: absolute;
  bottom: 11rem;
  left: -4rem;
  padding-right: 4rem;
  padding-left: 4rem;
  border-radius: 1.25rem;
  text-align: center;
  background-color: #ffffff;
  transform: rotateZ(-45deg);
}

.yellow::after {
  content: "";
  position: absolute;
  width: 11rem;
  height: 2rem;
  border-radius: 1rem;
  top: 6.5rem;
  right: 8rem;
  background-color: #ffffff;
  transform: rotateZ(-45deg);
}

.left-thingy {
  position: absolute;
  left: -2rem;
  top: -2rem;
  width: 4rem;
  height: 4rem;
  border: 0.125rem #fa7796 solid;
}

.left-thingy::after {
  content: "";
  position: absolute;
  top: 75%;
  left: 100%;
  background-color: #fa7796;
  width: 10rem;
  height: 0.125rem;
}

.left-thingy__dot {
  position: absolute;
  right: -10rem;
  top: 75%;
  width: 0.5rem;
  height: 0.5rem;
  transform: rotateZ(45deg) translateY(-50%);
  background-color: #fa7796;
}

.right-thingy {
  position: absolute;
  right: -2rem;
  bottom: -2rem;
  width: 4rem;
  height: 4rem;
  border: 0.125rem #fa7796 solid;
}

.right-thingy::after {
  content: "";
  position: absolute;
  bottom: 75%;
  right: 100%;
  background-color: #fa7796;
  width: 10rem;
  height: 0.125rem;
}

.right-thingy__dot {
  position: absolute;
  left: -10rem;
  bottom: 75%;
  width: 0.5rem;
  height: 0.5rem;
  transform: rotateZ(45deg) translateY(50%);
  background-color: #fa7796;
}

.arrow-wrapper {
  position: relative;
  height: 10rem;
  width: 75%;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left-arrow {
  position: relative;
  width: 6rem;
  height: 6rem;
}

.left-arrow::after {
  content: "CASUAL";
  color: #7d7d7d;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 2rem;
  font-size: 2.5rem;
  font-weight: 600;
  font-family: "Comfortaa", sans-serif;
  letter-spacing: 0.25em;
}

.left-arrow__circle {
  height: 100%;
  width: 100%;
  border: 0.75rem #fa7796 solid;
  border-right: 0;
  border-top-left-radius: 3rem;
  border-bottom-left-radius: 3rem;
  box-sizing: border-box;
  clip-path: inset(0 40% 0 0);
}

.left-arrow__block {
  content: "";
  position: absolute;
  bottom: 0;
  left: 3rem;
  width: 5rem;
  height: 0.75rem;
  background-color: #fa7796;
}

.left-arrow__pointer {
  position: absolute;
  top: -0.6rem;
  left: 3.5rem;
  width: 2rem;
  height: 2rem;
  border-left: 1rem #fa7796 solid;
  border-right: 1rem transparent solid;
  border-bottom: 1rem transparent solid;
  border-top: 1rem transparent solid;
}

.right-arrow {
  position: relative;
  width: 6rem;
  height: 6rem;
}

.right-arrow::after {
  content: "STYLES";
  color: #7d7d7d;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 2rem;
  font-size: 2.5rem;
  font-weight: 600;
  font-family: "Comfortaa", sans-serif;
  letter-spacing: 0.25em;
}

.right-arrow__circle {
  height: 100%;
  width: 100%;
  border: 0.75rem #fa7796 solid;
  border-left: 0;
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
  box-sizing: border-box;
  clip-path: inset(0 0 0 40%);
}

.right-arrow__block {
  content: "";
  position: absolute;
  top: 0;
  right: 3rem;
  width: 5rem;
  height: 0.75rem;
  background-color: #fa7796;
}

.right-arrow__pointer {
  position: absolute;
  bottom: -0.6rem;
  right: 3.5rem;
  width: 2rem;
  height: 2rem;
  border-right: 1rem #fa7796 solid;
  border-left: 1rem transparent solid;
  border-bottom: 1rem transparent solid;
  border-top: 1rem transparent solid;
}

.left-box {
  position: absolute;
  left: 2rem;
  top: 6rem;
  width: 20rem;
}

.left-box__year {
  position: relative;
  height: 0.75rem;
  width: 2rem;
  background-color: #fa7796;
  margin-bottom: 2rem;
}

.left-box__year::before {
  content: "20";
  display: block;
  position: absolute;
  top: -2.125rem;
  left: 0;
  width: 4rem;
  line-height: 1.25rem;
  font-size: 2rem;
  background-color: #fa7796;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  color: #ffffff;
}

.left-box__year::after {
  content: "20";
  display: block;
  position: absolute;
  bottom: -2.125rem;
  left: 0;
  width: 4rem;
  line-height: 1.25rem;
  font-size: 2rem;
  background-color: #fa7796;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  color: #ffffff;
}

.left-box__text {
  transform: rotate(90deg);
  display: flex;
  flex-direction: column;
  margin-left: -17.5rem;
  margin-top: 20.5rem;
  font-family: "Montserrat", sans-serif;
  color: #808080;
}

.left-box__chapter {
  font-size: 1.75rem;
  line-height: 2rem;
  font-weight: 300;
  font-family: "M PLUS 1p", sans-serif;
  color: #a0a0a0;
}

.left-box__subtitle {
  font-size: 0.8rem;
  font-weight: 300;
  font-family: "M PLUS 1p", sans-serif;
  color: #a0a0a0;
}

.chapter__number {
  color: #5a9bd5;
}

.right-box {
  position: absolute;
  right: 0;
  top: 2rem;
}

.right-box__casual {
  background-color: #fa7796;
  color: #ffffff;
  padding: 0.25rem 1rem;
  position: relative;
  margin-bottom: 1rem;
}

.right-box__casual::after {
  content: "";
  position: absolute;
  top: 100%;
  right: 0;
  bottom: -0.5rem;
  left: 2rem;
  background-color: #f8e886;
}

.right-box__kana {
  font-family: "Noto Serif JP", serif;
  display: block;
  font-size: 1.5rem;
  line-height: 1.5rem;
}

.right-box__romaji {
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  font-size: 0.75rem;
  letter-spacing: 0.5em;
}

.right-box__chapter {
  display: block;
  font-size: 0.8rem;
  font-family: "M PLUS 1p", sans-serif;
  color: #121212;
}

.right-box__schedule-text {
  font-family: "Montserrat", sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  color: #b0b0b0;
  margin-left: 0.5rem;
}

.right-box__schedule {
  margin-left: 0.5rem;
  font-family: "Comfortaa", sans-serif;
}

.schedule__year {
  color: #555555;
  margin: 0.5rem 0;
  display: block;
}

.schedule__big-time {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  font-size: 2rem;
  font-weight: 200;
  color: #7d7d7d;
}

.first {
  position: relative;
}

.first::after {
  content: "";
  position: absolute;
  left: 1rem;
  top: 100%;
  height: 2rem;
  width: 0.125rem;
  background-color: #7d7d7d;
}

.hl {
  color: #5a9bd5;
  position: relative;
}

.hl::after {
  content: "✓";
  position: absolute;
  top: 50%;
  right: -1.75rem;
  transform: translateY(-50%);
  font-size: 0.75rem;
  width: 0.8rem;
  height: 0.8rem;
  background-color: #5a9bd5;
  color: #ffffff;
  border-radius: 50%;
}

.schedule__smol-time {
  display: flex;
  flex-direction: column;
  color: #7d7d7d;
  gap: 0.25rem;
  margin-top: 0.25rem;
}

.schedule__smol-time span {
  position: relative;
}

.schedule__smol-time span::after {
  content: "✓";
  position: absolute;
  top: 50%;
  right: 1.75rem;
  transform: translateY(-50%);
  font-size: 0.75rem;
  width: 0.8rem;
  height: 0.8rem;
  background-color: #5a9bd5;
  color: #ffffff;
  border-radius: 50%;
}

.schedule__smol-time span:last-child::before {
  content: "18";
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  font-size: 0.75rem;
  width: 0.8rem;
  height: 0.8rem;
  background-color: #5a9bd5;
  color: #ffffff;
  border-radius: 50%;
}

.right-box__palette {
  display: grid;
  grid-template-columns: repeat(3, 1.25rem);
  height: 1.25rem;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-left: 1.5rem;
}

.palette__blue {
  background-color: #5a9bd5;
  border-radius: 0.25rem;
}

.palette__pink {
  background-color: #fa7796;
  border-radius: 0.25rem;
}

.palette__yellow {
  background-color: #f8e886;
  border-radius: 0.25rem;
}

.links {
  position: absolute;
  right: 2rem;
  top: 0.5rem;
  display: flex;
  gap: 1rem;
}

.links div {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #fa7796;
  transform: rotate(45deg);
}

.links a {
  font-family: "Open Sans", sans-serif;
  color: #808080;
  font-size: 0.5rem;
  text-decoration: none;
  letter-spacing: 0.125em;
}
</style>

<div class="body">
  <div class="container">
    <div class="links">
      <a href="https://facebook.com/rahmat.rizalwan.52">
        https://facebook.com/rahmat.rizalwan.52
      </a>
      <div class="divider"></div>
      <a href="https://instagram.com/rahmat_rizalwan">
        https://instagram.com/rahmat_rizalwan
      </a>
    </div>
    <div class="inner-box">
      <div class="left-box">
        <div class="left-box__year"></div>
        <div class="left-box__text">
          <span class="left-box__chapter">
            <span class="chapter__number">210</span>
            第七第章
          </span>
          <span class="left-box__subtitle">
            漢字が難しいだよね。本当だよ！
          </span>
        </div>
      </div>
      <div class="left-thingy">
        <div class="left-thingy__dot"></div>
      </div>
      <div class="arrow-wrapper">
        <div class="left-arrow">
          <div class="left-arrow__pointer"></div>
          <div class="left-arrow__circle"></div>
          <div class="left-arrow__block"></div>
        </div>
        <div class="right-arrow">
          <div class="right-arrow__pointer"></div>
          <div class="right-arrow__circle"></div>
          <div class="right-arrow__block"></div>
        </div>
      </div>
      <div class="right-thingy">
        <div class="right-thingy__dot"></div>
      </div>
      <div class="right-box">
        <div class="right-box__casual">
          <span class="right-box__kana">カジュアル</span>
          <span class="right-box__romaji">STREET</span>
        </div>
        <div class="right-box__smol-text">
          <span class="right-box__chapter">「知らない」第六章第四</span>
          <span class="right-box__schedule-text">The schedule</span>
        </div>
        <div class="right-box__schedule">
          <span class="schedule__year">2020</span>
          <div class="schedule__big-time">
            <span class="first">06 ,<span class="hl">30</span></span>
            <span>07 ,<span class="hl">03</span></span>
          </div>
          <div class="schedule__smol-time">
            <span>09:00 - 16:00</span>
            <span>09:00 - 12:00</span>
          </div>
        </div>
        <div class="right-box__palette">
          <div class="palette__yellow"></div>
          <div class="palette__pink"></div>
          <div class="palette__blue"></div>
        </div>
      </div>
    </div>
    <div class="img-wrapper">
      <img class="main-img" src="/images/rahmat/main-img.png" alt="" />
      <div class="pink"></div>
      <div class="yellow"></div>
      <div class="blue"></div>
    </div>
  </div>
</div>

<script>
import { metatags } from "@sveltech/routify"
metatags.title = "Rahmat | Svelteception"
metatags.description = "Casual Street by Rahmat"
</script>
