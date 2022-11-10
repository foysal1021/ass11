import { useEffect } from "react";

const UseTitale = (titale) => {
  useEffect(() => {
    document.title = `${titale} - React App`;
  }, [titale]);
};
export default UseTitale;
