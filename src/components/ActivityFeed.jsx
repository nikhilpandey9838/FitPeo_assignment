import React from "react";

const activityGraphData = [
  // Each day: array of bar heights and color
  [
    { height: 40, color: '#06b6d4' },
    { height: 60, color: '#3B3F8C' }
  ], // Mon
  [
    { height: 70, color: '#06b6d4' },
    { height: 60, color: '#3B3F8C' }
  ], // Tues
  [
    { height: 30, color: '#06b6d4' },
    { height: 20, color: '#3B3F8C' }
  ], // Wed
  [
    { height: 50, color: '#06b6d4' },
    { height: 40, color: '#3B3F8C' }
  ], // Thurs
  [
    { height: 60, color: '#06b6d4' },
    { height: 70, color: '#3B3F8C' }
  ], // Fri
  [
    { height: 40, color: '#06b6d4' },
    { height: 20, color: '#3B3F8C' }
  ], // Sat
  [
    { height: 60, color: '#06b6d4' },
    { height: 30, color: '#3B3F8C' }
  ], // Sun
];

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

const MAX_BAR_HEIGHT = 80; // previous max
const CHART_BAR_HEIGHT = 50; // new max height for bars

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h3 className="activity-title">Activity</h3>
        <span className="activity-subtitle">3 appointment on this week</span>
      </div>
      <div className="activity-chart" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: 70, background: '#f6f9fd', borderRadius: 12, padding: '0 20px', overflow: 'hidden'}}>
        {activityGraphData.map((bars, i) => (
          <div key={i} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: 48}}>
            <div style={{display: 'flex', gap: 6, height: CHART_BAR_HEIGHT, alignItems: 'flex-end', justifyContent: 'center'}}>
              {bars.map((bar, j) => (
                <div key={j} style={{width: 6, height: (bar.height / MAX_BAR_HEIGHT) * CHART_BAR_HEIGHT, background: bar.color, borderRadius: 3, margin: '0 1px'}}></div>
              ))}
            </div>
            <div style={{fontSize: 14, color: '#b0b7c3', marginTop: 12, textAlign: 'center'}}>{days[i]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
