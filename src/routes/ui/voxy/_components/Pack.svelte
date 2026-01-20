<style>
.pack__box {
  background-color: #ffffff;
  margin-top: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.075);
  display: grid;
  grid-template-columns: 1fr 3rem 3rem;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 1rem;
  overflow: hidden;
}

.box__label {
  display: flex;
  align-items: center;
  padding-left: 1rem;
  grid-column: 1/2;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
}

.box__amount {
  display: flex;
  align-items: center;
  grid-column: 2/3;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
}

.box__up {
  width: 1.5rem;
  height: 1.5rem;
  align-self: center;
  border: none;
  background-color: #fcd9ee;
  margin-left: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #e950ad;
}

.box__up :global(.icon) {
  width: 1rem;
  height: 1rem;
}

.box__price,
.box__cta {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  height: 3rem;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
}

.box__price {
  grid-column: 1/2;
  grid-row: 2/3;
  background-color: #000000;
}

.box__cta {
  grid-column: 2/4;
  grid-row: 2/3;
  background-color: #ca4198;
  border: none;
}
</style>

<div class="pack__box">
  <span class="box__label">{name}</span>
  <span class="box__amount">{amount}</span>
  <button class="box__up">
    <Up class="icon" />
  </button>
  <div class="box__price">Rp {price}</div>
  <button class="box__cta">BELI</button>
</div>

<script>
import Up from "../icons/up.svg"

export let name, amount, price
</script>
