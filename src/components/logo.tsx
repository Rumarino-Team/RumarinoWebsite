import { cn } from "@/lib/utils";
import Image from "next/image";

export const Logo = ({ className }: { className?: string }) => (
  <div className={cn("relative", className)}>
    <Image
      src="/logo_nobg.png"
      alt="RUMarino Logo"
      fill
      className="object-contain"
    />
  </div>
);