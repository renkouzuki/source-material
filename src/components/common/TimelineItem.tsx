import { TimelineItemType } from "../test/Data";

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
          bg-white px-4 py-2.5 shadow-[0_0_2px_rgba(0,0,0,0.3)]
          ${isLeft
            ? "items-end text-right after:right-[-7.5px] after:shadow-[1px_-1px_1px_rgba(0,0,0,0.2)]"
            : "items-start text-left after:left-[-7.5px] after:shadow-[-1px_1px_1px_rgba(0,0,0,0.2)]"
          }
          after:absolute after:top-[calc(50%-7.5px)] after:h-4 after:w-4
          after:rotate-45 after:bg-white after:content-normal
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
          <a
            href={link.url}
            className="text-sm text-[rgb(160,160,160)] underline
              after:ml-0.5 after:hidden after:text-xs after:content-['►']
              md:no-underline md:after:inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.text}
          </a>
        )}

        <span
          className={`absolute top-[calc(50%-10px)] z-50 h-5 w-5 rounded-full
            border-[3px] border-slate-400 bg-white
            ${isLeft
              ? "-right-8 sm:-right-10"
              : "-left-8 sm:-left-10"
            }`}
        />
      </div>
    </div>
  );
};

export default TimelineItem;
