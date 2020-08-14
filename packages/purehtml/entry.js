const render = ($) => {
  $("#ide-container").html("Hello, render with jQuery");
  return Promise.resolve();
};

((global) => {
  global["ide"] = {
    bootstrap: () => {
      console.log("ide bootstrap");
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
