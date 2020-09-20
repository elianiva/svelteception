<style>
  @import url("https://fonts.googleapis.com/css2?family=PT+Sans&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "PT Sans", sans-serif;
  color: #2a2a2a;
}

.body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  /* padding: 4rem; */
}

.container {
  overflow: hidden;
  max-width: 1366px;
  display: grid;
  grid-template-columns: 20rem 1fr 6rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
}

.sidenav {
  width: 20rem;
  display: flex;
  flex-direction: column;
  border-right: 0.125rem #eaeaea solid;
}

.sidenav__container {
  padding: 1rem;
}

.sidenav__heading {
  display: relative;
  font-size: 1.5rem;
  font-weight: 700;
}

.sidenav__divider {
  background-color: #eaeaea;
  height: 0.125rem;
  border: none;
  margin: 1rem 0 1rem;
}

.sidenav__items {
  font-size: 1.125rem;
  list-style: none;
  margin-bottom: 2rem;
}

.sidenav__item {
  margin: 0.75rem 0 0 0.5rem;
  position: relative;
  line-height: 2rem;
  transition: color ease-out 0.2s;
}

.sidenav__item a {
  text-decoration: none;
  color: #696969;
}

.sidenav__item:hover a {
  color: #4c5598;
  font-weight: 700;
}

.sidenav__items .active a {
  color: #4c5598;
  font-weight: 700;
}

.active::before {
  content: "";
  position: absolute;
  top: 0;
  left: -0.5rem;
  bottom: 0;
  width: 0.125rem;
  background-color: #4c5598;
}

.sidenav__card {
  display: flex;
  background-color: #4b5497;
  background-image: url("../images/aghits/wave.png");
  background-size: cover;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 4rem;
}

.sidenav__profile {
  flex: 1;
}

.sidenav__username {
  display: block;
  color: #efefef;
  font-weight: 700;
  margin-top: 1rem;
}

.sidenav__icons {
  display: flex;
  gap: 1rem;
  align-items: center;
  background: none;
}

.sidenav__icon {
  background: none;
  border: none;
}

.sidenav__icon img {
  width: 1.5rem;
  height: 1.5rem;
}

.dashboard {
  background-color: #f5f5f5;
  padding: 4rem;
}

.dashboard__heading {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  display: block;
}

.dashboard__section {
  width: 100%;
  margin-bottom: 3rem;
}

.dashboard__profile {
  display: flex;
  background-color: #fafafa;
  padding: 3rem;
  gap: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  width: 100%;
}

.dashboard__about {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
}

.dashboard__username {
  font-size: 1.25rem;
  font-weight: 700;
}

.dashboard__edit {
  border: none;
  background: none;
  margin-left: 1rem;
}

.dashboard__edit img {
  width: 1rem;
  height: 1rem;
}

.sidenav__icon:hover,
.rightnav__icon:hover,
.dashboard__edit:hover {
  cursor: pointer;
}

.dashboard__desc {
  max-width: 40ch;
  color: #696969;
  font-size: 1.125rem;
  line-height: 2rem;
}

.dashboard__cards {
  display: flex;
  gap: 2rem;
}

.dashboard__card {
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  transition: all ease-out 0.2s;
}

.dashboard__card:hover {
  filter: brightness(1.05);
}

.dashboard__detail {
  padding: 1.5rem 2rem 2rem;
  border-radius: 0 0 0.5rem 0.5rem;
}

.survival {
  background-color: #66d1e1;
  border-bottom: 0.5rem #39c7df solid;
}

.creative {
  background-color: #feb028;
  border-bottom: 0.5rem #f8aa22 solid;
}

.skyblock {
  background-color: #e65b62;
  border-bottom: 0.5rem #de565a solid;
}

.dashboard__servername {
  font-family: "PT Sans", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #f4f4f4;
  margin-bottom: 0.5rem;
  display: block;
  text-decoration: none;
  transition: color ease-out 0.2s;
}

.dashboard__shortdesc {
  color: #f4f4f4;
  line-height: 1.5rem;
}

.rightnav {
  background-color: #f5f5f5;
}

.rightnav__container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0.5rem;
  border-radius: 1rem 0 0 1rem;
  background-color: #4b5497;
  height: 100%;
}

