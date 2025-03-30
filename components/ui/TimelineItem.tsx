import { Avatar } from './Avatar';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  description?: string;
  date: string;
  avatar: string;
}

export const TimelineItem = ({
  title,
  subtitle,
  description,
  date,
  avatar,
}: TimelineItemProps) => (
  <div className="block cursor-pointer">
    <div className="rounded-lg bg-card text-card-foreground flex">
      <div className="flex-none">
        <Avatar>{avatar}</Avatar>
      </div>
      <div className="flex-grow ml-4 items-center flex-col group">
        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
              {title}
            </h3>
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
              {date}
            </div>
          </div>
          <div className="font-sans text-xs">{subtitle}</div>
          {description && (
            <div className="font-sans text-xs">{description}</div>
          )}
        </div>
      </div>
    </div>
  </div>
);
