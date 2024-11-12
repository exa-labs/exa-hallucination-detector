// PreviewClaimCard.tsx
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface Claim {
  claim: string;
  assessment: string;
  summary: string;
  original_text: string;
  fixed_original_text: string;
  confidence_score: number;
  url_sources?: string[];
}

interface PreviewClaimCardProps {
  claim: Claim;
  onAcceptFix: (claim: Claim) => void;
}

export const PreviewClaimCard: React.FC<PreviewClaimCardProps> = ({ claim, onAcceptFix }) => {
  const isTrue = claim.assessment.toLowerCase().includes('true');

  return (
    <div className="bg-white border rounded-none shadow-sm p-6 space-y-4">
      <h3 className="font-semibold text-lg text-gray-900">{claim.claim}</h3>

      <div className="flex items-center gap-3">
        <span className={`inline-flex items-center px-3 py-1 rounded-none text-sm font-medium ${
          isTrue 
            ? 'bg-green-100 text-green-800 border border-green-200'
            : 'bg-red-100 text-red-800 border border-red-200'
        }`}>
          {isTrue ? '✅' : '❌'}
          {isTrue ? 'Potentially True' : 'Potentially False'}
        </span>
        <span className="text-gray-600 text-sm">
          {claim.confidence_score}% Confident
        </span>
      </div>

      <p className="text-gray-700">{claim.summary}</p>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-gray-700">
          <ChevronRight size={20} />
          <span className="font-medium">Sources</span>
        </div>
        
        <ul className="space-y-2 pl-6">
          {claim.url_sources && claim.url_sources.length > 0 ? (
            claim.url_sources.map((source, idx) => (
              <li key={idx}>
                <a
                  href={source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline text-sm break-all"
                >
                  {source}
                </a>
              </li>
            ))
          ) : (
            <li className="text-gray-500 italic">No sources available</li>
          )}
        </ul>
      </div>

      {claim.fixed_original_text !== claim.original_text && (
        <button
          onClick={() => onAcceptFix(claim)}
          className="w-full mt-4 px-4 py-2 bg-brand-default text-white font-semibold rounded-none hover:bg-opacity-90 transition-colors"
        >
          Accept Fix
        </button>
      )}
    </div>
  );
};