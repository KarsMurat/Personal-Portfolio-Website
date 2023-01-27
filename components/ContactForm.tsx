export default function ContactForm() {
  return (
    <form className="grid w-full grid-cols-1 place-content-between space-y-7 px-20">
      <div className="flex place-content-between">
        <div className="flex flex-wrap">
          <div className="w-full space-y-2">
            <label
              className="block text-xs font-bold uppercase tracking-wide text-white"
              htmlFor="name"
            >
              Name
            </label>
            <input
              required
              className="block w-full rounded border bg-zinc-300 py-3 px-4 focus:bg-white"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full space-y-2">
            <label
              className="block text-xs font-bold uppercase tracking-wide text-white"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              required
              className="block w-full rounded border bg-zinc-300 py-3 px-4 focus:bg-white"
              id="email"
              type="email"
              placeholder="Your E-mail"
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full space-y-2">
            <label
              className="block text-xs font-bold uppercase tracking-wide text-white"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              required
              className="block w-full rounded border bg-zinc-300 py-3 px-4 focus:bg-white"
              id="subject"
              type="subject"
              placeholder="Subject of Your Message"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="h-full w-full space-y-2">
          <label
            className="block text-xs font-bold uppercase tracking-wide text-white"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            required
            rows={5}
            className="block w-full rounded border bg-zinc-300 py-3 px-4 focus:bg-white"
            id="message"
            placeholder="Your Message"
          />
        </div>
      </div>
      <div className="justify-self-center md:flex md:items-center ">
        <div className="md:w-1/3">
          <button
            className="focus:shadow-outline rounded bg-zinc-800 py-2 px-4 font-bold text-white shadow hover:bg-zinc-700 focus:outline-none"
            type="submit"
          >
            Send
          </button>
        </div>
        <div className="md:w-2/3"></div>
      </div>
    </form>
  );
}
