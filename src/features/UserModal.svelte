<script>
  import SideModal from "../components/SideModal.svelte";
  import { whichModalIsOpen } from "../stores/modal";
  import { currentScreen } from "../stores/screen";
  import { user } from "../stores/user";
  import { userArticles, userArticlesCount } from "../stores/articles";
  import { getOwnArticles } from "../util/user";

  const handleLogout = async () => {
    localStorage.removeItem("user");
    $user = false;
    $whichModalIsOpen = null;
    $currentScreen = "logout";
  };

  const handleClickView = async () => {
    $currentScreen = "userArticles";
    $whichModalIsOpen = null;
    const userArticlesResponse = await getOwnArticles($user.token);
    $userArticles = userArticlesResponse.articles;
    $userArticlesCount = userArticlesResponse.count;
  };

  const handleClickCreate = () => {
    $currentScreen = "articleDraft";
    $whichModalIsOpen = "articleEditor";
  };
</script>

<SideModal>
  <div class="userModal">
    <div class="title">{$user.username}'s Profile</div>
    <div>
      Hello, {$user.username}. 😊
    </div>
    <div>
      <button on:click={handleClickView}>View my Articles</button>
      <button on:click={handleClickCreate}>Create new Article</button>
      <button class="logout" on:click={handleLogout}>Logout</button>
    </div>
  </div>
</SideModal>

<style>
  .userModal {
    background: lightblue;
    color: black;
    padding: 10px;
  }

  .userModal .title {
    font-size: 20px;
    font-weight: bold;
  }

  .userModal div {
    margin: 10px 0px;
  }

  button {
    border: none;
    background: white;
    color: black;
    cursor: pointer;
    display: block;
  }

  button:hover {
    color: white;
    background: #333;
  }
</style>
