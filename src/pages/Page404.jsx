import {useDocumentTitle} from "../hooks/useDocumentTitle";

export const Page404 = () => {
  useDocumentTitle("Not Found | PLAYERONE");

  return <h1>This is a 404 page. No such path exists</h1>;
};
