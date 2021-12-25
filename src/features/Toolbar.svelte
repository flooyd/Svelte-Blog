<script>
  import { user } from "../stores/user";
</script>

<div class="toolbar">
  <div class="title">{$user.username}'s Articles</div>
</div>

<style>
  .toolbar {
    margin: 0px 20px;
    margin-top: 80px;
  }

  .title {
    font-size: 20px;
  }
</style>
