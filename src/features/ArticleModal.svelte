<script>
  import SideModal from "../components/SideModal.svelte";
  import Quill from "quill";
  import { onMount } from "svelte";
  import { articleTitleValue, articleValue } from "../stores/article";

  let quill;

  onMount(() => {
    let container = document.getElementById("editor");
    quill = new Quill(container, {
      module: {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          ["link", "code-block"],
        ],
      },
      placeholder: "Type something...anything :D",
      theme: "bubble",
    });

    quill.on("text-change", (delta) => {
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
</style>
