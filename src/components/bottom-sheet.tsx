"use client";

import { useEffect, useRef, useState } from "react";
import { PanInfo, motion, useAnimation } from "framer-motion";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type BottomSheetProps = {
  isOpen?: boolean;
  onOpen?: (open: boolean) => void;
  draggable?: boolean;
  snapPoints?: string[];
  children: React.ReactNode;
};

const usePreviousValue = (value: any) => {
  const previousValueRef = useRef();

  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  return previousValueRef.current;
};

export const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen = false,
  onOpen,
  draggable = true,
  snapPoints,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const dimmerVariants = {
    open: { opacity: 1, zIndex: 10 },
    close: { opacity: 0, zIndex: -1 },
  };

  const controls = useAnimation();
  const prevIsOpen = usePreviousValue(isOpen);

  useEffect(() => {
    if (prevIsOpen && !isOpen) {
      controls.start("hidden");
    } else if (!prevIsOpen && isOpen) {
      controls.start("visible");
    }
  }, [controls, isOpen, prevIsOpen]);

  function onDragEnd(event: any, info: PanInfo) {
    console.log(info);

    const shouldClose =
      info.offset.y > 20 || (info.offset.y >= 0 && info.point.y > 45);

    console.log(shouldClose);
    if (shouldClose) {
      controls.start("hidden");
      onOpen?.(false);
    } else {
      controls.start("visible");
      onOpen?.(true);
    }
  }

  return (
    <motion.div
      ref={ref}
      drag="y"
      onDragEnd={onDragEnd}
      initial="hidden"
      animate={controls}
      transition={{ type: "spring", stiffness: 400, damping: 40 }}
      variants={{
        visible: { y: 0 },
        hidden: { y: "100%" },
      }}
      dragConstraints={{ top: 0 }}
      dragElastic={0.2}
      layout="size"
      className={`fixed top-[50dvh] left-0 right-0 h-full p-6 bg-white rounded-t-3xl overflow-hidden will-change-transform z-50`}
      style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)" }}
    >
      <div className="w-8 h-1 rounded-full bg-gray-400 m-auto" />
      <div className="px-4 py-6">{children}</div>
    </motion.div>
  );
};
