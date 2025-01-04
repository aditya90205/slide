"use client";
import { ChevronRight, Menu, PencilIcon } from "lucide-react";
import React from "react";
import ActivateAutmationButton from "../../activate-automation-button";
import { useQueryAutomation } from "@/hooks/use-queries";
import { useEditAutomation } from "@/hooks/use-automations";
import { useMutationDataState } from "@/hooks/use-mutation-data";
import { Input } from "@/components/ui/input";
import { LogoSmall } from "@/svgs/logo-small";
import { Separator } from "@/components/ui/separator";
import ClerkAuthState from "../../clerk-auth-state";
import { HelpDuoToneWhite } from "@/icons";
import SubscriptionPlan from "../../subscription-plan";
import UpgradeCard from "../../sidebar/upgrade";
import Sheet from "../../sheet";
import Items from "../../sidebar/items";
import { usePaths } from "@/hooks/use-nav";

type Props = {
  slug: string;
  id: string;
};

const AutomationsBreadCrumb = ({ id, slug }: Props) => {
  const { page } = usePaths();
  const { data } = useQueryAutomation(id);
  console.log("AutomationBreadCrumb", data);

  const { edit, enableEdit, inputRef, isPending } = useEditAutomation(id);

  const { latestVariable } = useMutationDataState(["update-automation"]);
  return (
    <div className="rounded-full w-full p-5 bg-[#18181B1A] flex items-center">
      <div className="flex items-center gap-x-3 min-w-0">
        <span className="lg:hidden flex items-center flex-1 gap-x-2">
          <Sheet side="left" trigger={<Menu />} className="lg:hidden">
            <div
              className="flex flex-col 
      gap-y-5
       w-full 
       h-full 
       p-3 
       bg-[#0e0e0e] 
       bg-opacity-90 
       bg-clip-padding 
       backdrop-filter 
       backdrop--blur__safari 
       backdrop-blur-3xl"
            >
              <div className="flex gap-x-2 items-center p-5 justify-center">
                <LogoSmall />
              </div>
              <div className="flex flex-col py-3">
                <Items page={page} slug={slug} />
              </div>
              <div className="px-16">
                <Separator orientation="horizontal" className="bg-[#333336]" />
              </div>
              <div className="px-3 flex flex-col gap-y-5">
                <div className="flex gap-x-2">
                  <ClerkAuthState />
                  <p className="text-[#9B9CA0]">Profile</p>
                </div>
                <div className="flex gap-x-3">
                  <HelpDuoToneWhite />
                  <p className="text-[#9B9CA0]">Help</p>
                </div>
              </div>
              <SubscriptionPlan type="FREE">
                <div className="flex-1 flex flex-col justify-end">
                  <UpgradeCard />
                </div>
              </SubscriptionPlan>
            </div>
          </Sheet>
        </span>
        <p className="text-[#9B9CA0] truncate">Automations</p>
        <ChevronRight className="flex-shrink-0" color="#9B9CA0" />
        <span className="flex gap-x-3 items-center min-w-0">
          {edit ? (
            <Input
              ref={inputRef}
              placeholder={
                isPending ? latestVariable.variables : "Add a new name"
              }
              className="bg-transparent h-auto outline-none text-base border-none p-0"
            />
          ) : (
            <p className="text-[#9B9CA0] truncate">
              {latestVariable?.variables
                ? latestVariable?.variables.name
                : data?.data?.name!}
            </p>
          )}
          {edit ? (
            <></>
          ) : (
            <span
              className="cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4"
              onClick={enableEdit}
            >
              <PencilIcon size={14} />
            </span>
          )}
        </span>
      </div>
      <div className="flex items-center gap-x-5 ml-auto">
        <p className="hidden md:block text-text-secondary/60 text-sm truncate min-w-0">
          All states are automatically saved.
        </p>
        <div className="flex gap-x-5 flex-shrink-0">
          <p className="text-text-secondary text-sm truncate min-w-0">
            Changes Saved
          </p>
          {/* <p className="text-text-secondary text-sm truncate min-w-0">Undo | Redo</p> */}
        </div>
      </div>
      <ActivateAutmationButton id={id} />
    </div>
  );
};

export default AutomationsBreadCrumb;
