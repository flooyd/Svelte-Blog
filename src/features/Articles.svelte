<script>
  import { userArticles } from "../stores/articles";
  import ArticleCard from "./ArticleCard.svelte";
  import { currentScreen } from "../stores/screen";

  export let view = "grid";
</script>

{#if view === "grid" && $currentScreen === "userArticles"}
  <div class="articles">
    {#each $userArticles as article (article.id)}
      <ArticleCard article={{ ...article, fromWhichScreen: $currentScreen }} />
    {/each}
  </div>
{/if}

<style>
  .articles {
    margin: 20px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 600px));
    justify-content: center;
    grid-gap: 20px;
  }
</style>
