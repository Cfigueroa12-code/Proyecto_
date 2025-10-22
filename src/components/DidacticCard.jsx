import { BookIcon, CheckIcon } from './Icons';

export const DidacticCard = ({ title, description, steps = [] }) => {
  return (
    <article className="modern-card p-8 hover:shadow-glow transition-all duration-300 group">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-glow group-hover:shadow-glow-accent transition-all duration-300 group-hover:scale-105">
          <BookIcon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-secondary-800 mb-2 group-hover:text-primary-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-secondary-600 leading-relaxed">{description}</p>
        </div>
      </div>

      {steps.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <CheckIcon className="w-5 h-5 text-primary-500" />
            <h4 className="text-lg font-semibold text-secondary-700">Pasos a seguir</h4>
          </div>
          <ol className="space-y-3">
            {steps.map((s, i) => (
              <li key={i} className="flex items-start gap-3 p-4 bg-gradient-to-r from-secondary-50 to-primary-50 rounded-xl border border-secondary-100 hover:border-primary-200 transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-modern flex-shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-secondary-800 block mb-1">{s.title}</span>
                  {s.detail && (
                    <div className="text-sm text-secondary-600 leading-relaxed">{s.detail}</div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </article>
  );
};
