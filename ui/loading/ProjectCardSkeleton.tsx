import { Projects } from "@/constants/projectCard";

const projectTotal = Object.keys(Projects).length;
let totalTools = 0;

for (const project of Object.values(Projects)) {
  totalTools += project.tools.length;
}

const averageTools = Math.round(totalTools / projectTotal);

const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

const Divider = () => <div className="h-1 w-full rounded-full bg-zinc-800" />;

export function ProjectCardSkeleton() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-6">
      {[...Array(projectTotal)].map(() => (
        <div
          key={Math.random()}
          className="relative mx-10 my-5 flex max-h-fit max-w-md scale-95 items-center rounded-xl bg-zinc-900 shadow-inner shadow-black ring-2 ring-zinc-800"
        >
          <div
            className={`absolute -top-5 -right-5 z-10 m-1 h-8 w-8 rounded-tl-lg rounded-br-lg bg-zinc-800 shadow-sm shadow-black${shimmer}`}
          />
          <div className="absolute -left-24 top-16 h-44 w-44 skew-x-6 overflow-hidden rounded-3xl border-2 border-zinc-800">
            <div
              className={`flex h-72 w-72 justify-center rounded-2xl bg-zinc-800 shadow-sm shadow-black ${shimmer}`}
            />
          </div>
          <div className="flex w-full flex-col space-y-6 p-4 pl-24">
            <div
              className={`h-7 w-full rounded-full bg-zinc-900 ring-1 ring-zinc-800 ${shimmer}`}
            />
            <div className={`h-24 w-full rounded-lg bg-gray-800 ${shimmer}`} />
            <div className="flex flex-wrap justify-center gap-1">
              {[...Array(averageTools)].map(() => (
                <div
                  key={Math.random()}
                  className={`h-7 w-16 rounded-sm bg-zinc-700 ${shimmer}`}
                />
              ))}
            </div>
            <Divider />
            <div className="flex justify-end space-x-2">
              {[...Array(2)].map(() => (
                <div
                  key={Math.random()}
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
