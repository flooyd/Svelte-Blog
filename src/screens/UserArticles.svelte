<script lang="ts">
  import Toolbar from "../components/Toolbar.svelte";
  import Articles from "../features/Articles.svelte";
  import { whichModalIsOpen } from "../stores/modal";
  import { currentScreen } from "../stores/screen";
  import { user } from "../stores/user";

  const handleCreate = () => {
    $currentScreen = "articleDraft";
    $whichModalIsOpen = "articleEditor";
  };
</script>

<div class="dashboard">
  <Toolbar title={`${$user.username}'s Articles`}>
    <div on:click={handleCreate}>
      <button>Create Article</button>
    </div>
  </Toolbar>
  <Articles view="grid" />
</div>

<style>
  button {
    background: white;
  }

  button:hover {
    color: white;
    background: #333;
    cursor: pointer;
  }
</style>
