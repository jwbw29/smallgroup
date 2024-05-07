// # button placement/styling
// ## Mobile
// [x] check for react-icons
// [x] make it a floating button in the bottom right corner
// [x] add a plus icon
// ## Desktop
// - will need to apply JS logic to make this happen, so putting it off for now
// [] everything falls under lg: breakpoint
//    - `lg:addEventDesktop` already exists in `globals.css`
// [] add event button on top of select dropdown

// ## onClick
// [x] open modal
// [x] add event details
// [x] save event
// [ ] show loading spinner if needed
// [ ] update events list
// [ ] show success message (toast)
// [ ] show error message (toast)
// [ ] clear form (to allow for another entry)
// [ ] close modal
import { LuCalendarPlus } from "react-icons/lu";

export default function AddEventButton() {
  return (
    <button className="addEventMobile">
      <LuCalendarPlus />
    </button>
  );
}
