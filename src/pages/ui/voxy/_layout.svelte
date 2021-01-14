<style>
.body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 480px;
  margin: 0 auto;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
}

.container {
  background-color: #fafafa;
  height: 100%;
  width: 100vw;
  padding: 4rem 0 8rem;
  overflow-y: scroll;
}

.container::-webkit-scrollbar {
  width: 0.25rem;
}
</style>

<div class="body">
  <div class="container">
    <TopNav />
    <slot decorator={TabsTransition} />
  </div>
  <BottomNav
    data={{
      home: $isActive("./home"),
      dashboard: $isActive("./dashboard"),
      store: $isActive("./store"),
      profile: $isActive("./profile")
    }}
  />
</div>

<script>
import { TabsTransition } from "@roxi/routify/decorators"
import TopNav from "./_components/TopNav.svelte"
import BottomNav from "./_components/BottomNav.svelte"
import { isActive } from "@roxi/routify"
</script>
