"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function StrategyConsultingRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/services/strategy-consulting/");
  }, [router]);

  return (
    <main className="min-h-[40vh] flex items-center justify-center">
      <p className="text-muted">Redirecting to Strategy & Consulting...</p>
    </main>
  );
}
