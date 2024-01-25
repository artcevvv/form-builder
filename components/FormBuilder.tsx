"use client";

import { Form } from "@prisma/client";
import React from "react";
import SaveFormBtn from "./SaveFormBtn";
import PublishFormBtn from "./PublishFormBtn";
import PreviewDialogBtn from "./PreviewDialogBtn";
import Designer from "./Designer";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import DragOverlayWrapper from "./DragOverlayWrapper";

function FormBuilder({ form }: { form: Form }) {
  return (
    <DndContext>
      <main className="flex flex-col w-full">
        <nav className="flex justify-between border-b-2 p-4 gap-3 items-center">
          <h2 className="truncate font-medium">
            <span className="text-muted-foregroud mr-2">Form:</span>
            {form.name}
          </h2>
          <div className="flex items-center gap-2">
            <PreviewDialogBtn />
            {!form.published && (
              <>
                <SaveFormBtn />
                <PublishFormBtn />
              </>
            )}
          </div>
        </nav>
        <div className="flex w-full flex-grow items-center justify-center relative overflow-y-auto h-[200px] bg-accent bg-[url(/topography.svg)] dark:bg-[url(/topography-dark.svg)]">
              <Designer />
        </div>
      </main>
      <DragOverlayWrapper/>
    </DndContext>
  );
}

export default FormBuilder;
