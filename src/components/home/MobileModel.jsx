import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Light } from "../canvas/Models";

const ChaosModel = dynamic(
  () => import("@/components/canvas/Models").then((mod) => mod.ChaosForPhone),
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

const MobileModel = () => {
  return (
    <View className="h-screen w-screen">
      <Suspense fallback={null}>
        <ChaosModel />
        <Light position={[0, -1, -3]} rotation={[0, -0.2, 0]} />
        <Common />
      </Suspense>
    </View>
  );
};

export default MobileModel;
