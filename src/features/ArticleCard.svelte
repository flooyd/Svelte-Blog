<script lang="ts">
  import { viewArticle } from "../stores/article";

  import { currentScreen } from "../stores/screen";

  import { getArticle } from "../util/articles";

  import type { article } from "../util/types";
  export let article: article;

  const { id, title } = article;

  const handleGet = async () => {
    const articleFetched = await getArticle(id);
    $viewArticle = articleFetched;
    $currentScreen = "articleViewer";
  };
</script>

<div on:click={() => handleGet()} class="articleCard">
  <div class="articleCardHeader">
    <div class="articleCardTitle">
      {title}
    </div>
    <div class="articleCardTags">
      <div>Neat</div>
      <div>Dogs</div>
      <div>Hello</div>
    </div>
  </div>
  <div class="articleCardFooter">
    <div>Written by Floyd</div>
    <div>On 12/22/2021</div>
  </div>
</div>

<style>
  .articleCard {
    background: lightyellow;
    box-shadow: 5px 5px 5px 2px rgba(51, 51, 51, 0.25);
    height: 210px;
    border-radius: 2px;
    padding: 10px;
    position: relative;
    margin: 0px 10px;
    overflow-y: auto;
  }

  .articleCardFooter {
    position: absolute;
    bottom: 0px;
    right: 13px;
    font-style: italic;
  }

  .articleCardHeader {
    display: flex;
    justify-content: space-between;
  }

  .articleCardTags {
    display: flex;
  }

  .articleCardTags div {
    border: 1px solid blue;
    border-radius: 5px;
    padding: 4px 8px;
    margin-right: 8px;
    height: fit-content;
    font-size: 13px;
  }

  .articleCardTags div:hover {
    color: white;
    background: #333;
    cursor: pointer;
  }

  .articleCardTitle {
    font-size: 16px;
    margin-right: 13px;
  }

  .articleCardTitle:hover {
    font-weight: bold;
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    .articleCardTitle {
      font-size: 13px;
    }
  }
</style>
