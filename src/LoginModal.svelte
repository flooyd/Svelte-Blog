<script>
  import SideModal from "./SideModal.svelte";
</script>

<SideModal modal="login">
  <div class="login">
    <div class="header">Login</div>
    <div class="info">Need an account? Register.</div>
    <form autocomplete="off">
      <label for="username">Username</label>
      <input autofill name="username" />
      <label for="email">Email</label>
      <input type="email" name="email" />
      <label for="password">Password</label>
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  </div>
</SideModal>

<style>
  .login {
    background: lightblue;
    color: black;
    padding: 10px;
    text-align: center;
  }

  .login .header {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
  }

  .login .info {
    margin-bottom: 10px;
    font-style: italic;
  }

  .login form button {
    display: block;
    margin: 0 auto;
    margin-top: 2px;
    width: 100px;
  }
</style>
