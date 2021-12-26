<script>
  import SideModal from "../components/SideModal.svelte";
  import { whichModalIsOpen } from "../stores/modal";
  import { currentScreen } from "../stores/screen";
  import { user } from "../stores/user";

  const handleLogout = () => {
    localStorage.removeItem("user");
    $whichModalIsOpen = null;
    $user = null;
  };

  const handleClickView = () => {
    $currentScreen = "userArticles";
    $whichModalIsOpen = null;
  };
</script>

<SideModal>
  <div class="userModal">
    <div>Hello, {$user.username}. Hopefully you are having a good day. :D</div>
    <div><button on:click={handleClickView}>View my Articles</button></div>
    <div><button class="logout" on:click={handleLogout}>Logout</button></div>
  </div>
</SideModal>

<style>
  .userModal {
    background: lightblue;
    color: black;
    padding: 10px;
    text-align: center;
  }

  .userModal div {
    margin: 10px 0px;
  }

  button {
    background: #333;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    color: yellow;
  }

  .logout {
    width: 133.48px;
    background: white;
    color: black;
  }

  .logout:hover {
    background: #333;
    color: white;
  }
</style>
