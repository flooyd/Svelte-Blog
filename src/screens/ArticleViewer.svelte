<script>
  import Toolbar from "../components/Toolbar.svelte";
  import { viewArticle } from "../stores/article";
</script>

<div>
  <Toolbar title="Article Viewer" />
  <div class="title">{$viewArticle.title}</div>
  <div class="content">{@html $viewArticle.content}</div>
</div>

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
