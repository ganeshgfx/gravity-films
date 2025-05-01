"use client";

import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

export default function NotFound() {
     const router = useRouter();

     useLayoutEffect(() => {
          // Use replace instead of push to avoid browser history entry
          router.replace("/");
     }, [router]);

     return null;
}
