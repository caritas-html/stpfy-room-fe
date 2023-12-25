import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getToken } from "src/utils/http/spotify";

export default function Dashboard() {
  const { code } = useParams();
  useEffect(() => {
    getToken(code as string);
  }, []);
  return <div></div>;
}
