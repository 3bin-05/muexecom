import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  // Set deadline to January 31, 2025
  const deadline = new Date("2025-12-31T23:59:59").getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = deadline - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex flex-col items-center lg:items-start gap-3">
      <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
        Application Deadline
      </span>
      <div className="flex gap-3 sm:gap-4">
        {timeBlocks.map((block, index) => (
          <div
            key={block.label}
            className="flex flex-col items-center"
          >
            <div className="glass-card w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-xl border border-primary/20">
              <span className="text-2xl sm:text-3xl font-bold gradient-text tabular-nums">
                {String(block.value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs text-muted-foreground mt-2 uppercase tracking-wide">
              {block.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
