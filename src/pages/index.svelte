<style>
:global(#routify-app) {
  min-height: 100%;
}

:global(*) {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:global(html) {
  height: 100%;
}

:global(body) {
  height: 100%;
  background-color: #212121;
  background-image: url("/images/global/bg.svg");
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1rem;
  height: 100%;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30rem;
}

.hero__heading {
  font-size: calc(4vw + 1rem);
  font-weight: 800;
  text-align: center;
  color: #b0bec5;
  font-family: "Fira Code", monospace;
  margin-bottom: 2rem;
}

.some {
  color: #82aaff;
  text-decoration: none;
}

.every {
  color: #f07178;
  text-decoration: none;
}

.comma {
  color: #616161;
}

.purple {
  color: #c792ea;
}

.red {
  color: #f07178;
}

.yellow {
  color: #ffcb6b;
}

.blue {
  color: #82aaff;
}

.hero__code {
  overflow-x: auto;
  max-width: 100%;
  color: #b0bec5;
  font-family: "Fira Code", monospace;
  font-size: 1.25rem;
  background-color: #1a1a1a;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.5);
}

.content {
  padding: 1rem;
  background-color: #323232;
  border-radius: 0.5rem;
  margin-bottom: 4rem;
}

.content__cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  margin: 0 auto;
  gap: 1rem;
}

@media only screen and (min-width: 600px) {
  .content__cards:hover + div {
    filter: brightness(0.8);
  }
}
</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap"
  />
</svelte:head>

<div class="container">
  <div class="hero">
    <h1 class="hero__heading">
      Three of <br />
      <a
        href="https://github.com/elianiva/three-of-something"
        target="_blank"
        rel="norel noreferrer "
        class="some"
      >&lbrace;Some</a><span class="comma">,</span>
      <a
        href="https://nikarashihatsu.github.io/three-of-everything/"
        target="_blank"
        rel="norel noreferrer "
        class="every"
      >Every&rbrace;</a>thing
    </h1>
    <pre class="hero__code"><span class="purple">design</span>.<span
        class="red"
      >transform(</span><span class="yellow">result</span> ={'>'} <span
        class="yellow"
      >result</span>.<span class="blue">code()</span><span class="red">)</span></pre>
  </div>
  <section class="content">
    <div class="content__cards">
      <Card
        title="Malam Bujang"
        type="mobile"
        path="./ui/adam"
        designer="Adam"
        link="https://www.facebook.com/erst.madatayadih"
        src="{images.adam}"
      />
      <Card
        title="Arceru"
        type="desktop"
        path="./ui/aghits"
        designer="Aghits"
        link="https://github.com/nikarashihatsu"
        src="{images.aghits}"
      />
      <Card
        title="Isekai"
        type="desktop"
        path="./ui/dicha"
        designer="Dicha"
        link="https://github.com/elianiva"
        src="{images.dicha}"
      />
      <Card
        title="MyKantin"
        type="desktop"
        path="./ui/rizqi"
        designer="Rizqi"
        link="https://dribbble.com/sirizqi"
        src="{images.rizqi}"
      />
    </div>
  </section>
  <About />
</div>

<script>
import { metatags } from "@sveltech/routify"
import Card from "./_components/Card.svelte"
import About from "./_components/About.svelte"
let images = {
  adam: "/images/adam/cover.jpg",
  aghits: "/images/aghits/cover.jpeg",
  dicha: "/images/dicha/cover.png",
  rizqi: "/images/rizqi/cover.png"
}
metatags.title = "Home | Three of Something"
metatags.description =
  "Website to keep all of the result of a small challenge that I did with my friend."
</script>
