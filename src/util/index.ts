export const baseUrl = window.location.href.includes("local")
  ? "http://localhost:3000/api"
  : "https://blog-in-a-nest.herokuapp.com/api";

export const setScreenAndUpdateHistory = (
  currentScreen,
  history,
  newScreen
) => {
  if (newScreen !== currentScreen) {
    return [newScreen, [...history, newScreen]];
  } else {
    return null;
  }
};

export const navigateOnLanding = () => {
  let url = window.location.href;
  if (url.includes("userArticles")) {
    return "/userArticles";
  }
  if (url.includes("/articles/")) {
    const urlSections = window.location.href.split("/");
    return "/articles/" + urlSections[urlSections.length - 1];
  }
  return null;
};

export const handleBack = () => {};
