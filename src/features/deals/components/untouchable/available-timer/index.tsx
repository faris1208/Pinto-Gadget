"use client"
import React, { useState, useEffect } from 'react';
import styles from '../available-timer/styles.module.scss';

const AvailableTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 6,
    minutes: 20,
    seconds: 10
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const { days, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        }
        if (minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        }
        if (hours > 0) {
          return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
        }
        if (days > 0) {
          return { days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        
        clearInterval(timer);
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time.toString();
  };

  return (
    <div className={styles.container}>
      <div className={styles.label}>Available For:</div>
      <div className={styles.timer}>
        <div className={styles.timeSegment}>
          <span className={styles.timeValue}>{formatTime(timeLeft.days)}</span> 
          <span className={styles.timeLabel}>Day{timeLeft.days !== 1 ? 's' : ''}</span>
        </div>
        <div className={styles.timeSegment}>
          <span className={styles.timeValue}>{formatTime(timeLeft.hours)}</span>
          <span className={styles.timeLabel}>Hours</span>
        </div>
        <div className={styles.timeSegment}>
          <span className={styles.timeValue}>{formatTime(timeLeft.minutes)}</span>
          <span className={styles.timeLabel}>Mins</span>
        </div>
        <div className={styles.timeSegment}>
          <span className={styles.timeValue}>{formatTime(timeLeft.seconds)}</span>
          <span className={styles.timeLabel}>Secs</span>
        </div>
      </div>
    </div>
  );
};

export default AvailableTimer;