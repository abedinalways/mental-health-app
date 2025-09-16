'use client'
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: 'What is Zuno?',
    answer:
      'Zuno is an AI-powered mental health companion designed to provide accessible, personalized support for your emotional wellbeing. It uses advanced conversational AI to offer guidance, coping strategies, and a safe space to explore your thoughts and feelings.',
  },
  {
    id: 2,
    question: 'Is Zuno a replacement for therapy?',
    answer:
      "No, Zuno is not a replacement for professional therapy or medical treatment. While Zuno can provide valuable support and guidance, it's designed to complement traditional mental health care. For serious mental health concerns, we always recommend consulting with qualified healthcare professionals.",
  },
  {
    id: 3,
    question: 'Who is Zuno for?',
    answer:
      "Zuno is designed for anyone looking to improve their mental wellbeing, develop coping skills, or have a supportive conversation. It's particularly helpful for those seeking immediate support, wanting to practice mindfulness, or looking for guidance between therapy sessions.",
  },
  {
    id: 4,
    question: 'How does the AI actually help?',
    answer:
      "Zuno's AI uses evidence-based therapeutic techniques like cognitive behavioral therapy (CBT), mindfulness practices, and active listening. It can help you identify thought patterns, suggest coping strategies, provide guided exercises, and offer a non-judgmental space to process emotions.",
  },
  {
    id: 5,
    question: 'What kind of issues can Zuno help me with?',
    answer:
      'Zuno can help with various concerns including stress management, anxiety, mood tracking, sleep issues, relationship challenges, work-life balance, self-esteem, and general emotional support. It provides tools for mindfulness, journaling prompts, and personalized coping strategies.',
  },
];

export default function Accordion() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = id => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            Questions?
          </div>
          <h1 className="text-5xl font-bold text-slate-800 leading-tight">
            We're here to help
          </h1>
        </div>

        {/* Accordion Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className="border-b border-slate-200 last:border-b-0"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-8 py-6 text-left hover:bg-slate-50 transition-colors duration-200 focus:outline-none focus:bg-slate-50"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-800 pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    {openItems.has(item.id) ? (
                      <Minus className="w-6 h-6 text-slate-500 transition-transform duration-200" />
                    ) : (
                      <Plus className="w-6 h-6 text-slate-500 transition-transform duration-200" />
                    )}
                  </div>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.has(item.id)
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm">
            Have more questions? Feel free to reach out to our support team.
          </p>
        </div>
      </div>
    </div>
  );
}
