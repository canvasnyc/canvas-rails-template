// ==================================================================================================
//
// Example JS
//
// ==================================================================================================
const gaClick = () => {
  let props = {
    isEnabled: false,
    starterText: '',
    counter: 0
  };

  let els = {};

// Cache dom element selectors
  // ------------------------------------------------
  const createChildren = () => {
    els.gaBtn = document.querySelector('.js-ga-btn')
    props.starterText = els.gaBtn.innerText

    return;
  }

  const onGaBtnClick = (e) => {
    ga('send', 'event', 'Anything', 'test', 'analytics')
    els.gaBtn.innerText = `${props.starterText} (${++props.counter})`
  }

  // Enable
  // ------------------------------------------------
  const enable = () => {
    if (props.isEnabled) return;

    // Add your event handlers here
    els.gaBtn.addEventListener('click', onGaBtnClick)

    props.isEnabled = true;

    return;
  }

  // Disable
  // ------------------------------------------------
  const disable = () => {
    if (!props.isEnabled) return;

    // Remove your event handlers here
    els.gaBtn.removeEventListener('click', onGaBtnClick)

    props.isEnabled = false;

    return;
  }

  // Init
  // ------------------------------------------------
  const init = () => {
    createChildren();
    enable();
    return;
  }

  return {
    init,
    enable,
    disable
  };
}

export default gaClick;
