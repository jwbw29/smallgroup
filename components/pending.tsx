export default function MembershipPending() {
  return (
    <div>
      <h1>Approval Pending</h1>{" "}
      <div className="flex w-3/4 justify-end">
        <a href="/api/auth/logout">
          <button className="border p-2 px-6 rounded-lg">Logout</button>
        </a>
      </div>
    </div>
  );
}