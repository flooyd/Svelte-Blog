<script lang="ts">
  import LoginModal from "./features/LoginModal.svelte";
  import Nav from "./features/Nav.svelte";
  import { whichModalIsOpen } from "./stores/modal";
  import { user } from "./stores/user";
  import Dashboard from "./screens/UserArticles.svelte";
  import Footer from "./features/Footer.svelte";
  import { seedArticles, article } from "./util/seed";
  import { userArticles, userArticlesCount } from "./stores/articles";
  import { currentScreen } from "./stores/screen";
  import { getOwnArticles } from "./util/user";
  import UserModal from "./features/UserModal.svelte";
  import ArticleModal from "./features/ArticleModal.svelte";

  if (localStorage.getItem("user")) {
    $user = JSON.parse(localStorage.getItem("user"));
  }

  $: if ($user) {
    getArticles();
  }

  $: if (!$user) {
    $userArticles = [];
  }

  const getArticles = async () => {
    const userArticlesResponse = await getOwnArticles($user.token);
    $userArticles = userArticlesResponse.articles;
    $userArticlesCount = userArticlesResponse.count;
  };
</script>

<main>
  <Nav />
  <div class="clickOutside" />
  {#if $user && $currentScreen === "userArticles"}
    <Dashboard />
  {/if}
  <Footer />
  {#if $whichModalIsOpen === "login"}
    <LoginModal />
  {/if}
  {#if $whichModalIsOpen === "user"}
    <UserModal />
  {/if}
  <ArticleModal />
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Amatic+SC&family=Josefin+Sans&display=swap");

  :global(body) {
    font-family: "Josefin Sans", Arial, Helvetica, sans-serif;
    background-color: whitesmoke;
    padding-bottom: 20px;
  }

  .clickOutside {
    top: 0px;
    position: absolute;
    height: 100vh;
    width: calc(100vw - 300px);
  }
</style>
