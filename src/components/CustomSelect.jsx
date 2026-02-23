import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, Check, X } from 'lucide-react';

export default function CustomSelect({
    label,
    value,
    onChange,
    options = [],
    placeholder = 'Selecione uma opção',
    icon: Icon,
    required = false
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const containerRef = useRef(null);
    const inputRef = useRef(null);

    const selectedOption = options.find(opt => opt.id === value);

    // Filter options based on search term
    const filteredOptions = options.filter(opt =>
        opt.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Focus search input when opening
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleSelect = (optionId) => {
        onChange({ target: { value: optionId } });
        setIsOpen(false);
        setSearchTerm('');
    };

    return (
        <div className="space-y-1 relative" ref={containerRef}>
            {label && <label className="text-sm font-bold text-slate-700 ml-1">{label}</label>}

            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`group relative w-full flex items-center gap-3 pl-4 pr-10 py-3 bg-slate-50 border transition-all duration-300 rounded-xl outline-none text-left ${isOpen
                        ? 'border-avil-blue ring-2 ring-avil-blue/20 bg-white'
                        : 'border-slate-200 hover:border-avil-blue/50'
                    }`}
            >
                <div className={`p-1.5 rounded-lg transition-colors duration-300 ${isOpen ? 'bg-avil-blue/10 text-avil-blue' : 'text-slate-400 group-hover:text-avil-blue/70'}`}>
                    {Icon && <Icon size={18} />}
                </div>

                <span className={`block truncate font-medium ${selectedOption ? 'text-slate-800' : 'text-slate-400 italic'}`}>
                    {selectedOption ? selectedOption.name : placeholder}
                </span>

                <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <ChevronDown
                        size={18}
                        className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-avil-blue' : ''}`}
                    />
                </span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute z-[100] mt-2 w-full bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                    {/* Search Input */}
                    <div className="p-3 border-b border-slate-100/50 bg-slate-50/50">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                            <input
                                ref={inputRef}
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Pesquisar..."
                                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg outline-none text-xs font-semibold placeholder:text-slate-400 focus:ring-2 focus:ring-avil-blue/10 focus:border-avil-blue/30 transition-all"
                            />
                        </div>
                    </div>

                    {/* Options List */}
                    <div className="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 p-1.5">
                        {filteredOptions.length === 0 ? (
                            <div className="py-8 px-4 text-center">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Nada encontrado</p>
                            </div>
                        ) : (
                            filteredOptions.map((option) => (
                                <button
                                    key={option.id}
                                    type="button"
                                    onClick={() => handleSelect(option.id)}
                                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 group/item ${value === option.id
                                            ? 'bg-avil-blue text-white shadow-lg shadow-avil-blue/20'
                                            : 'text-slate-600 hover:bg-avil-blue/5 hover:text-avil-blue'
                                        }`}
                                >
                                    <span className="text-sm font-bold truncate">{option.name}</span>
                                    {value === option.id && <Check size={14} strokeWidth={3} className="shrink-0" />}
                                </button>
                            ))
                        )}
                    </div>

                    {/* Required Hint (Optional Visual) */}
                    {required && !value && (
                        <div className="px-4 py-2 bg-red-50 border-t border-red-100">
                            <p className="text-[10px] font-black text-red-500 uppercase tracking-tighter">* Seleção obrigatória</p>
                        </div>
                    )}
                </div>
            )}

            {/* Hidden Input for Form Validation */}
            <input
                type="text"
                className="sr-only"
                value={value}
                required={required}
                readOnly
                tabIndex={-1}
            />
        </div>
    );
}
