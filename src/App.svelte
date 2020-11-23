<style>
:global(*) {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: SegoeUI;
  src: local("Segoe UI"),
    url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff2)
      format("woff2"),
    url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff)
      format("woff"),
    url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.ttf)
      format("truetype");
  font-weight: 400;
}
</style>

<Router routes="{routes}" />

<script>
import { Router } from "@sveltech/routify"
import { routes } from "../.routify/routes"
</script>
