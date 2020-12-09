<style>
.body {
  min-height: 100vh;
  background-color: #f7444e;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  position: relative;
  box-shadow: 0 0.25rem 2rem rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1400px;
  max-height: 1200px;
  overflow: hidden;
}

.main {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: repeat(25, 1rem);
  gap: 1.5rem;
  margin-left: 6rem;
  background-color: #f5f6fa;
  border-radius: 1.5rem 0 0 1.5rem;
  padding: 1.5rem;
}

.search {
  display: flex;
  gap: 1rem;
  align-items: center;
  width: calc(100% - 2rem);
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  border: none;
  background-color: #efefef;
}

.search__input {
  background: none;
  border: none;
  font-size: 1.125rem;
  outline: none;
}

.webinar {
  position: relative;
  padding: 0 1rem;
  font-family: "Roboto", sans-serif;
  height: 100%;
}

.webinar__img {
  width: 100%;
  border-radius: 1rem;
}

.webinar__title {
  display: block;
  margin: 1rem 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.webinar__date {
  font-weight: 500;
  color: #787878;
}

.webinar__more {
  display: block;
  margin-top: 2rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  color: #f7444e;
  text-decoration: none;
}

.content {
  grid-column: 2/3;
  grid-row: 1/26;
  background-color: #ffffff;
  border-radius: 1rem;
  font-family: "Roboto", sans-serif;
}

.content__video {
  height: 26rem;
  overflow: hidden;
  border-radius: 1rem;
}

.content__wrapper {
  padding: 1rem;
}

.content__heading {
  display: grid;
  grid-template-columns: 1fr 8rem;
  grid-template-rows: 1fr 1fr;
}

.content__title {
  align-self: flex-end;
  grid-row: 1/2;
  font-weight: 700;
  font-size: 1.625rem;
  margin-bottom: 0.5rem;
}

.content__author {
  grid-row: 2/3;
  font-weight: 500;
  color: #787878;
}

.content__icons {
  grid-column: 2/3;
  grid-row: 1/3;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.content__icon {
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #ff7a7b;
  color: #ffffff;
  border: none;
  cursor: pointer;
}

.content__icon:hover {
  filter: brightness(0.9);
}

.content__tab {
  margin: 2rem 0;
  display: flex;
  gap: 1rem;
}

.content__tabname {
  font-size: 1.25rem;
  font-weight: 600;
  position: relative;
}

.content__tabname.active::after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  right: 0;
  bottom: -0.75rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  background-color: #ff7a7b;
}

.body {
  overflow: unset;
}
</style>

<div class="body">
  <div class="container">
    <Sidebar />
    <main class="main">
      <Box title="Meetings" row="1/10" col="1/2">
        {#each listItems as item, index}
          <ListItem
            number="{index + 1}"
            title="{item.title}"
            duration="{item.duration}"
            active="{item.active}"
          />
        {/each}
      </Box>
      <Box title="Discuss" row="10/26" col="1/2">
        {#each discussItems as item, index}
          <DiscussItem
            src="{item.img}"
            name="{item.name}"
            day="{item.day}"
            time="{item.time}"
            period="{item.period}"
            content="{item.content}"
          />
        {/each}
      </Box>
      <div class="content">
        <div class="content__video">
          <iframe
            title="Video"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="content__wrapper">
          <div class="content__heading">
            <h1 class="content__title">
              More familiar with UI/UX - Introduction
            </h1>
            <span class="content__author">by Setiadi Putra Pratama • September
              30, 2020</span>
            <div class="content__icons">
              <button class="content__icon">
                <DownloadIcon width="1rem" height="1rem" />
              </button>
              <button class="content__icon">
                <BookmarkIcon width="1rem" height="1rem" />
              </button>
            </div>
          </div>
          <div class="content__tab">
            <span class="content__tabname">Description</span>
            <span class="content__tabname active">Assignment</span>
          </div>
          {#each assignments as item, index}
            <Assignment
              num="{index + 1}"
              title="{item.title}"
              desc="{item.desc}"
              time="{item.time}"
              students="{item.students}"
            />
          {/each}
        </div>
      </div>
      <Box title="My Courses" row="1/14" col="3/4">
        <div class="search">
          <SearchIcon width="1rem" height="1rem" />
          <input class="search__input" type="text" placeholder="Search" />
        </div>
        {#each courseItems as item, index}
          <CourseItem
            src="{item.src}"
            title="{item.title}"
            author="{item.author}"
            colour="{item.colour}"
            width="{item.width}"
          />
        {/each}
      </Box>
      <Box title="Upcoming Webinar" row="14/26" col="3/4">
        <div class="webinar">
          <img
            class="webinar__img"
            src="/images/setiadi/webinar.png"
            alt="webinar"
          />
          <span class="webinar__title">Web Development</span>
          <span class="webinar__date">September 30, 2020</span>
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a href="javascript:void(0)" class="webinar__more">SEE ALL</a>
        </div>
      </Box>
    </main>
  </div>
</div>

<script>
import Box from "./_components/Box.svelte"
import Sidebar from "./_components/Sidebar.svelte"
import SearchIcon from "./icons/search.svg"
import DownloadIcon from "./icons/download.svg"
import BookmarkIcon from "./icons/bookmark.svg"
import ListItem from "./_components/ListItem.svelte"
import DiscussItem from "./_components/DiscussItem.svelte"
import CourseItem from "./_components/CourseItem.svelte"
import Assignment from "./_components/Assignment.svelte"
import { metatags } from "@sveltech/routify"

metatags.title = "Setiadi | Svelteception"
metatags.description = "Online course app UI by Rizqi"

const assignments = [
  {
    title: "Create Splash Screen",
    desc:
      "Keep it simple with a short, elegant animation to present your app. Always remember the 3-seconds rule",
    time: 1,
    students: 15
  },
  {
    title: "Create Sign In & Sign Up Page",
    desc:
      "Sign up is the last thing users want to do. Generally, users are not willing to sign up until they see value in doing so.",
    time: 2,
    students: 8
  }
]

const listItems = [
  { title: "Introduction", duration: 609, active: true },
  { title: "Design Thinking", duration: 483, active: false },
  { title: "Research", duration: 710, active: false },
  { title: "Flow", duration: 1253, active: false },
  { title: "Let's Do IT!", duration: 923, active: false }
]

const courseItems = [
  {
    title: "Digital Marketing",
    author: "Setiadi",
    src: "/images/setiadi/cuadrada.jpg",
    colour: "#B46385",
    width: "70%"
  },
  {
    title: "Visual Art",
    author: "Abraham",
    src: "/images/setiadi/tree.png",
    colour: "#68679F",
    width: "40%"
  },
  {
    title: "Minimalist Thinking",
    author: "Lisa",
    src: "/images/setiadi/usb.png",
    colour: "#1AA09B",
    width: "90%"
  }
]

const discussItems = [
  {
    name: "Aurellia",
    day: "Today",
    time: "03:20",
    period: "PM",
    content: "Online research led me to two conclusions",
    img: "/images/setiadi/aurellia.jpg"
  },
  {
    name: "Natasya",
    day: "Today",
    time: "03:20",
    period: "PM",
    content: "I prepared a survey with Google Form",
    img: "/images/setiadi/natasya.jpg"
  },
  {
    name: "Hassan",
    day: "Today",
    time: "03:20",
    period: "PM",
    content: "The purpose was to determine the basic 'pain-points'",
    img: "/images/setiadi/hassan.png"
  },
  {
    name: "Anne",
    day: "Today",
    time: "03:20",
    period: "PM",
    content: "Research is the basic key step to design user experience",
    img: "/images/setiadi/anne.png"
  }
]
</script>
