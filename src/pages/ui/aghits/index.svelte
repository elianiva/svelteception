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
  height: 100%;
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

.dashboard__cards {
  display: flex;
  gap: 2rem;
}
</style>

<div class="body">
  <div class="container">
    <Sidenav />
    <main class="dashboard">
      <section class="dashboard__section">
        <span class="dashboard__heading">Profile</span>
        <ProfileCard
          username="Hatsuselzuna"
          desc="
      Short bio. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Officia expedita fuga nesciunt vitae voluptatem aliquid, eos natus autem
      tempora molestias.
          "
        />
      </section>
      <section class="dashboard__section">
        <span class="dashboard__heading">Servers</span>
        <div class="dashboard__cards">
          <ServerCard
            href="#"
            title="Survival"
            desc="Beat the night, survive the realm."
            img="../images/aghits/thumb-1.png"
            color="blue"
          />
          <ServerCard
            href="#"
            title="Creative"
            desc="Build the realm upon your dream"
            img="../images/aghits/thumb-2.png"
            color="yellow"
          />
          <ServerCard
            href="#"
            title="Skyblock"
            desc="Floating island? Seems like a challenge"
            img="../images/aghits/thumb-3.png"
            color="red"
          />
        </div>
      </section>
    </main>
    <Rightnav />
  </div>
</div>

<script>
import Sidenav from "./_components/Sidenav.svelte"
import ProfileCard from "./_components/Profilecard.svelte"
import ServerCard from "./_components/Servercard.svelte"
import Rightnav from "./_components/Rightnav.svelte"
</script>