.rightnav__icon {
  background: none;
  border: none;
  padding: 1rem 0.75rem;
  border-radius: 0.5rem;
}

.rightnav__icon img {
  width: 2rem;
  height: 2rem;
}

.rightnav__container .active {
  background-color: #4a5084;
}

</style>

<div class="body">
<div class="container">
  <aside class="sidenav">
    <img class="sidenav__banner" src="../images/aghits/banner.png" alt="banner" />
    <div class="sidenav__container">
      <div class="sidenav__menu">
        <span class="sidenav__heading">Arceru</span>
        <hr class="sidenav__divider" />
        <ul class="sidenav__items">
          <li class="sidenav__item active">
            <a href="#" onclick="return false">Dashboard</a>
          </li>
          <li class="sidenav__item">
            <a href="#" onclick="return false">Friends</a>
          </li>
          <li class="sidenav__item">
            <a href="#" onclick="return false">Economy</a>
          </li>
        </ul>
      </div>
      <div class="sidenav__menu">
        <span class="sidenav__heading">Servers</span>
        <hr class="sidenav__divider" />
        <ul class="sidenav__items">
          <li class="sidenav__item">
            <a href="#" onclick="return false">Survival</a>
          </li>
          <li class="sidenav__item">
            <a href="#" onclick="return false">Creative</a>
          </li>
          <li class="sidenav__item">
            <a href="#" onclick="return false">Skyblock</a>
          </li>
        </ul>
      </div>
      <div class="sidenav__card">
        <div class="sidenav__profile">
          <img src="../images/aghits/pfp.png" alt="profile pict" />
          <span class="sidenav__username">Hatsuselzuna</span>
        </div>
        <div class="sidenav__icons">
          <button class="sidenav__icon">
            <img src="../images/aghits/settings.svg" alt="settings" />
          </button>
          <button class="sidenav__icon">
            <img src="../images/aghits/logout.svg" alt="settings" />
          </button>
        </div>
      </div>
    </div>
  </aside>
  <main class="dashboard">
    <section class="dashboard__section">
      <span class="dashboard__heading">Profile</span>
      <div class="dashboard__profile">
        <img src="../images/aghits/character.png" alt="character" />
        <div class="dashboard__about">
          <span class="dashboard__username">Hatsuselzuna <button class="dashboard__edit"> <img
                src="../images/aghits/edit.svg"
                alt="edit"
              /> </button>
          </span>
          <p class="dashboard__desc">
            Short bio. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Officia expedita fuga nesciunt vitae voluptatem aliquid, eos natus
            autem tempora molestias.
          </p>
        </div>
      </div>
    </section>
    <section class="dashboard__section">
      <span class="dashboard__heading">Servers</span>
      <div class="dashboard__cards">
        <div class="dashboard__card">
          <img src="../images/aghits/thumb-1.png" alt="thumb-1" />
          <div class="dashboard__detail survival">
            <a
              href="#"
              onclick="return false"
              class="dashboard__servername"
            >Survival</a>
            <p class="dashboard__shortdesc">
              Beat the night, survive the realm.
            </p>
          </div>
        </div>
        <div class="dashboard__card">
          <img src="../images/aghits/thumb-2.png" alt="thumb-2" />
          <div class="dashboard__detail creative">
            <a
              href="#"
              onclick="return false"
              class="dashboard__servername"
            >Creative</a>
            <p class="dashboard__shortdesc">
              Beat the night, survive the realm.
            </p>
          </div>
        </div>
        <div class="dashboard__card">
          <img src="../images/aghits/thumb-3.png" alt="thumb-3" />
          <div class="dashboard__detail skyblock">
            <a
              href="#"
              onclick="return false"
              class="dashboard__servername"
            >Skyblock</a>
            <p class="dashboard__shortdesc">
              Beat the night, survive the realm.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
  <aside class="rightnav">
    <div class="rightnav__container">
      <button class="rightnav__icon active">
        <img src="../images/aghits/users.svg" alt="" />
      </button>
      <button class="rightnav__icon">
        <img src="../images/aghits/settings.svg" alt="settings" />
      </button>
    </div>
  </aside>
</div>
</div>
