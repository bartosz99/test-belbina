"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { useDisclosure } from "@nextui-org/use-disclosure";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export const BelbinModal = () => {
  const TIME_TO_OPEN = 5000;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(true);
  const visitSite = () => {
    window.open("https://www.belbin.pl/", "_blank");
  };

  setTimeout(() => {
    if (!isFirstVisit) return;
    onOpen();
    setIsFirstVisit(false);
  }, TIME_TO_OPEN);

  return (
    <>
      <Modal isOpen={isOpen} size={"2xl"} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl">
                Uwaga
              </ModalHeader>
              <ModalBody>
                <blockquote className="border px-4 py-3 rounded-xl border-warning-100 bg-warning-50/20 my-4">
                  <p>Poniższy test nie jest oficjalnym testem belbina.</p>
                </blockquote>
                <p>
                  Jest to jedynie showcase kodu napisanego w Next.js,
                  TypeScript, TailwindCSS, oraz NextUI w ramach zadania
                  rekrutacyjnego.
                </p>
                <p>
                  W celu uzyskania oficjalnego testu belbina odwiedź oficjalną
                  stronę testu Belbina.
                </p>
                <Link isExternal showAnchorIcon href="https://www.belbin.pl/">
                  Odwiedź oficjalną stronę testu Belbina
                </Link>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={visitSite}>
                  Visit Site
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
