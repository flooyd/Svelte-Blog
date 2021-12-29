<script>
  import SideModal from "../components/SideModal.svelte";
  import Quill from "quill";
  import { onMount } from "svelte";
  import { articleTitleValue, articleValue } from "../stores/article";

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
      placeholder: "Compose an epic...",
      theme: "bubble",
    });

    quill.root.innerHTML = $articleValue;

    quill.on("text-change", () => {
      $articleValue = quill.root.innerHTML;
    });
  });

  $: console.log(quill);
</script>

<SideModal>
  <div class="articleModal">
    <div class="title">Article Editor</div>
    <div>
      <label for="articleTitle">Title</label>
      <input name="articleTitle" bind:value={$articleTitleValue} />
    </div>
    <div>
      <label for="articleContent">Content (highlight text to format!)</label>
      <div id="editor" name="articleContent" />
    </div>
    <div>
      <button>Save Draft</button>
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
