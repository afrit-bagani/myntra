const LoadingSpine = () => {
  return (
    <center>
      <div
        className="spinner-border custom-spinner"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </center>
  );
};

export default LoadingSpine;
