/// <reference types="react-scripts" />

interface Window {
  gubagooCustomParams: any;
  lpTag: {
    events: any;
    taglets: {
      providerSubscription:{
        click : Function
      }
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
