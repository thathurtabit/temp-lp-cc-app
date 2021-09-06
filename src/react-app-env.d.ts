/// <reference types="react-scripts" />

interface Window {
  gubagooCustomParams: any;
  lpTag: {
    events: any;
    taglets: {
      lpUnifiedWindow: {
        onBeforeNavigation: Function;
      };
    };
    newPage: Function;
  };
  ggChat: Function;
  ggToolbar: {
    apps: {
      chat: {
        goMobile: Function;
      };
    };
  };
}
