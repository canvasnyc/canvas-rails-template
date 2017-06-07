// Page Controllers
// _______________________________________________

// Controller Generation
import { controller } from 'savnac';

// Import all modules
import example        from '../modules/example';

// Create Controllers
// _______________________________________________
const universal = controller({});

const pages_homepage = controller({
  example
});

// Export Controllers
// _______________________________________________
export {
  universal,
  pages_homepage
};
