<style>
* {
  color: #282828;
}

main {
  padding-bottom: 2rem;
}

.body {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  display: grid;
  width: 100%;
  max-width: 1920px;
  grid-template-columns: 1fr 22rem;
  background-color: #ffffff;
}

.header {
  padding: 1rem;
  display: flex;
  margin: 2rem 2rem 0;
  align-items: center;
  border-radius: 1rem;
  background-color: #fff7ed;
}

.header__illust {
  width: 20rem;
  height: 8rem;
  margin-left: 4rem;
}

.header__title,
.header__subtitle {
  color: #fb6c38;
}

.header__title {
  font-size: 2rem;
  font-weight: 700;
}

.header__subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  display: block;
}

.category__heading {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
}

.category__title,
.popular__title {
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
}

.category__button {
  font-family: "Poppins", sans-serif;
  background-color: #fb6c38;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  color: #ffffff;
  cursor: pointer;
}

.category__button:hover {
  filter: brightness(1.1);
}

.category__items {
  width: 100%;
  height: 10rem;
  display: flex;
  gap: 1rem;
  padding: 1rem 2rem;
}

.popular {
  width: 100%;
}

.popular__heading {
  padding: 1rem 2rem;
}

.popular__items {
  width: 100%;
  display: flex;
  gap: 1rem;
  padding: 1rem 2rem;
}
</style>

<div class="body">
  <div class="container">
    <main>
      <Navbar />
      <div class="header">
        <img
          class="header__illust"
          src="../images/rizqi/food-icon.svg"
          alt=""
        />
        <span class="header__title">
          Promo Hari Ini <span class="header__subtitle">Perut kenyang, hati
            senang</span>
        </span>
      </div>
      <Pagination
        pages="{[{ active: true }, { active: false }, { active: false }, { active: false }, { active: false }]}"
      />
      <div class="category">
        <div class="category__heading">
          <span class="category__title">Kategori</span>
          <button class="category__button">Lebih Lengkap</button>
        </div>
        <div class="category__items">
          <CategoryCard src="{images.all}" title="Semua" />
          <CategoryCard src="{images.pizza}" title="Pizza" />
          <CategoryCard src="{images.burger}" title="Burger" />
          <CategoryCard src="{images.juice}" title="Jus" />
        </div>
      </div>
      <div class="popular">
        <div class="popular__heading">
          <span class="popular__title">Populer</span>
        </div>
        <div class="popular__items">
          <PopularCard
            src="{images.cheese}"
            title="4 Cheese"
            href="#"
            duration="25-30"
            score="4.7"
            price="{130000}"
          />
          <PopularCard
            src="{images.philadelphia}"
            title="Philadelphia"
            href="#"
            duration="30-35"
            score="4.5"
            price="{250000}"
          />
          <PopularCard
            src="{images.mozarella}"
            title="Mozarella"
            href="#"
            duration="40-46"
            score="4.6"
            price="{175000}"
          />
        </div>
      </div>
    </main>
    <Sidebar />
  </div>
</div>

<script>
import Navbar from "./_components/Navbar.svelte"
import Pagination from "./_components/Pagination.svelte"
import CategoryCard from "./_components/CategoryCard.svelte"
import PopularCard from "./_components/PopularCard.svelte"
import Sidebar from "./_components/Sidebar.svelte"

const images = {
  all: "../images/rizqi/foods.jpg",
  pizza: "../images/rizqi/pizza.jpg",
  burger: "../images/rizqi/burger.jpg",
  juice: "../images/rizqi/juice.jpg",
  cheese: "../images/rizqi/cheese.jpg",
  philadelphia: "../images/rizqi/philadelphia.jpg",
  mozarella: "../images/rizqi/mozarella.jpg",
  gigachad: "../images/rizqi/gigachad.jpg",
  heart: "../images/rizqi/heart.svg"
}
</script>
