export default function ElectionStats({ t }) {
  const stats = [
    {
      id: 1,
      value: "~968M",
      label: t.statVoters,
      icon: "👥",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      id: 2,
      value: "1.05M+",
      label: t.statStations,
      icon: "🏫",
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      id: 3,
      value: "5.5M",
      label: t.statEvms,
      icon: "🗳️",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      id: 4,
      value: "66.3%",
      label: t.statTurnout,
      icon: "📈",
      color: "text-green-600",
      bg: "bg-green-50"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto my-8">
      {stats.map((stat) => (
        <div key={stat.id} className={`${stat.bg} p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transform transition-transform hover:scale-105`}>
          <div className="text-4xl mb-3">{stat.icon}</div>
          <div className={`text-3xl font-extrabold ${stat.color} mb-1`}>
            {stat.value}
          </div>
          <div className="text-gray-700 font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
