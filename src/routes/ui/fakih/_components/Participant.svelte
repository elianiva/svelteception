<style>
.part {
  position: relative;
  background-color: #ffffff;
  grid-column: 3/4;
  grid-row: 3/4;
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.08);
  color: #2a2a2a;
  margin-bottom: -4rem;
}

.part__title {
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  font-size: 1.125rem;
}

.part__search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border: 0.125rem solid #6a4bff;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

.part__input {
  border: none;
  background: none;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  width: 15rem;
}

.part__search :global(.icon) {
  width: 1.5rem;
  height: 1.5rem;
  color: #6a4bff;
}

.people {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
  align-items: center;
  font-family: "Poppins", sans-serif;
  color: #2a2a2a;
}

.people__num {
  margin-right: 0.5rem;
}

.people__img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 0.125rem #00c9b8 solid;
  object-fit: cover;
}

.people__name {
  font-weight: 600;
  font-size: 0.8rem;
}

.part__slider {
  position: absolute;
  background-color: #a4b6e1;
  width: 0.5rem;
  right: 1rem;
  top: 7.5rem;
  bottom: 2rem;
  border-radius: 0.25rem;
}

.part__slider::before {
  content: "";
  position: absolute;
  left: 0;
  right: -0.05rem;
  top: 0;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: #6a4bff;
}
</style>

<div class="part">
  <span class="part__title">Participant</span>
  <div class="part__search">
    <input class="part__input" type="text" placeholder="Search" />
    <Search class="icon" />
  </div>
  <div class="part__people">
    <div class="people">
      <span class="people__num">1</span>
      <img class="people__img" src="/images/fakih/nick.png" alt="" />
      <span class="people__name">Faka Aminoff</span>
    </div>
    <div class="people">
      <span class="people__num">2</span>
      <img class="people__img" src="/images/fakih/mike.png" alt="" />
      <span class="people__name">Tatiana Korsgaard</span>
    </div>
    <div class="people">
      <span class="people__num">3</span>
      <img class="people__img" src="/images/fakih/jesse.png" alt="" />
      <span class="people__name">Anika Septimus</span>
    </div>
  </div>
  <div class="part__slider" />
</div>

<script>
import Search from "../icons/search.svg"
</script>
