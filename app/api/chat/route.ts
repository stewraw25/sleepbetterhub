import { NextRequest, NextResponse } from 'next/server';
import { allProducts } from '@/lib/products';
import { getPublishedPosts } from '@/lib/blog';

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  if (!message || typeof message !== 'string') {
    return NextResponse.json({ error: 'Message is required' }, { status: 400 });
  }

  const lower = message.toLowerCase().trim();

  let reply = '';
  let suggestions: any[] = [];

  if (lower.includes('mouth tape') || lower.includes('tape')) {
    const mouthTapes = allProducts.filter(p => p.category === 'mouth-tape').slice(0, 3);
    reply = "Mouth taping is great for stopping mouth breathing and improving sleep quality. Our top recommendations right now are Dream Recovery (gentle for most), SomniFix (great for beards and CPAP), and Hostage Tape (strong hold, great value).";
    suggestions = mouthTapes.map(p => ({ slug: p.slug, name: p.name, link: `/reviews/${p.slug}` }));
  } 
  else if (lower.includes('side sleep') || lower.includes('side sleeper')) {
    reply = "For side sleepers, we recommend tapes with flexible material and strong but comfortable hold. Dream Recovery and SomniFix tend to perform best in our tests for side sleepers.";
    suggestions = allProducts.filter(p => p.bestFor.includes('Side Sleepers')).slice(0, 2).map(p => ({ slug: p.slug, name: p.name }));
  } 
  else if (lower.includes('supplement') || lower.includes('magnesium') || lower.includes('theanine') || lower.includes('apigenin')) {
    reply = "Our favorite evidence-based sleep stack is Magnesium Glycinate + L-Theanine + Apigenin. It helps with relaxation without grogginess. Take 45-60 mins before bed.";
    suggestions = allProducts.filter(p => p.category === 'supplements').slice(0, 3).map(p => ({ slug: p.slug, name: p.name }));
  } 
  else if (lower.includes('insomnia') || lower.includes('can\'t sleep') || lower.includes('fall asleep')) {
    reply = "For falling asleep faster: consistent schedule, morning sunlight, cool room (60-67°F), and nasal breathing. Mouth taping helps many once nasal issues are addressed. Try our free Sleep Quiz for personalized tips!";
    suggestions = [{ slug: 'quiz', name: 'Take the Sleep Quiz', link: '/quiz' }];
  } 
  else if (lower.includes('nasal') || lower.includes('strips') || lower.includes('breathing')) {
    reply = "Nasal strips (like Breathe Right) or internal dilators can make a huge difference. Many people combine them with mouth tape for the best results.";
    suggestions = allProducts.filter(p => p.category === 'nasal').map(p => ({ slug: p.slug, name: p.name }));
  } 
  else if (lower.includes('tracker') || lower.includes('oura') || lower.includes('eight sleep')) {
    reply = "The Oura Ring and Eight Sleep Pod are excellent for data-driven sleep improvement. Oura for insights, Eight Sleep for active temperature control (game changer for hot sleepers).";
    suggestions = allProducts.filter(p => p.category === 'gadgets').slice(0, 2).map(p => ({ slug: p.slug, name: p.name }));
  } 
  else {
    const recentPosts = getPublishedPosts().slice(0, 2);
    reply = "I'm here to help with better sleep! Common wins: nasal breathing, good sleep hygiene, and the right tools. What specific sleep issue are you dealing with?";
    suggestions = recentPosts.map(p => ({ slug: p.slug, name: p.title, link: `/blog/${p.slug}` }));
  }

  return NextResponse.json({ 
    reply,
    suggestions,
    timestamp: new Date().toISOString()
  });
}
