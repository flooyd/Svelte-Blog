<script lang="ts">
  import Article from "./Article.svelte";
  import LoginModal from "./LoginModal.svelte";
  import Nav from "./Nav.svelte";
  import { whichModalIsOpen } from "./stores/modal";
</script>

<main>
  <Nav />
  <div class="articles">
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
  }

  main {
    padding: 0px;
    height: 100vh;
    background: whitesmoke;
  }
  .articles {
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 600px));
    justify-content: center;
    grid-gap: 20px;
  }
</style>
