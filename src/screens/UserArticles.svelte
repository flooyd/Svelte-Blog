<script lang="ts">
  import Toolbar from "../features/Toolbar.svelte";
  import Articles from "../features/Articles.svelte";
  import { user } from "../stores/user";
</script>

<div class="dashboard">
  <Toolbar user={$user} />
  <Articles view="grid" />
</div>
