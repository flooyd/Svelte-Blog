<script>
  import SideModal from "../components/SideModal.svelte";
  import Quill from "quill";
  import { onMount } from "svelte";
  import {
    articleTagsValue,
    articleTitleValue,
    articleValue,
  } from "../stores/article";
  import { createArticle } from "../util/articles";
  import { user } from "../stores/user";
  import { whichModalIsOpen } from "../stores/modal";
  import { currentScreen } from "../stores/screen";

  let quill;

  onMount(() => {
    var quill = new Quill("#editor", {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          ["image", "code-block"],
        ],
      },
      placeholder: "Content here...",
      theme: "bubble",
    });

    quill.root.innerHTML = $articleValue;

    quill.on("text-change", () => {
      $articleValue = quill.root.innerHTML;
    });
  });

  const handleCreate = async (visibility) => {
    const createdArticle = await createArticle($user.token, {
      title: $articleTitleValue,
      content: $articleValue,
      tags: $articleTagsValue,
      type: visibility,
    });

    $whichModalIsOpen = null;
    $currentScreen = "home";
  };
</script>

<SideModal>
  <div class="articleModal">
    <div class="title">Article Editor</div>
    <div>
      <label for="articleTitle">Title</label>
      <input name="articleTitle" bind:value={$articleTitleValue} />
    </div>
    <div>
      <label for="articleTags"
        >Tags (max 50 characters, separated by spaces)</label
      >
      <input name="articleTags" bind:value={$articleTagsValue} />
    </div>
    <div>
      <label for="articleContent">Content (highlight text to format!)</label>
      <div id="editor" name="articleContent" />
    </div>
    <div>
      <button on:click={() => handleCreate("draft")}>Save Draft</button>
      <button>Publish Article - Private</button>
      <button>Publish Article - Public</button>
    </div>
  </div>
</SideModal>

<style>
  .articleModal {
    background: lightblue;
    padding: 10px;
  }
  .articleModal div {
    margin: 10px 0px;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  #editor {
    background: white;
  }
  button {
    display: block;
  }
  button:hover {
    color: white;
    background: #333;
    cursor: pointer;
  }
</style>
