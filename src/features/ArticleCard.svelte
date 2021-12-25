<script lang="ts">
  import type { article } from "../util/seed";
  export let article: article;

  const { id, title, content } = article;
</script>

<div class="article">
  <div class="articleHeader">
    <div class="articleTitle">
      {title}
    </div>
    <div class="articleTags">
      <div>Neat</div>
      <div>Dogs</div>
      <div>Hello</div>
    </div>
  </div>
  <div class="articleFooter">
    <div>Written by Floyd</div>
    <div>On 12/22/2021</div>
  </div>
</div>

<style>
  .article {
    background: lightyellow;
    box-shadow: 5px 5px 5px 2px rgba(51, 51, 51, 0.25);
    height: 210px;
    border-radius: 2px;
    padding: 10px;
    position: relative;
    margin: 0px 10px;
    overflow-y: auto;
  }

  .articleFooter {
    position: absolute;
    bottom: 0px;
    right: 13px;
    font-style: italic;
  }

  .articleHeader {
    display: flex;
    justify-content: space-between;
  }

  .articleTags {
    display: flex;
  }

  .articleTags div {
    border: 1px solid blue;
    border-radius: 5px;
    padding: 4px 8px;
    margin-right: 8px;
    height: fit-content;
    font-size: 13px;
  }

  .articleTags div:hover {
    color: white;
    background: #333;
    cursor: pointer;
  }

  .articleTitle {
    font-size: 16px;
    margin-right: 13px;
  }

  .articleTitle:hover {
    font-weight: bold;
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    .articleTitle {
      font-size: 13px;
    }
  }
</style>
