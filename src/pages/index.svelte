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
  background-color: #1f2430;
}

.container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 1rem;
  height: 100%;
}

.hero {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 30rem;
  overflow-x: hidden;
  margin-top: 4rem;
}

.hero__heading {
  width: 100%;
  font-size: clamp(1rem, calc(4vw + 1.25rem), 4.5rem);
  line-height: clamp(1.5rem, calc(4vw + 3rem), 8rem);
  color: #cbccc6;
  font-family: "Major Mono Display", monospace;
  text-transform: uppercase;
  text-shadow: 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.25);
  text-align: center;
  letter-spacing: 0.05em;
}

.comma {
  color: #616161;
}

.purple {
  color: #d4bfff;
  text-decoration: none;
}

.red {
  color: #f28779;
  text-decoration: none;
}

.yellow {
  color: #ffd580;
}

.blue {
  color: #73d0ff;
  text-decoration: none;
}

.hero__code {
  overflow-x: auto;
  max-width: 100%;
  color: #cbccc6;
  font-family: "Iosevka", monospace;
  font-size: 1.25rem;
  background-color: #101521;
  padding: 1rem;
  border-radius: 0.25rem;
  text-transform: lowercase;
  margin: 4rem 0;
}

.content {
  padding: 1rem;
  background-color: #101521;
  border-radius: 0.5rem;
  margin-bottom: 4rem;
}

.content__cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  margin: 0 auto;
  gap: 1rem;
}

@media only screen and (min-width: 600px) {
  :global(.content__cards:hover div) {
    filter: brightness(0.95);
  }
}
</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap"
  />
</svelte:head>

<div class="container">
  <div class="hero">
    <h1 class="hero__heading">
      Three of
      <br />
      <a
        href="https://github.com/elianiva/three-of-something"
        target="_blank"
        rel="norel noreferrer "
        class="blue"
      >&lbrace;Some</a><span class="comma">,</span>
      <a
        href="https://github.com/nikarashihatsu/three-of-everything"
        target="_blank"
        rel="norel noreferrer "
        class="red"
      >Every</a><span class="comma">,</span>
      <a
        href="https://github.com/LynSotera/three-of-nothing"
        target="_blank"
        rel="norel noreferrer "
        class="purple"
      >No&rbrace;</a>
      <br />
      thing
    </h1>
    <pre class="hero__code"><span class="purple">design</span>.<span
        class="red"
      >transform(</span><span class="yellow">result</span> ={'>'} <span
        class="yellow"
      >result</span>.<span class="blue">code()</span><span
        class="red"
      >)</span></pre>
  </div>
  <section class="content">
    <div class="content__cards">
      {#each designs as design}
        <Card
          title="{design.title}"
          type="{design.type}"
          path="{design.path}"
          designer="{design.designer}"
          link="{design.link}"
          src="{design.src}"
        />
      {/each}
    </div>
  </section>
  <About />
</div>

<script>
import Card from "./_components/Card.svelte"
import About from "./_components/About.svelte"
import { metatags } from "@sveltech/routify"

metatags.title = "Home | Three of Something"
metatags.description = "Website to keep all of the result of a small challenge that I did with my friend."

let designs = [
  {
    title: "Malam Bujang",
    type: "mobile",
    path: "./ui/adam",
    designer: "Adam",
    link: "https://www.facebook.com/erst.madatayadih",
    src: "/images/adam/cover.jpg"
  },
  {
    title: "Arceru",
    type: "desktop",
    path: "./ui/aghits",
    designer: "Aghits",
    link: "https://github.com/nikarashihatsu",
    src: "/images/aghits/cover.jpeg"
  },
  {
    title: "Isekai",
    type: "desktop",
    path: "./ui/dicha",
    designer: "Dicha",
    link: "https://github.com/elianiva",
    src: "/images/dicha/cover.png"
  },
  {
    title: "MyKantin",
    type: "desktop",
    path: "./ui/rizqi",
    designer: "Rizqi",
    link: "https://dribbble.com/sirizqi",
    src: "/images/rizqi/cover.png"
  },
  {
    title: "Online Course",
    type: "desktop",
    path: "./ui/setiadi",
    designer: "Setiadi",
    link: "https://dribbble.com/setiadi_p",
    src: "/images/setiadi/cover.webp"
  },
  {
    title: "Book Store",
    type: "desktop",
    path: "./ui/irvan",
    designer: "Irvan",
    link: "https://dribbble.com/irvan_moses",
    src: "/images/irvan/cover.png"
  },
  {
    title: "Cofeed",
    type: "desktop",
    path: "./ui/choirul",
    designer: "Choirul",
    link: "https://dribbble.com/choirulsyafril",
    src: "/images/choirul/cover.png"
  }
]
</script>
