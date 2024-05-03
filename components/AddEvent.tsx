// button placement/styling
// [ ] make it a circular floating button in the bottom right corner
// [ ] add a plus icon

// on click
// [ ] open modal
// [ ] add event details
// [ ] save event
// [ ] show loading spinner if needed
// [ ] update events list
// [ ] show success message (toast)
// [ ] show error message (toast)
// [ ] clear form (to allow for another entry)
// [ ] close modal

export default function AddEvent() {
  return (
    <button className="bg-primary rounded-md text-primary-foreground text-sm w-[9rem] min-w-fit lg:h-12 lg:w-36">
      + Add Event
    </button>
  );
}
