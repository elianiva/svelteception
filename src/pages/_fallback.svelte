<style>
.huge {
  color: #efefef;
  font-size: 12rem;
}
.e404 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.big {
  color: #efefef;
}

a {
  color: #5c90ff;
  font-weight: bold;
}
</style>

<div class="e404">
  <div class="huge">404</div>
  <div class="big">
    Page not found.
    <!-- link to the parent folder of _fallback.svelte -->
    <a href="{$url('../')}">Go back</a>
  </div>
</div>

<script>
import { url } from "@sveltech/routify"
</script>
