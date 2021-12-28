<script>
  import Toolbar from "../components/Toolbar.svelte";
  import { articleTitleValue, articleValue } from "../stores/article";
</script>

<div class="articleDraft">
  <Toolbar title="Article Draft" />
  <div class="title">{$articleTitleValue}</div>
  <div class="content">{@html $articleValue}</div>
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
