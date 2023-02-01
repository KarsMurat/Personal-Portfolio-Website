import { Certificates } from "@/constants/certificate";

const certificateTotal = Object.keys(Certificates).length;

const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

const Divider = () => <div className="h-1 w-full rounded-full bg-zinc-800" />;

const uniqueKey = Date.now();

export function CertificateCardSkeleton() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {[...Array(certificateTotal)].map(() => (
        <div
          key={uniqueKey}
          className="flex w-72 max-w-md items-center rounded-xl bg-zinc-900 p-4 ring-2 ring-zinc-800"
        >
          <div className="flex w-full flex-col space-y-2">
            <div
              className={`h-7 w-full rounded-full bg-zinc-800 ring-1 ring-zinc-800 ${shimmer}`}
            />
            <div
              className={`h-7 w-full rounded-full bg-zinc-900 ring-1 ring-zinc-800 ${shimmer}`}
            />
            <div className={`h-16 w-full rounded-lg bg-gray-800 ${shimmer}`} />
            <Divider />
            <div className="flex justify-end">
              <div className={`h-6 w-20 rounded-full bg-zinc-800 ${shimmer}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
