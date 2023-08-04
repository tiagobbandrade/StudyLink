"use client";
import { getData } from "./ServerComponentsFunction";

export default function Home() {
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        getData();
      }}
    >
      <button type="submit">Testar</button>
    </form>
  );
}
