<script>
  import { whichModalIsOpen } from "./stores/modal";

  const handleClickLogin = () => {
    $whichModalIsOpen = "login";
  };
</script>

<div class="nav">
  <div class="title">Blog Site</div>
  <nav class="options">
    <div class="about">About</div>
    <div class="navLogin" on:click={handleClickLogin}>Login/Register</div>
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
