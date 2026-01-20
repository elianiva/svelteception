<svelte:head>
  <title>Voxy | Svelteception</title>
  <meta name="description" content="Dataku UI by Voxy" />
</svelte:head>

<script>
import Pack from "./_components/Pack.svelte"

export const routeOptions = { index: 2 }
</script>

<style>
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

<div class="pack">
  <span class="pack__title">Beli Paket Pilihanmu!</span>
  <Pack name="Paket Data HOME" amount="150GB" price="150.000" />
  <Pack name="Paket Data Belajar" amount="100GB" price="30.000" />
  <Pack name="Paket Data Malam" amount="50GB" price="25.000" />
  <Pack name="Paket Data Harian" amount="1GB" price="10.000" />
</div>
