import { useEffect, useState } from "react";

type SearchBarProps = {
  onSearchSubmit: (e: any) => void;
  clearResults: () => void;
};
export const SearchBar: React.FC<SearchBarProps> = ({
  clearResults,
  onSearchSubmit,
}) => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  useEffect(() => {
    const timer = setTimeout(() => setTerm(debouncedTerm), 1000);
    return () => clearTimeout(timer);
  }, [debouncedTerm]);

  useEffect(() => {
    if (term !== "") {
      onSearchSubmit(term);
    } else {
      clearResults();
    }
  }, [term ]);

  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control custom"
        placeholder="Search"
        onChange={(e) => setDebouncedTerm(e.target.value)}
        value={debouncedTerm}
      />
    </div>
  );
};
