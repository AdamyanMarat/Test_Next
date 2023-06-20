import genAwait from "../../../../../components/getAwait";

export default async function Page() {
  const data = await genAwait(7);

  return (
    <>
      <h1>
        Hello, Dashboard Page!
        {data}
      </h1>
    </>
  );
}
