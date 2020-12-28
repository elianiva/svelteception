<style>
.body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f3f6;
}

.container {
  position: relative;
  display: grid;
  grid-template-columns: 4.5rem 1fr;
  width: 100%;
  max-width: 1400px;
  max-height: 940px;
  background-color: #ffffff;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
}

.main__container {
  display: grid;
  grid-template-columns: 1.25fr 3fr 1.25fr;
}
</style>

<div class="body">
  <div class="container">
    <LeftNav />
    <main class="main">
      <TopNav />
      <div class="main__container">
        <ChatList />
        <Chat />
        <RightNav />
      </div>
    </main>
  </div>
</div>

<script>
import LeftNav from "./_components/LeftNav.svelte"
import TopNav from "./_components/TopNav.svelte"
import RightNav from "./_components/RightNav.svelte"
import ChatList from "./_components/ChatList.svelte"
import Chat from "./_components/Chat.svelte"
import { metatags } from "@roxi/routify"

metatags.title = "Febrian | Svelteception"
metatags.description = "Customer Desk Management by Febrian"
</script>
