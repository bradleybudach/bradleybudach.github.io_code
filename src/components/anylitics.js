import ReactGA from 'react-ga';

const TRACKING_ID = "G-PJHSE3E8NE"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(TRACKING_ID);

export const trackPageView = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

export const trackEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label
  });
};
