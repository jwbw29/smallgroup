import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FiMail } from "react-icons/fi";
import { FiSmartphone } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";

export function Person({ family }: { family: any }) {
  const { lastName, adult1, adult2, address, children } = family;

  return (
    <Accordion className="familyCard" type="single" collapsible>
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="">
          <div className="flex flex-col ">
            <h2 className="text-2xl text-left ">{lastName}</h2>
            <h3 className="text-lg text-left font-light ">
              {adult2
                ? adult1.firstName + " & " + adult2.firstName
                : adult1.firstName}
            </h3>
          </div>{" "}
        </AccordionTrigger>
        <AccordionContent className=" flex flex-col gap-12 py-8">
          {/* //// ADULT 1 */}
          <div className=" flex flex-col gap-3 ">
            <h3>{adult1.firstName}</h3>
            {/* //// A1 EMAIL */}
            <div className="flex  gap-4">
              <div className=" flex items-center justify-center p-1">
                <FiMail className=" self-center" />
              </div>
              <div className=" flex flex-1 font-light">
                <a href={`mailto:${adult1.email}`}>{adult1.email}</a>
              </div>
            </div>
            {/* //// A1 PHONE */}
            <div className="flex  gap-4">
              <div className=" flex items-center justify-center p-1">
                <FiSmartphone />
              </div>
              <div className=" flex flex-1 font-light">
                <a href={`tel:${adult1.phone}`}>{adult1.phone}</a>
              </div>{" "}
            </div>
          </div>
          {/* //// ADULT 2 */}
          {adult2 && (
            <div className=" flex flex-col gap-3">
              <h3>{adult2.firstName}</h3>
              {/* //// A2 EMAIL */}
              <div className="flex  gap-4">
                <div className=" flex items-center justify-center p-1">
                  <FiMail />
                </div>
                <div className=" flex flex-1 font-light">
                  <a href={`mailto:${adult2.email}`}>{adult2.email}</a>
                </div>
              </div>
              {/* //// A2 PHONE */}
              <div className="flex  gap-4">
                <div className=" flex items-center justify-center p-1">
                  <FiSmartphone />
                </div>
                <div className=" flex flex-1 font-light">
                  <a href={`tel:${adult2.phone}`}>{adult2.phone}</a>
                </div>
              </div>
            </div>
          )}{" "}
          {/* //// ADDRESS */}
          <div className=" flex flex-col gap-3">
            <h3>Address</h3>
            <div className=" flex gap-4">
              <div className=" flex items-start justify-center p-1">
                <FiMapPin />
              </div>
              <div className=" flex-1 font-light">
                <p>{address.street || "N/A"}</p>
                <p>
                  {address.city || "N/A"}, {address.state || "N/A"}
                </p>
                <p>{address.zip || "N/A"}</p>
              </div>
            </div>
          </div>
          {/* //// KIDS */}
          {children && (
            <div className=" flex flex-col gap-3">
              <h3>Kids</h3>
              <div className=" flex gap-4">
                <div className=" flex items-start p-1 justify-center">
                  <FiUsers />
                </div>
                <div className=" flex flex-col flex-1 gap-1 font-light ">
                  {children &&
                    children.map((child: any) => (
                      <p key={child.id}>{child.firstName}</p>
                    ))}
                </div>
              </div>
            </div>
          )}{" "}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
