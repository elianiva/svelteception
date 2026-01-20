<style>
.chatlist {
  border-right: 0.0625rem #ebebeb solid;
}

.chatlist__search {
  padding: 0.75rem 1rem;
  height: 4rem;
  width: 100%;
  border-bottom: 0.0625rem #ebebeb solid;
}

.search__wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  width: 100%;
  border-radius: 2rem;
  background-color: #f8f9fb;
  border: 0.0625rem #efefef solid;
}

.search__wrapper input {
  background: none;
  outline: none;
  border: none;
  font-size: 1.0625rem;
  height: 100%;
}

.search__wrapper input::placeholder {
  color: #b0b0b0;
}

:global(.search__wrapper svg) {
  width: 1.25rem;
  height: 1.25rem;
  color: #b0b0b0;
}

.chatlist__toggle {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 1rem;
  color: #b0b0b0;
  border-bottom: 0.0625rem #ebebeb solid;
}

.toggle__title {
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  color: #1c263d;
}

.toggle__count {
  font-size: 0.8rem;
  color: #555555;
  padding: 0.25rem 0.5rem;
  background-color: #eceef0;
  border-radius: 1rem;
  margin-left: 0.5rem;
}
</style>

<div class="chatlist">
  <div class="chatlist__search">
    <div class="search__wrapper">
      <Search />
      <input type="text" placeholder="Search" />
    </div>
  </div>
  <div class="chatlist__toggle">
    <span class="toggle__title">
      All Messages
      <span class="toggle__count">21</span>
    </span>
    <Down width="1.5rem" height="1.5rem" />
  </div>
  <div class="chatlist__main">
    {#each chats as chat}
      <Contact {...chat} />
    {/each}
  </div>
</div>

<script>
import Contact from "./Contact.svelte"
import Search from "../icons/search.svg"
import Down from "../icons/down.svg"

const chats = [
  {
    name: "Bessie Cooper",
    img: "/images/febrian/that-guy.jpg",
    lastChat: "Yes, I need your help with my..",
    status: 1,
    severity: 3,
    unread: 1,
    time: "Just Now",
    isActive: true
  },
  {
    name: "Theresa Webb",
    img: "/images/febrian/user-1.jpg",
    lastChat: "Hi there, how can we help you?",
    status: 2,
    severity: 2,
    unread: false,
    time: "1 min ago",
    isActive: false
  },
  {
    name: "Jenny Willson",
    img: false,
    colour: "yellow",
    lastChat: "Perfect. Thanks!",
    status: 3,
    severity: 3,
    unread: 3,
    time: "21 mins ago",
    isActive: false
  },
  {
    name: "Darrel Steward",
    img: false,
    colour: "blue",
    lastChat: "Thanks for your help",
    status: 3,
    severity: 1,
    unread: 1,
    time: "3 hours ago",
    isActive: true
  },
  {
    name: "Courtney Henry",
    img: "/images/febrian/user-2.jpg",
    lastChat: "Maybe you can check the setti..",
    status: 2,
    severity: 2,
    unread: true,
    time: "Yesterday",
    isActive: false
  },
  {
    name: "Brooklyn Simons",
    img: false,
    colour: "red",
    lastChat: "What's the best solution for th..",
    status: 2,
    severity: 3,
    unread: true,
    time: "Jun 21",
    isActive: false
  },
  {
    name: "Darlene Robertson",
    img: "/images/febrian/user-3.jpg",
    lastChat: "Anytime",
    status: 2,
    severity: 1,
    unread: 2,
    time: "Apr 16",
    isActive: true
  }
]
</script>
