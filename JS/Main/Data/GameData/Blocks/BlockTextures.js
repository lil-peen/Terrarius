import ColorPalette from "../ColorPalette.js";

const BlockTextures = {
  dirt: {
    map: [
      ["#775032","#775032","#7d5436","#7d5436","#775032","#775032","#775032","#775032"],["#775032","#775032","#775032","#775032","#775032","#7d5436","#7d5436","#775032"],["#7d5436","#7d5436","#775032","#775032","#6f4b2f","#6f4b2f","#7d5436","#775032"],["#7d5436","#7d5436","#775032","#775032","#6f4b2f","#6f4b2f","#775032","#775032"],["#775032","#775032","#775032","#775032","#775032","#775032","#775032","#775032"],["#775032","#6f4b2f","#6f4b2f","#775032","#775032","#775032","#7d5436","#7d5436"],["#775032","#6f4b2f","#6f4b2f","#775032","#775032","#775032","#7d5436","#7d5436"],["#775032","#775032","#775032","#775032","#7d5436","#7d5436","#775032","#775032"],
    ],
  },
  
  stone: {
    map: [
      ["#545454","#292929","#3d3d3d","#545454","#545454","#3d3d3d","#292929","#545454"],["#545454","#4f4f4f","#292929","#3d3d3d","#545454","#292929","#292929","#545454"],["#545454","#3d3d3d","#292929","#292929","#4f4f4f","#292929","#3d3d3d","#545454"],["#292929","#292929","#292929","#3d3d3d","#4f4f4f","#292929","#4f4f4f","#545454"],["#3d3d3d","#4f4f4f","#292929","#4f4f4f","#545454","#3d3d3d","#292929","#292929"],["#4f4f4f","#292929","#292929","#545454","#545454","#4f4f4f","#292929","#4f4f4f"],["#545454","#292929","#3d3d3d","#292929","#292929","#292929","#3d3d3d","#3d3d3d"],["#545454","#292929","#545454","#545454","#4f4f4f","#292929","#4f4f4f","#545454"],
    ],
  },

  oakTreeLeftStump: {
    map: [
      [null,null,null,null,null,null,null,"#000000"],[null,null,null,null,null,null,"#000000","#805938"],[null,null,null,null,null,null,"#000000","#805938"],[null,null,null,null,null,"#000000","#805938","#956841"],[null,null,null,null,"#000000","#805938","#956841","#a27249"],[null,null,"#000000","#000000","#805938","#956841","#956841","#a27249"],[null,"#000000","#805938","#805938","#956841","#956841","#a27249","#b07c4f"],["#000000","#805938","#805938","#956841","#956841","#a27249","#b07c4f","#b07c4f"],
    ],

    fillMap: ["#805938","#805938","#805938","#956841","#956841","#a27249","#b07c4f","#b07c4f"],
  },
};

//replaces color abbreviations with hexadecimal color values
Object.keys(BlockTextures).forEach(blockName => {
  BlockTextures[blockName].map.forEach(yArray => {
    yArray.forEach((pixel, index) => {
      //if pixel is not already hexadecimal
      if (pixel && pixel.indexOf("#")) {
        pixel = pixel.split(":");
        try {
          yArray[index] = ColorPalette[pixel[0]][pixel[1]];
        } catch (error) {
          console.log(
            new RangeError(
              `Color with identifier ${pixel.join(":")} not found in color palette in block with name ${blockName} in /JS/Main/Data/GameData/Blocks/BlockTextures.js`
            )
          );
        }
      }
    });
  });
});

export default BlockTextures;