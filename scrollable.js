/******************************************************************************

      PARAMETERS

      selector
        CSS selector of target element
        Mandatory

      axis
        Axis on which scroll is allowed (x, y or both)
        Optional
        Default : both

      scrollSpeed
        Scroll speed setting
        Optional
        Default : 2

*******************************************************************************/

const scrollableElement = (selector, axis = 'both', scrollSpeed = 2) => {

  const element = document.querySelector(selector);
  element.style.cursor = 'grab';
  let pos = {};

  const mouseDownHandler = (e) => {
    e.preventDefault();
    mousePos = e.clientX;
    element.style.cursor = 'grabbing';
    element.style.userSelect = 'none';
    pos = {
      // Current scroll
      left: element.scrollLeft,
      top: element.scrollTop,
      // Current mouse position
      x: e.clientX,
      y: e.clientY
    };
    document.addEventListener('mouseup', mouseUpHandler);
    document.addEventListener('mousemove', mouseMoveHandler);

  };

  const mouseMoveHandler = (e) => {
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    if (axis == 'x' || axis == 'both') {
      element.scrollLeft = pos.left - (dx * scrollSpeed);
    }

    if (axis == 'y' || axis == 'both') {
      element.scrollTop = pos.top - (dy * scrollSpeed);
    }

  };

  const mouseUpHandler = () => {
    element.style.cursor = 'grab';
    element.style.userSelect = 'auto';
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };

  element.addEventListener('mousedown', mouseDownHandler);


};
