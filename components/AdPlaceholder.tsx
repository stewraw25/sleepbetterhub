interface AdPlaceholderProps {
  label?: string;
  className?: string;
}

export function AdPlaceholder({ label = 'Advertisement', className }: AdPlaceholderProps) {
  return (
    <div className={`flex h-24 w-full items-center justify-center rounded-2xl border bg-gradient-to-br from-muted/40 to-muted/20 text-xs text-muted-foreground border-primary/10 ${className}`}>
      <div className="text-center px-4">
        <div className="uppercase tracking-[1.5px] font-medium text-[10px] mb-0.5 opacity-70">Sponsored</div>
        <div className="flex items-center justify-center gap-1.5">
          {/* Amazon logo (inline SVG for official look, no external deps) */}
          <svg 
            width="62" 
            height="17" 
            viewBox="0 0 62 17" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
            aria-label="Amazon"
          >
            <text 
              x="1" 
              y="13" 
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
              fontSize="12" 
              fontWeight="700" 
              fill="#232F3E" 
              letterSpacing="-0.4"
            >
              amazon
            </text>
            {/* Signature orange arrow/smile */}
            <path 
              d="M42 4 Q52 2 54 8" 
              stroke="#FF9900" 
              strokeWidth="1.7" 
              fill="none" 
              strokeLinecap="round" 
            />
            <path 
              d="M51.2 5.5 L54 8 L51 10.5" 
              stroke="#FF9900" 
              strokeWidth="1.7" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>
          <span className="font-semibold text-foreground text-[13px] tracking-[-0.2px]">Associates</span>
        </div>
        <div className="text-[9px] mt-1 opacity-60">Premium sleep partner • {label}</div>
      </div>
    </div>
  );
}
