// src/components/explorer/ViewSwitcher.tsx
import React from 'react';
import { LayoutDashboard, Network } from 'lucide-react';

interface ViewSwitcherProps {
  currentView: 'flow' | 'special';
  onViewChange: (view: 'flow' | 'special') => void;
  specialViewName: string;
}

const ViewSwitcher = ({ currentView, onViewChange, specialViewName }: ViewSwitcherProps) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onViewChange('flow')}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm ${
          currentView === 'flow' 
            ? 'bg-blue-100 text-blue-700' 
            : 'hover:bg-gray-100'
        }`}
      >
        <LayoutDashboard className="w-4 h-4" />
        Flow View
      </button>
      <button
        onClick={() => onViewChange('special')}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm ${
          currentView === 'special' 
            ? 'bg-blue-100 text-blue-700' 
            : 'hover:bg-gray-100'
        }`}
      >
        <Network className="w-4 h-4" />
        {specialViewName}
      </button>
    </div>
  );
};

export default ViewSwitcher;
