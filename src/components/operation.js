export const toggleFn = (i, key) => {
  const dom = document.getElementById(i + key);
  dom.className = 'ui primary basic button';
};

export const closeFn = (setActive, slots, setSelect, key, setPrice) => {
  setActive(false);
  slots.forEach((element, index) => {
    if (!element.member) {
      document.getElementById(index + key).className = 'ui primary button';
    }
  });
  setSelect([]);
  setPrice(0);
};

export const booking = (setSelect, setActive, setAlert) => {
  setSelect([]);
  //timeout has been implemented to show the toggling in button content
  setTimeout(() => {
    setActive(false);
    setAlert(true);
  }, 500);
};
