import TimelineItem from "../common/TimelineItem";
import { timelineData } from "./Data";

const Timeline = () =>
  timelineData.length > 0 && (
    <div className="relative my-10 flex flex-col after:absolute after:left-[calc(50%-2px)] after:h-full after:w-1 after:content-normal after:bg-slate-400">
      {timelineData.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );

export default Timeline;
