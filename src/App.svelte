<script lang="ts">
  import LoginModal from "./features/LoginModal.svelte";
  import Nav from "./features/Nav.svelte";
  import { whichModalIsOpen } from "./stores/modal";
  import { user } from "./stores/user";
  import Footer from "./features/Footer.svelte";
  import { userArticles, userArticlesCount } from "./stores/articles";
  import { currentScreen, history } from "./stores/screen";
  import { getOwnArticles } from "./util/user";
  import UserModal from "./features/UserModal.svelte";
  import ArticleModal from "./features/ArticleModal.svelte";
  import UserArticles from "./screens/UserArticles.svelte";
  import ArticleDraft from "./screens/ArticleDraft.svelte";
  import ArticleViewer from "./screens/ArticleViewer.svelte";
  import { onMount } from "svelte";
  import { navigateOnLanding, setScreenAndUpdateHistory } from "./util";

  onMount(() => {
    let screenToNavigateTo = navigateOnLanding();
    if (screenToNavigateTo) {
      let newHistory = setScreenAndUpdateHistory(
        $currentScreen,
        $history,
        screenToNavigateTo
      );
      if (newHistory) {
        $currentScreen = newHistory[0];
        $history = newHistory[1];
        window.history.pushState("", "", screenToNavigateTo);
      }
    } else {
      $history = ["/home"];
      window.history.pushState("", "", "/");
    }
  });

  $: console.log($history, $currentScreen);

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
  let containerWidthConstraint = false;
  $: if (!$whichModalIsOpen) {
    containerWidthConstraint = false;
  } else {
    containerWidthConstraint = true;
  }
</script>

<main>
  <Nav />
  <div class="clickOutside" />
  <div class={containerWidthConstraint ? "container" : ""}>
    {#if $user && $currentScreen === "/userArticles"}
      <UserArticles />
    {/if}
    <Footer />
    {#if $whichModalIsOpen === "login"}
      <LoginModal />
    {/if}
    {#if $whichModalIsOpen === "user"}
      <UserModal />
    {/if}
    {#if $whichModalIsOpen === "articleEditor"}
      <ArticleModal />
    {/if}
    {#if $currentScreen === "articleDraft"}
      <ArticleDraft />
    {/if}
    {#if $currentScreen.includes("articles/") || $currentScreen === "articleViewer"}
      <ArticleViewer />
    {/if}
  </div>
</main>

<style>
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

  .container {
    width: calc(100vw - 400px);
  }
</style>
