export default function Login() {
  return (
    <div className="text-gray-100 h-full flex flex-col items-center justify-center">
      <form className="h-full w-fit flex flex-col items-start justify-center gap-3">
        <div className="w-full flex gap-2 justify-between">
          <label htmlFor="id">Client ID</label>
          <input id="id" />
        </div>

        <div className="w-full flex gap-2 justify-between">
          <label htmlFor="secret">Client Secret</label>
          <input id="secret" />
        </div>

        <div className="w-full flex justify-end text-gray-400 hover:text-white">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
