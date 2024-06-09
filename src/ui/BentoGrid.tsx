import React from "react";
import { cn } from "../utils/cn";
import {
     IconArrowWaveRightUp,
     IconBoxAlignRightFilled,
     IconBoxAlignTopLeft,
     IconClipboardCopy,
     IconFileBroken,
     IconSignature,
     IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridUi() {
     return (
          <>
               <BentoGrid>
                    {items.map((item, i) => (
                         <BentoGridItem
                              key={i}
                              title={item.title}
                              description={item.description}
                              header={item.header}
                              icon={item.icon}
                              className={
                                   i === 3 || i === 6 ? "md:col-span-2" : ""
                              }
                         />
                    ))}
               </BentoGrid>
          </>
     );
}
const Skeleton = () => (
     <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
     {
          title: "The Dawn of Innovation",
          description:
               "Explore the birth of groundbreaking ideas and inventions.",
          header: <Skeleton />,
          icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
     },
     {
          title: "The Digital Revolution",
          description: "Dive into the transformative power of technology.",
          header: <Skeleton />,
          icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
     },
     {
          title: "The Art of Design",
          description:
               "Discover the beauty of thoughtful and functional design.",
          header: <Skeleton />,
          icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
     },
];

const BentoGrid = ({
     className,
     children,
}: {
     className?: string;
     children?: React.ReactNode;
}) => {
     return (
          <div
               className={cn(
                    "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4  mx-auto ",
                    className,
               )}
          >
               {children}
          </div>
     );
};

const BentoGridItem = ({
     className,
     title,
     description,
     header,
     icon,
}: {
     className?: string;
     title?: string | React.ReactNode;
     description?: string | React.ReactNode;
     header?: React.ReactNode;
     icon?: React.ReactNode;
}) => {
     return (
          <div
               className={cn(
                    "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-aqua border border-transparent justify-between flex flex-col space-y-4",
                    className,
               )}
               style={{ borderColor: "#3a3a3a", backgroundColor: "#1f1f1f" }}
          >
               {header}
               <div
                    className="group-hover/bento:translate-x-2 transition duration-200"
                    style={{ color: "white" }}
               >
                    {icon}
                    <div
                         className="font-sans font-bold text-neutral-600 :text-neutral-200 mb-2 mt-2"
                         style={{ color: "white" }}
                    >
                         {title}
                    </div>
                    <div
                         className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300"
                         style={{ color: "white" }}
                    >
                         {description}
                    </div>
               </div>
          </div>
     );
};
