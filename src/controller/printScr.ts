import { Region, mouse, screen } from "@nut-tree/nut-js";
import Jimp from "jimp";

export async function printScr() {
  const { x, y } = await mouse.getPosition();
  const width = await screen.width();
  const height = await screen.height();
  const centerX = x < 100 ? 0 : (width - x) < 200 ? width - 200 : x - 100;
  const centerY = y < 100 ? 0 : (height - y) < 200 ? height - 200 : y - 100;

  const region = new Region(centerX, centerY, 200, 200);

  const img = await screen.grabRegion(region);

  const imgRGB = await img.toRGB();

  const jimpData = new Jimp(imgRGB);

  const buffer = await jimpData.getBufferAsync(Jimp.MIME_PNG);
  const base64 = buffer.toString('base64');
  return base64;
}
