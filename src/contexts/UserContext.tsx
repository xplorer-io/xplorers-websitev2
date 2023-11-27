"use client";
import { IUser } from "../types/User";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface IUserContext {
  user: IUser | undefined;
  setUser: Dispatch<SetStateAction<IUser | undefined>>;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | undefined>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
