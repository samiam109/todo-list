import useAPIError from './useError';

export default function ErrorNotification() {
  const { error, removeError } = useAPIError();

  const handleSubmit = () => {
    removeError();
  };

  return (
    <div
      className='error'
      style={
        error ?
          { display: 'inline' } : {}
      }>
      {error && error.message && <p>({error.message})</p>}
      <button data-testid="notification-submit-button" onClick={handleSubmit}>
        Ok
      </button>
    </div>
  )
}