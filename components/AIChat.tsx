'use client';

import { useState } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  suggestions?: Array<{ slug: string; name: string; link: string }>;
}

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: "Hi! I'm the SleepBetterHub Assistant. I can help with sleep problems, product recommendations, mouth taping, nasal breathing, supplements, and more. What can I help you with today?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input.trim();
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: currentInput }),
      });

      const data = await res.json();

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.reply || "Sorry, I had trouble with that. Try asking about mouth tape, supplements, or specific sleep issues.",
        suggestions: data.suggestions || []
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "I'm having trouble connecting right now. In the meantime, try our Sleep Quiz or browse the Mouth Tape Hub!" 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
          aria-label="Open Sleep Assistant"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] rounded-2xl border bg-background shadow-2xl flex flex-col overflow-hidden h-[520px]">
          {/* Header */}
          <div className="flex items-center justify-between border-b bg-muted/30 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <div className="font-semibold text-sm">Sleep Assistant</div>
                <div className="text-[10px] text-muted-foreground">Powered by SleepBetterHub</div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm bg-background">
            {messages.map((msg, index) => (
              <div key={index} className={msg.role === 'user' ? 'flex justify-end' : ''}>
                <div className={`max-w-[85%] rounded-2xl px-3.5 py-2 ${msg.role === 'user' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted'}`}>
                  <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>

                  {msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {msg.suggestions.slice(0, 3).map((s, i) => (
                        <a 
                          key={i} 
                          href={s.link} 
                          target={s.link.startsWith('http') ? '_blank' : '_self'}
                          className="inline-block rounded-md bg-background/80 px-2 py-0.5 text-[11px] hover:bg-background transition-colors border border-border/50"
                          onClick={() => setIsOpen(false)}
                        >
                          {s.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-muted-foreground text-xs pl-1">
                <Loader2 className="h-3 w-3 animate-spin" /> Thinking...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t p-3 bg-background">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about sleep, mouth tape, supplements..."
                className="flex-1 rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                disabled={loading}
              />
              <Button 
                size="icon" 
                onClick={sendMessage} 
                disabled={!input.trim() || loading}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-1.5 text-[10px] text-center text-muted-foreground">
              AI recommendations • Not medical advice
            </p>
          </div>
        </div>
      )}
    </>
  );
}
