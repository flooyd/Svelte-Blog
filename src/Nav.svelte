<script>
  import { whichModalIsOpen } from "./stores/modal";
  import { user } from "./stores/user";

  const handleClickLogin = () => {
    $whichModalIsOpen = "login";
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    $user = null;
    console.log($user);
  };
</script>

<div class="nav">
  <div class="title">Nest Blog</div>
  <nav class="options">
    <div class="about">About</div>
    {#if $user && $user.id}
      <div on:click={handleLogout}>
        Logged in as {$user.username}
      </div>
    {:else}
      <div class="navLogin" on:click={handleClickLogin}>Login/Register</div>
    {/if}
  </nav>
</div>

<style>
  .nav {
    padding: 0px 20px;
    background: #333;
    height: 60px;
    color: white;
    display: flex;
    align-items: center;
    position: sticky;
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
    font-size: 20px;
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
