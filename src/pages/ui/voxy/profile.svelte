<style>
.pack {
  margin: 1.5rem;
  background-color: #ffffff;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.075);
}

.pack__label {
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
}

.pack__up {
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

.pack__up :global(.icon) {
  width: 1rem;
  height: 1rem;
}
</style>

<!-- routify:options index=3 -->
<ProfilePanel />
<div class="pack" on:click={() => (isVisible = !isVisible)}>
  <span class="pack__label">Paket Aktif</span>
  <button class="pack__up">
    {#if isVisible}
      <Up class="icon" />
    {:else}
      <Down class="icon" />
    {/if}
  </button>
</div>
{#if isVisible}
  <InfoPanel data={packItems} />
{/if}

<script>
import ProfilePanel from "./_components/ProfilePanel.svelte"
import InfoPanel from "./_components/InfoPanel.svelte"
import Up from "./icons/up.svg"
import Down from "./icons/down.svg"

let isVisible = true

const packItems = [
  {
    name: "Kuota Reguler",
    used: "20GB",
    total: "20GB",
    days: "30 Hari",
    bar: 20
  },
  {
    name: "Kuota Bulanan",
    used: "20GB",
    total: "20GB",
    days: "22 Hari",
    bar: 30
  },
  {
    name: "Kuota Belajar",
    used: "20GB",
    total: "20GB",
    days: "22 Hari",
    bar: 50
  }
]
</script>
