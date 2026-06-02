'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { mouthTapeProducts, Product } from '@/lib/products';
import { getInternalAffiliateLink } from '@/lib/affiliates';
import { ArrowRight, RotateCcw, CheckCircle } from 'lucide-react';

type Answer = {
  mouthBreather: boolean;
  sideSleeper: boolean;
  hasBeard: boolean;
  sensitiveSkin: boolean;
  usesCPAP: boolean;
  nasalIssues: boolean;
  triedTaping: boolean;
};

const questions = [
  {
    key: 'mouthBreather' as const,
    question: 'Do you wake up with a dry mouth or notice you breathe through your mouth at night?',
    options: [
      { value: true, label: 'Yes, almost every night' },
      { value: false, label: 'Rarely or never' },
    ],
  },
  {
    key: 'sideSleeper' as const,
    question: 'What is your primary sleep position?',
    options: [
      { value: true, label: 'Side sleeper (or stomach)' },
      { value: false, label: 'Mainly back sleeper' },
    ],
  },
  {
    key: 'hasBeard' as const,
    question: 'Do you have facial hair (beard, mustache, or stubble)?',
    options: [
      { value: true, label: 'Yes, I have a beard or significant facial hair' },
      { value: false, label: 'Clean shaven or very light stubble' },
    ],
  },
  {
    key: 'sensitiveSkin' as const,
    question: 'How sensitive is the skin around your mouth?',
    options: [
      { value: true, label: 'Very sensitive or reactive to adhesives' },
      { value: false, label: 'Normal / not particularly sensitive' },
    ],
  },
  {
    key: 'usesCPAP' as const,
    question: 'Do you use (or are you considering) a CPAP machine?',
    options: [
      { value: true, label: 'Yes, I use CPAP or plan to' },
      { value: false, label: 'No' },
    ],
  },
  {
    key: 'nasalIssues' as const,
    question: 'Do you have frequent nasal congestion, allergies, or difficulty breathing through your nose?',
    options: [
      { value: true, label: 'Yes, often or always' },
      { value: false, label: 'Rarely — nose breathing feels easy' },
    ],
  },
  {
    key: 'triedTaping' as const,
    question: 'Have you tried mouth taping before?',
    options: [
      { value: true, label: 'Yes, I have tried it' },
      { value: false, label: 'No, this would be my first time' },
    ],
  },
];

