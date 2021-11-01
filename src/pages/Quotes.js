import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Ibrahim', text: 'Learning react is fun' },
  { id: 'q2', author: 'MAX', text: 'LEarning React is great' },
];

const Quotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default Quotes;
