"use client";

export default function RefreshButton() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <button onClick={refreshPage} className="primaryButton">
      Refresh
    </button>
  );
}
