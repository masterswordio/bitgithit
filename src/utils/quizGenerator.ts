export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  context?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: 'basic-strategy' | 'card-counting';
}

const basicStrategyQuestions: QuizQuestion[] = [
  // Easy Questions
  {
    id: 'bs-easy-1',
    question: 'You have a hard 20 (10+10) and the dealer shows a 6. What should you do?',
    options: ['Hit', 'Stand', 'Double Down', 'Split'],
    correctAnswer: 'Stand',
    explanation: 'Hard 20 is an excellent hand. You should always stand with 20, regardless of the dealer\'s upcard.',
    difficulty: 'easy',
    category: 'basic-strategy'
  },
  {
    id: 'bs-easy-2',
    question: 'You have a hard 11 and the dealer shows a 5. What should you do?',
    options: ['Hit', 'Stand', 'Double Down', 'Split'],
    correctAnswer: 'Double Down',
    explanation: 'Hard 11 is perfect for doubling down, especially against a weak dealer card like 5. You can\'t bust and have a good chance of making a strong hand.',
    difficulty: 'easy',
    category: 'basic-strategy'
  },
  {
    id: 'bs-easy-3',
    question: 'You have a pair of Aces and the dealer shows a 10. What should you do?',
    options: ['Hit', 'Stand', 'Double Down', 'Split'],
    correctAnswer: 'Split',
    explanation: 'Always split Aces. Each Ace gives you a chance to make 21, and standing on 12 (A+A) is terrible.',
    difficulty: 'easy',
    category: 'basic-strategy'
  },
  {
    id: 'bs-easy-4',
    question: 'You have a hard 5 and the dealer shows an Ace. What should you do?',
    options: ['Hit', 'Stand', 'Double Down', 'Surrender'],
    correctAnswer: 'Hit',
    explanation: 'With only 5, you cannot bust on the next card. Always hit low totals like this.',
    difficulty: 'easy',
    category: 'basic-strategy'
  },
  {
    id: 'bs-easy-5',
    question: 'You have a soft 18 (A+7) and the dealer shows a 9. What should you do?',
    options: ['Hit', 'Stand', 'Double Down', 'Split'],
    correctAnswer: 'Hit',
    explanation: 'Soft 18 vs 9 is a hitting situation. The dealer has a strong upcard, and you can improve your hand without risk of busting.',
    difficulty: 'easy',
    category: 'basic-strategy'
  },

  // Medium Questions
  {
    id: 'bs-medium-1',
    question: 'You have a hard 16 and the dealer shows a 10. What should you do?',
    options: ['Hit', 'Stand', 'Double Down', 'Surrender'],
    correctAnswer: 'Surrender',
    explanation: 'Hard 16 vs 10 is one of the worst hands in blackjack. If surrender is available, take it. Otherwise, hit.',
    difficulty: 'medium',
    category: 'basic-strategy'
  },
  {
    id: 'bs-medium-2',
    question: 'You have a pair of 8s and the dealer shows an Ace. What should you do?',
    options: ['Hit', 'Stand', 'Split', 'Surrender'],
    correctAnswer: 'Split',
    explanation: 'Always split 8s. Standing on 16 is terrible, and splitting gives you two chances to improve.',
    difficulty: 'medium',
    category: 'basic-strategy'
  },
  {
    id: 'bs-medium-3',
    question: 'You have a soft 13 (A+2) and the dealer shows a 4. What should you do?',
    options: ['Hit', 'Stand', 'Double Down', 'Split'],
    correctAnswer: 'Double Down',
    explanation: 'Soft 13 vs 4 is a doubling situation. The dealer has a weak upcard, and you can improve your hand safely.',
    difficulty: 'medium',
    category: 'basic-strategy'
  },
  {
    id: 'bs-medium-4',
    question: 'You have a hard 12 and the dealer shows a 2. What should you do?',
    options: ['Hit', 'Stand', 'Double Down', 'Surrender'],
    correctAnswer: 'Hit',
    explanation: 'Hard 12 vs 2 is a hitting situation. The dealer\'s 2 is not weak enough to justify standing on 12.',
    difficulty: 'medium',
    category: 'basic-strategy'
  },
  {
    id: 'bs-medium-5',
    question: 'You have a pair of 9s and the dealer shows a 7. What should you do?',
    options: ['Hit', 'Stand', 'Split', 'Double Down'],
    correctAnswer: 'Split',
    explanation: 'Split 9s vs 7. Your 18 is good, but two hands starting with 9 each have good potential against a 7.',
    difficulty: 'medium',
    category: 'basic-strategy'
  },

  // Hard Questions
  {
    id: 'bs-hard-1',
    question: 'You have a hard 15 and the dealer shows a 10. What should you do?',
    options: ['Hit', 'Stand', 'Surrender', 'Double Down'],
    correctAnswer: 'Surrender',
    explanation: 'Hard 15 vs 10 is a surrender situation if available. If not, hit. This is a very unfavorable situation.',
    difficulty: 'hard',
    category: 'basic-strategy'
  },
  {
    id: 'bs-hard-2',
    question: 'You have a pair of 4s and the dealer shows a 5. What should you do?',
    options: ['Hit', 'Stand', 'Split', 'Double Down'],
    correctAnswer: 'Hit',
    explanation: 'Don\'t split 4s vs 5. Just hit your 8. Splitting 4s creates two weak hands.',
    difficulty: 'hard',
    category: 'basic-strategy'
  },
  {
    id: 'bs-hard-3',
    question: 'You have a soft 17 (A+6) and the dealer shows a 3. What should you do?',
    options: ['Hit', 'Stand', 'Double Down', 'Split'],
    correctAnswer: 'Double Down',
    explanation: 'Soft 17 vs 3 is a doubling situation. The dealer has a weak upcard, and you can improve safely.',
    difficulty: 'hard',
    category: 'basic-strategy'
  }
];

