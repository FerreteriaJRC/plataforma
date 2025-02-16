import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { IUser } from "../interfaces/interfaces";
import { validateToken } from "";