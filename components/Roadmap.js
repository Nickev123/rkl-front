import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Roadmap Component
// ------------------------------------------------------------------------------------------------------- //
const Roadmap = () => (
  <div id="roadmap" className="">
    <div className="flex flex-col justify-between text-center" data-aos="fade">
      <h2 className="font-sans mb-2  text-3xl yl-400 mb-3">Roadmap</h2>
      <div className="w-20 h-0.5 bg-yellow-400  self-center mb-8"></div>
    </div>

    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
        date="July 2021"
        iconStyle={{ background: "rgba(251, 191, 36, 1)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Initial drop</h3>
        <p className="font-serif">10000 ERC721 NFTs are sold</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
        date="August 2021"
        iconStyle={{ background: "rgba(251, 191, 36, 1)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Detailed game spec proposed
        </h3>
        <p className="font-serif">
          Community votes on the best spec for the game
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
        date="September 2021"
        iconStyle={{ background: "rgba(251, 191, 36, 1)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">XYZ</h3>
        <p className="font-serif">We complete XYZ</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
        date="October 2021"
        iconStyle={{ background: "rgba(251, 191, 36, 1)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <p className="font-serif">
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
);
// ------------------------------------------------------------------------------------------------------- //

Roadmap.displayName = "Roadmap";
export default Roadmap;
