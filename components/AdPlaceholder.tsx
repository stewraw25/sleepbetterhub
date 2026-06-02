interface AdPlaceholderProps {
  label?: string;
  className?: string;
}

export function AdPlaceholder({ label = 'Advertisement', className }: AdPlaceholderProps) {
  return (
    <div className={`flex h-24 w-full items-center justify-center rounded-2xl border bg-gradient-to-br from-muted/30 to-muted/10 text-xs text-muted-foreground ${className}`}>
      <div className="text-center px-4">
        <div className="uppercase tracking-[1.5px] font-medium text-[10px] mb-0.5 opacity-70">Sponsored</div>
        <div className="font-semibold text-foreground/70">{label}</div>
        <div className="text-[9px] mt-1 opacity-50">Premium sleep partners • Ad placeholder</div>
      </div>
    </div>
  );
}
