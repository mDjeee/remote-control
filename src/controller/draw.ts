import { mouse, straightTo, Point } from '@nut-tree/nut-js';
import { move } from './mouse';

export async function drawRectangle(width: number, length: number) {
  await move('mouse_right', width);
  await move('mouse_down', length);
  await move('mouse_left', width);
  await move('mouse_up', length);
}

export async function drawSquare(width: number) {
  await move('mouse_right', width);
  await move('mouse_down', width);
  await move('mouse_left', width);
  await move('mouse_up', width);
}

export async function drawCircle(width: number) {
  const { x, y } = await mouse.getPosition();
  for(let i=0; i<360; i++) {
    const rad = (i/180) * Math.PI;
    const cx = width * Math.cos(rad) + x - width;
    const cy = width * Math.sin(rad) + y;
    await mouse.move(straightTo(new Point(cx, cy)));
  }
}