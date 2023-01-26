export default function Contact() {
  return (
    <form className="grid w-full grid-cols-1  justify-items-center">
      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="mb-6 w-full px-3 md:mb-0">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-white"
            htmlFor="grid-first-name"
          >
            Name
          </label>
          <input
            className="mb-3 block w-full appearance-none rounded border bg-gray-200 py-3 px-4 leading-tight text-white focus:bg-white focus:outline-none"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
        </div>
      </div>
      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="w-full px-3">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-white"
            htmlFor="grid-password"
          >
            E-mail
          </label>
          <input
            className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-white focus:border-gray-500 focus:bg-white focus:outline-none"
            id="email"
            type="email"
          />
        </div>
      </div>
      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="w-full px-3">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-white"
            htmlFor="grid-password"
          >
            Subject
          </label>
          <input
            className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-white focus:border-gray-500 focus:bg-white focus:outline-none"
            id="subject"
            type="subject"
          />
        </div>
      </div>
      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="w-full px-3">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-white"
            htmlFor="grid-password"
          >
            Message
          </label>
          <textarea
            className=" no-resize mb-3 block h-48 w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-white focus:border-gray-500 focus:bg-white focus:outline-none"
            id="message"
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button
            className="focus:shadow-outline rounded bg-zinc-800 py-2 px-4 font-bold text-white shadow hover:bg-zinc-700 focus:outline-none"
            type="button"
          >
            Send
          </button>
        </div>
        <div className="md:w-2/3"></div>
      </div>
    </form>
  );
}
