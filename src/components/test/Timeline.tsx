import TimelineItem from "../common/TimelineItem";
import { timelineData } from "./Data";

const Timeline = () =>
  timelineData.length > 0 && (
    <div className="relative my-10 flex flex-col
      after:absolute
      after:left-1/2
      after:-translate-x-1/2
      after:h-full
      after:w-px
      after:bg-slate-300
      after:content-['']">

      {timelineData.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );

export default Timeline;
