"use client";
import { IUser } from "../types/User";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
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

  useEffect(() => {
    if (window) {
      const findUser = sessionStorage.getItem("user");

      const loggedInUser = !!findUser ? JSON.parse(findUser) : undefined;
      setUser(loggedInUser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
