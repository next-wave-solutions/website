import type { Metadata } from "next";
import { noIndexRobots } from "@/lib/seo";

/** Every `/dev/*` lab inherits noindex/nofollow; pages only set their own title. */
export const metadata: Metadata = {
  robots: noIndexRobots,
};

export default function DevLayout({ children }: LayoutProps<"/dev">) {
  return children;
}
