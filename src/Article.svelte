<div class="article">
  <div class="articleHeader">
    <div class="articleTitle">
      Sed enim nunc, semper eu congue ut, hendrerit quis lorem. Praesent tempus
      arcu quis ex pretium, eget viverra odio tempor. Mauris ut tristique dolor.
      Cras et eros ornare, fermentum ante in, tincidunt nisi. Class aptent
      taciti sociosqu ad litora erat curae.
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
    height: 175px;
    border-radius: 2px;
    padding: 10px;
    position: relative;
    overflow: hidden;
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
</style>
