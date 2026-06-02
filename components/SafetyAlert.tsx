import { AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function SafetyAlert() {
  return (
    <Alert variant="destructive" className="border-amber-600/30 bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle className="font-semibold">Important Safety Note</AlertTitle>
      <AlertDescription className="text-sm leading-relaxed">
        Mouth taping is not suitable for everyone. Do not use if you have nasal obstruction, untreated sleep apnea, 
        respiratory illness, or difficulty breathing through your nose. Consult a physician or sleep specialist before trying. 
        Always have a way to quickly remove the tape. Never use on children without professional guidance.
      </AlertDescription>
    </Alert>
  );
}
