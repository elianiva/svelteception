<style>
.panel {
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin: 1.5rem;
  background-color: #ffffff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.075);
}

.panel__top {
  display: grid;
  align-items: center;
  padding: 0 0 1rem;
  border-bottom: 0.0625rem #d4d4d4 solid;
  margin-bottom: 1rem;
}

.mid__label,
.top__label {
  font-family: "Quicksand", sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
}

.top__credit {
  font-family: "Quicksand", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
}

.mid__usage {
  font-family: "Quicksand", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: #b0b0b0;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.mid__used {
  font-weight: 700;
  color: #000000;
  font-size: 1.5rem;
}

.panel__item {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.item__box {
  display: grid;
  grid-template-columns: 2.5rem 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  column-gap: 1rem;
  margin-top: 2rem;
}

.box__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #f7bfe0;
  grid-row: 1/-1;
}

.box__icon :global(.icon) {
  width: 1.5rem;
  height: 1.5rem;
}

.box__label {
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
}
</style>

<div class="panel">
  <div class="panel__top">
    <span class="top__label">Pulsa kamu</span>
    <span class="top__credit">Rp60.000</span>
    <Button>topup</Button>
  </div>
  <div class="panel__mid">
    <div class="mid__label">Total Kuota</div>
    <div class="mid__usage"><span class="mid__used">100GB</span>/190GB</div>
    <Bar amount="50" />
  </div>
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
      <span class="box__label"> Telepon </span>
      <span class="box__detail"> 30 Menit </span>
    </div>
  </div>
</div>

<script>
import Bar from "./Bar.svelte"
import Button from "./Button.svelte"
import Signal from "../icons/signal.svg"
import Message from "../icons/message.svg"
</script>
