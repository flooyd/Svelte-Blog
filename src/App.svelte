<script lang="ts">
  import LoginModal from "./features/LoginModal.svelte";
  import Nav from "./features/Nav.svelte";
  import { whichModalIsOpen } from "./stores/modal";
  import { user } from "./stores/user";
  import Dashboard from "./screens/Dashboard.svelte";
  import Footer from "./features/Footer.svelte";
  import { seedArticles, article } from "./util/seed";
  import { userArticles } from "./stores/articles";

  if (localStorage.getItem("user")) {
    $user = JSON.parse(localStorage.getItem("user"));
  }

  $: if ($user) {
    $userArticles = seedArticles;
  }

  $: if (!$user) {
    $userArticles = [];
  }

  $: console.log($user);
</script>

<main>
  <Nav />
  {#if $user}
    <Dashboard />
  {/if}
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
