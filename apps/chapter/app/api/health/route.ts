import { Effect } from "effect";

export async function GET() {
  const status = await Effect.runPromise(
    Effect.succeed({ app: "chapter", status: "ok" }),
  );
  return Response.json(status);
}
