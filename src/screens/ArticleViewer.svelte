<script>
  import { onMount } from "svelte";

  import Toolbar from "../components/Toolbar.svelte";
  import { viewArticle } from "../stores/article";
  import { getArticle } from "../util/articles";

  onMount(async () => {
    const urlSections = window.location.href.split("/");
    const articleFetched = await getArticle(
      urlSections[urlSections.length - 1]
    );
    $viewArticle = articleFetched;
  });
</script>

{#if $viewArticle}
  <div>
    <Toolbar title="" />
    <div class="title">{$viewArticle.title}</div>
    <div class="content">{@html $viewArticle.content}</div>
  </div>
{/if}

<style>
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .title,
  .content {
    margin-left: 20px;
    margin-top: 20px;
  }
</style>
