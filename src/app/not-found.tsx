import PageErrorComponent from "@/components/error/error";

export default function NotFound() {
  return (
    <PageErrorComponent status={404} message="Hmm, we looked everywhere — but that page isn’t here." btn="Go Home" />
  );
}

// 'use client';

// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import { usePathname } from 'next/navigation';
// import { rootDomain, protocol } from '@/lib/utils';

// export default function NotFound() {
// }
