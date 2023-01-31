import { NextRequest, NextResponse } from "next/server";

// Pooniendo runtimme de tipo edge
export const config = {
  runtime: "edge", // Cuando compile va a usarlo coomo function y no como una api normal
};

export default (req:NextRequest) => {
  return NextResponse.json({
    message: `Hello David ${req.url}`,
    ok:true
  });
};
