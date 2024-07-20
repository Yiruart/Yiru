"use client";

import { Masonry } from "react-plock";

const data = [
  { slug: "chaos", max: 13 },
  { slug: "scheduled_for_abolition", max: 12 },
  { slug: "on_the_nose", max: 10 },
  { slug: "companion_species", max: 3 },
];

const page = ({ params }) => {
  const target = data.find((item) => item.slug == params.slug);
  let imgArr = [];
  for (let i = 1; i <= target.max; i++) {
    imgArr.push(`/images/${params.slug}/${i}-min.jpg`);
  }
  return (
    <div className="w-full bg-black pt-8">
      <Masonry
        items={imgArr}
        config={{
          columns: [1, 2, 3],
          gap: [0, 8, 12],
          media: [640, 768, 1024],
        }}
        render={(item, idx) => {
          return <img src={item} idx={idx} />;
        }}
      />
    </div>
  );
};

export default page;
