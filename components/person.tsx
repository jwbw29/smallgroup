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
  const { last_name, adults, children, address } = family;

  return (
    <Accordion className="familyCard" type="single" collapsible>
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="">
          <div className="flex flex-col ">
            <h2 className="text-2xl text-left ">{last_name}</h2>
            <h3 className="text-lg text-left font-light ">
              {adults.length > 1
                ? adults[0].first_name + " & " + adults[1].first_name
                : adults[0].first_name}
            </h3>
          </div>{" "}
        </AccordionTrigger>
        <AccordionContent className=" flex flex-col gap-12 py-8">
          {/* //// ADULT 1 */}
          {adults.map(
            (adult: {
              id: number;
              first_name: string;
              phone: string;
              email: string;
              birth_date: string;
            }) => (
              <div key={adult.id} className=" flex flex-col gap-3 ">
                <h3>{adult.first_name}</h3>
                {/* //// A1 EMAIL */}
                <div className="flex  gap-4">
                  <div className=" flex items-center justify-center p-1">
                    <FiMail className=" self-center" />
                  </div>
                  <div className=" flex flex-1 font-light">
                    <a href={`mailto:${adult.email}`}>{adult.email}</a>
                  </div>
                </div>
                {/* //// A1 PHONE */}
                <div className="flex  gap-4">
                  <div className=" flex items-center justify-center p-1">
                    <FiSmartphone />
                  </div>
                  <div className=" flex flex-1 font-light">
                    <a href={`tel:${adult.phone}`}>{adult.phone}</a>
                  </div>{" "}
                </div>
              </div>
            )
          )}
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
                      <p key={child.id}>{child.first_name}</p>
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
