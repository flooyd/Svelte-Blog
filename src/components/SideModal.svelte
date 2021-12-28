<script>
  import ClickOutside from "svelte-click-outside";
  import { openedBySystem, whichModalIsOpen } from "../stores/modal";
  import { fade } from "svelte/transition";

  let initialOpen = true;

  $: if ($openedBySystem) {
    initialOpen = false;
    $openedBySystem = false;
  }

  const onClickOutside = () => {
    if (!initialOpen) {
      $whichModalIsOpen = null;
    }
    initialOpen = false;
  };
</script>

<ClickOutside on:clickoutside={onClickOutside}>
  <div transition:fade={{ duration: 150 }} class="sideModal"><slot /></div>
</ClickOutside>

<style>
  .sideModal {
    padding: 20px;
    background: white;
    position: fixed;
    top: 60px;
    right: 0px;
    width: 400px;
    height: calc(100vh - 81px);
    border-left: 4px solid #333;
    box-shadow: 5px 5px 5px 2px rgba(51, 51, 51, 0.25);
  }
</style>
