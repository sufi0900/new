import { ClientConfig, createClient } from "next-sanity";

export const clientConfig: ClientConfig = {
  projectId: "zm9rlt7d",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-03-23",
};

export const client = createClient(clientConfig);
