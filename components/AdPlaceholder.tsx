interface AdPlaceholderProps {
  label?: string;
  className?: string;
}

export function AdPlaceholder({ label = 'Advertisement', className }: AdPlaceholderProps) {
  return (
    <div className={`flex h-24 w-full items-center justify-center rounded-2xl border bg-gradient-to-br from-muted/40 to-muted/20 text-xs text-muted-foreground border-primary/10 ${className}`}>
      <div className="text-center px-4">
        <div className="uppercase tracking-[1.5px] font-medium text-[10px] mb-0.5 opacity-70">Sponsored</div>
        <div className="font-semibold text-foreground">Amazon Associates</div>
        <div className="text-[9px] mt-1 opacity-60">Premium sleep partner • {label}</div>
      </div>
    </div>
  );
}
