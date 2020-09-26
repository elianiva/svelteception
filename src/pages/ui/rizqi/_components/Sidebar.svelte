<style>
.sidebar {
  background-color: #efefef;
  padding: 0 2rem;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
  padding: 1rem;
}

.topbar__icon {
  width: 1.5rem;
  height: 1.5rem;
}

.topbar__order {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: #fcd561;
  font-weight: 600;
}

.topbar__img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
}

.title {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.75rem;
  margin: 2rem 0 1rem;
  display: block;
}

.sidecard {
  padding: 1rem;
  background-color: #6455c2;
  border-radius: 1rem;
}

.sidecard span {
  display: block;
  color: #ffffff;
}

.sidecard__name {
  color: #9d92e2;
}

.sidecard__price {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1.5rem 0;
}

.sidecard__number {
  letter-spacing: 0.25em;
  color: #9d92e2;
}

.orders {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.price {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
}

.price__title {
  font-weight: 600;
}

.price__label {
  font-size: 2rem;
  font-weight: 700;
}

.button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fcd561;
  color: #484848;
  padding: 1rem;
  border-radius: 1rem;
  border: none;
  margin-top: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
  cursor: pointer;
}

.button:hover {
  filter: brightness(1.1);
}

.button__arrow {
  position: absolute;
  width: 1rem;
  height: 1rem;
  right: 1rem;
}
</style>

<aside class="sidebar">
  <div class="topbar">
    <img class="topbar__icon" src="{images.heart}" alt="" />
    <span class="topbar__order">3</span>
    <img class="topbar__img" src="{images.gigachad}" alt="" />
  </div>
  <span class="title">Pesanan Saya</span>
  <div class="sidecard">
    <span class="sidecard__name">Mr. Rizqi</span>
    <span class="sidecard__price">Rp. 1.000.000,-</span>
    <span class="sidecard__number">3758**********8913</span>
  </div>
  <div class="orders">
    <OrderItem
      src="{images.cheese}"
      qty="3"
      name="4 Cheese Pizza"
      price="520"
      food="{true}"
    />
    <OrderItem
      src="{images.juice}"
      qty="4"
      name="Jus Mangga"
      price="60"
      food="{true}"
    />
    <OrderItem
      src="{images.salad}"
      qty="2"
      name="Salad Sayur"
      price="30"
      food="{true}"
    />
    <OrderItem
      src="{images.car}"
      name="Jl. Bangke no 13..."
      price="Gratis"
      food="{false}"
    />
  </div>
  <div class="price">
    <span class="price__title">Total: </span>
    <span class="price__label">Rp 690.000</span>
  </div>
  <button class="button">
    Pesan
    <ArrowIcon
      width="1rem"
      height="1rem"
      style="position: absolute; right: 1rem"
    />
  </button>
</aside>

<script>
import OrderItem from "./OrderItem.svelte"
import ArrowIcon from "../icons/arrow.svg"

const images = {
  gigachad: "/images/rizqi/gigachad.jpg",
  heart: "/images/rizqi/heart.svg",
  cheese: "/images/rizqi/cheese.jpg",
  juice: "/images/rizqi/juice.jpg",
  salad: "/images/rizqi/salad.jpg",
  car: "/images/rizqi/car.svg"
}
</script>
