"use server";

import { onCurrentUser } from "../user";
import { findUser } from "../user/queries";
import {
  addKeyword,
  addListener,
  addPosts,
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

export const getProfilePosts = async () => {
  const user = await onCurrentUser();

  try {
    const profile = await findUser(user.id);
    const posts = await fetch(
      `${process.env.INSTAGRAM_BASE_URL}/me/media?fields=id,caption,media_url,media_type,timestamp&limit=10&access_token=${profile?.integrations[0].token}`
    );
    const parsed = await posts.json();
    if (parsed) return { status: 200, data: parsed };
    console.log("🔴 Error in getting posts");
    return { status: 400, data: "No Posts Found" };
  } catch (error) {
    return { status: 500, data: "Internal Server Error" };
  }
};

export const savePosts = async (
  automationId: string,
  posts: {
    postid: string;
    caption?: string;
    media: string;
    mediaType: "IMAGE" | "VIDEO" | "CAROSEL_ALBUM";
  }[]
) => {
  await onCurrentUser();
  try {
    const create = await addPosts(automationId, posts);
    if (create) return { status: 200, data: "Posts Saved Successfully" };
    return { status: 400, data: "Posts Not Saved" };
  } catch (error) {
    return { status: 500, data: "Internal Server Error" };
  }
};

export const activateAutomation = async (id: string, state: boolean) => {
  await onCurrentUser();
  try {
    const update = await updateAutomation(id, { active: state });
    if (update) return { status: 200, data: `Automation ${state ? 'activated' : 'disabled'}` };
    return { status: 400, data: "Automation Not Updated" };
  } catch (error) {
    return { status: 500, data: "Internal Server Error" };
  }
};
