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
  mouse.config.mouseSpeed = 100;
  const slow = new Point(100, 150);
  await mouse.move(straightTo(slow))
}