<script lang="ts">
  import ArticleCard from "./ArticleCard.svelte";
  import LoginModal from "./LoginModal.svelte";
  import Nav from "./Nav.svelte";
  import { whichModalIsOpen } from "./stores/modal";
  import { user } from "./stores/user";
  import Fa from "svelte-fa";
  import { faGithub } from "@fortawesome/free-brands-svg-icons";

  $: console.log($user);

  if (localStorage.getItem("user")) {
    $user = JSON.parse(localStorage.getItem("user"));
  }
</script>

<main>
  <Nav />
  <div class="articles">
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
  </div>
  {#if $whichModalIsOpen === "login"}
    <LoginModal />
  {/if}
  <div class="footer">
    <div>Created with ❤️ by Floyd Jones</div>
    <a target="__blank" href="https://github.com/flooyd/svelte-blog"
      ><Fa icon={faGithub} /></a
    >
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

  :global(body) {
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    background-color: whitesmoke;
    padding-bottom: 20px;
  }

  .articles {
    margin: 20px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 600px));
    justify-content: center;
    grid-gap: 20px;
  }

  .footer {
    position: fixed;
    background: #333;
    color: white;
    width: 100%;
    bottom: 0px;
    text-align: right;
    padding: 10px;
    padding-right: 20px;
  }

  .footer a,
  .footer div {
    color: white;
    display: inline-block;
    margin-left: 13px;
  }
</style>
