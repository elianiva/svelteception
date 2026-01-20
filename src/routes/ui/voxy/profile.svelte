<svelte:head>
  <title>Voxy | Svelteception</title>
  <meta name="description" content="Dataku UI by Voxy" />
</svelte:head>

<script>
export const routeOptions = { index: 3 }
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
