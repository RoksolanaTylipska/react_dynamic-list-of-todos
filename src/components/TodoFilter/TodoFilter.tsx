import { ChangeEvent } from 'react';
import { StatusFilter } from '../../helpers';

type Props = {
  handleStatus: (StatusFilter: StatusFilter) => void
  handleQuery: (title: string) => void
  query: string
  clearQuery: () => void
};

export const TodoFilter: React.FC<Props> = ({
  handleStatus,
  handleQuery,
  clearQuery,
  query,
}) => {
  const handleSelectStatus = (event: ChangeEvent<HTMLSelectElement>) => {
    handleStatus(event.target.value as StatusFilter);
  };

  const handleSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
    handleQuery(event.target.value);
  };

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            onChange={handleSelectStatus}
          >
            <option value={StatusFilter.ALL}>All</option>
            <option value={StatusFilter.ACTIVE}>Active</option>
            <option value={StatusFilter.COMPLETED}>Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={handleSearchQuery}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {query && (
            <button
              data-cy="clearSearchButton"
              aria-label="Сlear Search Button "
              type="button"
              className="delete"
              onClick={clearQuery}
            />
          )}
        </span>
      </p>
    </form>
  );
};
