// import { Message } from "@/model/User";
import { Blog } from "./project";

export interface ApiResponse {
  success: boolean;
  message: string;
  messages?: Array<Blog>
};