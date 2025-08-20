function getColorFromPairNumber(pairNumber)
{
	let minorSize = MajorColorNames.length;
	let majorSize = MinorColorNames.length;
	
	if (pairNumber < 1 || pairNumber > minorSize * majorSize)
 	{
 		throw `Argument PairNumber:${pairNumber} is outside the allowed range` 
	}
	let zeroBasedPairNumber = pairNumber - 1;
    let majorIndex = parseInt (zeroBasedPairNumber / minorSize);
    let minorIndex = parseInt(zeroBasedPairNumber % minorSize);
	let  pair = new ColorPair();
	pair.majorColor = MajorColorNames[majorIndex];
	pair.minorColor = MinorColorNames[minorIndex];
	return pair;
}

function getPairNumberFromColor(pair)
        {
        let majorIndex = -1;
        for (let i = 0; i < MajorColorNames.length; i++)
            {
                if (MajorColorNames[i] == pair.majorColor)
                {
                    majorIndex = i;
                    break;
                }
            }

        let minorIndex = -1;
            for (let i = 0; i < MinorColorNames.length; i++)
            {
                if (MinorColorNames[i] == pair.minorColor)
                {
                    minorIndex = i;
                    break;
                }
            }
    
        if (majorIndex == -1 || minorIndex == -1)
            {
                throw `Unknown Colors:${pair.toString()}`;
            }

        return (majorIndex * MinorColorNames.length) + (minorIndex + 1);
	 }
	 
	 
test();
