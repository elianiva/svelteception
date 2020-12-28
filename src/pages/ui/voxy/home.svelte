<style>
.hero {
  background-image: linear-gradient(
    to bottom right,
    #cc0b7e 20%,
    #ca268a 20%,
    #ca268a 40%,
    #da158b 40%,
    #da158b 60%,
    #cf4b9f 60%,
    #cf4b9f 80%,
    #c9559f 80%,
    #c9559f 100%
  );
  height: 11rem;
  padding: 2rem 1.5rem;
  margin-bottom: 4rem;
}

.hero__profile {
  display: grid;
  grid-template-columns: 1fr 4rem;
  grid-template-rows: repeat(2, 1fr);
  gap: 0.5rem;
  align-items: center;
}

.profile__name {
  font-size: 1.5rem;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  color: #ffffff;
}

.profile__greet {
  font-size: 1.25rem;
  font-family: "Quicksand", sans-serif;
  color: #ffffff;
}

.profile__img {
  grid-column: 2/3;
  grid-row: 1/3;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  box-shadow: 0 0.75rem 1rem rgba(0, 0, 0, 0.2);
}

.hero__detail {
  display: grid;
  grid-template-columns: 1fr 8rem;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  row-gap: 0.5rem;
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.075);
  margin-top: 1rem;
}

.detail__label {
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
}

.detail__number {
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  letter-spacing: 0.05em;
}

.swipe {
  background-color: #f1ebef;
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;
  margin: 0 1.5rem;
  color: #aba7a9;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.swipe :global(.swipe__icon) {
  width: 1.5rem;
  height: 1.5rem;
}

.swipe__msg {
  font-family: "Quicksand", sans-serif;
}

.pack {
  margin: 1rem 0;
  padding: 0 1.5rem;
}

.pack__title {
  display: block;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  margin: 1.5rem 0;
}
</style>

<!-- routify:options index=0 -->
<div class="hero">
  <div class="hero__profile">
    <span class="profile__name">Hi, Alexandria</span>
    <span class="profile__greet">Selamat datang kembali</span>
    <img class="profile__img" src="/images/voxy/user.webp" alt="user" />
  </div>
  <div class="hero__detail">
    <span class="detail__label">Nomor kamu</span>
    <span class="detail__number">0896897765</span>
    <Button>ubah</Button>
  </div>
</div>
<div class="swipe">
  <SwipeDown class="swipe__icon" />
  <span class="swipe__msg">swipe untuk lihat promo</span>
</div>
<OverviewPanel />
<div class="pack">
  <span class="pack__title">Paket yang Baru Dibeli</span>
  <Pack name="Paket Data HOME" amount="150GB" price="150.000" />
</div>

<script>
import SwipeDown from "./icons/triple-down.svg"
import Button from "./_components/Button.svelte"
import OverviewPanel from "./_components/OverviewPanel.svelte"
import Pack from "./_components/Pack.svelte"
import { metatags } from "@roxi/routify"

metatags.title = "Voxy | Svelteception"
metatags.description = "Dataku UI by Voxy"
</script>
