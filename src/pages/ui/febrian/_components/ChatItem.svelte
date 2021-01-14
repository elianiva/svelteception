<style>
.chat {
  width: 100%;
  padding: 1rem 0;
}

.chat__wrapper {
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-template-rows: 1rem 1fr;
  row-gap: 0.5rem;
}

.chat__img {
  grid-column: 1/2;
  grid-row: 1/4;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}

.chat__name {
  grid-column: 2/3;
  grid-row: 1/2;
}

.reply__name,
.chat__username {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
}

.chat__time {
  font-family: "Poppins", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: #b0b0b0;
}

.reply__message,
.chat__message {
  grid-column: 2/3;
  grid-row: 2/3;
  font-family: "Open Sans", sans-serif;
  color: #5c6166;
  font-size: 0.85rem;
  line-height: 1.5rem;
}

.chat__low {
  padding-left: 4rem;
}

.reply {
  display: flex;
  flex-direction: column;
  padding-left: 0.75rem;
  border-left: 0.2rem #fcb921 solid;
}

.divider {
  position: relative;
  height: 0.0625rem;
  border: none;
  background-color: #ebebeb;
  margin-bottom: 0.5rem;
}

.divider.date::before {
  content: "Jun 15";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-family: "Montserrat", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  background-color: #edecf3;
  color: #5868f0;
  padding: 0.25rem 1rem;
  border-radius: 1rem;
}

.attachment {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 0.0625rem #ebebeb solid;
  border-radius: 0.25rem;
}

.attachment__icon {
  padding: 0.5rem;
  background-color: #ffc912;
  border-radius: 0.25rem;
}

.attachment__detail {
  display: flex;
  flex-direction: column;
}

.detail__name {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
}

.detail__filetype {
  font-family: "Open Sans", sans-serif;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  color: #787878;
}

:global(.attachment__icon svg) {
  color: #ffffff;
  width: 1.25rem;
  height: 1.25rem;
}
</style>

<div class="chat">
  <div class="chat__wrapper">
    <img class="chat__img" src={img} alt="" />
    <div class="chat__name">
      <span class="chat__username">{from}</span>
      <span class="chat__time"> • {time}</span>
    </div>
    <div class="chat__message">
      <span class="chat__message">{message}</span>
    </div>
  </div>
  <div class="chat__low">
    {#if reply}
      <div class="reply">
        <span class="reply__name">{reply.from}</span>
        <span class="reply__message">{reply.message}</span>
      </div>
    {:else if attachment !== null}
      <div class="attachment">
        <div class="attachment__icon">
          <File />
        </div>
        <div class="attachment__detail">
          <span class="detail__name">{attachment.name}</span>
          <span class="detail__filetype">
            {attachment.filetype}
            •
            {attachment.size}
          </span>
        </div>
        <Download
          width="1.5rem"
          height="1.5rem"
          style="color: #5868f0; margin-left: 3rem"
        />
      </div>
    {/if}
  </div>
</div>
<div class="divider {isChangingDate ? 'date' : ''}" />

<script>
import File from "../icons/file.svg"
import Download from "../icons/download.svg"

export let img, from, time, message, reply, attachment
export let isChangingDate = false
</script>
