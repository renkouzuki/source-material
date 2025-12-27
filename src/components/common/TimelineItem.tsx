import Link from "next/link";
import { TimelineItemType } from "../test/Data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TimelineItem = ({ data }: { data: TimelineItemType }) => {
  const {
    date,
    text,
    link,
    position,
    category: { tag, color, bgColor },
  } = data;

  const isLeft = position === 1;

  return (
    <div
      className={`group relative my-2.5 flex w-1/2
        ${isLeft
          ? "justify-end pr-5.5 sm:pr-7.5"
          : "justify-start self-end pl-5.5 sm:pl-7.5"
        }`}
    >
      <div
        className={`relative flex w-100 max-w-[95%] flex-col rounded-[5px]
          bg-white/90 px-4 py-2.5 shadow-[0_0_2px_rgba(0,0,0,0.3)]
          ${isLeft
            ? "items-end text-right after:right-[-7.5px] after:shadow-[1px_-1px_1px_rgba(0,0,0,0.2)]"
            : "items-start text-left after:left-[-7.5px] after:shadow-[-1px_1px_1px_rgba(0,0,0,0.2)]"
          }
          after:absolute after:top-[calc(50%-7.5px)] after:h-4 after:w-4
          after:rotate-45 after:bg-white/90 after:content-normal
          sm:max-w-[70%] md:p-4`}
      >
        <span
          className={`absolute top-1.25 p-1.25 text-xs font-bold uppercase tracking-[1px]
            ${isLeft ? "left-1.25" : "right-1.25"} md:w-auto`}
          style={{ backgroundColor: bgColor, color: color ?? "#4d4d4d" }}
        >
          {tag}
        </span>

        <time className="mt-6 text-xs text-[#777] md:m-0">{date}</time>

        <p className="my-4 max-w-64 text-sm sm:text-base">{text}</p>

        {link && (
          <Link
            href={link.url}
            className="text-sm text-[rgb(160,160,160)] flex items-center justify-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            {isLeft && <ChevronLeft size={18} />}
            <span>
              {link.text}
            </span>
            {!isLeft && <ChevronRight size={18} />}
          </Link>
        )}

        <span
          className={`absolute top-[calc(50%-5.5px)] z-50 h-3 w-3 rounded-full
            border-[2px] border-gray-200 bg-white/90
            ${isLeft
              ? "-right-7 sm:-right-9"
              : "-left-7 sm:-left-9"
            }`}
        />
      </div>
    </div>
  );
};

export default TimelineItem;
