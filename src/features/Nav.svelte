<script lang="ts">
  import { whichModalIsOpen } from "../stores/modal";
  import { currentScreen, history } from "../stores/screen";
  import { user } from "../stores/user";
  import { setScreenAndUpdateHistory } from "../util";

  const handleClickLogin = () => {
    $whichModalIsOpen = "login";
  };

  const handleClickUser = () => {
    $whichModalIsOpen = "user";
  };

  const handleClickHome = () => {
    let newHistory = setScreenAndUpdateHistory(
      $currentScreen,
      $history,
      "/home"
    );
    if (newHistory) {
      $currentScreen = newHistory[0];
      $history = newHistory[1];
      window.history.pushState("", "", "/");
    }
  };
</script>

<div class="nav">
  <div class="title" on:click={handleClickHome}>Nest Blog</div>
  <nav class="options">
    <div class="about">About</div>
    {#if $user}
      <div on:click={handleClickUser}>
        Logged in as {$user.username}
      </div>
    {:else}
      <div class="navLogin" on:click={handleClickLogin}>Login/Register</div>
    {/if}
  </nav>
</div>

<style>
  .nav {
    font-family: "Amatic Sc";
    padding: 0px 20px;
    background: #333;
    height: 60px;
    color: white;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0px;
    z-index: 5;
    width: 100%;
    justify-content: space-between;
    user-select: none;
  }
  .title {
    font-weight: bold;
    font-size: 31.25px;
  }
  .nav .options {
    font-weight: bold;
    font-size: 25px;
    display: flex;
  }

  .nav .options div {
    margin-left: 13px;
    cursor: pointer;
  }

  .nav .options div:hover,
  .title:hover {
    color: yellow;
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    .title {
      font-weight: bold;
      font-size: 20px;
    }
    .nav .options {
      font-weight: bold;
      font-size: 16px;
      display: flex;
    }
  }
</style>
