// ==================================================================================================
//
// Example JS
//
// ==================================================================================================
const example = () => {
  let props = {
    isEnabled : false
  };

  let els = {};

// Cache dom element selectors
  // ------------------------------------------------
  const createChildren = () => {
    els.carouselHighlight = document.querySelector('.js-carousel-highlight')
    return;
  }

  // Set up for responsive
  // ------------------------------------------------
  const setUpResponsive = () => {
    console.log('set up responsive');
    debugger
    return {
      'sm' : disable,
      'md' : disable,
      'lg' : enable,
      'xl' : enable
    }
  }

  // On mouseenter, swap bg image
  // ------------------------------------------------
  const launchExample = () => {
    console.log('launch example');
    return;
  }

  // Enable
  // ------------------------------------------------
  const enable = () => {
    if (props.isEnabled) return;

    // Add your event handlers here
    console.log('enable');
    launchExample();
    console.log(window.Project)
    debugger

    props.isEnabled = true;

    return;
  }

  // Disable
  // ------------------------------------------------
  const disable = () => {
    if (!props.isEnabled) return;

    // Remove your event handlers here
    console.log('disable');

    props.isEnabled = false;

    return;
  }

  // Init
  // ------------------------------------------------
  const init = () => {
    console.log('init');
    createChildren();
    return;
  }

  return {
    init,
    enable,
    disable,
    responsiveCallbacks: setUpResponsive()
  };
}

export default example;
