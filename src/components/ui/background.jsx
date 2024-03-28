import { cn } from "@/utils/utils";

export default function Background({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 h-full w-full bg-white/80 dark:bg-black/80 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:6rem_4rem]",
        className
      )}
    >
      {children}
    </div>
  );
}
