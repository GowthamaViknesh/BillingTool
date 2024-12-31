import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Routes to protect
  const protectedRoutes = ["/dashboard", "/api/products", "/api/dashboard"];

  // Check if the request is to a protected route
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtectedRoute) {
    // Check for token in cookies
    const token = request.cookies.get("token");

    if (!token) {
      // Redirect to login if no token is found
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      // Verify the token
      jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      console.error("Invalid token:", error);
      // Redirect to login if token is invalid
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Allow the request to proceed
  return NextResponse.next();
}
