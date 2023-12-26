"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ResourceData } from "@/data/ResourceData";

export default function ResourceCards() {
  return (
    <div className="items-center justify-center grid lg:grid-cols-2 gap-6 m-10">
      {ResourceData.map((resource, index) => (
        <ResizablePanelGroup
          key={index}
          direction="vertical"
          className="min-h-[400px] min-w-[400px] rounded-lg border"
        >
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">{resource.header}</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">{resource.content}</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      ))}
    </div>
  );
}
