import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

export default function Tokenomics() {
  const tokenomicsData = [
    { name: 'Community Mandir', value: 40, color: '#a855f7' },
    { name: 'Yamuna Liquidity Pool', value: 25, color: '#22c55e' },
    { name: 'Kirtan Marketing', value: 15, color: '#ec4899' },
    { name: 'Prasad Rewards', value: 10, color: '#3b82f6' },
    { name: 'Dev Ashram', value: 7, color: '#f59e0b' },
    { name: 'Sacred Burn', value: 3, color: '#8b5cf6' },
  ]

  return (
    <section id="tokenomics" className="relative py-24 px-4 bg-transparent">
      {/* Radial gradient background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-5xl md:text-6xl font-black mb-6"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            $V2 Tokenomics
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            No VC puja. No hidden asura allocation. Just community, liquidity, and lila.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Chart */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={tokenomicsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={130}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {tokenomicsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Legend */}
          <div className="space-y-4">
            {tokenomicsData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ x: 8 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-5 h-5 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="font-semibold text-white">
                      {item.name}
                    </span>
                  </div>
                  <span 
                    className="text-xl font-bold"
                    style={{ color: item.color }}
                  >
                    {item.value}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Token Details */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 
            className="text-3xl font-bold mb-8"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Token Details
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/30"
            >
              <p className="text-white/70 mb-3 font-semibold">Total Supply</p>
              <p 
                className="text-4xl font-black"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                1B $V2
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-green-500/10 border border-green-500/30"
            >
              <p className="text-white/70 mb-3 font-semibold">Network</p>
              <p 
                className="text-4xl font-black"
                style={{
                  background: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Solana L2
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/30"
            >
              <p className="text-white/70 mb-3 font-semibold">Consensus</p>
              <p 
                className="text-4xl font-black"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Proof of Bhakti
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
