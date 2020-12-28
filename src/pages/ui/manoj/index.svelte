<style>
.body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.body :global([data-theme="light"]) {
  --white: #ffffff;
  --black: #1e2538;
  --main-bg: #f7f6f4;
  --side-icon: #65676d;

  --lightest-grey-alt: #d1d8dd;
  --lightest-grey: #f0f4f7;
  --light-grey: #73788b;
  --grey: #989fad;

  --light-green: #e8f4e6;
  --green: #61b158;

  --light-orange: #fff2ec;
  --orange: #fc7b39;

  --light-blue-ish: #eaebf0;
  --blue-ish: #545cad;

  --light-blue: #e6f2ff;
  --blue: #3696ff;

  --light-pink: #f6edee;
  --pink: #e355b7;

  --light-yellow: #fff7e6;
  --yellow: #ffb01a;
}

.body :global([data-theme="dark"]) {
  --white: #2b2f33;
  --black: #ffffff;
  --main-bg: #212529;
  --side-icon: #959799;

  --lightest-grey-alt: #d1d8dd;
  --lightest-grey: #404347;
  --light-grey: #6a6d70;
  --grey: #949698;

  --light-green: #313c37;
  --green: #5ba555;

  --light-orange: #403633;
  --orange: #fd413c;

  --light-blue-ish: #3e4246;
  --blue-ish: #fd413c;

  --light-blue: #273647;
  --blue: #086bd7;

  --light-pink: #3e4246;
  --pink: #febc2c;

  --light-yellow: #423a32;
  --yellow: #febc2c;
}

.container {
  width: 100%;
  display: grid;
  grid-template-columns: 14rem 1fr;
  gap: 1.25rem;
  max-width: 1400px;
  max-height: 1200px;
  background-color: var(--main-bg);
  overflow: hidden;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 4.5rem repeat(2, 1fr);
  gap: 1.25rem;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white);
  grid-column: 1/-1;
  padding: 1rem;
  border-radius: 1rem;
}

.nav__search {
  display: flex;
  gap: 1rem;
  padding: 0.5rem 1rem;
  background-color: var(--main-bg);
  border-radius: 2rem;
}

.nav__search :global(.search_icon) {
  width: 1.5rem;
  height: 1.5rem;
  color: var(--grey);
}

.search__input {
  font-size: 1.125rem;
  outline: none;
  border: none;
  background: none;
}

.nav__right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav__right :global(.bell_icon) {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--grey);
}

.nav__img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  box-shadow: 0 0.5rem 1rem rgb(147, 218, 240, 0.2);
}
</style>

<div
  class="body"
  style="background-color: {$isLightMode ? '#e2ddd3' : '#393F46'}"
>
  <div class="container" data-theme="{$isLightMode ? 'light' : 'dark'}">
    <Sidemenu isLight="{isLightMode}" />
    <main class="main">
      <nav class="nav">
        <div class="nav__search">
          <Search class="search_icon" />
          <input class="search__input" type="text" placeholder="Search" />
        </div>
        <div class="nav__right">
          <Bell class="bell_icon" />
          <img class="nav__img" src="/images/manoj/blue.webp" alt="" />
        </div>
      </nav>
      <CompanyCard
        shortName="google"
        fullName="Google Inc."
        priority="high"
        progress="{{ name: 'select progress', color: 'grey' }}"
        tasks="{[25, 50]}"
        taskColor="blue"
        categories="{[{ name: 'ios app', color: 'green' }, { name: 'ui/ux', color: 'blue' }]}"
        dueDate="20 June"
        pos="{['1/2', '2/3']}"
      />
      <CompanyCard
        shortName="slack"
        fullName="Slack corporation"
        priority="medium"
        progress="{{ name: 'completed', color: 'green' }}"
        tasks="{[25, 50]}"
        taskColor="pink"
        categories="{[{ name: 'ios app', color: 'green' }, { name: 'android', color: 'yellow' }]}"
        dueDate="20 June"
        pos="{['1/2', '3/4']}"
      />
      <Tasks />
      <Todo />
      <Calendar />
      <Messages />
    </main>
  </div>
</div>

<script>
import Search from "./icons/search.svg"
import Bell from "./icons/bell.svg"
import Sidemenu, { isLightMode } from "./_components/Sidemenu.svelte"
import CompanyCard from "./_components/CompanyCard.svelte"
import Tasks from "./_components/Tasks.svelte"
import Todo from "./_components/Todo.svelte"
import Calendar from "./_components/Calendar.svelte"
import Messages from "./_components/Messages.svelte"
import { metatags } from "@roxi/routify"

metatags.title = "Manoj | Svelteception"
metatags.description = "Task Management Dashboard by Manoj"
</script>
