const render = ($) => {
  $("#ide-container").html("Hello, render with jQuery");
  return Promise.resolve();
};

((global) => {
  global["@ionia/theia"] = {
    bootstrap: (props) => {
      console.log("ide bootstrap", "--->", props);
      return Promise.resolve();
    },
    mount: () => {
      console.log("ide mount");
      return render($);
    },
    unmount: () => {
      console.log("ide unmount");
      return Promise.resolve();
    },
  };
})(window);
