<style>
.body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #88aaff;
}

.container {
  width: 100%;
  display: grid;
  grid-template-columns: 15rem 2fr 1fr;
  max-width: 1400px;
  max-height: 1200px;
  background-color: #ffffff;
  overflow: hidden;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
}

.content {
  background-color: #f6faff;
}
</style>

<div class="body">
  <div class="container">
    <LeftNav />
    <main class="content">
      <Stories />
      <Feeds />
    </main>
    <RightNav />
  </div>
</div>

<script>
import LeftNav from "./_components/LeftNav.svelte"
import RightNav from "./_components/RightNav.svelte"
import Stories from "./_components/Stories.svelte"
import Feeds from "./_components/Feeds.svelte"
</script>
