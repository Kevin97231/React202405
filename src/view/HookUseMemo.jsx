import { WithUseMemo } from "../components/WithUseMemo";
import { WithoutUseMemo } from "../components/WithoutUseMemo";

export const HookUseMemo = () => {
  return (
    <>
      <h1>Le hook useMemo</h1>
      <WithoutUseMemo />
      <WithUseMemo />
    </>
  );
};
