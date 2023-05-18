import { down, left, mouse, right, up } from "@nut-tree/nut-js";

export async function move(command: string, distance: number ) {
  switch (command) {
    case 'mouse_up':
      await mouse.move(up(distance));
      break;
    case 'mouse_down':
      await mouse.move(down(distance))
      break;
    case 'mouse_left':
      await mouse.move(left(distance))
      break;
    case 'mouse_right':
      await mouse.move(right(distance))
      break;
    case 'mouse_position':
      const res = await mouse.getPosition();
      return `${command} ${res.x},${res.y}`;
    default:
      break;
  }
  return command;
}