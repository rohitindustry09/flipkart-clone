import { Link } from 'react-router-dom';

export default function GetFormButtons({
  currentIndex,
  nextButtonText,
  nextButtonRef,
  handleNextButton,
  backButtonRef,
  handleBackButton
}) {
  return (
    <div className="btn-next-back">
      {backButtonRef ? (
        <>
          {currentIndex !== 0 ? (
            <input
              type="button"
              ref={backButtonRef}
              className="btn-query"
              onClick={handleBackButton}
              value="Back"
            />
          ) : (
            <Link to="/login" className="btn-query">
              Log In
            </Link>
          )}
          {nextButtonText !== 'Submit' ? (
            <button
              type="button"
              ref={nextButtonRef}
              className="btn-query"
              onClick={handleNextButton}
            >
              {nextButtonText}
            </button>
          ) : (
            <button
              type="submit" // This triggers form submission
              ref={nextButtonRef}
              className="btn-query"
            >
              {nextButtonText}
            </button>
          )}
        </>
      ) : (
        <button type="submit" className="btn-query">
          Log In
        </button>
      )}
    </div>
  );
}
