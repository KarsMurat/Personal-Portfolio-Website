import Link from "next/link";
import { Certificates } from "@/constants/certificate";

const Divider = () => (
  <div className="h-1 w-full rounded-full bg-zinc-800" />
);

function CertificateCard() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {Certificates.map((certificate, index) => {
        const { name, desc, corp, urlName, urlLink } = certificate;

        return (
          <div
            key={index}
            className="flex w-fit max-w-md cursor-default items-center rounded-xl bg-zinc-900 p-4 ring-2 ring-zinc-800"
          >
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-center text-sm font-medium text-white">
                {name}
              </div>
              <div className="flex items-center justify-center text-sm font-medium text-slate-500">
                {corp}
              </div>
              <span className="indent-4 text-sm font-medium text-gray-400">
                {desc}
              </span>
              <Divider />
              <div className="flex items-center justify-end">
                <Link href={urlLink}>
                  <span className="text-sm font-medium text-green-900">
                    {urlName}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CertificateCard;
