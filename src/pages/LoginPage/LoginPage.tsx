import { authorize } from "src/utils/http/spotify";

export default function LoginPage() {
  const auth = async () => {
    await authorize();
  };

  return (
    <>
      <h1>login page</h1>
      <div>
        <button onClick={auth}>oi</button>
      </div>
    </>
  );
}
