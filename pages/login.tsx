import { useRouter } from "next/router";
import { SyntheticEvent, useCallback, useState } from "react";
import { authorize } from "../repository/authorize";

export default function Login() {
  const [id, setId] = useState("");

  const router = useRouter();

  const onClick = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      const url = authorize(id);
      router.push(url);
    },
    [id, router]
  );

  return (
    <div className="text-gray-100 h-full flex flex-col items-center justify-center">
      <form className="h-full w-fit flex flex-col items-start justify-center gap-3">
        <div className="w-full flex gap-3 items-center justify-between">
          <label htmlFor="id">Client ID</label>
          <input
            className="text-gray-900 p-1"
            id="id"
            value={id}
            onChange={(e) => setId(e.currentTarget.value)}
          />
        </div>

        <div className="w-full flex gap-3 items-center justify-between">
          <label htmlFor="secret">Client Secret</label>
          <input className="text-gray-900 p-1" id="secret" />
        </div>

        <div className="w-full flex justify-end text-gray-400 hover:text-white">
          <button onClick={onClick} type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
