<style>
.card {
  display: flex;
  background-color: #4b5497;
  background-image: url("../images/aghits/wave.png");
  background-size: cover;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 4rem;
}

.card__profile {
  flex: 1;
}

.card__username {
  display: block;
  color: #efefef;
  font-weight: 700;
  margin-top: 1rem;
}

.card__icons {
  display: flex;
  gap: 1rem;
  align-items: center;
  background: none;
}

.card__icon {
  background: none;
  border: none;
  cursor: pointer;
}

.card__icon img {
  width: 1.5rem;
  height: 1.5rem;
}
</style>

<div class="card">
  <div class="card__profile">
    <img src="../images/aghits/pfp.png" alt="profile pict" />
    <span class="card__username">{username}</span>
  </div>
  <div class="card__icons">
    <button class="card__icon">
      <img src="../images/aghits/settings.svg" alt="settings" />
    </button>
    <button class="card__icon">
      <img src="../images/aghits/logout.svg" alt="settings" />
    </button>
  </div>
</div>

<script>
export let username
</script>
