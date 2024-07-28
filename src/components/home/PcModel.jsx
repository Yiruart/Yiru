import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import components
const ChaosModel = dynamic(
  () => import("@/components/canvas/Models").then((mod) => mod.Chaos),
  { ssr: false }
);

const View = dynamic(
  () => import("@/components/canvas/View").then((mod) => mod.View),
  {
    ssr: false,
    loading: () => (
      <div className="flex w-screen h-full flex-col items-center justify-center">
        Loading...
      </div>
    ),
  }
);

const Common = dynamic(
  () => import("@/components/canvas/View").then((mod) => mod.Common),
  { ssr: false }
);

const PcModel = () => {
  return (
    <View className="hidden sm:block h-full w-full">
      <Suspense fallback={null}>
        <ChaosModel position={[0, -5.5, 3]} rotation={[0, -0.2, 0]} />
        <Common />
      </Suspense>
    </View>
  );
};

export default PcModel;
