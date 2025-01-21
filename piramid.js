function piramid(size, material) {
    let stone = 0;
    let marble = 0;
    let gold = 0;
    let lap = 0;
    let floor = 1;
    let height = 0;

    for (let curSize = size; curSize > 0; curSize -= 2) {
        height += material;
        let totalArea = curSize ** 2;

        if (curSize <= 2) {
            gold = totalArea * material;
        } else {


            let stoneArea = (curSize - 2) ** 2;
            stone += stoneArea * material;

            if (floor % 5 == 0) {
                let lapArea = totalArea - stoneArea;
                lap += lapArea * material;
            } else {
                let marbleArea = totalArea - stoneArea;
                marble += marbleArea * material;
            }
        }

        floor++;

}
   console.log(`Stone required: ${Math.ceil(stone)}`);
   console.log(`Marble required: ${Math.ceil(marble)}`);
   console.log(`Lapis Lazuli required: ${Math.ceil(lap)}`);
   console.log(`Gold required: ${Math.ceil(gold)}`);
   console.log(`Final pyramid height: ${Math.floor(height)}`);

}


