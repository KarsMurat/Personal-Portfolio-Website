import { Projects } from "@/constants/projectCard";

const projectTotal = Object.keys(Projects).length;

const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

const Divider = () => <div className="h-1 w-full rounded-full bg-zinc-800" />;

const uniqueKey = Date.now();

export function ProjectCardSkeleton() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-6">
      {[...Array(projectTotal)].map(() => (
        <div
          key={uniqueKey}
          className="relative mx-auto flex max-h-fit max-w-md items-center rounded-xl bg-zinc-900 shadow-md shadow-black ring-2 ring-zinc-800"
        >
          <div
            className={`absolute -top-5 -right-5 z-10 m-1 h-8 w-8 rounded-tl-lg rounded-br-lg bg-zinc-800 shadow-sm shadow-black${shimmer}`}
          />
          <div className="absolute -left-16 h-36 w-36 skew-x-6 overflow-hidden rounded-3xl border-2 border-zinc-800">
            <div
              className={`flex h-72 w-72 justify-center rounded-2xl bg-zinc-800 shadow-sm shadow-black ${shimmer}`}
            />
          </div>
          <div className="flex flex-col space-y-6 p-4 pl-24">
            <div
              className={`h-7 w-full rounded-full bg-zinc-900 ring-1 ring-zinc-800 ${shimmer}`}
            />
            <div className={`h-24 w-full rounded-lg bg-gray-800 ${shimmer}`} />
            <div className="flex flex-wrap justify-center gap-1">
              {[...Array(7)].map(() => (
                <div
                  key={uniqueKey}
                  className={`h-7 w-16 rounded-sm bg-zinc-700 ${shimmer}`}
                />
              ))}
            </div>
            <Divider />
            <div className="flex justify-end space-x-2">
              {[...Array(2)].map(() => (
                <div
                  key={uniqueKey}
                  className={`flex h-6 w-20 rounded-full bg-zinc-800 ${shimmer}`}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
