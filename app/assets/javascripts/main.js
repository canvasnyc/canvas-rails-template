//  ==========================================================================
//
//  Set Up JS App & Router
//
//  ==========================================================================
import * as d3 from 'd3';
import {breakpoint} from 'savnac'
// import * as controllers from './controllers/controllers';

const app = () => {
  console.log(breakpoint)
  let props = {
    // currentPage is the string from the body data attr that corresponds with a controller
    currentPage: '',
    // universalController is the resulting object of the universal controller. stored to be able to disable
    // it as navigation to a new page occurs
    universalController: controllers.universal,
    // currentController is the resulting object of the page controller. stored to be able to disable
    // it as navigation to a new page occurs
    currentController: null,
    // breakpoint: breakpoint()
  };

  const runPageJs = () => {
    const { currentPage } = props;
    if (controllers[currentPage]) {
      props.currentController = controllers[currentPage];
      props.currentController.init();
    }

    return;
  }

  const runUniversalJs = () => {
    props.universalController.disable();
    props.universalController.init();

    return;
  }

  const init = () => {
    props.currentPage = document.body.dataset.jsRouter;

    if (props.currentController) {
      props.currentController.disable();
      props.currentController = null;
    }

    // props.breakpoint.enable();
    runPageJs();
    runUniversalJs();

    return;
  }

  return {
    init,
    // breakpoint: props.breakpoint
  };
}

export default app;
