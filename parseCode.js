//js
const cheerio = require("cheerio");

async function getGoogleDoc(url) {
  const output = [];

  const request = await fetch(url);
  if (!request.ok) return null;
  const data = await request.text(); // assuming data is received in x-coord, char, y-coord format separated by new lines
  const $ = cheerio.load(data);

  $("table tr").each((index, row) => {
    const cells = $(row).find("td");
    if (cells.length === 3 && index > 0) {
      const x = parseInt($(cells[0]).text().trim(), 10);
      const char = $(cells[1]).text().trim();
      const y = parseInt($(cells[2]).text().trim(), 10);
      output.push([x, y, char]);
    }
  });

  return output;
}

async function parseCode(url) {
  const data = await getGoogleDoc(url);
  const output = [];

  if (data?.length === 0) {
    console.error("Couldn't retrieve data from: ", url);
    return;
  }

  //   console.log(data);

  /* let highestXCoord = 0;
    
    for(const row of data){
      if(row[0]>highestXCoord)
        highestXCoord = row[0]
    }

    Assuming data always sorted in descending order per example
    */

  for (let i = 0; i < data.length; i++) {
    if (!output[data[i][1]]) output[data[i][1]] = [];
    output[data[i][1]][data[i][0]] = data[i][2]; // Ex. [[A,,A], [,,A]]
  }

  output.reverse();

  for (let i = 0; i < output.length; i++)
    for (let j = 0; j < output[i].length; j++) {
      if (!output[i][j]) output[i][j] = " ";
    }

  for (let i = 0; i < output.length; i++) {
    if (output[i]) output[i].join("");
  }

  return output.join("\n");
}

// const url =
//   "https://docs.google.com/document/d/e/2PACX-1vRMx5YQlZNa3ra8dYYxmv-QIQ3YJe8tbI3kqcuC7lQiZm-CSEznKfN_HYNSpoXcZIV3Y_O3YoUB1ecq/pub";
const url =
  "https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub";
parseCode(url).then(console.log);
