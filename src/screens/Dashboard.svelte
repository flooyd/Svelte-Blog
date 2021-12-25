<script lang="ts">
  import { onDestroy } from "svelte";

  import { fade } from "svelte/transition";
  import App from "../App.svelte";
  import ArticleCard from "../features/ArticleCard.svelte";
  import Toolbar from "../features/Toolbar.svelte";
  import { userArticles } from "../stores/articles";
</script>

<div class="dashboard">
  <Toolbar />
  <div class="articles">
    {#each $userArticles as article (article.id)}
      <ArticleCard article={{ ...article }} />
    {/each}
  </div>
</div>

<style>
  .articles {
    margin: 20px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 600px));
    justify-content: center;
    grid-gap: 20px;
  }
</style>
