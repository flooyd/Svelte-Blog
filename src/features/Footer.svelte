<script>
  import Fa from "svelte-fa";
  import { faGithub } from "@fortawesome/free-brands-svg-icons";
</script>

<div class="footer">
  <div>Created by</div>
  <a target="__blank" href="https://github.com/flooyd/svelte-blog"
    ><Fa icon={faGithub} /></a
  >
</div>

<style>
  .footer {
    position: fixed;
    background: #333;
    color: white;
    width: 100%;
    bottom: 0px;
    text-align: right;
    padding-right: 20px;
    font-size: 13px;
  }

  .footer a,
  .footer div {
    color: white;
    display: inline-block;
    margin-left: 4px;
    font-style: bold;
  }

  .footer a:hover {
    color: lightblue;
  }
</style>
