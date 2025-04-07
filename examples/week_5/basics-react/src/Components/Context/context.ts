import { createContext } from "react";
import { User } from "./AppDemo";

export const DashboardContext = createContext<User | undefined>(undefined);