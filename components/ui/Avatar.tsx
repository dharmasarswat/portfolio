export const Avatar = ({ children }: { children: React.ReactNode }) => (
  <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground">
    <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
      {children}
    </span>
  </span>
);
