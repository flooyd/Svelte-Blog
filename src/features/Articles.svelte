<script>
  import { userArticles } from "../stores/articles";
  import ArticleCard from "./ArticleCard.svelte";
  import { currentScreen } from "../stores/screen";

  export let view = "grid";
</script>

{#if view === "grid" && $currentScreen === "userArticles"}
  {#if $userArticles.length === 0}
    <div class="noArticles">
      It looks like you haven't created an Article yet. You should do that. 😊
    </div>
  {/if}
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

  .noArticles {
    margin-left: 20px;
  }
</style>
