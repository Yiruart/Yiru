export const data = {
  slug: "on_the_nose",
  title: "On the nose",
  description: `Have you ever wondered what happens in the brain when we perceive odors? This project uses EEG to show how our brain represents scents, making it easier for people to understand and feel the essence of odors.

    I tried to represent how the sense of smell in the way of other senses.

    The nose picks up the smell and then feeds it back into the brain. But the information in the brain is very abstract, so I used brainwave images.
    The reflection of olfactory information in brain waves is converted into images and models.
    I tested the brain waves of people who smelled different odours and collected data and modelled them.
    I experimented with tactile rendering using 3d printing. And am trying to make supplies for 3d printing with raw materials that correspond to odours. Let it have the odour and at the same time can be seen and felt.`,
  images: { name: "on_the_nose", max: 10 },
  list: [
    {
      name: "01",
      model: {
        src: "/models/on_the_nose/1c.glb",
        position: [0, 0, 0],
        scale: 0.08,
        rotation: [0, -Math.PI / 16, 0],
      },
    },
    {
      name: "02",
      model: {
        src: "/models/on_the_nose/2c.glb",
        position: [0, 0, 0],
        scale: 0.08,
        rotation: [0, Math.PI / 8, 0],
      },
    },
    {
      name: "03",
      model: {
        src: "/models/on_the_nose/3c.glb",
        position: [0, 0, 0],
        scale: 0.08,
        // rotation: [0, -Math.PI / 16, 0],
      },
    },
  ],
};
