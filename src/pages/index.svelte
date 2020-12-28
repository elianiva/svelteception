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
  background-color: #171c26;
}

:global(html)::-webkit-scrollbar-thumb {
  background-color: #3b465a;
}

:global(html)::-webkit-scrollbar {
  background-color: #20263a;
  width: 0.75rem;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  height: 100%;
  padding-bottom: 4rem;
}

.hero {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  background-color: #20263a;
  min-height: 32rem;
}

.hero__heading {
  width: 100%;
  margin-top: 4rem;
  font-size: clamp(1rem, calc(2vw + 1.5rem), 3rem);
  line-height: clamp(1.5rem, calc(4vw + 3rem), 8rem);
  color: #cbccc6;
  font-family: "Major Mono Display", monospace;
  text-transform: uppercase;
  text-shadow: 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.25);
  text-align: center;
  letter-spacing: 0.05em;
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
  position: relative;
  z-index: 10;
  overflow-x: auto;
  max-width: 100%;
  color: #cbccc6;
  font-family: "Iosevka", monospace;
  font-size: 1.25rem;
  background-color: #101521;
  padding: 1rem;
  text-transform: lowercase;
  margin: 2rem 0;
}

.content {
  position: relative;
  z-index: 5;
  padding: 1rem;
  margin-bottom: 4rem;
  margin-top: -12rem;
}

.content__cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  margin: 0 auto;
  gap: 1rem;
}

.break {
  display: block;
}

@media only screen and (min-width: 600px) {
  :global(.content__cards:hover div) {
    filter: brightness(0.95);
  }
  .break {
    display: none;
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

<div class="hero">
  <h1 class="hero__heading">
    S
    <span class="red">V</span>
    E L T E
    <br class="break" />
    C E
    <span class="blue">P</span>
    T I O
    <span class="purple">N</span>
  </h1>
  <pre class="hero__code"><span class="purple">design</span>.<span
      class="red"
    >transform(</span><span class="yellow">result</span> ={'>'} <span
      class="yellow"
    >result</span>.<span class="blue">code()</span><span
      class="red"
    >)</span></pre>
</div>
<div class="container">
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
import { metatags } from "@roxi/routify"

metatags.title = "Home | Svelteception"
metatags.description =
  "Website to keep all of the result of a small challenge that I did with my friend."

let designs = [
  {
    title: "Malam Bujang",
    type: "mobile",
    path: "./ui/adam",
    designer: "Adam",
    link: "https://www.facebook.com/erst.madatayadih",
    src: "/images/adam/cover.webp"
  },
  {
    title: "Arceru",
    type: "desktop",
    path: "./ui/aghits",
    designer: "Aghits",
    link: "https://github.com/nikarashihatsu",
    src: "/images/aghits/cover.webp"
  },
  {
    title: "Isekai",
    type: "desktop",
    path: "./ui/dicha",
    designer: "Dicha",
    link: "https://github.com/elianiva",
    src: "/images/dicha/cover.webp"
  },
  {
    title: "MyKantin",
    type: "desktop",
    path: "./ui/rizqi",
    designer: "Rizqi",
    link: "https://dribbble.com/sirizqi",
    src: "/images/rizqi/cover.webp"
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
    src: "/images/irvan/cover.webp"
  },
  {
    title: "Cofeed",
    type: "desktop",
    path: "./ui/choirul",
    designer: "Choirul",
    link: "https://dribbble.com/choirulsyafril",
    src: "/images/choirul/cover.webp"
  },
  {
    title: "Wangkong",
    type: "desktop",
    path: "./ui/ariq",
    designer: "Ariq",
    link: "https://dribbble.com/ariqfr_",
    src: "/images/ariq/cover.webp"
  },
  {
    title: "Bettafish",
    type: "desktop",
    path: "./ui/zidan",
    designer: "Zidan",
    link: "https://www.instagram.com/fiveui_/",
    src: "/images/zidan/cover.webp"
  },
  {
    title: "Casual Street",
    type: "desktop",
    path: "./ui/rahmat",
    designer: "Rahmat",
    link: "https://www.facebook.com/rahmat.rizalwan.52/",
    src: "/images/rahmat/cover.webp"
  },
  {
    title: "Customer Desk Management",
    type: "desktop",
    path: "./ui/febrian",
    designer: "Febrian",
    link: "https://dribbble.com/RyanFebrian21",
    src: "/images/febrian/cover.webp"
  },
  {
    title: "Yumemi Riamu",
    type: "desktop",
    path: "./ui/rahmat-2",
    designer: "Rahmat",
    link: "https://www.facebook.com/rahmat.rizalwan.52/",
    src: "/images/rahmat/cover-2.webp"
  },
  {
    title: "Belajar App",
    type: "desktop",
    path: "./ui/fakih",
    designer: "Fakih",
    link: "https://dribbble.com/fakaa",
    src: "/images/fakih/cover.webp"
  },
  {
    title: "Task Management Dashboard",
    type: "desktop",
    path: "./ui/manoj",
    designer: "Manoj",
    link: "https://dribbble.com/manojrajput",
    src: "/images/manoj/cover.webp"
  },
  {
    title: "Instagram Desktop Redesign",
    type: "desktop",
    path: "./ui/naufal",
    designer: "Naufal",
    link: "https://dribbble.com/naufalhanifr",
    src: "/images/naufal/cover.webp"
  }
]
</script>
