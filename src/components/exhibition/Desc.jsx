"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ImageSlider } from "../ImageSlider";
import { MessageForm } from "./MessageForm";

const desc = `This exhibition seeks to explore
        how humanity's evolving relationship with the environment shapes and is
        shaped by the dynamic balance between technological advancement and
        ecological sustainability. This collection of installation art invites
        visitors to step into a world where the boundaries between human,
        machine, and environment blur, presenting a thought-provoking journey
        through the landscapes of post-humanism. Yiru's expertise in utilizing
        3D printing and other emerging technologies is showcased throughout the
        exhibition, pushing the frontiers of visual art and offering a glimpse
        into the future of artistic innovation. The standout piece in the
        exhibition is the "Scheduled for Abolition" series. This series explores
        the concept of planned obsolescence in biology, viewing life as the
        deliberate, phased expiration of genes. Traditionally associated with
        industry, the notion of planned obsolescence can be intriguingly
        extended to biology. In this context, life itself can be seen as the
        planned obsolescence of genes, with biological processes designed to
        phase out certain genetic materials over time. In this framework, the
        pursuit of immortality becomes a complex interplay, akin to a
        tug-of-war, with perpetually evolving genes striving for longevity. This
        raises a profound question: does immortality pertain to the extended
        lifespan of individual organisms, or is it fundamentally about the
        perpetuation and continuous evolution of genetic information across
        generations? The answer to this question could redefine our
        understanding of life, longevity, and the ultimate goals of biological
        existence. This design emphasizes the dynamic balance between gene
        longevity and biological processes, posing deep questions about the
        essence of life and the true nature of immortality. This redefinition
        challenges traditional perceptions, suggesting that the ultimate goal of
        biological existence may lie in the relentless adaptation and enduring
        presence of genetic information. Elysium Echoes aims to inspire dialogue
        and reflection on the future of humanity and the transformative power of
        technology. As you navigate through the exhibition, you are encouraged
        to engage with the art on a personal level, considering your own place
        within these imagined futures and the potential pathways our species
        might take. Yiru's installations serve as a catalyst for exploring the
        unknown, prompting viewers to rethink what it means to be human in an
        era of rapid technological advancement. Join us in this exploration of
        the unknown, and let the Echoes of Elysium expand your understanding of
        the intricate interplay between technology, the environment, and human
        existence. Elysium Echoes is not just an exhibition but a visionary
        journey curated by Yiru, inviting you to reflect on the dynamic balance
        between technological progress and ecological sustainability and to
        envision the future of humanity through the lens of post-humanist
        thought.`;

const Desc = () => {
  return (
    <div className="flex flex-col h-fit sm:h-full justify-between p-4 pt-8 font-light">
      <div className="">
        <h1 className="text-4xl sm:text-5xl uppercase mb-8">Elysium Echoes</h1>

        <h2 className="text-xl sm:text-2xl mb-6">
          Welcome to Elysium Echoes, an innovative exhibition that delves into
          the intricate relationship between environmental change and human
          survival in a post-humanist era.{" "}
        </h2>
        <div className="sm:hidden h-fit px-2.5 mb-8">
          <ImageSlider name="exhibition" max={12} ar="aspect-[16/9]" />
        </div>
        <p className="mb-1">Date : 14/9-22/9 2024</p>
        <p className="mb-1">
          Location : Perfetti Gallery, 52 Caledonian Road, London, N1 9DP
        </p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Overview : Click to preview</AccordionTrigger>
            <AccordionContent>{desc}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="py-8">
        <h2 className=" uppercase text-3xl mb-8">to get access</h2>
        {/* <form className="flex justify-between border-b border-white">
          <div className="flex-1">YOUR EMAIL</div>
          <Button
            className="w-fit border p-1 hover:bg-white hover:text-black hover:cursor-pointer transition-all duration-300 rounded-none"
            formAction={sendEmail}
          >
            {loading ? "Loading" : "SUBSCRIBE"}
          </Button>
        </form> */}
        <MessageForm />
      </div>
    </div>
  );
};

export default Desc;
