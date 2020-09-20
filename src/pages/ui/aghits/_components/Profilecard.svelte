<style>
.profile {
  display: flex;
  background-color: #fafafa;
  padding: 3rem;
  gap: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  width: 100%;
}

.profile__about {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
}

.profile__username {
  font-size: 1.25rem;
  font-weight: 700;
}

.profile__edit {
  border: none;
  background: none;
  margin-left: 1rem;
  cursor: pointer;
}

.profile__edit img {
  width: 1rem;
  height: 1rem;
}

.profile__desc {
  max-width: 80ch;
  color: #696969;
  font-size: 1.125rem;
  line-height: 2rem;
}
</style>

<div class="profile">
  <img src="../images/aghits/character.png" alt="character" />
  <div class="profile__about">
    <span class="profile__username">{username}
      <button class="profile__edit">
        <img src="../images/aghits/edit.svg" alt="edit" />
      </button>
    </span>
    <p class="profile__desc">
      {desc} Short bio. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Officia expedita fuga nesciunt vitae voluptatem aliquid, eos natus autem tempora
      molestias.
    </p>
  </div>
</div>

<script>
export let username
export let desc
</script>
