import { useContext } from "react";
import { UserRole } from "../../api/utils/userRoleEnum.js";
import { AppContext } from "../../components/AppContext.jsx";
import { NextResponse, NextRequest } from "next/server";
export const middleware = (req, ev) => {
  const { auth } = useContext(AppContext);

  if (!auth) {
    return NextResponse.redirect("/sign-in");
  }
  if (auth.role !== UserRole.ADMIN) {
    return NextResponse.redirect("/");
  }
  return NextResponse.next();
};
