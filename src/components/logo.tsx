import { cn } from "@/lib/utils";
import Image from "next/image";

export const Logo = ({ className }: { className?: string }) => (
  <div className={cn("relative", className)}>
    <Image
      src="/RUMARINO LOGO_COLOR_crop.png"
      alt="RUMarino Logo"
      fill
      className="object-contain"
    />
  </div>
);