import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavigationProps {
  className?: string;
}

const navigationItems = [
  {
    href: "/",
    label: "Home",
    description: "Main page of the 30-day interview preparation journey",
  },
  {
    href: "/docs",
    label: "Documentation",
    description: "Interview preparation guides and resources",
  },
  {
    href: "/progress",
    label: "Progress",
    description: "Track daily coding challenges and achievements",
  },
  {
    href: "/resources",
    label: "Resources",
    description: "Useful links, tools, and learning materials",
  },
];

export function Navigation({ className }: NavigationProps) {
  return (
    <nav
      className={cn("flex items-center space-x-6", className)}
      role="navigation"
      aria-label="Main navigation"
    >
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
          aria-describedby={`nav-${item.label.toLowerCase()}-description`}
        >
          {item.label}
          <span
            id={`nav-${item.label.toLowerCase()}-description`}
            className="sr-only"
          >
            {item.description}
          </span>
        </Link>
      ))}
    </nav>
  );
}

export function MobileNavigation({ className }: NavigationProps) {
  return (
    <nav
      className={cn("flex flex-col space-y-4", className)}
      role="navigation"
      aria-label="Mobile navigation"
    >
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-3 py-2 text-left"
        >
          <div>
            <div className="font-semibold">{item.label}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">
              {item.description}
            </div>
          </div>
        </Link>
      ))}
    </nav>
  );
}
