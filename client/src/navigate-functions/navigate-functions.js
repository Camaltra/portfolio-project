export const logOut = () => {
  window.open("http://localhost:8000/auth/logout", "_self");
};

export const navigateToFullPath = () => {
  window.open("/full-path", "_self");
};

export const navigateToDashboard = () => {
  window.open("/dashboard", "_self");
};

export const navigateToProfile = () => {
  window.open("/profile", "_self");
};

export const navigateToInfo = () => {
  window.open("/info", "_self");
};

export const navigateToRandomize = () => {
  window.open("/randomize", "_self");
};

export const navigateToAdminController = () => {
  window.open("/admin", "_self");
};
