import { UIsparkle } from "@/components/UIsparkle";
import { Focuscards } from "@/components/Focuscards";
import Ourclients from "@/components/Ourclients";
import Ourservices from "@/components/Ourservices";
import Reveal from "@/Components/anime/Reveal";
export default function Home() {
     return (
          <Reveal width="100%">
               <UIsparkle />
               <Ourclients />
               <Ourservices />
               <Focuscards />
          </Reveal>
     );
}
