export default function SearchBar({value, onChange}) {
    return (
      <label>
        Search character:{' '}
        <input
          value={value}
          onChange={onChange}
        />
      </label>
    );
  }
