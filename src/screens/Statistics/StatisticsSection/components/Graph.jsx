import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Area, AreaChart
} from 'recharts';

// Sample data for the graph
const data = [
  { name: '29 Aug', subscribers: 5 },
  { name: '30 Aug', subscribers: 4 },
  { name: '31 Aug', subscribers: 5 },
  { name: '01 Sep', subscribers: 6 },
  { name: '02 Sep', subscribers: 8 },
  { name: '03 Sep', subscribers: 10 },
  { name: '04 Sep', subscribers: 15 },
  { name: '05 Sep', subscribers: 17 },
];

const Graph = () => {
  return (
    <div>
    
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorSub" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#139DFF" stopOpacity={0} />
              <stop offset="95%" stopColor="#139DFF" stopOpacity={0.4} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 20]} />
          <Tooltip />
          <Legend />
          {/* Line with gradient fill */}
          <Area type="monotone" dataKey="subscribers" stroke="#139DFF" fill="url(#colorSub)" />
        </AreaChart>
      </ResponsiveContainer>
    
    </div>
  );
};

export default Graph;
