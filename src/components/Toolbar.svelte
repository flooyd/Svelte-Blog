<script>
  export let title;
</script>

<div class="toolbar">
  <div class="title">{title}</div>
  <slot />
</div>

<style>
  .toolbar {
    margin: 0px 20px;
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
  }
</style>
