<script lang="ts">
  import Article from "./Article.svelte";
  import LoginModal from "./LoginModal.svelte";
  import Nav from "./Nav.svelte";
  import { whichModalIsOpen } from "./stores/modal";
  import { user } from "./stores/user";

  $: console.log($user);

  if (localStorage.getItem("user")) {
    $user = JSON.parse(localStorage.getItem("user"));
  }
</script>

<main>
  <Nav />
  <div class="articles">
    <Article />
    <Article />
    <Article />
    <Article />
    <Article />
    <Article />
    <Article />
    <Article />
    <Article />
    <Article />
  </div>
  {#if $whichModalIsOpen === "login"}
    <LoginModal />
  {/if}
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
</style>
