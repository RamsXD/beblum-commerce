"use client";

import { ReactNode, useState } from "react";

export default function Hydrate({ children }: { children: ReactNode }) {
  const isMounted = useState(() => typeof window !== "undefined");

  return isMounted ? <>{children}</> : <span>carregando...</span>;
}
