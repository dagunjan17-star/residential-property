"use client";

import Link from "next/link";
import { useProperty } from "@/contextapi/propertycontext";

const renderedSlugs = new Set();

// yaha apni start date do
const START_DATE = "2026-05-21";

export default function ViewDetailsButton({
  href,
  slug,
  className = "", // 🔥 custom class prop
}) {
  const { dailyLimit } = useProperty();

  // duplicate slug add na ho
  if (!renderedSlugs.has(slug)) {
    renderedSlugs.add(slug);
  }

  const buttonNumber =
    Array.from(renderedSlugs).indexOf(slug) + 1;

  // days calculate
  const start = new Date(START_DATE);

  const today = new Date();

  const diffTime = today - start;

  const daysPassed = Math.floor(
    diffTime / (1000 * 60 * 60 * 24)
  );

  // day wise unlock
  const unlockedLimit =
    (daysPassed + 1) * dailyLimit;

  const isEnabled =
    buttonNumber <= unlockedLimit;

  return (
    <Link
      href={isEnabled ? href : "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        ${className}
        ${
          isEnabled
            ? ""
            : "cursor-not-allowed pointer-events-none opacity-70"
        }
      `}
    >
      View Details
    </Link>
  );
}