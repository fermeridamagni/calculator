import { cn } from "@/utils/utils";

import Background from "@/components/ui/background";

export default function Main({ children, className, ...props }) {
  return (
    <main
      className={cn(
        "w-full h-dvh min-h-dvh py-[120px] relative bg-transparent z-0 flex",
        className
      )}
      {...props}
    >
      <Background />

      {children}
    </main>
  );
}
