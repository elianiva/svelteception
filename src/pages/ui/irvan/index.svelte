<style>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

.body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #88aaff;
}

.container {
  width: 100%;
  display: grid;
  grid-template-columns: 22rem 1fr;
  max-width: 1400px;
  max-height: 1200px;
  background-color: #ffffff;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
}

.main {
  padding: 3rem;
  font-family: "Lato", sans-serif;
}

.main__title {
  font-weight: 900;
  letter-spacing: 0.075em;
}

.main__nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: 4rem;
}

.main__input {
  display: flex;
  align-items: center;
  position: relative;
}

:global(.main__search) {
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  color: #b0b0b0;
  left: 1rem;
}

.main__input input {
  width: 100%;
  border: none;
  padding: 1rem;
  padding-left: 3rem;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  font-size: 1.125rem;
  outline: none;
}

.main__input input::placeholder {
  color: #b0b0b0;
}

.main__header {
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.header__title {
  font-size: 1.5rem;
  font-weight: 700;
}

.header__progress {
  display: grid;
  grid-template-columns: 2rem 2rem 1fr;
  height: 2rem;
  gap: 1rem;
  align-items: center;
}

.header__icon {
  padding: 0.25rem;
  border-radius: 1rem;
  background-color: #e9efff;
  color: #506cb7;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all ease-out 0.2s;
}

.header__icon:hover {
  filter: brightness(0.95);
}

.header__bar {
  position: relative;
  width: 90%;
  height: 0.5rem;
  border-radius: 0.25rem;
  overflow: hidden;
  background-color: #efefef;
  justify-self: end;
}

.header__bar::before {
  position: absolute;
  content: "";
  display: block;
  background-color: #4765b5;
  top: 0;
  left: 0;
  bottom: 0;
  width: 75%;
  border-radius: 0.25rem;
}

.main__books {
  display: flex;
  margin-top: 2rem;
  gap: 2rem;
}

.main__exclusive {
  margin-top: 1rem;
}

.exclusive__title {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
}
</style>

<div class="body">
  <div class="container">
    <Sidebar />
    <main class="main">
      <div class="main__nav">
        <h1 class="main__title">Explore</h1>
        <div class="main__input">
          <Search class="main__search" />
          <input type="text" placeholder="Find the book" />
        </div>
      </div>
      <div class="main__content">
        <div class="main__header">
          <span class="header__title">Popular Now</span>
          <div class="header__progress">
            <div class="header__icon">
              <ChevronLeft />
            </div>
            <div class="header__icon">
              <ChevronRight />
            </div>
            <div class="header__bar"></div>
          </div>
        </div>
        <div class="main__books">
          {#each books as book}
            <Book
              img="{book.img}"
              title="{book.title}"
              rating="{book.rating}"
              background="{book.background}"
            />
          {/each}
        </div>
        <div class="main__exclusive">
          <span class="exclusive__title">Exclusives</span>
          <ExclusiveCard
            img="/images/irvan/camino-winds.png"
            title="Camino Winds"
            author="John Grisham"
            reviews="{246}"
            rating="{4.5}"
            categories="{['thriller', 'action']}"
          />
        </div>
      </div>
    </main>
  </div>
</div>

<script>
import Sidebar from "./_components/Sidebar.svelte"
import Book from "./_components/Book.svelte"
import ChevronRight from "./icons/chevron-right.svg"
import ChevronLeft from "./icons/chevron-left.svg"
import Search from "./icons/search.svg"
import ExclusiveCard from "./_components/ExclusiveCard.svelte"

const books = [
  {
    title: "My Own Words",
    rating: 4.5,
    background: "#F0EDF4",
    img: "/images/irvan/my-own-words.png"
  },
  {
    title: "Life is What You Make",
    rating: 4.2,
    background: "#F4EDEF",
    img: "/images/irvan/life-is-what-you-make.png"
  },
  {
    title: "Red White & Royal Blue",
    rating: 4.4,
    background: "#FDEDF7",
    img: "/images/irvan/red-white-royal-blue.png"
  },
  {
    title: "The Rudest Book Ever",
    rating: 4.6,
    background: "#F2F4ED",
    img: "/images/irvan/the-rudest-book-ever.png"
  },
  {
    title: "Cracking The Coding Interview",
    rating: 4.6,
    background: "#EDF4F3",
    img: "/images/irvan/cracking-the-coding-interview.png"
  }
]
</script>
