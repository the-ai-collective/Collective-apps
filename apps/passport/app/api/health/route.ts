import { Effect } from "effect";

export async function GET() {
  const status = await Effect.runPromise(
    Effect.succeed({ app: "passport", status: "ok" }),
  );
  return Response.json(status);
}
