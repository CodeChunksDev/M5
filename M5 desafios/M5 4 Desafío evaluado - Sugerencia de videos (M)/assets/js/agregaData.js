export const agregaData = (() => {
  return {
    renderizaVideo: (url, id) => {
      let iframe = document.getElementById(id);
      iframe.setAttribute("src", url);
    },
  };
})();
