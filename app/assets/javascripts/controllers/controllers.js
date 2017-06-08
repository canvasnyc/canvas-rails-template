// Import all modules
// _______________________________________________
import breakpoint     from '../utilities/breakpoint';
import example        from '../modules/example';
import gaClick        from '../modules/ga-click';

// Controller Generation
import { controller } from '../utilities/savnac';

// Create Controllers
// _______________________________________________
const universal = controller({
  breakpoint
});

const pages_homepage = controller({
  example
});

const pages_about = controller({
  // gaClick
})

// Export Controllers
// _______________________________________________
export {
  universal,
  pages_homepage,
  pages_about
};
