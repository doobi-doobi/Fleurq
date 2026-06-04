"use client";

import { motion } from "framer-motion";

export function ContentSection() {
  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
            Gennem historien har eksotiske dyr som leoparder, tigre og krokodiller været forbundet med luksus og høj status. Deres skind blev betragtet som værdifulde, fordi dyrene var sjældne, svære at jage og blev opfattet som majestætiske. I Europa blev især løver og leoparder siden oldtiden set som kongelige dyr, hvilket gjorde deres skind til symboler på magt og rigdom.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
            Før 1900-tallet brugte mennesker i kolde områder ofte dyreskind som beklædning af praktiske grunde. Samtidig viste bestemte skind også en persons sociale position. Jo sjældnere og dyrere skindet var, desto højere status signalerede det. For eksempel var hermelin forbeholdt kongelige og adelige. I Danmark forsøgte man endda gennem luksusforordninger at bestemme, hvilke samfundsgrupper der måtte bære bestemte materialer som silke, pels og fine skind.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
            Europæisk kolonialisme og handel gjorde det fra 1700-tallet lettere at få adgang til eksotiske dyrematerialer. Nye handelsruter og mødet med andre kulturer øgede udbuddet af sjældne skind, mens skydevåben gjorde storvildtjagt mere effektiv. Derfor blev eksotiske dyreskind en endnu vigtigere del af luksusforbruget i Europa.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
