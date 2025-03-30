export const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
    {children}
  </div>
);
