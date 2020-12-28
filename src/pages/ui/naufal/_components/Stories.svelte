<style>
.story {
  position: relative;
  font-family: "Roboto", sans-serif;
  margin-top: 2rem;
}

.story__title {
  display: block;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.story__people {
  display: flex;
  gap: 1.4rem;
  /*TODO(elianiva): not sure if using static size is the best thing to do*/
  max-width: 100%;
  overflow: hidden;
  /*TODO(elianiva): this is also a workaround :p*/
  padding: 0.25rem;
  margin-left: -0.25rem;
  margin-top: -0.25rem;
}

.people {
  text-align: center;
  z-index: 2;
  cursor: pointer;
  transition: filter ease-out 0.2s;
}

.people:hover {
  filter: brightness(0.85);
}

.people__img {
  position: relative;
}

.people__img img {
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 2.5rem;
  border: 0.125rem #ffffff solid;
  display: block;
}

.people__img::after {
  content: "";
  position: absolute;
  top: -0.125rem;
  left: -0.125rem;
  right: -0.125rem;
  bottom: -0.125rem;
  border-radius: 2.5rem;
  z-index: -1;
}

.border-grey .people__img::after {
  background-color: #b0b0b0;
}

.border-green .people__img::after {
  background-color: #43d051;
}

.border-gradient .people__img::after {
  background-image: linear-gradient(to bottom, #962fbf, #fa7e1e);
}

.people__label {
  display: block;
  margin-top: 0.5rem;
}

.people__label.you {
  color: #b0b0b0;
}

.people__add {
  position: absolute;
  background-image: linear-gradient(to bottom, #962fbf, #fa7e1e);
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  bottom: -0.25rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 0.125rem #ffffff solid;
}

.people__live {
  position: absolute;
  background-image: linear-gradient(to bottom, #962fbf, #fa7e1e);
  font-size: 0.625rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
  bottom: -0.5rem;
  padding: 0.125rem 0.625rem;
  border-radius: 0.25rem;
  border: 0.125rem #ffffff solid;
}

.people__next {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-20%);
  background-color: #ffffff;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
  padding: 0.25rem;
  display: flex;
  align-items: center;
  color: #b0b0b0;
  border-radius: 50%;
  z-index: 4;
  cursor: pointer;
}

.people__next:hover {
  filter: brightness(0.96);
}
</style>

<div class="story">
  <span class="story__title">Stories</span>
  <div class="story__people">
    {#each userData as { label, imgUrl, isLive, color }, idx}
      <div class="people border-{color ? color : 'grey'}">
        <div class="people__img">
          <img src="{imgUrl}" alt="{label}" />
          {#if idx === 0}
            <div class="people__add">+</div>
          {/if}
          {#if isLive}
            <div class="people__live">Live</div>
          {/if}
        </div>
        <span class="people__label {idx === 0 ? 'you' : ''}">{label}</span>
      </div>
    {/each}
    <div class="people__next">
      <Right class="next__icon" />
    </div>
  </div>
</div>

<script>
import Right from "../icons/right.svg"
import { metatags } from "@sveltech/routify"

const userData = [
  {
    label: "Your Story",
    imgUrl: "/images/naufal/naufal.webp",
    isLive: false
  },
  {
    label: "Lia",
    imgUrl: "/images/naufal/lia.webp",
    isLive: true,
    color: "gradient"
  },
  {
    label: "Putri",
    imgUrl: "/images/naufal/putri.webp",
    isLive: false,
    color: "gradient"
  },
  {
    label: "John",
    imgUrl: "/images/naufal/john.webp",
    isLive: false,
    color: "green"
  },
  {
    label: "Mika",
    imgUrl: "/images/naufal/mika.webp",
    isLive: false,
    color: "green"
  },
  {
    label: "Mutia",
    imgUrl: "/images/naufal/mutia.webp",
    isLive: false,
    color: "gradient"
  },
  {
    label: "Richard",
    imgUrl: "/images/naufal/richard.webp",
    isLive: false,
    color: "gradient"
  },
  {
    label: "Kiki",
    imgUrl: "/images/naufal/kiki.webp",
    isLive: false,
    color: "green"
  },
  {
    label: "Bella",
    imgUrl: "/images/naufal/bella.webp",
    isLive: false,
    color: "gradient"
  },
  {
    label: "",
    imgUrl: "/images/naufal/john.webp",
    isLive: false,
    color: "gradient"
  }
]

metatags.title = "Naufal | Svelteception"
metatags.description = "Instagram Desktop Redesign"
</script>
