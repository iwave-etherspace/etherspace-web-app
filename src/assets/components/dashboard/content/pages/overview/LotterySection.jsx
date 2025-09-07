import React from 'react'

const sampleData7 = [
  {
    game: "6/55",
    drawAmount: "₱103,957,780",
    drawDate: "Sept 1 | 9 PM",
  },
  {
    game: "6/42",
    drawAmount: "₱49,502,021",
    drawDate: "Sept 2 | 9 PM",
  },
  {
    game: "6/45",
    drawAmount: "₱15,812,013",
    drawDate: "Sept 3 | 9 PM",
  },
  {
    game: "6/49",
    drawAmount: "₱8,912,101",
    drawDate: "Sept 4 | 9 PM",
  },
  {
    game: "6/58",
    drawAmount: "₱63,729,339",
    drawDate: "Sept 5 | 9 PM",
  },
];

const gameImageMap = {
  "6/55":"src/assets/imgs/lotto/gl-655.png",
  "6/42":"src/assets/imgs/lotto/l-642.png",
  "6/45":"src/assets/imgs/lotto/ml-645.png",
  "6/49":"src/assets/imgs/lotto/sl-649.png",
  "6/58":"src/assets/imgs/lotto/ul-658.png"
}

const LotterySection = () => {
  return (
    <div className="
      bg-white rounded-lg 
        shadow-[0_4px_15px_rgba(0,0,0,0.1)] 
        p-[23px_17px_27px] 
        grid grid-flow-col auto-cols-auto gap-1 overflow-auto">
          
          {sampleData7.map((lotto) => (
            <>
              <div className="flex flex-col items-center">

                <img
                    src={gameImageMap[lotto.game]}
                    alt="Lottery Logo"
                    className="h-20"
                />

                <div className="flex flex-col place-items-center">
                    <div className="bg-[#ed1b24] text-white px-3 py-1 rounded-full">{lotto.drawAmount}</div>
                    <div className="text-black text-center text-sm font-medium">{lotto.drawDate}</div>
                    <div className="draw-label">Draw Date | Time</div>
                </div>
              </div>
            </>
          ))}

    </div>
  )
}

export default LotterySection