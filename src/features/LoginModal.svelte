<script>
  import SideModal from "../components/SideModal.svelte";
  import { openedBySystem, whichModalIsOpen } from "../stores/modal";
  import { user } from "../stores/user";
  import { baseUrl } from "../util/index";

  let username, email, password;

  let login = true;
  let errors = [];
  let disabled = false;

  const handleChangeLoginRegister = (e, loginOrRegister) => {
    e.stopPropagation();
    errors = [];
    username = "";
    password = "";
    email = "";
    if (loginOrRegister === "register") {
      login = false;
    } else {
      login = true;
    }
  };

  const handleClickLoginRegister = (e, loginOrRegister) => {
    e.preventDefault();
    disabled = true;
    if (loginOrRegister === "login") {
      loginUser();
    } else {
      registerUser();
    }
  };

  const registerUser = async () => {
    const response = await fetch(`${baseUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          email,
          password,
        },
      }),
    });
    const data = await response.json();
    if (data.statusCode) {
      handleErrors(data);
    } else {
      $user = data.user;
      $whichModalIsOpen = null;
      storeUser($user);
      $whichModalIsOpen = "user";
      $openedBySystem = true;
    }
    disabled = false;
  };

  const loginUser = async () => {
    const response = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });

    const data = await response.json();
    if (data.statusCode) {
      handleErrors(data);
    } else {
      $user = data.user;
      $whichModalIsOpen = null;
      storeUser($user);
      $whichModalIsOpen = "user";
      $openedBySystem = true;
    }
    disabled = false;
  };

  const storeUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleErrors = (data) => {
    if (data.statusCode === 422 && login) {
      errors = [data.message];
    } else if (data.statusCode === 400) {
      errors = data.message.map((error) => error);
    } else if (data.statusCode === 422 && !login) {
      errors = [data.message];
    }
  };
</script>

<SideModal>
  <div class="login">
    {#if login}
      <div class="header">Login</div>
      <div
        class="info"
        on:click={(e) => handleChangeLoginRegister(e, "register")}
      >
        Need an account? Register.
      </div>
    {:else}
      <div class="header">Register</div>
      <div class="info" on:click={(e) => handleChangeLoginRegister(e, "login")}>
        Already have an account? Login.
      </div>
    {/if}
    <form autocomplete="off" on:submit={() => handleClickLoginRegister()}>
      <label for="username">Username</label>
      <input bind:value={username} autofill name="username" />
      {#if !login}
        <label for="email">Email</label>
        <input bind:value={email} type="email" name="email" />
      {/if}
      <label for="password">Password</label>
      <input bind:value={password} type="password" name="password" />
      {#if login}
        <button
          {disabled}
          type="submit"
          on:click={(e) => handleClickLoginRegister(e, "login")}>Login</button
        >
      {:else}
        <button
          {disabled}
          type="submit"
          on:click={(e) => handleClickLoginRegister(e, "register")}
          >Register</button
        >
      {/if}
    </form>
    <div class="errors">
      {#if errors.length > 0}
        {#each errors as error}
          <div class="error">{error}</div>
        {/each}
      {/if}
    </div>
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
    cursor: pointer;
  }

  .login .info:hover {
    font-weight: bold;
  }

  .login form button {
    display: block;
    margin: 0 auto;
    margin-top: 2px;
    width: 100px;
  }

  .login form button:hover {
    background: #333;
    color: whitesmoke;
  }

  .errors {
    font-style: italic;
    margin-top: 10px;
  }

  button {
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
  }
</style>
