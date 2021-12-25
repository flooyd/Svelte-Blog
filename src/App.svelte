<script lang="ts">
  import LoginModal from "./LoginModal.svelte";
  import Nav from "./Nav.svelte";
  import { whichModalIsOpen } from "./stores/modal";
  import { user } from "./stores/user";
  import Dashboard from "./Dashboard.svelte";
  import Footer from "./Footer.svelte";

  $: console.log($user);

  if (localStorage.getItem("user")) {
    $user = JSON.parse(localStorage.getItem("user"));
  }
</script>

<main>
  <Nav />
  <Dashboard />
  <Footer />
  {#if $whichModalIsOpen === "login"}
    <LoginModal />
  {/if}
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Amatic+SC&family=Josefin+Sans&display=swap");

  :global(body) {
    font-family: "Josefin Sans", Arial, Helvetica, sans-serif;
    background-color: whitesmoke;
    padding-bottom: 20px;
  }
</style>
