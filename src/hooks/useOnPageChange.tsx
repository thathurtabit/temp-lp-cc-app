import { useEffect } from "react";

export const useOnPageChange = (URL: string) => {
  useEffect(() => {
    // Close active window

    console.log("LivePerson: attempt to close active window");
    // window.lpTag?.taglets?.lpUnifiedWindow &&
    //   window.lpTag.taglets.lpUnifiedWindow.onBeforeNavigation({
    //     dispose: true,
    //   });

  // console.log("Test");

  //   console.log("LivePerson: attempt to close active window");
  //   window.lpTag?.taglets?.lpUnifiedWindow &&
  //     window.lpTag.taglets.lpUnifiedWindow.onBeforeNavigation({
  //       dispose: true,
  //     });

    console.log("LivePerson: window.lpTag.newPage(...)");
    // https://developers.liveperson.com/web-tag-new-page-refresh.html
    window?.lpTag?.newPage &&
      window.lpTag.newPage(URL, {
        section: [],
        sdes: [],
      });
      window.lpTag.newPage(URL);
  }, [URL]);
};
