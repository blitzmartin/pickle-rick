export default function SearchBar({ value, onChange }) {
  return (
    <div className="searchbar" >
      <label>
        Search character:{' '}
      </label>
      <input
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
