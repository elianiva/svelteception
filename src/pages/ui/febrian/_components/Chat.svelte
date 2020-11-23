<style>
.chat {
  position: relative;
  background-color: #fafbfc;
}

.chat::after {
  content: "";
  position: absolute;
  right: 0;
  top: 4rem;
  bottom: 0;
  background-color: #ebebeb;
  width: 0.0625rem;
}

.chat__topbar {
  position: relative;
  z-index: 20;
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  background-color: #ffffff;
  border-bottom: 0.0625rem #ebebeb solid;
}

.chat__menu {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.chat__option-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border: 0.0625rem #ebebeb solid;
  border-radius: 2rem;
  cursor: pointer;
  padding-left: 1rem;
  transition: background-color ease-out 0.2s;
}

.chat__option-wrapper:nth-child(2)::before {
  content: "";
  position: absolute;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background-color: red;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
}

.chat__option-wrapper:hover {
  background-color: #ebebeb;
}

.chat__option {
  cursor: pointer;
  outline: none;
  border: none;
  background: none;
  color: #787878;
  font-family: "Roboto", sans-serif;
}

:global(.chat__option svg) {
  color: red;
  width: 2rem;
  height: 2rem;
}

.chat__username {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}

.chat__menu-btn {
  border: none;
  background: none;
  outline: none;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
}

:global(.chat__menu-btn svg) {
  width: 1.5rem;
  height: 1.5rem;
}

.chat__content {
  margin-top: -2rem;
  padding: 0 1.5rem;
}

.chat__wrapper {
  position: relative;
  z-index: 10;
  /* overflow-y: auto; */
}

.chat__box {
  width: 100%;
  padding: 0.5rem;
  border: 0.0625rem #ebebeb solid;
  border-radius: 0.5rem;
  margin: 1rem 0;
}

.box__input {
  width: 100%;
  padding: 0.25rem;
  height: 4rem;
  font-size: 0.9rem;
  background: none;
  border: none;
  font-family: "Open Sans", sans-serif;
  outline: none;
  resize: none;
}

.box__icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.box__icon {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  transition: color ease-out 0.2s;
  color: #8791ac;
}

.box__icon:hover {
  color: #3663f5;
}

:global(.box__icon svg) {
  width: 1.25rem;
  height: 1.25rem;
}

.chat__special {
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-template-rows: 1rem 1fr;
  row-gap: 1rem;
}

.special__img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}

.special__name {
  grid-column: 2/3;
  grid-row: 1/2;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
}

.special__bubbles {
  position: relative;
  grid-column: 2/3;
  grid-row: 2/3;
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #ebebeb;
  border-radius: 1rem;
}

.special__bubbles::before,
.special__bubbles::after {
  content: "";
  position: absolute;
  grid-column: 2/3;
  grid-row: 2/3;
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #ebebeb;
  border-radius: 1rem;
}

.special__bubbles::before {
  right: -1rem;
}

.special__bubbles::after {
  right: -2rem;
  bottom: 0.25rem;
}
</style>

<div class="chat">
  <div class="chat__topbar">
    <span class="chat__username">Bessie Cooper</span>
    <div class="chat__menu">
      <div class="chat__option-wrapper">
        <Status style="color: #b0b0b0" />
        <select class="chat__option" name="status">
          <option value="1">In Progress</option>
          <option value="2">Pending</option>
          <option value="3">Completed</option>
        </select>
      </div>
      <div class="chat__option-wrapper">
        <select class="chat__option" name="severity">
          <option value="1">High</option>
          <option value="2">Med</option>
          <option value="3">Low</option>
        </select>
      </div>
      <button class="chat__menu-btn">
        <Menu />
      </button>
    </div>
  </div>
  <main class="chat__content">
    <div class="chat__wrapper">
      {#each chats as chat}
        <Chat {...chat} />
      {/each}
      <div class="chat__special">
        <img
          class="special__img"
          src="/images/febrian/that-guy.jpg"
          alt="that-guy"
        />
        <div class="special__name">Bessie Cooper</div>
        <div class="special__bubbles"></div>
      </div>
    </div>
    <div class="chat__box">
      <textarea
        class="box__input"
        type="text"
        placeholder="Enter to send. Shift + Enter to add new line."
      ></textarea>
      <div class="box__icon-wrapper">
        <div class="box__icon-left">
          <button class="box__icon">
            <Bold />
          </button>
          <button class="box__icon">
            <Italic />
          </button>
          <button class="box__icon">
            <Underline />
          </button>
          <button class="box__icon">
            <UList />
          </button>
          <button class="box__icon">
            <OList />
          </button>
        </div>
        <div class="box__icon-right">
          <button class="box__icon">
            <Media />
          </button>
          <button class="box__icon">
            <Attachment />
          </button>
          <button class="box__icon">
            <Smile />
          </button>
        </div>
      </div>
    </div>
  </main>
</div>

<script>
import Chat from "./ChatItem.svelte"
import Status from "../icons/status.svg"
import Menu from "../icons/dot-menu.svg"
import Bold from "../icons/bold.svg"
import Italic from "../icons/italic.svg"
import Underline from "../icons/underline.svg"
import UList from "../icons/list-bullet.svg"
import OList from "../icons/list-number.svg"
import Media from "../icons/media.svg"
import Attachment from "../icons/attachment.svg"
import Smile from "../icons/smile.svg"

const chats = [
  {
    img: "/images/febrian/that-guy.jpg",
    from: "Bessie Cooper",
    time: "12.10 pm",
    message:
      "Lorem possimus exercitationem ut exercitationem molestias natus? Fugiat commodi accusantium placeat assumenda omnis. Totam dignissimos.",
    reply: null,
    attachment: null
  },
  {
    img: "/images/febrian/owner.jpg",
    from: "Yus Febrianto",
    time: "12.10 pm",
    message:
      "We are sorry about the inconvenience we have caused. Is there any broken part in the product.",
    reply: null,
    attachment: null
  },
  {
    img: "/images/febrian/that-guy.jpg",
    from: "Bessie Cooper",
    time: "12.10 pm",
    message: "How can I return the product?",
    reply: {
      img: "/images/febrian/owner.jpg",
      from: "Yus Febrianto",
      time: "12.10 pm",
      message:
        "We are sorry about the inconvenience we have caused. Is there any broken part in the product.",
      reply: []
    },
    attachment: null,
    isChangingDate: true
  },
  {
    img: "/images/febrian/owner.jpg",
    from: "Yus Febrianto",
    time: "12.10 pm",
    message:
      "I'll raise a return request for you. Here are the instructions to get the package ready for return. The return process will take max 2 days depends on the traffic. This excludes shipping.",
    reply: null,
    attachment: {
      name: "Return Product",
      filetype: "pdf",
      size: "1.7mb"
    }
  }
]
</script>
