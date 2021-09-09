import { useEffect } from "react";

export const useOnPageChange = (URL: string) => {
  useEffect(() => {
    // Close active window
try{
  //  console.log("LivePerson: window.lpTag.newPage(...)");
    // https://developers.liveperson.com/web-tag-new-page-refresh.html
    // window?.lpTag?.newPage &&
    //   window.lpTag.newPage(URL);

    }catch(e) {console.log(e)}
  }, [URL]);

};