export default function QuizClient() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Answer>>({});
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[step];
  const progress = ((step + (showResults ? 1 : 0)) / questions.length) * 100;

  const handleAnswer = (value: boolean) => {
    const key = currentQuestion.key;
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const goBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
    setShowResults(false);
  };

  // Recommendation engine — simple but effective rules
  const getRecommendations = (): { top: Product[]; reason: string; warning?: string } => {
    const a = answers as Answer;

    const scored = mouthTapeProducts.map((p) => {
      let score = p.rating * 10; // base on rating

      // Strong signals
      if (a.hasBeard && p.bestFor.includes('Beards')) score += 22;
      if (a.sideSleeper && p.bestFor.includes('Side Sleepers')) score += 16;
      if (a.sensitiveSkin && p.bestFor.includes('Sensitive Skin')) score += 20;
      if (a.usesCPAP && p.bestFor.includes('CPAP Users')) score += 18;

      if (a.nasalIssues) score -= 15; // caution

      if (a.triedTaping && p.rating > 4.6) score += 8; // prefer proven for experienced

      if (!a.sensitiveSkin && p.name.includes('Hostage')) score += 6; // strong hold

      return { product: p, score };
    });

    // Sort by score
    scored.sort((x, y) => y.score - x.score);

    const top = scored.slice(0, 3).map((s) => s.product);

    let reason = '';
    let warning: string | undefined;

    if (a.nasalIssues) {
      warning = 'Because you indicated nasal issues, we strongly recommend addressing congestion first (nasal strips, saline, ENT visit) before relying on mouth tape.';
    }

    if (a.sensitiveSkin) {
      reason = 'We prioritized the gentlest options with excellent sensitive-skin feedback.';
    } else if (a.hasBeard) {
      reason = 'We focused on products proven to hold through facial hair.';
    } else if (a.usesCPAP) {
      reason = 'We selected options that work well alongside CPAP masks according to user reports.';
    } else if (a.sideSleeper) {
      reason = 'Side sleepers need reliable hold and flexible material — these scored highest.';
    } else {
      reason = 'Top overall performers based on rating, value, and broad compatibility.';
    }

    return { top, reason, warning };
  };

  if (showResults) {
    const { top, reason, warning } = getRecommendations();

    return (
      <div className="container max-w-3xl py-12">
        <div className="text-center mb-8">
          <CheckCircle className="mx-auto h-10 w-10 text-primary mb-3" />
          <h1 className="text-4xl font-semibold tracking-tighter">Your Personalized Recommendations</h1>
          <p className="mt-2 text-muted-foreground">Based on your answers, here are the best mouth tape options for you right now.</p>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="text-sm text-muted-foreground mb-2">WHY THESE MATCH YOU</div>
            <p className="text-lg">{reason}</p>
            {warning && (
              <div className="mt-4 rounded-md bg-amber-50 dark:bg-amber-950 border border-amber-200 p-3 text-sm text-amber-800 dark:text-amber-200">
                {warning}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="space-y-4">
          {top.map((product, index) => (
            <div key={product.id} className="flex flex-col md:flex-row gap-5 rounded-2xl border bg-card p-6">
              <div className="md:w-48 shrink-0">
                <Image src={product.image} alt={`${product.name} recommended by sleep quiz`} width={300} height={120} className="rounded-xl w-full aspect-video object-cover" style={{ height: 'auto' }} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-medium">#{index + 1} MATCH</span>
                      <span className="font-semibold text-lg tracking-tight">{product.name}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{product.brand} • {product.price}</div>
                  </div>
                  <div className="flex items-center gap-1 font-semibold">
                    <span>{product.rating}</span> <span className="text-yellow-500">★</span>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {product.bestFor.map((t) => <Badge key={t} variant="outline" className="text-xs">{t}</Badge>)}
                </div>

                <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{product.description}</p>

                <div className="mt-4 flex gap-3">
                  <Link href={`/reviews/${product.slug}`}>
                    <Button variant="outline">Read Full Review</Button>
                  </Link>
                  <a href={getInternalAffiliateLink(product.slug)} target="_blank" rel="noopener noreferrer sponsored">
                    <Button>Buy Now (Affiliate • UK Amazon)</Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center space-x-3">
          <Button variant="outline" onClick={resetQuiz} className="gap-2">
            <RotateCcw className="h-4 w-4" /> Retake Quiz
          </Button>
          <Link href="/mouth-tape">
            <Button variant="ghost">Browse All Options →</Button>
          </Link>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8 max-w-sm mx-auto">
          These are suggestions, not medical advice. Please review the full safety information on each product page and consult a healthcare professional if you have any concerns.
        </p>
      </div>
    );
  }

  return (
    <div className="container max-w-2xl py-12">
      <div className="mb-8">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">← Back to home</Link>
        <h1 className="mt-3 text-4xl font-semibold tracking-tighter">Is mouth taping right for you? Sleep quiz for better sleep, insomnia &amp; anxiety</h1>
        <p className="text-muted-foreground mt-2">Answer 7 quick questions for instant, personalized mouth tape recommendations. Designed for people searching how to fall asleep faster, reduce sleep anxiety, or stop mouth breathing at night.</p>
      </div>

      <div className="mb-3 flex justify-between text-xs text-muted-foreground">
        <div>Question {step + 1} of {questions.length}</div>
        <div>{Math.round(progress)}% complete</div>
      </div>
      <Progress value={progress} className="h-1.5 mb-6" />

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl leading-tight tracking-tight pr-4">{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 pt-1">
          {currentQuestion.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(opt.value)}
              className="w-full text-left rounded-xl border p-5 hover:border-primary hover:bg-accent transition flex justify-between items-center group"
            >
              <span className="text-base">{opt.label}</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition" />
            </button>
          ))}
        </CardContent>
      </Card>

      <div className="mt-4 flex items-center justify-between text-sm">
        {step > 0 ? (
          <Button variant="ghost" onClick={goBack}>← Previous question</Button>
        ) : <div />}
        <div className="text-muted-foreground text-xs">Your answers are private and not stored</div>
      </div>

      <div className="mt-10 rounded-xl border bg-muted/40 p-5 text-xs text-muted-foreground">
        <strong>Important:</strong> This quiz is an educational tool only. Mouth taping is not appropriate for everyone. 
        If you have sleep apnea, nasal obstruction, or any breathing concerns, speak with a doctor before trying.
      </div>
    </div>
  );
}
