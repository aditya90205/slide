"use server";

import { onCurrentUser } from "../user";
import {
  addKeyword,
  addListener,
  addTrigger,
  createAutomation,
  deleteKeywordQuery,
  findAutomation,
  getAutomations,
  updateAutomation,
} from "./queries";

export const createAutomations = async (id?: string) => {
  const user = await onCurrentUser();
  try {
    const create = await createAutomation(user.id, id);
    if (create)
      return { status: 200, data: "Automations Created", res: create };
    return { status: 400, data: "Automations Not Created" };
  } catch (error) {
    return { status: 500, data: "Internal Server Error" };
  }
};

export const getAllAutomations = async () => {
  const user = await onCurrentUser();
  // console.log("User", user);

  try {
    const automations = await getAutomations(user.id);
    console.log("Automations", automations);
    if (automations) return { status: 200, data: automations.automations };
    return { status: 400, data: [] };
  } catch (error) {
    return { status: 500, data: [] };
  }
};

export const getAutomationInfo = async (id: string) => {
  await onCurrentUser();
  try {
    const automation = await findAutomation(id);
    if (automation) return { status: 200, data: automation };
    return { status: 400, data: {} };
  } catch (error) {
    return { status: 500, data: {} };
  }
};

export const updateAutomationName = async (
  automationId: string,
  data: {
    name?: string;
    active?: boolean;
    automation?: string;
  }
) => {
  await onCurrentUser();
  try {
    const update = await updateAutomation(automationId, data);
    if (update) return { status: 200, data: "Automation Updated Successfully" };
    return { status: 400, data: "Automation Not Updated" };
  } catch (error) {
    return { status: 500, data: "Internal Server Error" };
  }
};

export const saveListener = async (
  automationId: string,
  listener: "SMARTAI" | "MESSAGE",
  prompt: string,
  reply?: string
) => {
  await onCurrentUser();
  try {
    const create = await addListener(automationId, listener, prompt, reply);

    if (create) {
      return { status: 200, data: "Listener Created Successfully" };
    }
    return { status: 400, data: "Listener Not Created" };
  } catch (error) {
    return { status: 500, data: "Internal Server Error" };
  }
};

export const saveTrigger = async (automationId: string, trigger: string[]) => {
  await onCurrentUser();
  try {
    const create = await addTrigger(automationId, trigger);
    if (create) return { status: 200, data: "Trigger Created Successfully" };
    return { status: 400, data: "Trigger Not Created or Saved" };
  } catch (error) {
    return { status: 500, data: "Internal Server Error" };
  }
};

export const saveKeyword = async (automationId: string, keyword: string) => {
  await onCurrentUser();
  try {
    const create = await addKeyword(automationId, keyword);
    if (create) return { status: 200, data: "Keyword Created Successfully" };
    return { status: 400, data: "Keyword Not Created" };
  } catch (error) {
    return { status: 500, data: "Internal Server Error" };
  }
};

export const deleteKeyword = async (id: string) => {
  await onCurrentUser();
  try {
    const deleted = await deleteKeywordQuery(id);
    if (deleted) return { status: 200, data: "Keyword Deleted Successfully" };
    return { status: 400, data: "Keyword Not Found " };
  } catch (error) {
    return { status: 500, data: "Internal Server Error" };
  }
};
