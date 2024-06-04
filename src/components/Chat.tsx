import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FC } from "react";

const Chat: FC = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="relative bg-white z-40 shadow"
    >
      <AccordionItem value="item-1">
        <div className="fixed right-8 w-80 bottom-0 bg-white border border-gray-200 rounded-md overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <AccordionTrigger className="px-6 border-b border-zinc-300">
              test
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default Chat;
