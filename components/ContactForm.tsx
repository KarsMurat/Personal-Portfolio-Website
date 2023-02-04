import { SubmitIcon } from "@/ui/icon/submit";

export default function ContactForm() {
  const Divider = () => <div className="h-1 w-full rounded-full bg-zinc-800" />;

  return (
    <form className="grid w-1/3 grid-cols-1 place-content-between space-y-7">
      <div className="flex flex-col place-content-between space-y-2">
        <div className="space-y-2">
          <label
            className="text-xs font-bold uppercase tracking-wide text-white"
            htmlFor="name"
          >
            Name
          </label>
          <input
            required
            className="w-full rounded border bg-zinc-300 py-3 px-4 focus:bg-white"
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <Divider />
        <div className="space-y-2">
          <label
            className="text-xs font-bold uppercase tracking-wide text-white"
            htmlFor="email"
          >
            E-mail
          </label>
          <input
            required
            className="w-full rounded border bg-zinc-300 py-3 px-4 focus:bg-white"
            id="email"
            type="email"
            placeholder="Your E-mail"
          />
        </div>
        <Divider />
        <div className="space-y-2">
          <label
            className="text-xs font-bold uppercase tracking-wide text-white"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            required
            className="w-full rounded border bg-zinc-300 py-3 px-4 focus:bg-white"
            id="subject"
            type="subject"
            placeholder="Subject of Your Message"
          />
        </div>
        <Divider />
      </div>
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
        <Divider />
      </div>
      <div className="justify-self-center md:flex md:items-center">
        <button
          className="flex items-center space-x-2 rounded bg-zinc-800 py-2 px-4 font-bold text-white shadow hover:bg-zinc-700"
          type="submit"
        >
          <span>Send Message</span>
          <SubmitIcon />
        </button>
      </div>
    </form>
  );
}
