<style>
.panel {
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 2rem 2rem 4rem 1fr;
  column-gap: 0.5rem;
  margin: 1.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.075);
}

.panel__label {
  grid-column: 1/2;
  grid-row: 1/2;
  font-family: "Quicksand", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
}

.panel__arrow {
  grid-column: 2/3;
  grid-row: 1/2;
  justify-self: flex-end;
  border: none;
  background: none;
  cursor: pointer;
}

.panel__arrow :global(.arrow__icon) {
  width: 1.25rem;
  height: 1.25rem;
  color: #eb008b;
}

.panel__min {
  grid-column: 1/2;
  grid-row: 2/3;
  font-family: "Quicksand", sans-serif;
}

.panel__max {
  grid-column: 2/3;
  grid-row: 2/3;
  justify-self: flex-end;
  font-family: "Quicksand", sans-serif;
}

.panel :global(.bar) {
  grid-column: 1/-1;
}

.panel__item {
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 2rem;
}

.item__box {
  position: relative;
  justify-self: start;
}

.item__box:not(:first-child)::before {
  position: absolute;
  content: "";
  width: 0.0625rem;
  height: 4rem;
  left: -1.25rem;
  background-color: #efefef;
}

.box__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #f7bfe0;
}

.box__label {
  display: block;
  font-family: "Quicksand", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 1rem;
}

.box__detail {
  display: block;
  font-family: "Quicksand", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.25rem;
}

.box__icon :global(.icon) {
  width: 1.5rem;
  height: 1.5rem;
}
</style>

<div class="panel">
  <span class="panel__label">Total kuota</span>
  <button class="panel__arrow">
    <Right class="arrow__icon" />
  </button>
  <span class="panel__min">100GB</span>
  <span class="panel__max">190GB</span>
  <Bar amount="65" />
  <div class="panel__item">
    <div class="item__box">
      <div class="box__icon">
        <Signal class="icon" />
      </div>
      <span class="box__label"> Telepon </span>
      <span class="box__detail"> 30 Menit </span>
    </div>
    <div class="item__box">
      <div class="box__icon">
        <Message class="icon" />
      </div>
      <span class="box__label"> SMS </span>
      <span class="box__detail"> 150 SMS </span>
    </div>
    <div class="item__box">
      <div class="box__icon">
        <Cast class="icon" />
      </div>
      <span class="box__label"> Pulsa </span>
      <span class="box__detail"> Rp.60.000 </span>
    </div>
  </div>
</div>

<script>
import Right from "../icons/right.svg"
import Signal from "../icons/signal.svg"
import Message from "../icons/message.svg"
import Cast from "../icons/cast.svg"
import Bar from "./Bar.svelte"
</script>