const cardCountingQuestions: QuizQuestion[] = [
  // Easy Questions
  {
    id: 'cc-easy-1',
    question: 'In the Hi-Lo system, what value is assigned to a 5?',
    options: ['+1', '0', '-1', '+2'],
    correctAnswer: '+1',
    explanation: 'In Hi-Lo, cards 2-6 are assigned +1. The 5 is a low card that favors the dealer when removed.',
    difficulty: 'easy',
    category: 'card-counting'
  },
  {
    id: 'cc-easy-2',
    question: 'In the Hi-Lo system, what value is assigned to a King?',
    options: ['+1', '0', '-1', '+2'],
    correctAnswer: '-1',
    explanation: 'In Hi-Lo, 10s, Jacks, Queens, Kings, and Aces are assigned -1. These high cards favor the player.',
    difficulty: 'easy',
    category: 'card-counting'
  },
  {
    id: 'cc-easy-3',
    question: 'What is the running count after these cards: 2, K, 5, 8, A?',
    options: ['+1', '0', '-1', '+2'],
    correctAnswer: '0',
    explanation: '2(+1) + K(-1) + 5(+1) + 8(0) + A(-1) = 0. The count remains neutral.',
    difficulty: 'easy',
    category: 'card-counting'
  },
  {
    id: 'cc-easy-4',
    question: 'In Hi-Lo, which cards are assigned a value of 0?',
    options: ['2, 3, 4, 5, 6', '7, 8, 9', '10, J, Q, K, A', 'Only Aces'],
    correctAnswer: '7, 8, 9',
    explanation: 'Cards 7, 8, and 9 are neutral in the Hi-Lo system and assigned a value of 0.',
    difficulty: 'easy',
    category: 'card-counting'
  },

  // Medium Questions
  {
    id: 'cc-medium-1',
    question: 'If the running count is +6 and there are 3 decks remaining, what is the true count?',
    options: ['+1', '+2', '+3', '+6'],
    correctAnswer: '+2',
    explanation: 'True count = Running count ÷ Decks remaining = +6 ÷ 3 = +2.',
    difficulty: 'medium',
    category: 'card-counting'
  },
  {
    id: 'cc-medium-2',
    question: 'At what true count should you consider taking insurance?',
    options: ['+1', '+2', '+3', '+4'],
    correctAnswer: '+3',
    explanation: 'Insurance becomes profitable at a true count of +3 or higher, when there are enough 10-value cards remaining.',
    difficulty: 'medium',
    category: 'card-counting'
  },
  {
    id: 'cc-medium-3',
    question: 'What is the running count after: 3, 3, 10, J, 2, 7, A, 6?',
    options: ['+1', '+2', '0', '-1'],
    correctAnswer: '0',
    explanation: '3(+1) + 3(+1) + 10(-1) + J(-1) + 2(+1) + 7(0) + A(-1) + 6(+1) = 0.',
    difficulty: 'medium',
    category: 'card-counting'
  },

  // Hard Questions
  {
    id: 'cc-hard-1',
    question: 'Running count is +8, 2.5 decks remain. You have 16 vs dealer 10. What should you do?',
    options: ['Hit', 'Stand', 'Surrender', 'Double'],
    correctAnswer: 'Stand',
    explanation: 'True count = +8 ÷ 2.5 = +3.2. At true count +0 or higher, you should stand 16 vs 10 instead of hitting.',
    context: 'This is a basic strategy deviation based on the count.',
    difficulty: 'hard',
    category: 'card-counting'
  },
  {
    id: 'cc-hard-2',
    question: 'If the running count is -4 and 1.5 decks remain, what is the true count?',
    options: ['-2.7', '-2.5', '-3', '-6'],
    correctAnswer: '-2.7',
    explanation: 'True count = -4 ÷ 1.5 = -2.67, rounded to -2.7. Negative counts indicate the deck favors the dealer.',
    difficulty: 'hard',
    category: 'card-counting'
  }
];

export const generateQuizQuestion = (
  type: 'basic-strategy' | 'card-counting',
  difficulty: 'easy' | 'medium' | 'hard'
): QuizQuestion => {
  const questions = type === 'basic-strategy' ? basicStrategyQuestions : cardCountingQuestions;
  const filteredQuestions = questions.filter(q => q.difficulty === difficulty);
  
  if (filteredQuestions.length === 0) {
    // Fallback to any question of the type if no questions match the difficulty
    const fallbackQuestions = questions.length > 0 ? questions : basicStrategyQuestions;
    return fallbackQuestions[Math.floor(Math.random() * fallbackQuestions.length)];
  }
  
  return filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
};

export const getAllQuestions = (): QuizQuestion[] => {
  return [...basicStrategyQuestions, ...cardCountingQuestions];
};